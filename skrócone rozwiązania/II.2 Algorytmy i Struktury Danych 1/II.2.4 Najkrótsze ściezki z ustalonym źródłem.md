Algorytmy znajdowania najkrótszych ścieżek w grafie z ustalonym źródłem.

---

# Najkrótsze ścieżki z ustalonym źródłem
Dla grafu skierowanego lub nie chcemy długość najkrótszej ścieżki od źródła $s$ do każdego $v$. Taka odległosć nie zawsze istnieje - jeśli mamy **cykl o ujemnej długości**. Chodzenie po nim daje coraz krótsze scieżki. Zakładamy więc, że nie mamy cykli ujemnej długości.

## Nierówność trójkąta
Dla każdej krawędzi zachodzi $d(s,v) \leq d(s,u) \,+ \, w(u,v)$.

Gdyby to nie zachodziło to $d(s, v) > d(s,u)\, + \, w(u,v)$, więc $d(s,v)$ nie byłoby długością najkrótszej ścieżki od $s$ do $v$. Sprzeczność.

## Bellman-Ford
Zakładamy, że nie mamy cykli ujemnych (czyli chodzenie po jakimkolwiek cyklu nie skraca ścieżki). Z tego wynika, że najkrótsze ścieżki nie mają cykli, czyli mają co najwyżej $n-1$ krawędzi.

````
BellmanFord (G)
  D = new List(n, INFINITY)  // aktualne odległości od s
  D[s] = 0

  for 1..n-1
    foreach edge in E
      Relax(edge.u, edge.v)

Relax (u,v)
  if (D[v] > D[u] + w[u, v]) // jeśli da się poprawić
    D[v] = D[u] + w[u,v]     // to popraw
````

Oczywiście $O(V  E)$ dla list sąsiedztwa.

Ciekawa uwaga - po wykonaniu $n-1$ iteracji kolejne już nie powinny nic poprawić. Chodzenie po normalnych cyklach się nie opłaca. Jeżeli więc coś się jednak poprawi to znaczy, że graf ma ujemne cykle.

## Dijkstra
Jak poprzednio, najpierw $D[s] \gets 0$, a wszystkie pozostałe mają $+\infty$. Używamy kolejki priorytetowej $Q$, gdzie trzymamy wierzchołki, dla których być może nie mamy jeszcze ostatecznej wartości. Na początku wrzucamy na nią wszystkie wierzchołki. Porządek jest po wartościach $D[v]$.

Dopóki kolejka nie jest pusta wykonuj $u = \operatorname{Q.ExtractMin()}$ i dla każdego incydentnego z tym wierzchołkiem (czyli weź wszystkie $(u, v) \in E$) relaksuj $u$ i $v$.

````
Dijkstra (G)
{
  Q = new Queue(G.vertices)
  D[s] = 0

  while !Q.Empty
    u = Q.ExtractMin()
    foreach (u, v) in E
      Relax(u, v);
}
````

Przy wykonywaniu relaksowania może zmienić się wartość $D[v]$, a tym samym pozycja $v$ w kolejce.

### Złożoność
Zalży od kolejki. Oprócz szybkiego $\operatorname{Insert}$ i $\operatorname{ExtractMin}$ chcemy też $\operatorname{DecreaseKey}$ (w relaksowaniu).

Używając kopca złożoność to $\Theta(|E| \log |V|)$.
