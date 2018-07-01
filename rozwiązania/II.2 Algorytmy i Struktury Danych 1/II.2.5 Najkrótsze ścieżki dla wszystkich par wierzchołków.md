Znajdowanie najkrótszych ścieżek dla wszystkich par wierzchołków grafu, przechodnie domknięcie relacji.

---

# Najkrótsze ścieżki w całym grafie

## Input
* Graf $G = (V, E)$ skierowany lub nie
* Funkcja $w: E \to \mathbb{R}$, $w(u, v)$ jest wagą krawędzi $(u, v)$. Jeśli krawędzi $(u,v)$ w grafie nie ma, to $w(u,v) = \infty$.

## Output
Dla każdej pary wierzchołków $u, v \in V$ długość najkrótszej ścieżki od $u$ do $v$; oznaczamy ją jako $d(u, v)$.

## Rozwiązanie 1. 
Zastosować $|V|$ razy algorytm *Dijkstry* lub *Bellmana-Forda*.

Uwaga. Jeśli graf zawiera krawędzie o wagach ujemnych, algorytm Dijkstry nie działa.

Złożoność w przypadku wykorzystania algorytmu *Bellmana - Forda* wynosi $O(V^2E)$.

W przypadku algorytmu Dijkstry z koleką priorytetową realizowaną za pomocą kopca osiągamy $O(VE \log V)$. Jeśli jednak realizujemy kolejkę przy pomocy kopców Fibonacciego, złożoność wynosi $O(V(E + V \log V))$

## Rozwiązanie 2. 
Algorytm *Floyda - Warshalla*.

**Uwaga.** Algorytm działa dla grafów z krawędziami o wagach ujemnych.

Szukamy $D[i, j]$ dla $i, j \in \{ 1, 2, \ldots, n \}$.

Zdefiniujmy $D^k[i, j]$ = długość najkrótszej ścieżki z wierzchołka $i$ do $j$, w której jako pośrednie wierzchołki mogą występować tylko wierzchołki $\{1, \ldots, k \}$. Oczywiście dla $i \neq j$ $D^0[i, j] = w[i, j]$ czyli bez żadnych pośrednich krawędzi. $D^0[i,i] = 0$.

### Fakt. 
> Dla $k > 0$ zachodzi $D^k[i, j] = min\, (D^{k-1}[i, j],\, D^{k-1}[i, k]\,+\, D^{k-1}[k,j])$.

### Pseudokod algorytmu

````
Floyd-Warshall (G as graph) // n = |V(G)|
  for i=1 to n
    for j=1 to n
      if i != j
        D[i,j] = w[i,j]
      else
        D[i,j] = 0

  for k=1 to n
    for i=1 to n
      for j=1 to n
        D[i,j] = min (D[i, j], D[i,k] + D[k,j]);
````

Złożoność oczywista $\Theta(n^3)$.

### Znajdowanie przechodniego domknięcia relacji
Algorytm *Floyda - Warshalla* można zastosować do znajdowania **przechodniego domknięcia relacji** (dla grafów jest to problem osiągalności dla wszystkich par wierzchołków).

#### Idea algorytmu
* Początkowa wartość tablicy to reprezentacja relacji: $D[i, j] = 1$ jeśli para $(i, j)$ jest w relacji, $0$ w przeciwnym przypadku.
* Zamiast operacji **min** jest logiczne **OR**,
* Zamiast **+** jest logiczne **AND**.
* W tablicy wynikowej $D[i, j] = 1$ jeśli istnieje ścieżka z $i$ do $j$, $0$ w przeciwnym przypadku.

## Rozwiązanie 3
Algorytm *Johnsona*.

### Idea algorytmu
* Jeśli graf zawiera krawędzie o wadze ujemnej, przeliczamy wagi tak, aby były nieujemne i nie zmieniła się struktura najkrótszych ścieżek.
* Wykonujemy $|V|$ razy algorytm Dijkstry na nowych (już nieujemnych) wagach - dla każdego wierzchołka jako źródła.
* Przeliczamy obliczone odległości z powrotem do oryginalnych wag.

Złożoność: Jeśli używamy kopca jako kolejki priorytetowej, to wynosi $O(VE \log V)$. Wynika z tego, że nie opłaca się go stosować dla graów gęstych, wtedy lepszy jest algorytm *Floyda - Warshalla*.

Jeśli natomiast jako kolejki używamy kopca Fibonacciego, to złożoność jest rzędu $O(V(E + V \log V))$, więc lepiej niż algorytm *Floyda - Warshalla*.