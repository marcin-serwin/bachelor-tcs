Na czym polega wstrzykiwanie zależności (dependency injection)? Dlaczego
ułatwia testowanie i integrację składników systemu?

---

# Wstrzykiwanie zależności
Wzorzec projektowy i wzorzec architektury oprogramowania polegający na usuwaniu bezpośrednich zależności pomiędzy komponentami na rzecz architektury typu plug-in. Polega na przekazywaniu gotowych, utworzonych instancji obiektów udostępniających swoje metody i właściwości obiektom, które z nich korzystają (np. jako parametry konstruktora). Stanowi alternatywę do podejścia, gdzie obiekty tworzą instancję obiektów, z których korzystają np. we własnym konstruktorze.

Użycie tej techniki pozwala tworzyć łatwo testowalne obiekty. Sprawdza się szczególnie w powiązaniu z programowaniem sterowanym testami (ang. test-driven development). Polega ono w skrócie na następującym tworzeniu oprogramowania: opracowujemy interfejsy (diagram klas), opracowujemy testy jednostkowe, które testują funkcjonalność interfejsu (w jaki sposób przetestować, czy działanie jest poprawne), a dopiero później piszemy implementację. Unikanie zależności od konkretnych implementacji współpracujących klas, a bazowanie tylko na interfejsach umożliwia tworzenie kontrolowanych testów - jesteśmy w stanie skupić się wyłącznie na funkcjonalności wybranej klasy; zwłaszcza, gdy wykorzystamy obiekty-zaślepki (ang. mock-objects, proste pseudoimplementacje, używane w celu testowania). DI pozwala wstrzyknąć do obiektów testowanych zależności od obiektów-zaślepek. W środowisku produkcyjnym do obiektów tych wstrzykiwane są zależności od prawdziwych obiektów.

*Uwaga*: Integracja systemów – proces polegający na zespoleniu systemów tak, aby mogły one korzystać nawzajem ze swoich zasobów, takich jak pliki lub urządzenia.

![](../../resources/III.2.3dependecy_injection.jpg)


