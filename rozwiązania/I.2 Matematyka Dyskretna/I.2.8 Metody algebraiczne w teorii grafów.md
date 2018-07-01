Metody algebraiczne w teorii grafów, permanent i skojarzenia w grafach.

---

# Podstawowe definicje

**Macierz sąsiedztwa $A(G)$** grafu prostego $G = ({v_1, ..., v_n}, E)$ to
zero-jedynkowa macierz $\langle a_{ij} \rangle$ rozmiaru $n \times n$, gdzie

$$
a_{ij} = \begin{cases}
1 &\text{jeżeli } v_iv_j \in E,\\
0 &\text{w przeciwnym wypadku}
\end{cases}
$$

**Permanent grafu $G$** to permanent macierzy $A(G)$ czyli

$$per A(G) = \sum_\sigma a_{1,\sigma(1)} a_{2,\sigma(2)}  ...  a_{n,\sigma(n)}$$

gdzie suma $\sum_\sigma$ rozciąga się po wszystkich permutacjach $\sigma$, zaś $a_{i,j}$ oznacza element macierzy $A(G)$.

**Skojarzenie** w grafie $G = (V, E)$ to taki podzbiór $M \subseteq E$, że żadne jego dwie krawędzie
nie są incydentne z tym samym wierzchołkiem.

**Skojarzenie doskonałe** to skojarzenie pokrywające wszystkie wierzchołki grafu.

# Skojarzenie w grafach dwudzielnych a permanent
**Twierdzenie:** Prosty graf dwudzielny $G = (V_1 \cup V_2, E)$  ma skojarzenie doskonałe wtedy i
tylko wtedy, gdy $G$ ma niezerowy permanent.

# Metody algebraiczne w teorii grafów
  * **Ilość skierowanych marszrut o długości $k$** z $v_i$ do $v_j$ dana jest elementem macierzy $a_{i, j}$ macierzy: $A(G)^k$
  * **Ilość skierowanych marszrut**. Liczba skierowanych marszrut o długości $\leq n-1$ z $v_i$ do $v_j$ dana jest elementem macierzy $a_{i, j}$ macierzy: 
  $\langle a_{ij} \rangle = A(G)^1 + A(G)^2 + ... + A(G)^{n-1}$. Ilość wszystkich marszrut (o dowolnej długości) może być nieograniczona.
  * Reprezentowanie grafów za pomocą macierzy sąsiedztwa, incydencji (macierz $n \times m$, odpowiadająca sąsiedztwu wierzchołka i krawędzi), macierz stopni wierzchołków. 
