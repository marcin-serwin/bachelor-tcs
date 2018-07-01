Opisz kilka metod rozwiązywania układów równań liniowych.

---

# Rozwiązywanie układów równań

## Operacje elementarne
Przekształcanie układu w inny, który jest równoważny. Są trzy operacje na wierszach:

* dodanie do dowolnego równania innego równania pomnożonego przez liczbę,
* zamiana dwóch równań miejscami,
* pomnożenie równania przez liczbę różną od zera.

W macierzy jest analogicznie na wierszach lub kolumnach.

### Eliminacja Gaussa
Układ $m$ równań liniowych, $n$ niewiadomych. Robimy operacje na **wierszach** macierzy i sprowadzamy ją do **postaci schodkowej**. Następnie za pomocą **twierdzenia Kroneckera-Capelli'ego** sprawdzamy czy istnieje rozwiązanie. Jak tak, to zbiorem rozwiązań jest zbiór rozwiązań układu rozszerzonej macierzy schodkowej.

#### Twierdzenie Kroneckera-Capelli'ego
Dla układu $m$ równań liniowych o $n$ niewiadomych (w dowolnej relacji względem siebie)

$$\begin{cases} a_{11}x_{1}+a_{12}x_2+a_{13}x_3 + \ldots + a_{1n}x_n = b_1 \\
a_{21}x_{1}+a_{22}x_2+a_{23}x_3 + \ldots + a_{2n}x_n = b_2 \\
\ldots  \ldots\ldots  \ldots\ldots  \ldots\ldots  \ldots\ldots  \ldots\ldots  \ldots   \ldots \\
a_{m1}x_{1}+a_{m2}x_2+a_{m3}x_3 + \ldots + a_{mn}x_n = b_m\end{cases}$$

utwórzmy macierz $W$ **ze współczynników**:

$$W =  \begin{bmatrix} a_{11}&a_{12}&a_{13}&\ldots&a_{1n}\\a_{21}&a_{22}&a_{23}&\ldots&a_{2n}\\ \vdots & \vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&a_{m3}&\ldots&a_{mn}\end{bmatrix}$$

Dopisujemy wyrazy wolne układu i mamy **macierz uzupełnioną**:

$$U = \begin{bmatrix} a_{11}&a_{12}&a_{13}&\ldots&a_{1n} &b_1\\a_{21}&a_{22}&a_{23}&\ldots&a_{2n}&b_2\\ \vdots & \vdots&\vdots&\ddots&\vdots&\vdots\\a_{m1}&a_{m2}&a_{m3}&\ldots&a_{mn}&b_m\end{bmatrix}$$

**Rząd macierzy** $r(W)$ - maksymalna liczba liniowo niezależnych wektorów tworzących kolumny tej macierzy (jak wszystkie elementy macierzy wynoszą $0$ to $r(W) = 0$).

Twierdzenie mówi, że warunkiem koniecznym i wystarczającym rozwiązywalności układu równań liniowych jest:

$$r(W)=r(U)=r$$

Dwa przypadki:
1. $r = n  \Rightarrow$ **dokładnie jedno rozwiązanie**,
2. $r < n  \Rightarrow$ **nieskończenie wiele rozwiązań** zależnych od $n-r$ parametrów.

#### Przykład
Załóżmy, że chcemy rozwiązać następujący układ równań:

$$\begin{alignat}{7}
a &&\; - \;&& b &&\; + \;&& 2c &&\; + \;&& 2d &&\; = \;&& 0 & \qquad (L_1) \\
2a &&\; - \;&& 2b &&\; + \;&& c &&\; &&\; &&\; = \;&& 1 & \qquad (L_2) \\
-a &&\; + \;&& 2b &&\; + \;&& c  &&\; - \;&& 2d &&\; = \;&& 1 &  \qquad (L_3) \\
2a &&\; - \;&& b &&\; + \;&& 4c  &&\; \;&& &&\; = \;&& 2 &  \qquad (L_4) \\
\end{alignat}$$

Macierz rozszerzona tego układu:

$$U=\left[\left.\begin{matrix}
1 & -1 & 2 & 2 \\
2 & -2 & 1 & 0 \\
-1 & 2 & 1 & -2 \\
2 & -1 & 4 & 0
\end{matrix}\right|\begin{matrix}0\\1\\1\\2\end{matrix}\right]$$

