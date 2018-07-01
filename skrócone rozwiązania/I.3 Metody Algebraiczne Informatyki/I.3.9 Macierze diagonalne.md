Macierze diagonalne i diagonalizacja macierzy.

---

# Macierz diagonalna
Macierz (zwykle kwadratowa), która wszędzie poza przekątną ma zera. Na przekątnej może być cokolwiek.

Parę przykładów:

$\begin{bmatrix}
1 & 0 & 0\\
0 & 4 & 0\\
0 & 0 & -2\\
\end{bmatrix}$ lub $\begin{bmatrix}
1 & 0 & 0\\
0 & 4 & 0\\
0 & 0 & -3\\
0 & 0 & 0\\
\end{bmatrix}$ lub $\begin{bmatrix}
1 & 0 & 0 & 0 & 0\\
0 & 4 & 0& 0 & 0\\
0 & 0 & -3& 0 & 0\end{bmatrix}$

Często oznacza się ją po prostu jako

$$\operatorname{diag}(d_1, \ldots, d_n)$$

## Własności
$$\begin{align}
\mathbf{A}+\mathbf{B} &= \operatorname{diag}(a_1+b_1, ..., a_n+b_n)\\
\mathbf{AB} &= \operatorname{diag}(a_1b_1, ..., a_nb_n)\\
\mathbf{A}^k &= \operatorname{diag}(a_1^k,..., a_n^k)\\
\mathbf{A}^{-1} &= \operatorname{diag}(a_1^{-1}, ..., a_n^{-1})
\end{align}$$

Ostatnia własność zachodzi o ile wszystkie elementy są odwracalne.

# Diagonalizacja

## Rozkład
Rozkład macierzy kwadratowej na iloczyn macierzy:

$$A = P \Delta P^{-1},$$

gdzie $\Delta$ to diagonalna, a $P$ to macierz przejścia. Taki rozkład istnieje jeśli macierz posiada $n$ liniowo niezależnych wektorów własnych.

## Proces
Jeżeli macierz $A$ jest diagonalizowalna, to istnieje taki rozkład:

$$P^{-1}AP = \Delta = {{\begin{bmatrix} \lambda_{1} \\&\lambda_{2}\\&&\ddots \\&&&\lambda_{n}\end{bmatrix}}}$$

Przemnóżmy obie strony z lewej strony przez $P$:

$$AP = P{{\begin{bmatrix} \lambda_{1} \\&\lambda_{2}\\&&\ddots \\&&&\lambda_{n}\end{bmatrix}}}$$

Oznaczmy sobie teraz przez $v_i$ wektor $i$-tej kolumny macierzy $P$. Czyli $P = [v_1, \ldots, v_n]$. Zobaczmy teraz co zachodzi dla każdego z tych wektorów $v_i$:

$$Av_i = [v_1, \ldots, v_n]{\begin{bmatrix} 0\\ ...\\ \lambda_i\\ ...\\ 0 \end{bmatrix}} = {\begin{bmatrix} 0v_1\\ ...\\ \lambda_i v_i\\ ...\\ 0v_n \end{bmatrix}} = \lambda_i v_i$$

Czyli dla wszystkich kolumn $v_i$ zachodzi:

$$Av_i = \lambda_iv_i$$

A to nic innego jak wektory własne macierzy $A$. Odpowiadające im $\lambda_i$ to z kolei wartości własne. Zatem, aby zdiagonalizować macierz $A$ to należy znaleźć wartości własne i wektory własne tej macierzy, a następnie odwrócić $P$.

## Zastosowanie
Po co to? Można szybko potęgować macierz.

$$\begin{align}
A^k &= (P \Delta P^{-1})^k \\
&= (P \Delta P^{-1}) \cdot (P \Delta P^{-1}) \cdots (P \Delta P^{-1}) \\
&= P \Delta (P^{-1}P) \cdot \Delta (P^{-1}P) \cdots (P^{-1}P) \Delta P^{-1} \\
&= P \Delta^k P^{-1} \\
\end{align}$$

A podnoszenie macierzy diagonalnej do $k$-tej potęgi jest tanie, bo to po prostu potęgowanie wyrazów na przekątnej.

# Postać Jordana
Prawie przekątniowa postać:

$$J={\begin{bmatrix}J_{1}&0&\cdots &0\\0&J_{2}&\cdots &0\\\vdots &\vdots &\ddots &\vdots \\0&0&0&J_{k}\\\end{bmatrix}}$$

Na przekątnej ma klatki (zwane klatkami Jordana), gdzie każda klatka Jordana ma daną wartość własną na przekątnej i liczbę $1$ ponad nią:

$$J_{i}={\begin{bmatrix}\lambda_{i}&1&0&0&\cdots &0\\0&\lambda_{i}&1&0&\cdots &0\\0&0&\lambda_{i}&1&\cdots &0\\\vdots &\vdots &\vdots &\vdots &\ddots &\vdots \\0&0&0&0&\lambda_{i}&1\\0&0&0&0&0&\lambda_{i}\\\end{bmatrix}}$$


Nie każda macierz jest diagonalizowalna, ale każda ma postać Jordana (tak mówi twierdzenie Jordana). Czyli każda macierz $A$ ma postać:

$$A = PJP^{-1},$$

gdzie $P$ to pewna macierz nieosobliwa, której niektórymi kolumnami są wektory własne macierzy $A$.

Analogicznie jak poprzednio, taką macierz klatkową $J$ też można szybko potęgować (bo jest po prostu diagonalna), więc znów dostaniemy, że:

$$A^k = PJ^kP^{-1}$$
