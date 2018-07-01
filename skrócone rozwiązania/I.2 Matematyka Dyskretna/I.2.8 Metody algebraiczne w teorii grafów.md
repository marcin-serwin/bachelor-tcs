Metody algebraiczne w teorii grafów, permanent i skojarzenia w grafach.

---

# Metody algebraiczne w teorii grafów
## Macierz sąsiedztwa
To zero-jedynkowa macierz $\langle a_{ij} \rangle$, $A(G)$ rozmiaru $n \times n$ dla grafu prostego $G = (V, E)$, gdzie

$$
a_{ij} = \begin{cases}
1 &\text{jeżeli } v_iv_j \in E,\\
0 &\text{w przeciwnym wypadku}
\end{cases}
$$

Jeśli $A$ jest macierzą sąsiedztwa grafu skierowanego $G$, to macierz $A^n$ ($n$-ta potęga macierzy $A$) ma następującą interpretację: $a_{ij}$ oznacza liczbę ścieżek długości $n$ z wierzchołka $i$ do wierzchołka $j$.

Chcąc policzyć wszystkie ścieżki długości $\leq n$ z $v_i$ do $v_j$ wystarczy sprawdzić element $a_{ij}$ macierzy:

$$\sum_{i=1}^{n} A^i$$

## Macierz incydencji
Macierz incydencji grafu skierowanego $G = (V, K)$ o zbiorze wierzchołków $V = {v_1,...,v_n}$ i krawędzi $K = {k_1,..,k_m}$ nazywamy macierz $M = (m_{ij})$, gdzie $i=1,...,n$ oraz $j=1,...,m$ taką, że:

$$m_{ij} =
\begin{cases}
   1  &  \mathrm{jesli}\ v_i\ \mbox{jest poczatkiem krawedzi}\ k_j  \\
   -1  &  \mathrm{jesli}\ v_i\ \mathrm{jest}\ \mathrm{koncem\ krawedzi}\ k_j \\
   0  &  \mathrm{jesli}\ v_i\ \mathrm{i}\ k_j\ \mbox{nie sa incydentne}
\end{cases}$$

Przykładowo, dla grafu o krawędziach:

* $k_1\ =\ (1,2)$
* $k_2\ =\ (1,3)$
* $k_3\ =\ (3,2)$
* $k_4\ =\ (3,4)$
* $k_5\ =\ (4,3)$

macierz incydencji o kolumnach $e_i$ i wierszach $v_i$ wygląda tak:

$M=\left[ \begin{matrix}
1 & 1 & 0 & 0 & 0  \\
-1 & 0 & -1 & 0 & 0  \\
0 & -1 & 1 & 1 & -1  \\
0 & 0 & 0 & -1 & 1
\end{matrix}\right]$

W przypadku grafów nieskierowanych zamiast $-1$ są po prostu $1$.

# Permanent
Permanent macierzy kwadratowej $n \times n$:

$$A= \begin{pmatrix}a_{1,1}&a_{1,2}&\cdots&a_{1,n-1}&a_{1,n}\\
a_{2,1}&a_{2,2}&\cdots&a_{2,n-1}&a_{2,n}\\
\vdots&\vdots&\ddots&\vdots&\vdots\\
a_{n-1,1}&a_{n-1,2}&\cdots&a_{n-1,n-1}&a_{n-1,n}\\
a_{n,1}&a_{n,2}&\cdots&a_{n,n-1}&a_{n,n}\end{pmatrix}$$

jest zdefiniowany jako

$$\operatorname{perm}(A)=\sum_{\sigma\in \mathcal{S}_n}\prod_{i=1}^n a_{i,\sigma(i)}$$

Znak sumy dotyczy wszystkich elementów $\sigma$ grupy symetrycznej $\mathcal{S}_n$, tj. wszystkich permutacji zbioru liczb $\{\ 1,\ 2,\ \ldots,\ n\}$.

Definicja permanentu macierzy różni się od wzoru dla wyznacznika macierzy tym, że znak permutacji nie jest brany pod uwagę.

# Skojarzenie
Taki podzbiór krawędzi grafu, że żadne jego dwie krawędzie
nie są incydentne z tym samym wierzchołkiem. Skojarzenie doskonałe to skojarzenie pokrywające wszystkie wierzchołki grafu.

# Grafy dwudzielne a permanent
Graf dwudzielny $G = (V \cup U, E)$  ma skojarzenie doskonałe $\iff$ $A(G)$ ma niezerowy permanent.

Jeżeli ten graf ($|V| = |U| = n$) przedstawimy za pomocą macierzy sąsiedztwa, gdzie $a_{i,j} = 1$ jeśli istnieje krawędź między wierzchołkami $V_i$ i $U_j$ lub $a_{i,j} = 0$, gdy nie istnieje. Permament macierzy jest równy liczbie skojarzeń doskonałych grafu.

W sumie jest to mega oczywiste, bo w definicji permanentu jest po prostu napałowa suma po wszystkich możliwych permutacjach. A pojedyncza permutacja to nic innego jak skojarzenie (jakieś tam $v_i$ jest skojarzone z $v_j$). Więc... no...