##### 1. Postać schodkowa
Dla każdego z wierszy odejmujemy go z odpowiednim współczynnikiem od pozostałych.

###### 1.1
Wykonujemy **odjęcie wiersza** $L_1$ od pozostałych:

$$\begin{align}
& L_2 = L_2 - 2L_1 \\
& L_3 = L_3 + L_1 \\
& L_4 = L_4 - 2L_1 \\
\end{align}$$

otrzymując:

$$U \sim \left[\left.\begin{matrix}
1 & -1 & 2 & 2 \\
0 & 0 & -3 & -4 \\
0 & 1 & 3 & 0 \\
0 & 1 & 0 & -4
\end{matrix}\right|\begin{matrix}0\\1\\1\\2\end{matrix}\right]$$

###### 1.2
Następnie **zamieniamy miejscami wiersze** $L_2$ i $L_3$:

$$U \sim \left[\left.\begin{matrix}
1 & -1 & 2 & 2 \\
0 & 1 & 3 & 0 \\
0 & 0 & -3 & -4 \\
0 & 1 & 0 & -4
\end{matrix}\right|\begin{matrix}0\\1\\1\\2\end{matrix}\right]$$

###### 1.3
Odejmujemy wiersz $L_2$ (wykonując $L_4 = L_4 - L_2$):

$$U \sim \left[\left.\begin{matrix}
1 & -1 & 2 & 2 \\
0 & 1 & 3 & 0 \\
0 & 0 & -3 & -4 \\
0 & 0 & -3 & -4
\end{matrix}\right|\begin{matrix}0\\1\\1\\1\end{matrix}\right]$$

###### 1.4
Odejmujemy wiersz $L_3$ (wykonując $L_4 = L_4 - L_3$):

$$U \sim \left[\left.\begin{matrix}
1 & -1 & 2 & 2 \\
0 & 1 & 3 & 0 \\
0 & 0 & -3 & -4 \\
0 & 0 & 0 & 0
\end{matrix}\right|\begin{matrix}0\\1\\1\\0\end{matrix}\right]$$

##### 2. Istnienie rozwiązań
Jest już postać schodkowa. Rząd macierzy to $3$, czyli mniejszy od liczby niewiadomych. Z twierdzenia wynika, że układ ma nieskończenie wiele rozwiązań zależnych od jednego parametru.

##### 3. Rozwiązanie układu
Rozwiązujemy układ równań. Dla dowolnej wartości zmiennej $d$ (przyjmijmy $x$) mamy:

$$\begin{cases}
a - b + 2c + 2d = 0\\
b + 3c = 1\\
-3c - 4d = 1\\
d = x
\end{cases}$$

I podstawiamy od dołu.

### Eliminacja Gaussa-Jordana
Zamiast kończyć proces eliminacji gdy macierz znajdzie się w postaci schodkowej, można kontynuować wykonywanie operacji elementarnych tak długo, aż otrzymamy macierz, która na przekątnej ma same $0$ lub $1$.

#### Przykład
Załóżmy, że doprowadziliśmy macierz do następującej postaci schodkowej:

$$U \sim \left[\left.\begin{matrix}
2 & 1 & 0 \\
0 & \frac{1}{2} & 0 \\
0 & 0 & -1 \\
\end{matrix}\right|\begin{matrix}7\\\frac{3}{2}\\1\end{matrix}\right]$$

Niech $L_3 = -L_3$, a $L_2 = 2L_2$:

$$U \sim \left[\left.\begin{matrix}
2 & 1 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{matrix}\right|\begin{matrix}7\\3\\-1\end{matrix}\right]$$

Następnie $L_1 = L_1 - L_2$, a na końcu $L_1 = \frac{1}{2}L_1$:

$$U \sim \left[\left.\begin{matrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{matrix}\right|\begin{matrix}2\\3\\-1\end{matrix}\right]$$

W ten sposób doprowadziliśmy układ równań do następującej postaci:

$$\begin{cases}
a = 2\\
b = 3\\
c = -1\\
\end{cases}$$
