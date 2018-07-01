Ciągi i szeregi funkcyjne. Zbieżność punktowa i jednostajna ciągów i szeregów funkcyjnych.

---

# Ciąg funkcyjny
Ciąg $(f_n)$, którego wyrazami są funkcje $f_n\colon X \to Y$, dla $n \in \mathbb N$. Granicą ciągu funkcyjnego $f\colon X \to Y$.

* Zbieżność punktowa $f_{n} \rightarrow f$
$$\forall_{\varepsilon > 0}\; \forall_{x \in X}\; \exists_{n_0 \in \mathbb N}\; \forall_{n \geqslant n_0}\; |f(x) - f_n(x)| < \varepsilon$$

* Zbieżność jednostajna $f_{n} \rightrightarrows f$
$$\forall_{\epsilon > 0}\; \exists_{n_0 \in \mathbb N}\; \forall_{x \in X}\; \forall_{n \geqslant n_0}\; |f(x) - f_n(x)| < \epsilon$$

# Szereg funkcyjny
Szereg funkcji, wszystkie $f_n\colon X \to Y$. Dla każdego punktu dziedziny suma szeregu wartości funkcji w tym punkcie (o ile istnieje) jest sumą zwykłego szeregu liczbowego.

Na przykład, jeśli przyjąć $f_n(x) = x^n$, to przykładem będzie szereg geometryczny:

$$\sum_{n = 0}^\infty f_n(x) = \sum_{n = 0}^\infty x^n = 1 + x + x^2 + x^3 + \dots$$

## Zbieżność punktowa
Granica sum częściowych to jego suma. Szereg jest zbieżny punktowo w zbiorze $X$ gdy dla każdego $x_0$ zbieżny jest szereg $\sum f_n(x_0)$. Czyli ciąg $(s_N)$ sum częściowych

$$s_N = f_1(x_0) + \dots + f_N(x_0)$$

ma być zbieżny punktowo. Taka funkcja $f = \sum f_n$ nazywa się **sumą** szeregu funkcyjnego.

## Zbieżność jednostajna
Gdy ciąg $(s_N)$ sum częściowych $s_N = f_1 + \dots + f_N$ jest zbieżny jednostajnie jako ciąg funkcyjny.
