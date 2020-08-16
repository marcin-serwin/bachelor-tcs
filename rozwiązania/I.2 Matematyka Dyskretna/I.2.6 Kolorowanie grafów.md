Kolorowanie grafów, twierdzenia Brooksa.

---

# Kolorowanie grafów

Intuicyjnie kolorowanie to **przypisanie wierzchołkom grafu kolorów** w taki sposób, by **każde dwa sąsiednie wierzchołki miały różne kolory**.

Formalnie kolorowanie grafu $G= (V, E)$ to funkcja $c: V \longrightarrow \mathbb{N}$ taka, że  $c(v) \neq c(w)$ ilekroć $vw$ jest krawędzią grafu $G$.

Graf **k-kolorowalny** to graf dający się pokolorować k kolorami.

**Liczba chromatyczna** grafu, $\chi(G)$, to najmniejsza liczba barw, którymi można pokolorować graf $G$.

**Optymalne kolorowanie** grafu $G$ to kolorowanie używające dokładnie $\chi(G)$ kolorów.

## Twierdzenie Brooksa
>  Niech $G$ będzie spójnym, nieskierowanym grafem prostym. Wtedy jeśli graf nie jest kliką ani cyklem nieparzystej długości, to $$\chi(G) \leqslant \Delta(G).$$
Jeżeli graf jest kliką lub cyklem o nieparzystej długości to $$\chi(G) = \Delta(G)+1.$$
