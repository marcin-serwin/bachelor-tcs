Randomizacja drzew poszukiwań binarnych: model permutacyjny, kopcodrzewa.

---

# Losowe BST
Mamy dwa modele. W pierwszym losujemy całe $n$-wierzchołkowe drzewo i wstawiamy klucze w posortowanej kolejności. To jest słabe. Okazuje się, że można dużo prościej (**model permutacyjny**):

1. Stwórz puste BST.
2. Wybieraj klucze w losowej kolejności (każda permutacja jednakowo prawdopodobna).
3. Wstawiaj je do drzewa.

## Fakty
* Oczekiwana głębokość dowolnego liścia: $\Theta(\log\, n)$.
* Oczekiwana głębokość najgłębszego liścia (wysokość drzewa): $\Theta(\log n)$.

## Kopcodrzewa
*Treap = tree + heap*

Wstawiając element losujemy mu unikalny priorytet.
* Ze względu na klucze drzewo jest BST.
* Ze względu na priorytety drzewo jest max kopcem.

### Unikalność
Dla zbioru kluczy i ich unikalnych priorytetów istnieje dokładnie jedno drzewo treap. Uzasadnienie jest rekurencyjne - korzeń to ten węzeł, w którym priorytet jest maksymalny. Żeby natomiast było zachowane BST, to lewym poddrzewem muszą być elementy z mniejszymi kluczami, a prawym z większymi.

Oznacza to, że postać drzewa **nie zależy od kolejności wstawiania**.

## Operacje
### Search(x)
Jak w *BST*.

### Insert(x)
Najpierw wstaw $x$ jak w BST (zostanie liściem). Następnie wylosuj mu priorytet i przesuwaj w górę, aż będzie spełniony warunek kopca.

### Delete(x)
Ustaw $x$ priorytet na $-\infty$. Wtedy zostanie liściem, żeby warunek kopca był spełniony. Odetnij.

## Twierdzenie
Oczekiwana wysokość drzewa treap wynosi $\Theta(\log n)$.

### Szkic dowodu
Wiemy, że treap $T$ jest unikalne dla konkretnych kluczy i priorytetów. Można je utworzyć następująco:

1. Stwórz puste BST.
2. Dla każdego elementu wylosuj priorytet.
3. Wstawiaj do BST elementy w kolejności malejących priorytetów (to losowa permutacja).

A wiemy, że taki proces daje drzewo o oczekiwanej wysokości $\Theta(\log n)$.
