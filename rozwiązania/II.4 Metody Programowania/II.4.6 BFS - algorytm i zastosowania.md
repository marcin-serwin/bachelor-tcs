Przegląd grafu wszerz, podstawowe zastosowania.

---

# Algorytm BFS

Breadth first search - przegląd grafu wszerz.

## Idea
Startujemy z wierzchołka źródłowego $s$, chcemy dotrzeć do wszystkich wierzchołków w następującej kolejności:

* najpierw wierzchołki odległe od wierzchołka startowego o $1$,
* następnie wierzchołki odległe o $2$,
* następnie wierzchołki odległe o $3$, itd.

## Pseudokod

````
bfs(G as graph, s as source)
  for each vertex in G:
    set vertex status to not visited

  set s status to visited
  Q = empty queue
  add s to Q

  while Q not empty
    v = first element of Q
    pop first element of Q

    for each neighbour of v:
      if v not visited:
        add v to Q
        set v status to visited
````
Powyższa procedura przegląda cały graf, jesli jest on spójny, tzn. wszystkie wierzchołki są osiągalne ze źródła. Jeśli graf na wejściu może nie być spójny, a chcemy przeglądnąć cały, należy wykonać:

````
for each vertex in G
  if vertex is not visited
    bfs(G, v)
````

Złożoność: $\Theta(V + E)$

## Zastosowania:
1. Wyznaczanie najkrótszych ścieżek od ustalonego źródła w grafie nieskierowanym. Aby to osiągnąć należy dynamicznie uzupełniać informacje o odległości wierzchołków od źródła - odległość każdego wierzchołka to odległość jego *ojca* plus $1$.
2. Rozstrzyganie, czy istnieje w grafie cykl parzysty oraz czy istnieje cykl nieparzysty.
3. Testowanie dwudzielności grafu - sprawdzamy, czy w grafie nie istnieje cykl nieparzysty.
4. Wyznaczanie spójnych składowych w grafie **nieskierowanym**.
5. Rozwiązanie problemu osiągalności - czy istnieje ścieżka pomiędzy wierzchołkiem $u$ i wierzchołkiem $v$.
