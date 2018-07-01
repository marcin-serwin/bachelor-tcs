Minimalne drzewa rozpinające w grafie, podstawowe algorytmy.

---

# Minimalne drzewo rozpinające

### Drzewo rozpinające

Drzewo rozpinające $T$ grafu $G = (V, E)$ to drzewo $T = (V, E')$, gdzie $E' \subseteq E$

### Minimalne drzewo rozpinające

Minimalne drzewo rozpinające grafu $G$ to drzewo rozpinające $T$ o minimalnej sumie wag $\displaystyle \sum_{e \in T} w(e)$, tzn. nie istnieje drzewo rozpinające grafu $G$ o mniejszej sumie wag.

## Input

* Graf $G = (V, E)$ spójny, nieskierowany
* Funkcja $w: E \to \mathbb{R}$, $w(u, v)$ jest wagą krawędzi $(u, v)$.

## Output

$T$ - minimalne drzewo rozpinające grafu $G$

## Algorytm Borůvki

* Algorytm zachłanny
* Zakładamy, że wagi krawędzi są unikatowe - jeśli tak nie jest, indeksujemy krawędzie, a przy porównywaniu dwóch o takiej samej wadze, wybieramy tę o niższym indeksie

#### Idea

1. Inicjalizujemy las $F$ złożony z pojedyńczych wierzchołków grafu $G$
2. Dopóki istnieje więcej niż jedna spójna składowa powtarzamy kroki 3-4
3. Dla każdej spójnej składowej (drzewa w lesie $F$) znajdujemy najtańszą krawędź $e$ wychodzącą poza tą składową i dodajemy ją do lasu $F$
4. Łączymy drzewa połączone krawędziami tworząc większe spójne składowe

````
Tree Boruvka(Graph G) {
  F := new Forest(G.V, {})

  while (F.trees.count() > 1) {
    foreach (Tree T in F) {
      e := cheapest_outgoing_edge(T)
      F.add_edge(e)
    }
  }

  return F.trees[0]
}
````

#### Złożoność

* W każdym przejściu pętli `while` liczba spójnych składowych maleje przynajmniej dwukrotnie, zatem pętla wykona się $O(log \, V)$ razy
* Zliczanie składowych i wyszukiwanie najtańszej krawędzi - $O(V + E)$
* Całkowita złożoność - $O(E \, log \, V)$


## Algorytm Prima

#### Idea

1. Tworzymy drzewo $T$ zawierające jeden, dowolnie wybrany wierzchołek z grafu $G$
2. Tworzymy kolejkę priorytetową $Q$ zawierającą krawędzie wychodzące poza drzewo $T$ o priorytecie najmniejszej wagi krawędzi.
3. Dorzucamy do $Q$ sąsiadów wierzchołka z $T$
4. Dopóki kolejka $Q$ nie jest pusta powtarzamy krok 5
5. Ściągamy krawędź $e$ z kolejki. Jeden wierzchołek na pewno jest w $T$, drugi może być (wtedy krawędźź pomijamy) albo jeszcze nie być w $T$. Wtedy dodajemy go do $T$ wraz z krawędzią $e$ i wrzucamy na kolejkę krawędzie z niego wychodzące (do wierzchołków nie będących w $T$).

````
Tree Prim(Graph G) {
  u := G.V[0]
  T := new Tree({u}, {})
  Q := new PriorityQueue()
  Q.push(u.outgoing_edges())

  while (!Q.empty()) {
    e := Q.pop()
    v1 := vertex already in T // na pewno taki istnieje
    v2 := second vertex

    if v2 in T
      continue

    T.add_edge(e)
    Q.push(v2.outgoing_edges())
  }

  return T
}
````

#### Złożoność

* Złożoność algorytmu jest zdominowana rozmiarem kolejki
* Każda krawędź może być dodana do kolejki - rozmiar kolejki $O(E)$
* Każdy wierzchołek raz dodany do drzewa - sumaryczny koszt $\Theta(V)$
* Całkowita złożoność - $O(E \, log \, E) = O(E \, log \, V^2) = O(E \, log \, V)$
* Istnieje implementacja korzystająca z kolejki o rozmiarze $O(V)$, trzymająca w kolejce co najwyżej jedną kopię danego wierzchołka wraz z krawędzią realizującą najniższy koszt dotarcia do niego. Złożność - $O(E \, log \, V)$ z niższą stałą

## Algorytm Kruskala

#### Idea

1. Sortujemy krawędzie względem najmniejszych wag
2. Korzystając ze struktury lasu zbiorów rozłącznych z kompresją ścieżek ([Union-Find](../../II.1 Analiza Algorytmów/II.1.6 Find-Union.md)) dodajemy krawędzie do rozwiązania zgodnie z kolejnością wynikającą z posortowania, tak aby w rozwiązaniu nie pojawił się cykl


````
Tree Kruskal(Graph G) {
  UF := new UnionFind(G.V)
  T := new Tree()

  foreach (Edge e in sort(G.E)) {
    if (UF.find(e.begin) != UF.find(e.end)) {
      UF.union(e.begin, e.end)
      T.add_edge(e)
    }
  }

  return T
}
````

#### Złożoność

* Złożoność sortowania - $O(E \, log \, E)$
* Złożoność struktury lasu zbiorów rozłącznych - $O(E \, log^\ast \, V)$
* Całkowita złożoność - $O(E \, log \, E) = O(E \, log \, V^2) = O(E \, log \, V)$
