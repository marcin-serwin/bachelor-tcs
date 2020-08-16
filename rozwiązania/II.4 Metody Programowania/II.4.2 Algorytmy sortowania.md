Sortowanie przez scalanie i sortowanie szybkie: idea działania, złożoność,
zalety, wady.

---

# Szybkie algorytmy sortowania
Dla algorytmów sortujących przez porównania elementów dolne ograniczenie złożoności wynosi $\Omega(n \log n)$. Za szybkie algorytmy sortowania uważamy zatem takie, które osiągają oczekiwany czas działania rzędu $\Theta(n \log n)$.

## Algorytmy
### 1. Mergesort
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

Rozwiązanie tego równania znajdujemy korzystając z Twierdzenia o rekurencji uniwersalnej. Mamy $a = 2$, $b = 2$, $f(n) = \Theta(n)$.  Zatem $f(n) = \Theta(n^{log_b a})$, więc czas $T(n) = \Theta(n \log n)$.


#### Zalety
* Złożoność w każdym przypadku $T(n) = \Theta(n\, \log n)$. 
* Mergesort jest stabilny (po posortowaniu zachowuje początkową kolejność jednakowych elementów).
* Drzewo wywołań rekurencyjnych będzie miało zawsze maksymalną głębokość rzędu $\log n$.

#### Wady
* Wymaga pamięci roboczej wielkości $\Theta(n)$ - gorzej w stosunku do, na przykład, sortowania przez kopcowanie, które potrzebuje tylko stałej pamięci roboczej.

### 2. Quicksort
**Uwaga.** Przedsatwiona poniżej wersja quicksorta jest wersją Lomuto z podziałem tablicy na 3 części - elementy mniejsze niż $pivot$, równe i większe. Ta wersja działa szczególnie dobrze, gdy w ciągu do posortowania jest dużo powtarzających się elementów, w szczególności dla ciągu stałego.

W poniższej implementacji używamy rekurencji. Jeżeli kompilator naszego języka wspiera ogonową rekurencję to pamięć potrzebna na stos zostanie ograniczona do $O(\log n)$ (w każdym wywołaniu wykonujemy najpierw podzadanie mniejsze niż $\frac{1}{2}n$).

Pivot wybierany jest losowo spośród wszystkich elementów do posortowania w danej iteracji. Pozwala to uodpornić się na złośliwe dane - nie jest na nie odporna np. wersja podstawowa Hoare'a, w której pivotem jest pierwszy element z lewej. Dla ciągu już posortowanego osiąga ona złożoność $\Theta(n^2)$.
#### Pseudokod
````
partition (A[1...n] as array)
  pivot = random element of A
  lower_size = 0
  even_size = 0
  greater_size = 0

  while lower_size + even_size + greater_size < n
    k = lower_size + even_size + greater_size + 1

    if A[k] < pivot
      swap A[lower_size + 1], A[k]
      lower_size = lower_size + 1
      even_size = even_size - 1
    if A[k] == pivot
      swap A[even_size + 1], A[k]
      even_size = even_size + 1
      greater_size = greater_size - 1
    if A[k] > pivot
      greater_size = greater_size + 1

  return A[1...lower_size], A[lower_size + even_size + 1...greater_size]


quicksort(A[1...n] as array)
  if |A| <= 1
    return

  L, R = partition(A)

  quicksort(R)
  quicksort(L)
````

#### Zalety
* Złożoność oczekiwana $T(n) = \Theta(n\, \log n)$. 
* W praktyce często szybszy od innych algorytmów.
* Nie wymaga pamięci roboczej poza stosem rekurencji w wersji rekurencyjnej lub stosem explicite w wersji iteracyjnej - lepiej w stosunku do mergesorta, który wymaga $\Theta(n)$ dodatkowo.
* Odchylenie standardowe od średniej złożonosci jest bardzo małe, około $0.27n$ więc niewiele przypadków ma kiepską złożoność.
* Drzewo wywołań rekurencyjnych o głębokości $\leq \log n$ jeśli dbamy o to aby wykonywać zawsze najpierw podzadanie mniejszego rozmiaru - jeśli piszemy nie zwracając uwagi na wielkość stosu, jego wielkość może dojść nawet do $\Theta(n)$.

#### Wady
* Pesymistyczna złożoność $O(n^2)$ - mergesort i heapsort mają $\Theta(n \log n)$.

