Macierze diagonalne i diagonalizacja macierzy.

---

# Macierz diagonalna

Macierz kwadratowa $A = (a_{ij})$ stopnia $n$ nazywa się **diagonalną**, jeżeli

$$a_{ij} = 0 \text{ dla } i \neq j, \text{ gdzie } i,j = 1,2,...,n.$$

Często oznacza się ją symbolem $diag(d_1, d_2, ..., d_n)$, gdzie $d_i = a_{ii}$.

# Diagonalizacja

Diagonalizacja to rozkład macierzy kwadratowej $A \in M_k(K)$ na iloczyn macierzy
$P, \Delta, P^{-1} \in M_k(K)$:

$$A = P \Delta P^{-1},$$

gdzie $\Delta$ jest macierzą diagonalną. Macierz $P$ jest nazywana macierzą przejścia.

Współczynniki na głównej przekątnej macierzy diagonalnej $\Delta$  są równe kolejnym wartościom własnym macierzy $A$, z kolei kolumny macierzy $P$ stanowią kolejne wektory własne macierzy $A$.

Macierze kwadratowe, które można przedstawić w postaci diagonalnej, nazywamy diagonalizowalnymi.
 
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
należy więc znaleźć wartości własne i wektory własne macierzy $A$, a następnie odwrócić $P$.
