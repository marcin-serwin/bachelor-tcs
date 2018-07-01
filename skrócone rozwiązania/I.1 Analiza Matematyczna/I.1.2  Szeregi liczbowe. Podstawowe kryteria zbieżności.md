Szeregi liczbowe. Podstawowe kryteria zbieżności.

---

# Szeregi
Szereg to ciąg $(s_N)$ sum częściowych. Czyli takie niby pary $\bigl((a_n), (s_N)\bigr)$. Dla nieskończonego ciągu $(a_n)$ jego $N$-ta suma częściowa to:

$$s_N = \sum_{n=0}^N a_n =a_0 + a_1 + a_2 + \dots + a_N$$

Suma szeregu to $$S = \lim_{N \rightarrow \infty }s_N$$

## Zbieżność i rozbieżność
Jak istnieje suma szeregu (czyli ciąg $(s_N)$ sum częściowych jest zbieżny do czegoś) to jest zbieżny. Czyli:

$$\sum_{n = 0}^\infty a_n = \lim_{N \to \infty} s_N = \lim_{N \to \infty} \sum_{n = 0}^N a_n$$

Jak ciąg $(s_N)$ jest rozbieżny do $\displaystyle\pm\infty$ to szereg jest rozbieżny. Można zapisać, że jego suma to $\displaystyle\pm\infty$.

## Zbieżność względna i bezwzględna
Bezwzględnie gdy zbieżny jest $\sum |a_n|$. Względnie gdy $\sum a_n < \infty$, ale $\sum |a_n| = \infty$.

## Szereg a suma
Można sobie przestawiać elementy tylko w bezwzględnie zbieżnych.

## Kryteria zbieżności

### Warunek konieczny zbieżności
Na początku to sprawdzamy. Jak szereg jest zbieżny, to $\displaystyle\lim\limits_{n\rightarrow \infty} a_n=0$. Czyli jak wyraz ogólny nie zbiega do $0$, to jest rozbieżny.

### Warunek Cauchy’ego zbieżności
Szereg jest zbieżny wtw, gdy:

$$\forall_{\varepsilon > 0}\; \exists_{n_0 \in N}\; \forall_{n\geqslant n_0}\; \forall_{k\in N} \left \vert \sum_{i=n}^{n+k} a_i \right \vert < \varepsilon$$

Czyli od pewnego miejsca $n_0$ suma dowolnej ilości kolejnych $k$ wyrazów ciągu $(a_n)$ jest dowolnie mała.

### Zbieżność bezwzględna
Jeśli jest bezwzględnie zbieżny, to jest zbieżny.

### Kryterium porównawcze
Jak wyrazy są nieujemne, to jeśli $a_n\leq b_n$ dla prawie każdego $n\in\mathbb{N}$:

* $\sum b_n$ jest zbieżny $\Rightarrow$ $\sum a_n$ jest zbieżny.
* $\sum a_n$ jest rozbieżny $\Rightarrow$ $\sum b_n$ jest rozbieżny.

### Kryterium d'Alemberta
Jak są wyrazy dodatnie to badamy $\displaystyle \lim_{n \to \infty} \frac{a_{n+1}}{a_n}$. Jak $> 1$ to rozbieżny. Jak $< 1$ to zbieżny. Dla $1$ nie wiadomo.

### Kryterium Cauchy'ego
Jak granica $\sqrt[n]{|a_n|}$ istnieje i jest mniejsza od $1$, to szereg $\sum a_n$ jest zbieżny. Większa - rozbieżny. Równa - nie wiadomo.

### Kryterium ilorazowe
Dwa szeregi wyrazy nieujemne. Badamy $\displaystyle \lim_{n \to \infty} \frac{a_n}{b_n}$.

1. Jak wychodzi dodatnia skończona to gdy jeden zbieżny, drugi też. Albo jak rozbieżny, to drugi też.
2. Jak $0$ i $\sum b_n$ jest zbieżny $\Rightarrow \sum a_n$ jest zbieżny.
3. Jak $\infty$ i $\sum b_n$ jest rozbieżny $\Rightarrow \sum a_n$ jest rozbieżny.

### Kryterium Leibniza
Jak ciąg $(a_{n})$ zbiega do zera i jest malejący, to zbieżny jest:

$$\sum (-1)^{n}a_{n}$$

### Kryterium Abela
Jeżeli szereg $\sum a_n$ jest zbieżny, a ciąg $(b_n)$ jest monotoniczny i ograniczony, to szereg $\sum a_nb_n$ jest zbieżny.
