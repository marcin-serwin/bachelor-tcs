Rozwiń skrót TDD i omów tę technikę tworzenia oprogramowania na prostym przykładzie.

---

# TDD (Test Driven Development)
TDD jest metodologią wytwarzania oprogramowania, która opiera się na krótkim cyklu developerskim, który polega na dodaniu konkretnych przypadków testowych zgodnych z wymaganiami, a następnie dodaniu/zmodyfikowaniu kodu, aby testy przeszły pomyślnie.

## Cykl developerski:
  * Dodaj unit test, który sprawdza pożądaną funkcjonalność.
  * Puść testy, aby sprawdzić, czy nowy unit test jest potrzebny. Docelowo, test nie powinien przechodzić (funkcjonalność nie została jeszcze napisana). W przeciwnym przypadku oznacza to, że test jest dublowany i nie sprawdza nowej funkcjonalności.
  * Napisz kod, aby test z poprzedniego kroku przechodził.
  * Puść testy ponownie. Docelowo wszystkie testy powinny teraz przechodzić, jeśli tak nie jest, należy wprowadzić poprawki w kodzie.
  * Refactor. Jeśli już wszystkie przypadki testowe przechodzą, należy kod posprzątać i uporządkować.

![TDD](../../resources/III.2.7-TDD.png)

# Przykład
Załóżmy, że mamy napisać bezpieczną funkcję dodawania liczb naturalnych, która rzuca wyjątek w przypadku przepełnienia.

Pierwszym krokiem będzie stworzenie testu funkcjonalnego:

```
[Test]
given integers 2 and 3
when safeAdd
then result is 5
```

Następnie należy dodać kod, który zapewnia tę funkcjonalność.

```
safeAdd(a integer, b integer)
    return a + b
```

Kolejna iteracja powinna uniemożliwić podanie argumentów ujemnych. Dodajemy test:

```
[Test]
given integers -1 and 10
      integers 10 and -1
      integers -1 and -4

when safeAdd
then RuntimeException should be thrown
```

Sprawdzamy, że test ten powoduje niepoprawne działanie aplikacji. Należy zmodyfikować kod:

```
safeAdd(a integer, b integer)
    if (a < 0 || b < 0)
        throw new RuntimeException()
 
    return a + b
```

Następnie testujemy i w analogiczny sposób przechodzimy do zapewnienia kolejnej funkcjonalności. Po zakończeniu tej części cyklu należy przeanalizować kod pod względem jakości i wprowadzić ewentualne poprawki.
