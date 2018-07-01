Kolorowanie grafów, twierdzenia Brooksa i Vizinga.

---

# Kolorowanie grafów
Przypisanie wierzchołkom kolorów w taki sposób, żeby każde dwa sąsiednie wierzchołki miały różne kolory. Formalnie kolorowanie to funkcja $c: V \longrightarrow \mathbb{N}$ taka, że  $c(v) \neq c(w)$ jeśli $v$ i $w$ są połączone krawędzią.

## $\chi(G)$ i $\chi'(G)$
* Graf jest **k-kolorowalny** jeśli da się go pokolorować $k$ kolorami.

* **Liczba chromatyczna** $\chi(G)$ - najmniejsza działająca liczba kolorów.

* **Optymalne kolorowanie** - kolorowanie używające dokładnie $\chi(G)$ kolorów.

* **Indeks chromatyczny** $\chi'(G)$ - najmniejsza działająca liczba do pokolorowania krawędzi (aby żadne dwie krawędzie mające wspólny wierzchołek nie miały tego samego koloru).

## Rozbicie i antyklika
Kolorowanie grafu $G$ na $k$ kolorów wyznacza rozbicie zbioru $V$ na sumę rozłączną $V = V_1\cup \ldots \cup V_k$ jednobarwnych zbiorów $V_i$, przy czym każdy podgraf indukowany takim zbiorem jest antykliką. I na odwrót, takie rozbicie pozwala na pokolorowanie grafu $k$ kolorami.

## Twierdzenie Brooksa
Mamy graf $G$ spójny i nieskierowany. Są dwa przypadki ($\Delta$ to maksymalny stopień wierzchołka w $G$).

1. Jeśli graf jest kliką lub cyklem o nieparzystej długości to jego liczba chromatyczna wynosi:

$$\chi(G) = \Delta(G)+1$$

2. W przeciwnym razie:

$$\chi(G) \leqslant \Delta(G)$$

## Twierdzenie Vizinga
Indeks chromatyczny $\chi'(G)$ grafu nieskierowanego przyjmuje jedną z dwóch wartości: $\Delta(G)$ albo $\Delta(G) + 1$.
