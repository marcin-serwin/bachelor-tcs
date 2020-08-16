Na czym polega wytwarzanie sterowane testami (test-driven development)?
Wymień podstawowe praktyki z nim związane.

---

# TDD (Test Driven Development)
TDD jest metodologią wytwarzania oprogramowania, która opiera się na krótkim cyklu developerskim, który polega na dodaniu konkretnych przypadków testowych zgodnych z wymaganiami, a następnie dodaniu/zmodyfikowaniu kodu, aby testy przeszły pomyślnie.

## Cykl developerski:
  * Dodaj unit test, który sprawdza pożądaną funkcjonalność.
  * Puść testy, aby sprawdzić, czy nowy unit test jest potrzebny. Docelowo, test nie powinien przechodzić (funkcjonalność nie została jeszcze napisana). W przeciwnym przypadku oznacza to, że test jest dublowany i nie sprawdza nowej funkcjonalności.
  * Napisz kod, aby test z poprzedniego kroku przechodził.
  * Puść testy ponownie. Docelowo wszystkie testy powinny teraz przechodzić, jeśli tak nie jest, należy wprowadzić poprawki w kodzie.
  * Refactor. Jeśli już wszystkie przypadki testowe przechodzą, należy kod posprzątać i uporządkować.
