Algorytmy Dijkstry oraz Bellmana-Forda znajdowania najkrótszych ścieżek w
grafie z ustalonym źródłem.

---

# Najkrótsze ścieżki z ustalonym źródłem

## Input:

* Graf $G = (V, E)$ skierowany lub nie
* Funkcja $w: E \to \mathbb{R}$, $w(u, v)$ jest wagą krawędzi $(u, v)$.

## Output:
Dla każdego wierzchołka $v \in V$ długość najkrótszej ścieżki od ustalonego źródła $s$ do $v$; oznaczamy ją jako $d(s, v)$.

**Uwaga!** Odległość $d(u, v)$ nie zawsze istnieje, jeśli w grafie jest cykl o ujemnej długości, to chodzenie po nim daje ścieżki o coraz mniejszej długości.

Zakładamy zatem (na chwilę) że graf nie zawiera cykli ujemnej długości. 

## Twierdzenie (nierówność trójkąta).
> Dla każdej krawędzi $(u, v)$ zachodzi $d(s,v) \leq d(s,u) \,+ \, w(u,v)$ 

Dowód jest oczywisty - gdyby to nie zachodziło to $d(s, v) > d(s,u)\, + \, w(u,v)$ więc $d(s,v)$ nie jest długością najkrótszej ścieżki od $s$ do $v$, bo ścieżka od $s$ do $u$ i potem po $(u,v)$ jest krótsza, Sprzeczność.

## Algorytm Bellmana - Forda
### Idea algorytmu
* zakładamy że nie ma cykli ujemnych
* zatem **powtarzanie jakiegokolwiek cyklu na ścieżce jej nie skraca**,
* zatem najkrótsze ścieżki nie mają cykli czyli **mają $\leq n-1$ krawędzi**.

W tablicy $D[\,\, ]$ trzymamy (aktualne) odległości wierzchołków od źródła $s$ . 

````
BellmanFord (G){
  INFINITY = 1000000000
  D[s] = 0
  for i=1;i<=n;++i){
    if (i != s)
      D[i] = INFINITY
  }

  for (i = 1; i<n; ++i){
    foreach (Edge (u, v) in E
      Relax (u, v)
  }
}

Relax (u,v){
  if (D[v] > D[u] + w[u, v])
    D[v] = D[u] + w[u,v]
}
````

Złożoność oczywiście $O(V  E)$ przy reprezentacji grafu przez listy sąsiedztwa.

**Uwaga!** Po wykonaniu n-1 iteracji kolejne iteracje już nic nie poprawiają jeśli graf nie ma ujemnych cykli, bo najkrótsze ścieżki są wtedy zawsze proste - powtarzanie cyklu się nie opłaca. Jeśli wykonamy teraz jeszcze jedną iterację Relax-ów po wszystkich krawędziach i okaże się że któraś $D[v]$ się zmniejszy, to znaczy że graf ma ujemne cykle.

## Algorytm Dijkstry
### Idea algorytmu
* $D[s] \gets 0$, $D[v] \gets +\infty$ dla $v \neq s$.
* W zbiorze $Q$ trzymamy wierzchołki $v$, dla których $D[v]$ być może nie ma ostatecznej wartości - początkowo $Q = V$. Porządek na wierzchołkach w kolejce jest po aktualnych wartościach $D[v]$.
* Dopóki $Q \neq \emptyset$ wykonuj: $u = ExtractMin(Q)$ i potem dla każdego $(u, v) \in E$ wykonaj $Relax(u, v)$.

````
Dijkstra (G){
  INFINITY = 1000000000;
  queue = empty_queue
  D[s] = 0
  for i=1;i<=n;++i
    if (i != s)
      D[i] = INFINITY
    queue.insert(i)
	
  while  !queue.isEmpty()
    v = queue.extractMin()
    foreach Edge (v, w) in E
      Relax(v, w); // przy wykonaniu Relax (u, v) być może zmienia się wartość D[v], więc może też zmienić się jego pozycja w kolejce.
}
````

### Złożoność
Zależy wyłącznie od tego, jak efektywne są operacje na kolejce priorytetowej. W tym algorytmie wymagamy, aby oprócz standardowych operacji $insert$ i $extractMin$ na kolejce dało się także wykonać $decreaseKey(x)$ - zmniejszenie priorytetu klucza. Jest to konieczne przy wykonywaniu procedury $Relax(u, v)$, gdzie może zmniejszyć się priorytet $v$.

Implementacja przy użyciu listy: $\Theta(|V|^2)$.

Implementacja przy użyciu kopca: $\Theta(|E| \log |V|)$
