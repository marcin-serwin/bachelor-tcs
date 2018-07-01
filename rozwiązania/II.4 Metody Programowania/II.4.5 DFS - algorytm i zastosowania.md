Przegląd grafu w głąb, zastosowanie do testowania spójności grafu i istnienia cykli.

---

# Algorytm DFS
* **DFS** - *depth-first search* - przeglądanie grafu w głąb.
* Idea - rekurencja, metoda nawrotów *(stopniowy przegląd grafu, jeśli całe sąsiedztwo aktualnego wierzchołka zostało już odwiedzone, algorytm wycofuje się do wierzchołka wcześniejszego i próbuje tam kontynuować)*.

## Wersja podstawowa

````
dfs(G as graph)
  for each vertex of G:
    set vertex status to not visited
  for each vertex in G:
    if vertex is not visited
      visit(vertex)

visit(v as vertex)
  set v status to visited
  for each vertex of v's neighbours
    if vertex is not visited
      visit(vertex)
````
## Wersja bogatsza

````
dfs_rich(G as graph)
  for each vertex of G:
    set vertex status to not visited
    set vertex parent to null
  calls = 0

  for each vertex in G:
    if vertex is not visited
      visit_rich(vertex)

visit_rich(v as vertex)
  set v status to in progress
  calls = calls + 1
  set v started at call to calls

  for each vertex of v's neighbours
    if vertex is not visited
      set v as parent of vertex
      visit_rich(vertex)
  set vertex status to done
  calls = calls + 1
  set vertex finished at call to calls
````

Zwyczajowo statusy oznaczamy kolorami:
* biały - nieodwiedzony,
* szary - odwiedzony, ale przeglądanie wierzchołka jeszcze się nie zakończyło,
* czarny - odwiedzony i w pełni przetworzony.

Informacje uzyskane w trakcie działania algorytmu:
* *started at call* - dla wierzchołka $v$ określa, w którym wywołaniu funkcji *visit_rich* algorytm rozpoczął analizę poddrzewa, którego korzeniem jest $v$.
* *finished at call* - dla wierzchołka $v$ określa, w którym wywołaniu funkcji *visit_rich* algorytm zakończył analizę poddrzewa, którego korzeniem jest $v$.
* *parent* - dla wierzchołka $v$ określa, kto jest rodzicem $v$ w drzewie *(lesie)* rozpinającym tego grafu.

Złożoność: $\Theta(V+E)$
## Zastosowania:
1. Wyznaczanie spójnych składowych w grafie.
2. Wyznaczenie drzewa *(lasu)* rozpinającego dla grafu.
3. Rozwiązanie problemu osiągalności - czy istnieje ścieżka pomiędzy wierzchołkiem $u$ i wierzchołkiem $v$.
4. Sprawdzanie czy graf zawiera cykle. Jeśli podczas analizowania wierzchołka $v$ okaże się, że któryś z jego sąsiadów ma *szary* kolor to oznacza, że znaleźliśmy cykl.
5. Sortowanie topologiczne grafu skierowanego - patrz [Sortowanie topologiczne](II.4.7 Sortowanie topologiczne.md).
6. Znajdowanie cyklu Eulera.
7. Na algorytmie *DFS* opiera się też algorytm do testowania dwuspójności grafu nieskierowanego.

## Zastosowanie algorytmu *DFS* do znajdowania silnie spójnych składowych (graf skierowany)
Idea algorytmu:

1. Wykonaj DFS na grafie $G$ i oblicz wartość $\text{finished at call}$ dla każdego wierzchołka tego grafu.
2. Utwórz $H = G^T$ - graf transponowany do $G$ *(każda krawędź zostaje odwrócona)*.
3. Wywołaj $\text{visit_rich(v)}$ w kolejności malejących wartości $\text{finished at call}$ dla kolejnych nieodwiedzonych jeszcze wierzchołków *(część z nich zostanie odwiedzona jako poddrzewo $v$)*.
4. Każde drzewo lasu rozpinającego wygenerowane w poprzednim kroku jest oddzielną silnie spójną składową.

Złożoność: $\Theta(V + E)$

W kroku $1$ możemy dynamicznie tworzyć porządek używany w kroku $3$ unikając konieczności sortowania.
