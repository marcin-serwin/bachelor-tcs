Wartości własne macierzy.

---

# Wektory i wartości własne
Jeżeli w wyniku odwzorowania wektora $\mathbf v \in \mathbb{K}$ przez macierz $A \in M_{n \times n}(\mathbb{K})$ zostanie on jedynie przeskalowany - jak gdyby został przemnożony przez skalar:

$$A \mathbf v = \lambda \mathbf v$$

to mówimy, że:
* $\mathbf v$ jest wektorem własnym $A$,
* $\lambda$ jest wartością własną $A$.

Należy dodać, że wektor zerowy nas nie interesuje, gdyż taki zawsze by spełnił nasze równanie, więc nie było by w nim niczego szczególnego. Zatem chcemy $\mathbf{v} \neq 0$.

## Twierdzenie
Zachodzi:

$$\det (A-I\lambda) = 0$$

Ponieważ:

$$\begin{align}
A\mathbf{v} &= \lambda \mathbf{v} \\
A \mathbf{v}-\lambda \mathbf{v} &= 0 \\
(A-I\lambda)\mathbf{v} &= 0
\end{align}$$

Teraz zauważamy, że mamy dwie możliwości:

* $\det(A-I\lambda)\mathbf{v} = 0$
* $\det(A-I\lambda)\mathbf{v} \neq 0$

Druga opcja nie jest możliwa, ponieważ istniałaby macierz $(A-I\lambda)^{-1}$ (wyznacznik nie byłby zerowy). W takim razie możnaby:

$$\begin{align}
(A-I\lambda)\mathbf{v} &= 0 \\
(A-I\lambda)^{-1}(A-I\lambda)\mathbf{v} &= 0 \\
I\mathbf{v} &= 0 \\
\end{align}$$

Jednak jedyne rozwiązanie to gdy $\mathbf{v}=0$, a takich nie chcemy (założenie wyżej). Więc zostaje możliwość:

$$\det (A-I\lambda) = 0$$

## Własności
Mamy wartość własną $\lambda$ i wektor własny $\mathbf{v}$ macierzy $A$.

* Dla $k \geq 1$, $\lambda^k$ jest wartością własną macierzy $A^k$ oraz $\mathbf{v}$ jest jej wektorem własnym.

* Jeśli $A$ jest odwracalna to $\frac{1}{\lambda}$ jest wartością własną macierzy $A^{-1}$ oraz $\mathbf{v}$ jest jej wektorem własnym.

* Wektory własne odpowiadające różnym wartościom własnym są liniowo niezależne.
