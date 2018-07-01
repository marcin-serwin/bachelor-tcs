Ciągi i szeregi funkcyjne. Zbieżność punktowa i jednostajna ciągów i szeregów funkcyjnych.

---

# Ciąg funkcyjny
Ciąg $(f_n)$, którego wyrazami są funkcje $f_n\colon X \to Y$, dla $n \in \mathbb N$.

## Zbieżność
Dla ciągów funkcyjnych rozważa się zagadnienie zbieżności ciągu wartości tych funkcji.

W poniższych definicjach **granicą ciągu funkcyjnego** będzie funkcja $f\colon X \to Y$.

### Zbieżność punktowa

Ciąg funkcji $(f_n)$ jest **zbieżny punktowo** do funkcji $f$  jeżeli dla każdego argumentu istnieje granica $\displaystyle \lim_{n \to \infty} f_n(x) = f(x)$.

Formalnie warunek ten można zapisać wzorem:

$$\forall_{\varepsilon > 0}\; \forall_{x \in X}\; \exists_{n_0 \in \mathbb N}\; \forall_{n \geqslant n_0}\; |f(x) - f_n(x)| < \varepsilon$$

Należy zauważyć, że miejsce $n_0$, od którego wartości funkcji są dowolnie blisko $f(x)$, jest **potencjalnie różne** dla każdego z argumentów.

Funkcja $f$, do której ciąg funkcyjny jest zbieżny punktowo (oznaczane jako $f_{n} \rightarrow f$), nosi nazwę **granicy punktowej** tego ciągu.

### Zbieżność jednostajna
Ciąg funkcji $(f_n)$ jest **jednostajnie zbieżny** do funkcji $f$ jeżeli:

$$\forall_{\epsilon > 0}\; \exists_{n_0 \in \mathbb N}\; \forall_{x \in X}\; \forall_{n \geqslant n_0}\; |f(x) - f_n(x)| < \epsilon$$

W odróżnieniu od zbieżności punktowej, tutaj miejsce $n_0$, od którego wartości funkcji są dowolnie blisko $f(x)$, jest **takie samo** dla każdego z argumentów.

Funkcja $f$, do której ciąg funkcyjny jest zbieżny jednostajnie (oznaczane jako $f_{n} \rightrightarrows f$), nosi nazwę **granicy jednostajnej** tego ciągu.

### Intuicja
Różnica między tymi dwoma rodzajami zbieżności polega na tym, że dla ciągu funkcji $f_1, f_2, \ldots, f_n$ nie zawsze równanie

$$|f(x) - f_n(x)| < \epsilon$$

będzie spełnione dla wszystkich argumentów z dziedziny od tej samej funkcji $f_k$. W przypadku zbieżności punktowej to równanie może być dla jednego argumentu spełnione począwszy od jakiejś funkcji $f_i$, z kolei dla innego argumentu począwszy od jakiejś innej funkcji $f_j$. Jednak gdy dla wszystkich argumentów równanie jest spełnione od tej samej funkcji $f_k$, to mamy do czynienia ze zbieżnością jednostajną.

Stąd też wynika własność - **zbieżność jednostajna pociąga zbieżność punktową**.

# Szereg funkcyjny
Szereg funkcji o wspólnej dziedzinie i przeciwdziedzinie. Dla każdego punktu dziedziny suma szeregu wartości funkcji w tym punkcie (o ile istnieje) jest sumą zwykłego szeregu liczbowego

Podstawowym przykładem szeregu funkcyjnego jest tzw. szereg geometryczny, czyli szereg postaci

$$\sum_{n = 0}^\infty x^n = 1 + x + x^2 + x^3 + \dots$$

Jest on zbieżny dla każdego $-1< x < 1$ do sumy

$$\frac{1}{1 - x}$$

Jeżeli przyjąć $f_n(x) = x^n$ dla $x$ jak wyżej, to powyższy szereg można zapisać w postaci

$$\sum_{n = 0}^\infty f_n(x)$$

który jest już przykładem szeregu funkcyjnego.

## Zbieżność
W poniższych przypadkach granicę ciągu sum częściowych szeregu funkcyjnego nazywamy **sumą szeregu funkcyjnego**.

### Zbieżność punktowa
Szereg $\sum f_n(x)$ jest **zbieżny punktowo** w zbiorze $X$, gdy dla każdego $x_0 \in X$ zbieżny jest szereg $\sum f_n(x_0)$.

Innymi słowy wymaga się, by ciąg $(s_N)$ sum częściowych

$$s_N = f_1(x_0) + \dots + f_N(x_0)$$

był zbieżny punktowo. Określoną w ten sposób funkcję $f = \sum f_n$ nazywa się **sumą** szeregu funkcyjnego $\sum f_n$.

### Zbieżność jednostajna
Szereg $\sum f_n(x)$ jest **zbieżny jednostajnie**, gdy ciąg $(s_N)$ sum częściowych $s_N = f_1 + \dots + f_N$ jest zbieżny jednostajnie jako ciąg funkcyjny.
