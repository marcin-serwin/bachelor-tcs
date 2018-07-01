Co to jest dziedziczenie jako obiektowa technika programowania? Podaj przykłady dziedziczenia w dwóch obiektowych językach programowania.

---

# Dziedziczenie
Obiektowa technika programowania, która polega na definiowaniu klasy przy użyciu innej klasy poprzez podanie różnic między nimi. Prowadzi to do kodu, który jest prostszy w utrzymaniu i zrozumieniu.

Z reguły, dziedziczenie powinno spełniać [zasadę podstawiania Liskov](../III.2 Inżynieria Oprogramowania/III.2.3 SOLID.md). Dzięki temu wystarczy znać kontrakt klasy bazowej, aby korzystać z klas pochodnych (lub tworzyć je).

## C# vs Java
  * W C#, zarówno dziedziczenie jak i implementacja interfejsów zdefiniowane są za pomocą operatora `:`. Jego odpowiednikiem w Javie są `extends` i `implements`. Klasa bazowa powinna zawsze być wymieniona jako pierwsza.

  * Podobnie jak Java, C# nie wspiera dziedziczenia wielokrotnego: dopuszczalna jest tylko jedna klasa podstawowa. Można natomiast implementować dowolną liczbę interfejsów, jak w Javie.

  * Podobnie jak w Javie, wszyskie klasy w C# są klasami pochodnymi (pośrednio lub bezpośrednio) od klasy `Object`.

  * Pola prywatne klasy bazowej nie są dostępne w klasach pochodnych. Aby ograniczyć dostęp do pól jedynie dla klas pochodnych (niewidoczne publicznie), używa się słowa kluczowego `protected`. Pola publiczne są dostępne dla wszystkich, a więc w szczególności dla klas pochodnych. Takie zachowanie jest zarówno w Javie, jak i w C#.

  * Aby zabronić nadpisywania metody lub dziedziczenia z klasy, w Javie używa się słowa kluczowego `final`. W C# jego odpowiednikiem jest `sealed`.

Zobacz też [polimorfizm](II.6.3 Polimorfizm.md).
