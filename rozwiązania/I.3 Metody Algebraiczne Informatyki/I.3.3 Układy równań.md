Opisz kilka metod rozwiązywania układów równań liniowych.

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

Jeżeli $r(W)\ne r(U)$, to sprzeczność.

### Eliminacja Gaussa-Jordana
Zamiast kończyć proces eliminacji gdy macierz znajdzie się w postaci schodkowej, można kontynuować wykonywanie operacji elementarnych tak długo, aż otrzymamy macierz, która na przekątnej ma same $0$ lub $1$.

### Wzory Cramera
Niech $x_1a_1+...+x_na_n=b$, gdzie $x=(x_1,...,x_n)$ oraz $b=(b_1,...,b_n)$. Jeśli $det(a_1,...,a_n)\ne 0$, to układ jest 
* oznaczony (ma tylko jedno rozwiązanie) $x_i=\frac{det(a_1,...a_{i-1},b,a_{i+1},...,a_n)}{det(a_1,...,a_n)}$

W przeciwnym przypadku, gdy $det(a_1,...,a_n)=0$, to układ jest
* sprzeczny, gdy choć jeden wyznacznik we wzorach Cramera zawierający $b$ jest różny od $0$,
* nieoznaczony (więcej niż jedno rozwiązanie lub sprzeczny), gdy wszystkie wyznaczniki we wzorach Cramera zawierające $b$ są równe $0$.
