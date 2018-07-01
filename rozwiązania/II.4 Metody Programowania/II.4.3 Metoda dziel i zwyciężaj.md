Metoda "dziel i zwyciężaj" konstrukcji algorytmów, przykłady jej zastosowania wraz z analizą złożoności.

---

# Dziel i zwyciężaj

## Abstrakt
W tej strategii problem dzieli się rekurencyjnie na jeden lub więcej mniejszych podproblemów tego samego (lub podobnego) typu tak długo, aż fragmenty staną się wystarczająco proste do bezpośredniego rozwiązania. Z kolei rozwiązania otrzymane dla podproblemów scala się, uzyskując rozwiązanie całego zadania.

## Szablon metody
* Podziel całe zadanie na mniejsze podzadania.
* Rekurencyjnie rozwiąż podzadania.
* Otrzymane rozwiązania podzadań scal, tworząc rozwiązanie całego zadania.

## Przykład algorytmu z implementacją i analizą
````
mergesort(A as array)
  if A is empty
    return A
  n = size of A
  m = n/2
  L = mergesort (A[0...m-1])
  R = mergesort (A[m...n])

  return merge(L, R)

merge(L, R)
  A = array of size sum of sizes of L and R
  i = 0
  j = 0
  k = 0
  

  while i < size of L and j < size of R
    if L[i] <= R[j] // konieczne <=, wpp. algorytm nie jest stabilny
      A[k] = L[i]
      k = k+1
      i = i+1
    else
      A[k] = R[j]
      k = k+1
      j = j+1

  add rest of elements from not empty array to A
  return A
````
Równanie rekurencyjne: 
* $T(1) = \Theta(1)$.
* $T(n) = T(\lfloor \frac{n}{2} \rfloor) + T(\lceil \frac{n}{2} \rceil) + \Theta(n)$ dla $n > 1$.

Zmiana wielkości podzadania o stałą nie zmienia rzędu złożoności, więc dla wygody zapiszemy równanie jako $T(n) = 2T(\frac{n}{2}) + \Theta(n)$.

Rozwiązanie tego równania znajdujemy korzystając z Twierdzenia o rekurencji uniwersalnej - patrz [II.1.4](../II.1 Analiza Algorytmów/II.1.4 Twierdzenie o rekurencji uniwersalnej.md). Mamy $a = 2$, $b = 2$, $f(n) = \Theta(n)$.  Zatem $f(n) = \Theta(n^{log_b a})$, więc czas $T(n) = \Theta(n \log n)$.

## Inne przykłady zastosowania metody
### Binsearch
  * Złożoność: $T(n) = T(\frac{n}{2}) + \Theta(1)$.
  * Z Twierdzenia o rekurencji uniwersanej $T(n) = \Theta(log\, n)$.

### Mnożenie macierzy metodą Strassena
  * Złożoność: $T(n) = 7T(\frac{n}{2}) + \Theta(n^2)$.
  * Z Twierdzenia o rekurencji uniwersanej $T(n) = \Theta(n^{log_2\, 7}) \approx \Theta(n^{2.81})$.

### Algorytm mediana median wyszukiwania k-tego elementu
  * Złożoność:
	* Znajdowanie median piątek, wykonywanego w czasie $\Theta (n)$.
	* Wybranie (rekurencyjnie) mediany median, wykonywane w czasie $T(\frac{n}{5})$.
	* Wykonania wywołania rekurencyjnego, wykonywanego co najwyżej w czasie $T(\frac{3}{4}n)$
	* Zatem $T(n) \leq T(\frac{n}{5}) + T(\frac{3}{4}n) + \Theta(n)$.
 	* $T(n) = \Theta(n)$, z lematu podanego poniżej.
### Quicksort
Więcej informacji: [Sortowanie](II.4.4 Szybkie algorytmy sortowania.md)
* Postać równania rekurencyjnego zależy od tego, jakiego podziału dokona operacja *partition*. Zawsze jednak równanie ma postać $T(n) = T(k-1) + T(n-k) + \Theta(n)$, gdzie $k$ - liczba elementów w lewej części tablicy po wykonaniu *partition*.
* Najgorszy przypadek zachodzi, jeśli jedno podzadanie ma wielkość $n-1$ a drugie $0$ - wtedy $T(n) = T(n-1) + \Theta(n)$, co daje $T(n) = \Theta(n^2)$. 
* Najlepszy przypadek zachodzi, gdy dostajemy podzadania w przybliżeniu równej wielkości. Wtedy $T(n) = 2T(\frac{n}{2}) + \Theta(n)$, co daje $T(n) = \Theta(n \log n)$.

## Lemat
> Jeśli $T(n) = \sum_{i=1}^{k} T(c_i n) + \Theta(n)$ oraz $\sum_{i=1}^{k} c_i < 1$, to $T(n) = \Theta(n)$.