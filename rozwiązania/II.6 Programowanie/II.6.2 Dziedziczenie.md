Co to jest dziedziczenie jako obiektowa technika programowania? Podaj przykłady dziedziczenia w dwóch obiektowych językach programowania.

---

# Dziedziczenie
Obiektowa technika programowania, która polega na definiowaniu klasy przy użyciu innej klasy poprzez podanie różnic między nimi. Prowadzi to do kodu, który jest prostszy w utrzymaniu i zrozumieniu.

Z reguły, dziedziczenie powinno spełniać [zasadę podstawiania Liskov](../III.2 Inżynieria Oprogramowania/III.2.4 SOLID.md). Dzięki temu wystarczy znać kontrakt klasy bazowej, aby korzystać z klas pochodnych (lub tworzyć je).

## Java i C++
  * Java nie wspiera dziedziczenia wielokrotnego: dopuszczalna jest tylko jedna klasa podstawowa. Można natomiast implementować dowolną liczbę interfejsów. W C++ dopuszcza się wielokortone dziedziczenie.

  * W javie wzyskie klasy w są klasami pochodnymi (pośrednio lub bezpośrednio) od klasy `Object`.

  * I w Javie i w C++ Pola prywatne klasy bazowej nie są dostępne w klasach pochodnych. Aby ograniczyć dostęp do pól jedynie dla klas pochodnych (niewidoczne publicznie), używa się słowa kluczowego `protected`. Pola publiczne są dostępne dla wszystkich, a więc w szczególności dla klas pochodnych.

  * Aby zabronić nadpisywania metody lub dziedziczenia z klasy, w Javie i C++ używa się słowa kluczowego `final`.
Java:
````
class A{}
class B extends A{}
final class Super {
   private int data = 30;
}
````
C++:
````
class A{};
class A2{}
class B : public B{};
class C : public A, protected A2{}
class Base final { };
````
