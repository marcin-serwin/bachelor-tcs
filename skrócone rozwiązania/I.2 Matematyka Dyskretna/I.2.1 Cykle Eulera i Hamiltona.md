Cykle Eulera i cykle Hamiltona w grafach.

---

# Ścieżka Eulera
Ścieżka, która przechodzi dokładnie jeden raz przez każdą krawędź grafu, lecz kończy się w innym wierzchołku niż w startowym.

# Cykl Eulera
Ścieżka, która przechodzi dokładnie jeden raz przez każdą krawędź grafu i kończy się w wierzchołku, od którego się rozpoczęła. Jak graf ma taki cykl to jest eulerowski.

Graf jest eulerowski $\iff$ jest spójny i stopień każdego wierzchołka jest parzysty.

## Znajdywanie
Dla grafów nieskierowanych istnieje bardzo prosty algorytm wyznaczania cyklu Eulera (cykl taki musi istnieć w grafie, inaczej algorytm zawodzi):

1. Idź DFSem.
2. Przebyte krawędzie usuwaj.
3. Wierzchołki po zakończeniu przetwarzania umieszczaj na stosie.

Po zakończeniu algorytmu na stosie znajdą się kolejne wierzchołki tego cyklu.

# Cykl Hamiltona
Cykl w grafie, w którym każdy wierzchołek (oprócz startowego) jest odwiedzany dokładnie raz. Jak graf ma taki cykl to jest hamiltonowski.

Problem znajdowania cyklu Hamiltona jest problemem NP – zupełnym.

## Twierdzenie Orego
Podaje warunek wystarczający na posiadanie cyklu Hamiltona.

Mówi, że graf prosty ($n > 2$, przynajmniej $3$ wierzchołki) z "wystarczającą ilością krawędzi" musi posiadać cykl Hamiltona. Dokładnie, graf posiada cykl jeśli dla każdych dwóch niepołączonych krawędzią wierzchołków suma ich stopni jest większa lub równa liczbie wszystkich wierzchołków.

$$\deg(u)+\deg(v) \geqslant n$$
