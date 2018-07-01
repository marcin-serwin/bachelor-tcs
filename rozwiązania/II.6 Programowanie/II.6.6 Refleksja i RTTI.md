Na czym polega reflection, RTTI? Zaprezentuj zastosowania tych mechanizmów w obiektowym języku programowania.

---

# RTTI
***RTTI*** (Run Time Type Identification) to termin wywodzący się ze świata C++. Nawiązuje do funkcjonalności języka, która pozwala programowi na stwierdzenie (w trakcie wykonania) jakiego typu są dane obiekty.

Można wyróżnić dwie formy RTTI:
  * **Relatywna**: czy obiekt `x` może być uznany za obiekt typu `T`? (dopuszczamy odpowiedź pozytywną
również wtedy gdy typ obiektu `x` jest typem pochodnym typu `T`).

  * **Bezwzględna**: jakiego dokładnie typu jest obiekt `x`? (oczekujemy dokładnego określenia typu, to znaczy podania najniższego w hierarchii dziedziczenia typu, do którego `x` należy).

## Przykład w C# #

### `is`
Do stwierdzenia czy dany obiekt może być uznany za obiekt pewnego typu służy operator `is`. Zwraca on `true`, jeśli pierwszy argument jest typu `T` lub daje się skonwertować do typu `T`. W przeciwnym razie zwracana jest wartość `false`.

```csharp
variable is IList<int> // true or false
```

### `as`
Operator `as` służy do próby skonwertowania obiektu typu referencyjnego do  typu `T`. Jeżeli taka konwersja jest możliwa i poprawna, zostanie zwrócony obiekt typu `T`. W przeciwnym razie zwrócona zostanie wartość `null`.

```csharp
var list = variable as IList<int>; // wartość lub null
```

# Refleksja
Z kolei ***refleksja*** to pojęcie używane w odniesieniu do różnych języków programowania. Oznacza proces, dzięki któremu program może być modyfikowany w trakcie działania w sposób zależny od własnego kodu. Paradygmat programowania ściśle związany z mechanizmem refleksji to *programowanie refleksyjne*. Mechanizm ten jest częściej spotykany w językach wysokiego poziomu, zwykle opartych na maszynie wirtualnej.

## Zastosowania
Refleksja pozwala w łatwy sposób zarządzać kodem tak, jakby był danymi. Pozwala na przykład zmienić zachowanie zdefiniowanych już metod czy uzyskać dostęp do informacji na temat obiektów (np. czy dane pole jest publiczne).

## Wady
Choć refleksja jest w pewnych sytuacjach niezbędna, nie powinna być nadużywana:

  * Kod jest mniej czytelny.
  * Kod nie pozwala na sprawdzenie poprawności składniowej i semantycznej w trakcie kompilacji (niewygodne śledzenie błędów).

Jeśli refleksja jest nam potrzebna jedynie po to, by podjąć decyzję jaką akcję wykonać w zależności od napotkanego typu, to najczęściej można go zastąpić stosownym użyciem funkcji wirtualnych.


## Przykład w C# #
W przykładzie pokażemy jak za pomocą refleksji napisać kod równoważny poniższemu:

```csharp
var foo = new Foo();
foo.Hello();
```

Co chcemy uzyskać za pomocą refleksji?
  1. Typ klasy o nazwie `Foo`.
  2. Zainicjalizować instancję uzyskanego typu.
  3. Metodę o nazwie `Hello`.
  4. Wywołać uzyskaną metodę.

Realizuje to poniższy kod:

```csharp
var type = Type.GetType("{jakiś-namespace}.Foo"); // 1
var foo = Activator.CreateInstance(type); // 2
var method = type.GetMethod("Hello"); //3
method.Invoke(foo); // 4
```
