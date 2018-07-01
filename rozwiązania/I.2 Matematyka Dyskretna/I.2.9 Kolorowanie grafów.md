Kolorowanie grafów, twierdzenia Brooksa i Vizinga.

---

# Kolorowanie grafów

Intuicyjnie kolorowanie to **przypisanie wierzchołkom grafu kolorów** w taki sposób, by **każde dwa sąsiednie wierzchołki miały różne kolory**.

Formalnie kolorowanie grafu $G= (V, E)$ to funkcja $c: V \longrightarrow \mathbb{N}$ taka, że  $c(v) \neq c(w)$ ilekroć $vw$ jest krawędzią grafu $G$.

Kolorowanie grafu $G$ na $k$ kolorów wyznacza rozbicie zbioru $V$ na sumę rozłączną $V = V_0\cup V_1\cup \ldots \cup V_{k-1}$ jednobarwnych zbiorów $V_i$, przy czym każdy graf indukowany postaci  $G|_{V_i}$ jest antykliką. Na odwrót, rozbicie $V = V_0\cup V_1\cup \ldots \cup V_{k-1}$ pozwala na pokolorowanie grafu $G$ na $k$ kolorów.

Graf **k-kolorowalny** to graf dający się pokolorować k kolorami.

**Liczba chromatyczna** grafu, $\chi(G)$, to najmniejsza liczba barw, którymi można pokolorować graf $G$.

**Optymalne kolorowanie** grafu $G$ to kolorowanie używające dokładnie $\chi(G)$ kolorów.

**Indeks chromatyczny grafu** $\chi'(G)$ jest pojęciem związanym z **kolorowaniem krawędzi** grafu. Określa **minimalną liczbę kolorów wystarczającą do prawidłowego pokolorowania krawędzi grafu**. Innymi słowy, to **najmniejsza ilość kolorów potrzebnych do pomalowania krawędzi tak, aby żadne dwie krawędzie mające wspólny wierzchołek nie były tego samego koloru**.

## Twierdzenie Brooksa
>  Niech $G$ będzie spójnym, nieskierowanym grafem prostym. Wtedy jeśli graf nie jest kliką ani cyklem nieparzystej długości, to liczba chromatyczna grafu $G$ jest nie większa niż maksymalny stopień wierzchołka w $G$ - $\chi(G) \leqslant \Delta(G)$ .
Jeżeli graf jest kliką lub cyklem o nieparzystej długości to jego liczba chromatyczna $\chi(G) = \Delta(G)+1$.

## Twierdzenie Vizinga
>  Każdy nieskierowany graf prosty $G$ można pokolorować krawędziowo używając liczby kolorów równej maksymalnemu stopniowi wierzchołka $\Delta$, lub maksymalnemu stopniowi wierzchołka powiększonemu o jeden $\Delta+ 1$. Innymi słowy $\Delta(G) \leqslant \chi'(G) \leqslant \Delta(G)+1$.
