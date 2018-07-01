Macierze ortogonalne.

---

# Ortogonalność
Uogólnione pojęcie prostopadłości znanego z geometrii euklidesowej na przestrzenie wektorowe z określonym iloczynem skalarnym (tzw. **przestrzenie unitarne**).

Wektory $\mathbf{u}$ i $\mathbf{v}$ są ortogonalne $\iff$ $\mathbf{u} \cdot \mathbf{v} = 0$.

# Ortonormalność
Ortogonalność plus wektory ortogonalne mają długość $1$. Zbiór wektorów parami ortonormalnych $\{\mathbf{v_i}\}_{i=1}^n$ nazywa się **układem ortonormalnym**.

# Macierz ortogonalna
Macierz kwadratowa $A \in M_n(\mathbb{R})$, dla której:

$$A^T A = A A^T = I_n$$

## Własności
* **Wyznacznik** ma równy $1$ lub $-1$.
* $A^{-1}=A^T$. **Macierz odwrotna** też jest ortogonalna.
* **Macierz jednostkowa** jest ortogonalna.
* Kolumny (wiersze), traktowane jako wektory przestrzeni $\mathbb{R}^n$, tworzą **układ ortonormalny**.

## Przykłady
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
