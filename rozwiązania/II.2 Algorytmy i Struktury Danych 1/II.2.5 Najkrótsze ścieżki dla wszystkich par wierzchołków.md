Znajdowanie najkrótszych ścieżek dla wszystkich par wierzchołków grafu,
algorytm Warshalla-Floyda lub algorytm Johnsona.

---

# Najkrótsze ścieżki w całym grafie

## Input
* Graf $G = (V, E)$ skierowany lub nie
* Funkcja $w: E \to \mathbb{R}$, $w(u, v)$ jest wagą krawędzi $(u, v)$. Jeśli krawędzi $(u,v)$ w grafie nie ma, to $w(u,v) = \infty$.

## Output
Dla każdej pary wierzchołków $u, v \in V$ długość najkrótszej ścieżki od $u$ do $v$; oznaczamy ją jako $d(u, v)$.

## Algorytm *Warshalla - Floyda*.

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

## Algorytm *Johnsona*.

### Idea algorytmu
* Jeśli graf zawiera krawędzie o wadze ujemnej, przeliczamy wagi tak, aby były nieujemne i nie zmieniła się struktura najkrótszych ścieżek.
* Wykonujemy $|V|$ razy algorytm Dijkstry na nowych (już nieujemnych) wagach - dla każdego wierzchołka jako źródła.
* Przeliczamy obliczone odległości z powrotem do oryginalnych wag.

Złożoność: Jeśli używamy kopca jako kolejki priorytetowej, to wynosi $O(VE \log V)$. Wynika z tego, że nie opłaca się go stosować dla graów gęstych, wtedy lepszy jest algorytm *Floyda - Warshalla*.

Jeśli natomiast jako kolejki używamy kopca Fibonacciego (kilka kopców), to złożoność jest rzędu $O(V(E + V \log V))$, więc lepiej niż algorytm *Floyda - Warshalla*.
