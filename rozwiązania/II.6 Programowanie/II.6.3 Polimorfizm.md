Co to jest polimorfizm jako obiektowa technika programowania? Podaj przykłady zastosowania polimorfizmu w dwóch obiektowych językach programowania.

---

# Polimorfizm
Polimorfizm to mechanizmy umożliwiające udostępnienie jednego interfejsu dla różnych typów danych. Wyróżniamy następujące rodzaje polimorfizmu:

 * **Ad hoc** - wybieranie funkcji na podstawie typów i liczby argumentów.
 * **Parametric** - klasa lub metoda jest parametryzowana generycznym typem `T`.
 * **Subtyping** - kiedy typ klasy jest wysoko w hierarchii (lub jest interfejsem) może odnosić się do klas niżej w hierarchii (lub implementacji tych interfejsów).

Polimorfizm pozwala na traktowanie różnych danych w jednolity sposób. Może się to wiązać z różnym kodem wykonywanym pod spodem (różne implementacje metod wirtualnych), ale niekoniecznie - przykładowo dla stosu nie musi być istotne co jest na niego wrzucane. Mechanizmy umożliwiające takie udogodnienia nazywane są właśnie polimorfizmem.


## Metoda wirtualna
Metoda, której wywołanie jest polimorficzne. Pozwala na rozszerzanie kodu również wtedy, gdy dostępna jest jedynie skompilowana wersja klasy bazowej.

  * Programista nie musi przejmować się tym, którą z klas pochodnych aktualnie obsługuje, a jedynie tym, jakie operacje chce na tej klasie wykonać.

  * Programista myśli *co* ma wykonać a nie *jak* to coś wykonać - nie musi się przejmować szczegółami implementacyjnymi.

## Klasa abstrakcyjna
Klasa, w której (świadomie) nie zrealizowano przynajmniej jednej funkcji. O takiej funkcji mówimy, że jest czysto wirtualna albo abstrakcyjna - nie definiujemy jej w klasie abstrakcyjnej, a jedynie w klasach pochodnych. W tym celu ciało funkcji pozostawiamy puste, albo - co jest znacznie lepszym rozwiązaniem, jeśli tylko język programowania na to pozwala - ograniczamy się do podania samej deklaracji wraz ze stosownie zapisaną informacją, że funkcja jest abstrakcyjna.

Dzięki wyłapaniu wspólnych cech pewnych klas, dobrze dobrane klasy abstrakcyjne umożliwiają pisanie kodu o wysokim stopniu wielokrotnej używalności.

## Interfejs
Pełni rolę umowy, która służy ograniczeniu kontaktów pomiędzy klasami do niezbędnego minimum:

  * Program na wysokim poziomie abstrakcji odwołuje się do interfejsu, a nie do konkretnych klas implementujących interfejs

  * Każda klasa implementująca dany interfejs może być poprawiana i usprawniania bez konsekwencji dla klas korzystających z niej poprzez interfejs, tak długo jak realizuje ona wymagania interfejsu.
  
  * Ustalenie konkretnego interfejsu jest trudnym problemem, ponieważ z jednej strony powinien on być jak najbardziej zwięzły (tak aby implementacja nie była kłopotliwa), a z drugiej strony zbyt ubogi interfejs mógłby być problemem przy dodawniu nowych funkcji do API. Inaczej mówiąc - to jest motywacja dla takich rzeczy jak Extension Methods (C#) albo domyślna implementacja w interfejsach (Java) .


# C# vs Java
  * W Javie wszystkie metody są domyślnie wirtualne, a metody w klasach pochodnych nadpisują metody z klasy bazowej. W C# tak nie jest - trzeba przed metodą napisać explicite `virtual`.

  * W C# metoda może być zadeklarowana ze słowem `override` gdy w jej klasie macierzystej jest funkcja o identycznym nagłówku zadeklarowana jako `virtual` lub `override`. W Javie taka deklaracja jest opcjonalna.

  * W Javie ciało metody `final` może być wstawione bezpośrednio do generowanego kodu w miejsce wywołania podprogramu (na podobnej zasadzie jak funkcje `inline` w C++). W C# nie powoduje to różnicy - w kodzie IL (Intermediate Language) nie zostanie użyta operacja `calls` zamiast `calvirts` (potrzeba wykonać sprawdzenie czy referencja do funkcji nie jest nullem).

  * W C#, jeśli w klasie pochodnej zdefiniujemy metodę o takiej samej sygnaturze jak w klasie podstawowej (lub wyższej w hierarchii dziedziczenia), to metoda taka zasłoni (*shadowing*) tę dziedziczoną. W Javie nie można przysłonić metody - można ją tylko nadpisać (*override*). Można w Javie natomiast przysłonić zmienną:

```java
class A {
    int variable = 5;
    void f() {
        System.out.println("A");
    }
}
class B extends A {
    int variable = 10;
    void f() {
        System.out.println("B");
    }
}

B b = new B();
A a = b;
System.out.println(a.variable); // 5 zasłanianie (shadowing)
a.f(); // "B" - nadpisywanie (override) - polimorfizm
System.out.println(b.variable); // 10
b.f(); // "B" 
```

  Zasłanianie jest mechanizmem pożytecznym, ale dokonane nieświadomie może być w pewnych sytuacjach niebezpieczne. Dlatego standardowo kompilator wypisuje w takich sytuacjach ostrzeżenie. Jeśli świadomie stosujemy zasłanianie i nie chcemy ostrzeżenia, używamy słowa kluczowego `new` (w Javie `override`), którym poprzedzamy definicję metody zasłaniającej. O takiej formie zasłaniania mówimy, że jest przepisaniem metody (w odróżnieniu od nadpisania, z którym do czynienia mamy w przypadku metod wirtualnych).

Zobacz też [dziedziczenie](II.6.2 Dziedziczenie.md).
