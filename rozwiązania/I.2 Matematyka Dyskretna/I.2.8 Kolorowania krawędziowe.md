Kolorowania krawędziowe grafów. Twierdzenie Vizinga.

---

# Kolorowanie krawędziowe

Niech $S(v)$ oznacza zbiór kolorów krawędzi incydentnych z wierzchołkiem $v$.

Prawidłowe pokolorowanie krawędzi (legalne, właściwe) to takie przyporządkowanie krawędziom kolorów, gdzie żadne dwie sąsiednie krawędzie nie są pokolorowane tak samo. (Krawędzie są sąsiednie jeśli mają wspólny jeden z końców). Czyli kolorowanie krawędzi nazywamy właściwym, jeżeli $c(e)\neq c(f)$ dla każdych dwóch sąsiednich krawędzi, w przeciwnym przypadku kolorowanie nazywamy niewłaściwym.

## Indeks chromatyczny
Indeks chromatyczny grafu $G$, oznaczany przez $\chi '(G)$, to najmniejsza liczba $k$ taka, że
istnieje poprawne kolorowanie krawędzi (dwie krawędzie o wspólnym końcu muszą mieć
różne kolory) grafu $G$ używające $k$ kolorów.

## Twierdzenie Vizinga
>  Dla każdego nieskierowanego grafu prostego $G$ $$\Delta(G) \leqslant \chi'(G) \leqslant \Delta(G)+1.$$
