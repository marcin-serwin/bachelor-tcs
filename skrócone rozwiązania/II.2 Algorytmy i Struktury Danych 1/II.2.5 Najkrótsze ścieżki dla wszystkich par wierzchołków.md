Znajdowanie najkrótszych ścieżek dla wszystkich par wierzchołków grafu, przechodnie domknięcie relacji.

---

# Najkrótsze ścieżki w całym grafie
Mamy graf skierowany lub nie i chcemy dla każdej pary wierzchołków znaleźć najkrótszą ścieżkę z jednego do drugiego.

## Napałowe
Można użyć $|V|$ razy Dijkstrę albo Bellmana-Forda. W przypadku krawędzi o wagach ujemnych nie zadziała jednak algorytm Dijkstry.

Złożoność:
* Bellmanem-Fordem: $O(V^2E)$
* Dijkstrą z kopcem: $O(VE \log V)$
* Dijkstrą z kopcem Fibonacciego: $O(V(E + V \log V))$

## Floyd-Warshall
Ten algorytm **DZIAŁA** dla grafów z krawędziami o wagach ujemnych.

Mamy ponumerowane wszystkie wierzchołki. Długością najkrótszej ścieżki z wierzchołka $i$ do $j$, w której jako pośrednie mogą być tylko $\{1, \ldots, k \}$, będziemy oznaczać jako $D^k[i, j]$.

* Ten sam wierzchołek: $D^0[i,i] = 0$.
* Bezpośrednio połączone: $D^0[i, j] = w[i, j]$.

Dla $k > 0$ zachodzi:

$$D^k[i, j] = \operatorname{min}\, (D^{k-1}[i, j],\, D^{k-1}[i, k]\,+\, D^{k-1}[k,j])$$

### Pseudokod

````
Floyd-Warshall (G as graph) // n = |V(G)|
  foreach D[i,i] = 0
  foreach D[i,j] = w[i,j]

  for k = 1..n
    for i = 1..n
      for j = 1..n
        D[i,j] = min (D[i, j], D[i,k] + D[k,j])
````

Złożoność $\Theta(n^3)$.

### Przechodnie domknięcie
Floyda-Warshalla można użyć do znalezienia **przechodniego domknięcia relacji** (dla grafów jest to problem osiągalności dla wszystkich par wierzchołków).

Jeżli para jest w relacji, to $D[i, j] = 1$. W przeciwnym razie $0$. Ponieważ chcemy domknąć przechodnio, to zamiast **min** używamy **OR**, a zamiast **+** **AND**.

Na końcu $D[i, j] = 1$ $\iff$ istnieje ścieżka z $i$ do $j$.

## Johnson
1. Dodaj nowy węzeł $q$ połączony krawędziami o wagach $0$ z każdym innym wierzchołkiem grafu.
2. Użyj algorytmu Bellmana-Forda startując od dodanego wierzchołka $q$, aby odnaleźć minimalną odległość $d[v]$ każdego wierzchołka $v$ od $q$. Jeżeli został wykryty ujemny cykl, zwróć tę informację i przerwij działanie algorytmu.
3. Przewagujemy graf tak, aby **zlikwidować ujemne wagi krawędzi nie zmieniając wartości najkrótszych ścieżek**. W tym celu każdej krawędzi $(u,v)$ o wadze $w(u,v)$ przypisz nową wagę $w(u,v) + d[u] - d[v]$.
4. Usuń początkowo dodany węzeł $q$.
5. Użyj Dijkstry dla każdego wierzchołka w grafie.

Złożoność $O(|V|^2 \log|V| + |V| |E|)$.
