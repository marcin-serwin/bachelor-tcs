Przegląd grafu w głąb, zastosowanie do znajdowania silnie spójnych składowych i cyklu Eulera.

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
Złożoność: $\Theta(V+E)$

## Zastosowanie algorytmu *DFS* do znajdowania silnie spójnych składowych (graf skierowany)
Idea algorytmu:

1. Wykonaj DFS na grafie $G$ i oblicz wartość $\text{finished at call}$ dla każdego wierzchołka tego grafu.
2. Utwórz $H = G^T$ - graf transponowany do $G$ *(każda krawędź zostaje odwrócona)*.
3. Wywołaj $\text{visit_rich(v)}$ w kolejności malejących wartości $\text{finished at call}$ dla kolejnych nieodwiedzonych jeszcze wierzchołków *(część z nich zostanie odwiedzona jako poddrzewo $v$)*.
4. Każde drzewo lasu rozpinającego wygenerowane w poprzednim kroku jest oddzielną silnie spójną składową.

Złożoność: $\Theta(V + E)$

W kroku $1$ możemy dynamicznie tworzyć porządek używany w kroku $3$ unikając konieczności sortowania.

## Zastosowanie algorytmu *DFS* do znajdowania cyklu Eulera
Cykla Eulera to taki cykl w dowolnym grafie (skierowanym bądź nie), który przechodzi przez każdą krawędź grafu dokładnie raz.

Lista kroków rekurencyjnej procedury 
````
DFSEuler ( v )
	Dla każdego sąsiada u wierzchołka v :
	    Usuń z grafu krawędź v–u	# Każdą krawędź usuwamy, aby nie była wykorzystana dwukrotnie
	    DFSEuler(graf, u, S)	# Rekurencyjnie wywołujemy procedurę DFS
	S.push (v)	                #Po przetworzeniu, wierzchołek umieszczamy na stosie
	Zakończ
````

Jeśli graf posiada cykl Eulera, to po zakończeniu algorytmu na stosie znajdą się kolejne wierzchołki tego cyklu.
