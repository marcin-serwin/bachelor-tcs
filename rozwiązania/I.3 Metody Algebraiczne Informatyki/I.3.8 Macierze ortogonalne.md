Macierze ortogonalne.

---

# Przestrzeń unitarna
Przestrzeń wektorowa, w której da się wykonać iloczyn skalarny na wektorach.

# Ortogonalność
Uogólnienie pojęcia prostopadłości znanego z geometrii euklidesowej na abstrakcyjne przestrzenie z określonym iloczynem skalarnym.

Dwa wektory $u$ i $v$ są ortogonalne wtw. gdy ich iloczyn skalarny jest równy $0$.

# Ortonormalność
Ortogonalność wraz z dodatkowym warunkiem, że wektory ortogonalne muszą mieć długość $1$.

Wektory $x, y$ przestrzeni unitarnej $X$ z iloczynem skalarnym $\langle \cdot, \cdot\rangle$ są *ortonormalne*, jeżeli

$$\langle x, y\rangle = \begin{cases} 0, & x \ne y \\ 1, & x = y \end{cases}$$

Zbiór wektorów parami ortonormalnych $\{v_i\}_{i=1}^n$ nazywa się **układem ortonormalnym**.

# Macierz ortogonalna
Macierz kwadratowa $A \in M_n(\mathbb{R})$ o elementach będących liczbami rzeczywistymi spełniająca równość:

$$A^T A = A A^T = I_n$$

gdzie $I_n\,$ oznacza macierz jednostkową wymiaru $n\,$,  $A^T\,$ oznacza macierz transponowaną względem $A\,$.

## Własności
* Wyznacznik macierzy ortogonalnej jest równy $1$ lub $-1$.
* Jeśli $A,B$ są macierzami ortogonalnymi tego samego rzędu, to ich iloczyn $AB$ też jest macierzą ortogonalną.
* Macierz odwrotna do macierzy $A$ jest jej macierzą transponowaną, tj. $A^{-1}=A^T$. Macierz ta też jest ortogonalna.
* Macierz jednostkowa jest ortogonalna.
* Z własności zbioru macierzy ortogonalnych stopnia $n$ wynika, że zbiór ten tworzy **grupę z mnożeniem macierzy** jako działaniem grupowym. Grupę tę nazywa się grupą ortogonalną stopnia $n$ i oznacza się symbolem $O(n)$ lub $O(n,\mathbb{R})$.
* **Kolumny** macierzy $A$, traktowane jako wektory przestrzeni $\mathbb{R}^n$, **tworzą układ ortonormalny**.
* **Wiersze** macierzy $A$, traktowane jako wektory przestrzeni $\mathbb{R}^n$, **tworzą układ ortonormalny**.


## Przykłady
Poniżej podano przykłady macierzy ortogonalnych. Łatwo można to sprawdzić, wykonując obliczenia iloczynów skalarnych kolumn (traktowanych jako wektory), że są one wzajemnie ortogonalne; to samo dotyczy wierszy.

* Macierze jednostkowe, np.
$$\begin{bmatrix}
1 & 0\\
0 & 1\\
\end{bmatrix}$$

* Dwuwymiarowe macierze antysymetryczne, np.
$$\begin{bmatrix}
0.96 & -0.28\\ 0.28 & 0.96\\
\end{bmatrix}$$

* Macierze obrotu, np.
$$\begin{bmatrix}
\cos x & -\sin x\\
\sin x & \cos x\\
\end{bmatrix}$$

* Macierze permutacji, np.
$$\begin{bmatrix}
1 & 0 & 0& 0 & 0 \\ 0 & 0 &  0& 0 & 1\\0 & 1 &  0& 0 & 0\\0 & 0 &  0& 1 & 0\\0 & 0 &  1& 0 & 0\\
\end{bmatrix}$$
