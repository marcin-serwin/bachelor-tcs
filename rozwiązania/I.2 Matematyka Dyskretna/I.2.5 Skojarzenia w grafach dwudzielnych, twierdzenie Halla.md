Skojarzenia w grafach dwudzielnych. Twierdzenie Halla.

---
# Skojarzenia w grafach dwudzielnych

## Definicje
1. Skojarzenie w grafie $G$ to taki zbiór krawędzi $M \subseteq E$, w którym żadne dwie nie są incydentne z tym samym wierzchołkiem.
2. Skojarzenie maksymalne to skojarzenie o maksymalnej liczności.
Liczność maksymalnego skojarzenia w grafie $G$ oznaczamy przez $\nu(G)$.
3. Skojarzenie doskonałe to skojarzenie wykorzystujące wszystkie wierzchołki grafu.
4. W grafie dwudzielnym $G=(V_1 \cup V_2, E)$ Pełne skojarzenie $V_1$ z $V_2$ to skojarzenie, w którym każdy wierzchołek z $V_1$ jest skojarzony.

##  Twierdzenie Halla o skojarzeniach w grafach dwudzielnych (o małżeństwach)
> Niech $G = ( V_1\cup V_2, E )$ będzie grafem dwudzielnym. 
Zdefiniujmy funkcję $\Phi: \mathscr{P}( V_1) \longrightarrow \mathscr{P}(V_2)$ jako $\Phi(A) = \left\lbrace v_2\in V_2:\ v_1 v_2\in E \mbox{  i } v_1\in A \right\rbrace$. Innymi słowy, $\Phi\!\left(A\right)$ to zbiór tych wierzchołków z $V_2$, które sąsiadują z przynajmniej jednym wierzchołkiem w $A\subseteq V_1$.
W grafie $G$ istnieje pełne skojarzenie $\iff \forall_{A \subseteq V_1} |A| \leq |\Phi(A)|$.
Jeśli $|V_1| = |V_2|$ to takie skojarzenie jest doskonałe.
