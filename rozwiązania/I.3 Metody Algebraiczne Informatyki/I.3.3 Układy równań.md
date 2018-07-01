Opisz kilka metod rozwiązywania układów równań liniowych.

---

# Rozwiązywanie układów równań

## Operacje elementarne
Podstawową metodą rozwiązywania układów równań jest przekształcanie danego układu w inny, który ma ten sam zbiór rozwiązań – układy takie nazywa się **równoważnymi**. Można wyróżnić trzy operacje elementarne na wierszach przekształcające dany układ w układ do niego równoważny:

* dodanie do równania innego równania pomnożonego przez liczbę,
* zamiana dwóch równań miejscami,
* pomnożenie równania przez liczbę różną od zera.

Powyższym trzem operacjom elementarnym na układzie równań liniowych odpowiadają w zapisie macierzowym operacje elementarne na wierszach macierzy:

* dodanie do dowolnego wiersza innego wiersza pomnożonego przez liczbę,
* zamiana miejscami dwóch wierszy,
* pomnożenie dowolnego wiersza przez liczbę różną od zera.

Analogicznie definiuje się operacje elementarne na kolumnach.

Powszechnie stosowanymi metodami rozwiązywania układów równań liniowych za pomocą wspomnianych operacji elementarnych są metoda eliminacji Gaussa i Gaussa-Jordana.

### Eliminacja Gaussa
Rozwiązując układ $m$ równań liniowych z $n$ niewiadomymi należy, za pomocą operacji elementarnych **wyłącznie na wierszach**, sprowadzić macierz rozszerzoną układu równań liniowych do **postaci schodkowej**. Następnie należy rozstrzygnąć istnienie rozwiązań układu z pomocą **twierdzenia Kroneckera-Capelli'ego**. Jeżeli układ nie jest sprzeczny, to zbiór rozwiązań układu wyjściowego jest równy zbiorowi rozwiązań układu reprezentowanego przez powstałą schodkową macierz rozszerzoną.

#### Twierdzenie Kroneckera-Capelli'ego
Dla układu $m$ równań liniowych (jednorodnych albo niejednorodnych) o $n$ niewiadomych ($m < n  \vee m=n  \vee m > n$)

$$\begin{cases} a_{11}x_{1}+a_{12}x_2+a_{13}x_3 + \ldots + a_{1n}x_n = b_1 \\
a_{21}x_{1}+a_{22}x_2+a_{23}x_3 + \ldots + a_{2n}x_n = b_2 \\
\ldots  \ldots\ldots  \ldots\ldots  \ldots\ldots  \ldots\ldots  \ldots\ldots  \ldots   \ldots \\
a_{m1}x_{1}+a_{m2}x_2+a_{m3}x_3 + \ldots + a_{mn}x_n = b_m\end{cases}$$

utwórzmy macierz $W$ ze współczynników $a_{11}, a_{12}, \ldots, a_{1n}, \ldots, a_{mn}$:

$$W =  \begin{bmatrix} a_{11}&a_{12}&a_{13}&\ldots&a_{1n}\\a_{21}&a_{22}&a_{23}&\ldots&a_{2n}\\ \vdots & \vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&a_{m3}&\ldots&a_{mn}\end{bmatrix}$$

Przez $r(W)$ oznaczamy rząd macierzy $W$ - maksymalna liczba liniowo niezależnych wektorów tworzących kolumny danej macierzy (jeśli wszystkie elementy macierzy wynoszą $0$ to $r(W) = 0$).

Dopisując do macierzy $W$ kolumnę wyrazów wolnych układu, otrzymujemy macierz uzupełnioną $U$:

$$U = \begin{bmatrix} a_{11}&a_{12}&a_{13}&\ldots&a_{1n} &b_1\\a_{21}&a_{22}&a_{23}&\ldots&a_{2n}&b_2\\ \vdots & \vdots&\vdots&\ddots&\vdots&\vdots\\a_{m1}&a_{m2}&a_{m3}&\ldots&a_{mn}&b_m\end{bmatrix}$$

Twierdzenie Kroneckera-Caleppi'ego mówi: wkw rozwiązalności układu równań liniowych jest równość rzędu macierzy $W$ współczynników układu i rzędu macierzy uzupełnionej $U$

$$r(W)=r(U)=r$$

Gdy:
1. $r = n  \Rightarrow$ układ ma **dokładnie jedno rozwiązanie**,
2. $r < n  \Rightarrow$ układ ma **nieskończenie wiele rozwiązań** zależnych od $n-r$ parametrów.

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
Nasza macierz znajduje się już w postaci schodkowej. Można zauważyć, że rząd macierzy jest równy $3$, czyli mniejszy od liczby szukanych niewiadomych. Z twierdzenia Kroneckera-Capelli'ego wynika, że układ ma nieskończenie wiele rozwiązań zależnych od jednego parametru.

##### 3. Rozwiązanie układu
Rozwiązujemy układ równań. Dla dowolnej wartości zmiennej $d$ (przyjmijmy $x$) mamy:

$$\begin{cases}
a - b + 2c + 2d = 0\\
b + 3c = 1\\
-3c - 4d = 1\\
d = x
\end{cases}$$

Rozwiązanie tego układu pozostawiamy czytelnikowi (podstawiamy wartości od dołu).

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

Następnie $L_1 = L1 - L_2$, a na końcu $L_1 = \frac{1}{2}L_1$:

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
