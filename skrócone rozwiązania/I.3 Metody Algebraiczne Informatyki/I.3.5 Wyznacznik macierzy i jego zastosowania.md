Wyznacznik macierzy i jego zastosowania.

---

# Wyznacznik
Funkcja $\det : M_{n \times n} \rightarrow \mathbb{R}$. Wyznacznik to wielomian. I tak, jest definiowany tylko dla kwadratowej macierzy.

## Definicja permutacyjna

$$\det(A) = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma) \prod_{i=1}^n a_{i,\sigma_i}$$

Czyli napałowa suma po wszystkich możliwych permutacjach zbioru $n$-elementowego (suma $n!$ iloczynów). Funkcja $\operatorname{sgn}(\sigma)$ wynosi $1$ kiedy liczba inwersji jest parzysta lub $-1$ gdy jest nieparzysta.

## Definicja aksjomatyczna
Niech kolumny (lub wiersze) to $A_1, A_2, ..., A_n$. Wyznacznik to odwzorowanie liniowe, które spełnia:

* $\det(A_1, ..., \mathbf{k \cdot A_i + k' \cdot A_i'}, ..., A_n) = \mathbf{k} \cdot \det(A_1, ..., \mathbf{A_i}, ..., A_n) + \mathbf{k'} \cdot \det(A_1, ..., \mathbf{A_i'}, ..., A_n)$
* $\det(A_1, ..., \mathbf{A_i}, ..., \mathbf{A_j}, ..., A_n) = -\det(A_1, ..., \mathbf{A_j}, ..., \mathbf{A_i}, ..., A_n)$
* $\det(I) = 1$

## Własności
Dla operacji elementarnych:

1. **Zamiana wierszy** - wyznacznik zmienia znak
2. **Przemnożenie wiersza przez stałą** - wyznacznik zmienia się proporcjonalnie do stałej
3. **Dodanie wiersza przemnożonego przez stałą do innego wiersza** - wyznacznik się nie zmienia.

Typowe równości z wyznacznikiem:
* $\det(A^T) = \det(A)$
* $\det(A^{-1}) = \frac{1}{\det(A)}$
* $\det(AB) = \det(A)\det(B)$
* $\det(cA) = c^n\det(A)$

## Wyliczanie wyznacznika

### Metoda Gaussa
Najpierw robimy eliminację Gaussa, a potem dla macierzy trójkątnej wyznacznik jest równy $\prod_{i = 1}^na_{i,i}$.

### Macierz blokowa
Wyznacznik dla macierzy wynosi:

$$\det\begin{pmatrix}A& 0 \\ C& D \end{pmatrix} = \det(A) \cdot \det(D) =
\det\begin{pmatrix}A& B \\ 0& D \end{pmatrix}$$

### Wzór Laplace'a
$$\det(A) = \sum_{j = 1}^n (-1)^{i + j} \cdot a_{i,j} \cdot \det(A_{i,j})$$

* $i$ określa wiersz, względem którego robimy rozwinięcie.
* $a_{i,j}$ - element macierzy w $i$-tym wierszu i $j$-tej kolumnie macierzy $A$.
* $A_{i,j}$ - macierz powstała po skreśleniu $i$-tego wiersza i $j$-tej kolumny z macierzy $A$.

Fajnie się tym liczy jak jakaś kolumna (lub wiersz) ma dużo zerowych elementów (albo można ją łatwo sprowadzić do tej postaci).

## Interpretacja
Zobacz [wyznacznik jako objętość](I.3.13 Wyznacznik jako objętość.md).

## Zastosowania
* Obliczanie **objętości brył** (jak wyżej).
* Wyznacznik jest niezerowy $\Rightarrow$ **macierz ma odwrotność** (jest nieosobliwa).
* Wyznacznik wykorzystuje się przy **rozwiązywaniu układu równań liniowych** przy używaniu wzorów *Cramera*.
