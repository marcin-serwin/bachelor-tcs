Macierze diagonalne i diagonalizacja macierzy.

---

# Macierz diagonalna

Macierz kwadratowa $A = (a_{ij})$ stopnia $n$ nazywa się **diagonalną**, jeżeli

$$a_{ij} = 0 \text{ dla } i \neq j, \text{ gdzie } i,j = 1,2,...,n.$$

Często oznacza się ją symbolem $diag(d_1, d_2, ..., d_n)$, gdzie $d_i = a_{ii}$.

# Własności

Dla macierzy diagonalnych $A = diag(a_1,a_2, ..., a_n)$ i $B = diag(b_1,b_2,..., b_n)$ zachodzą działania

$$\begin{align}
A+B &= diag(a_1+b_1, a_2+b_2, ... a_n+b_n)\\
AB &= diag(a_1b_1, a_2b_2, ..., a_nb_n)\\
diag(d_1,d_2,...,d_n)^k &= diag(d_1^k, d_2^k,..., d_n^k)\\
diag(d_1,d_2,...,d_n)^{-1} &= diag(d_1^{-1}, d_2^{-1},..., d_n^{-1}) \text{ o ile wszystkie elementy odwracalne}
\end{align}$$

# Diagonalizacja

Diagonalizacja to rozkład macierzy kwadratowej $A \in M_k(K)$ na iloczyn macierzy
$P, \Delta, P^{-1} \in M_k(K)$:

$$A = P \Delta P^{-1},$$

gdzie $\Delta$ jest macierzą diagonalną. Macierz $P$ jest nazywana macierzą przejścia.

Macierz $A$ rozmiaru $n \times n$ jest diagonalizowalne, jeśli posiada $n$ liniowo niezależnych wektorów własnych.
 
Jeżeli macierz $A$ jest diagonizowalna, to istnieje rozkład (z definicji powyżej):

$${\displaystyle \Delta = P^{-1}AP = {\begin{pmatrix}\lambda _{1}\\&\lambda _{2}\\&&\ddots \\&&&\lambda _{n}\end{pmatrix}}.}$$

Mnożymy z lewej strony przez $P$ otrzymując:

$${\displaystyle AP=P{\begin{pmatrix}\lambda _{1}\\&\lambda _{2}\\&&\ddots \\&&&\lambda _{n}\end{pmatrix}}.}$$

Niech $\overrightarrow{v_i}$ będzie wektorem $i$-tej kolumny macierzy $P$. 
Rozpiszmy $P = [\overrightarrow{v_1}, \overrightarrow{v_2}, ..., \overrightarrow{v_n}]$.
Z równania powyżej, dla każdej kolumny $i = 1, 2, ..., n$ dostajemy:

$$\begin{align}
A \overrightarrow{v_i} &= [\overrightarrow{v_1}, \overrightarrow{v_2}, ..., \overrightarrow{v_n}] {\begin{bmatrix} 0\\ ...\\ 0\\ \lambda_i\\ 0\\ ...\\ 0 \end{bmatrix}}
= {\begin{bmatrix} 0\overrightarrow{v_1}\\ ...\\ \lambda_i \overrightarrow{v_i}\\ ...\\ 0\overrightarrow{v_n} \end{bmatrix}} = \lambda_i \overrightarrow{v_i}.
\end{align}$$

Mamy $A \overrightarrow{v_i} = \lambda_i\overrightarrow{v_i}$ dla $i=1,2,...,n$.

$\overrightarrow{v_i}$ to nic innego jak wektory
własne macierzy $A$. Odpowiadające im $\lambda_i$ to wartości własne macierzy $A$. Aby zdiagonalizować macierz $A$
należy więc znaleźć wartości własne i wektory własne macierzy $A$ (zobacz pytanie I.3.10), a następnie odwrócić $P$.

## Zastosowanie

Diagonalizacja ułatwia m. in. potęgowanie macierzy:

$$A^n = (P \Delta P^{-1})^n = P \Delta P^{-1} P \Delta P^{-1} ... P \Delta P^{-1} =
P \Delta^n P^{-1} = P diag(\lambda_1^n...\lambda_k^n) P^{-1}.$$

# Macierze Jordana
Nie każda macierz jest diagonalizowalna. Jednak każda macierz kwadratowa $A$ da się przedstawić w postaci Jordana, tzn. $A = PJP^{-1}$, gdzie macierz $P$ jest nieosobliwa a $J$ jest macierzą Jordana.

Żądamy, by macierz Jordana była w szczególnej postaci. Na diagonali ma klatki (zwane klatkami Jordana), czyli

$J={\begin{pmatrix}J_{1}&0&\cdots &0\\0&J_{2}&\cdots &0\\\vdots &\vdots &\ddots &\vdots \\0&0&0&J_{k}\\\end{pmatrix}}$.

Zaś każda klatka Jordana $J_i$ ma daną wartość własną na diagonali i liczbę 1 ponad nią:

$J_{i}={\begin{pmatrix}\lambda _{i}&1&0&0&\cdots &0\\0&\lambda _{i}&1&0&\cdots &0\\0&0&\lambda _{i}&1&\cdots &0\\\vdots &\vdots &\vdots &\vdots &\ddots &\vdots \\0&0&0&0&\lambda _{i}&1\\0&0&0&0&0&\lambda _{i}\\\end{pmatrix}}$

Każdej klatce Jordana odpowiada dokładnie jeden wektor własny, ale może istnieć kilka klatek Jordana o tej samej wartości własnej.
