Co to są szablony? Wyjaśnij pojęcie i podaj przykład implementacji używającej
szablonów w dowolnym języku obiektowym.

---

# Wstęp

Szablony zostały stworzone, by walczyć z niepotrzebną duplikacją kodu oraz w
celu zapewnienia silniejszego typowania. Podobną rolę w innych językach
programowania pełnią generyki. Szablony są obecne, między innymi, w językach C++
i D.

Szablony używane są jako technika metaprogramowania. Z szablonów kompilator
generuje tymczasowy kod źródłowy, który jest złączany z resztą kodu,
a następnie w całości kompilowany.

W C++, o generowaniu kodu z szablonów można myśleć jak o wykonywaniu obliczeń
w czasie kompilacji. Co więcej, ich siła jest równoważna maszynom Turinga.

Szablony mają też istotne wady

 - używanie szablonów znacznie wpływa na czas kompilacji
 - używanie szablonu na wielu typach powoduje bardzo duże wynikowe pliki binarne
 - trudne staje się analizowanie błędów kompilacji

# Podstawy szablonów w C++

## Typy szablonów

Wyróżniamy trzy typy szablonów.

*Zaszłość historyczna: Jeśli argumentem szablonu jest typ, można używać słowa
kluczowego `class` lub `typename` zamiennie.*

1. Szablony funkcji

   ```cpp
   template <typename T>
   T max(T a, T b) {
       return a > b ? a : b;
   }

   // użycie:
   max(1.3, 1.3);
   max(2, 4);
   ```

2. Szablony klas

   ```cpp
   template <typename T>
   class Point {
     public:
       Public(T x_, T _y) : x(x_), y(y_) { }

       T x, y;
   };

   // użycie:
   Point<float> p(2.0, 3.1);
   ```

3. Szablony zmiennych

   ```cpp
   template <typename T>
   T pi = T(3.1415926535897932385);

   // użycie
   double area = pi<double> * r * r;
   ```

Szablony mogą mięć oczywiście więcej niż jeden parametr, a także można mówić
o "variadic templates" czyli o szablonach przyjmujących zmienną liczbę argumentów.

## Parametry szablonu

Parametry szablonu mogą mieć domyślne wartości.

Parametrami szablonu mogą być

 - typy

   Wszystkie przykłady wyżej.

 - wartości określonego typu (który musi spełniać pewne wymagania)

   ```cpp
   template<int Width, int Height, typename T = double>
   class Matrix {
     public:
       T& operator()(int row, int col) {
           return data[row * Width + col];
       }

     private:
       T data[Width * Height];
   };

   // użycie:
   Matrix<2, 4> m1;
   m1(1, 2) = 4.3;
   Matrix<3, 3, int> m2;
   m2(0, 0) = 1;
   ```

 - inne szablony

   ```cpp
   template<typename T, template<typename> class Storage = std::vector>
   class Heap {
       // (...)
     private:
       Storage<T> data;
   };
   ```

## Specjalizacja szablonów

Specjalizacja szablonów pozwala na podanie jaki powinien być wygenerowany kod
dla pewnych konkretnych argumentów szablonu. Możliwa jest pełna lub częściowa
specjalizacja szablonu.

```cpp
template<typename T1, typename T2, int I>
class A {};        // podstawowy szablon
 
template<typename T, int I>
class A<T, T*, I> {};   // częściowa specjalizacja gdzie T2 jest wskaźnikiem do T1
 
template<typename T>
class A<int, T*, 5> {};   // częściowa specjalizacja gdzie T1 jest int,
                          // I jest 5 a T2 jest wskaźnikiem

template<>
class A<int, double, 5> {};   // pełna specjalizacja szablonu
```
