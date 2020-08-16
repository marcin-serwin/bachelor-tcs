Opisz rodzaje klas dostępne w języku programowania Java. Czym są klasy
abstrakcyjne? Czym różni się od interfejsów? Jakie ich zastosowania?

---

# Rodzaje klas w Javie

## Klasa właściwa
  * Klasa, która może być instancjonowana.

## Klasa abstrakcyjna
  * Klasa jest abstrakcyjna jeśli jej definicja jest poprzedzona słowem kluczowym `abstract`.

  * Przeciwieństwo klasy właściwej. Nie da się utworzyć instancji klasy abstrakcyjnej (natomiast da się instancjonować klasy właściwe dziedziczące po klasie abstrakcyjnej).

  * Można w niej nie zdefiniować metod, pozostawiając je jako abstrakcyjne (również poprzedzone słowem `abstract`). Implementacja muszą zająć się klasy potomne. W ten sposób stanowi wzorzec do dalszego rozszerzania.

## Interfejs
  * Definiowany za pomocą słowa `interface`. Ich zadaniem jest opisywać jedynie semantykę obiektów. Nie mogą posiadać, w przeciwieństwie do klas abstrakcyjnych, implementacji metod.

  * Klasa mogąca zawierać metody abstrakcyjne, klasy statyczne, inne interfejsy, oraz dane składowe typu `static final`.

  * W interfejsie można pominąć słowo kluczowe abstract przy metodach.

  * Składniki interfejsu są automatycznie publiczne.

  * Może rozszerzać wiele interfejsów (`extends`).

  * Aby móc korzystać z interfejsu, trzeba stworzyć jego implementację, poprzez utworzenie klasy pochodnej od interfejsu, która implementuje wszystkie jego metody. Klasa pochodna od interfejsu jest definiowana przy użyciu słowa `implements`.

  * Klasy pochodne w Javie mogą implementować wiele interfejsów (ale nie dziedziczyć po wielu klasach).

  * Podobnie jak klasy abstrakcyjne, interfejs umożliwia pisanie uniwersalnego kodu. Dodatkowo pozwala na tworzenie bardziej elastycznego kodu (dependency inversion principle - zobacz [SOLID](../III.2.4 SOLID.md)).

## Klasa finalna
  * Klasa, po której nie można dziedziczyć.

  * Nie może istnieć abstrakcyjna finalna klasa, bo to nie ma sensu.

## Klasa wewnętrzna
  * Klasa zdefiniowana wewnątrz innej klasy.

  * W przeciwieństwie do klas zewnętrznych może być zadeklarowana jako `private` lub `protected`, uniemożliwiając wszelki dostęp z zewnątrz.

  * Może być również zadeklarowana jako `static` (*klasa zagnieżdżona*). Jej rola wówczas sprowadza się wyłacznie do porządkowania przestrzeni nazw i ew. lepszej strukturyzacji kodu.

  * Jeżeli nie jest zadeklarowana jako `static`, może odwoływać się do niestatycznych składowych klasy otaczającej.

  * Może mieć nazwę (*klasa nazwana*) lub nie (*klasa anonimowa*).

## Klasa anonimowa
Klasa wewnętrzna bez nazwy. Pozwala na traktowanie fragmentów kodu do wykonania jak obiektów, a wobec tego np. na umieszczanie ich w tablicach, kolekcjach, czy przekazywanie innym metodom jako argumentów. Przydaje się również nie tylko jako delegat, ale również jako *quick n' dirty* definicja np. event listenera.

Ponieważ nie ma nazwy, nie można w niej zdefiniować konstruktora. Klasa anonimowa może być zdefiniowana w następujący sposób:

```
new NazwaTypu(parametry) {
    // pola i metody klasy wewnętrznej
}
```

Gdzie:

  * `NazwaTypu` – nazwa nadklasy (klasy dziedziczonej w klasie wewnętrznej) lub implementowanego przez klasę wewnętrzną interfejsu,

  * `parametry` – argumenty przekazywane konstruktorowi nadklasy; w przypadku gdy typ jest nazwą interfejsu, lista parametrów jest oczywiście pusta (bo chodzi o implementację interfejsu).
