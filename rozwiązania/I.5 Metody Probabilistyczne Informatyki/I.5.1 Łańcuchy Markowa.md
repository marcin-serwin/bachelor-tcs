Łańcuchy Markowa na przykładzie analizy randomizowanego algorytmu dla
problemu 2-SAT.

---

# Proces stochastyczny
Zbiór zmiennych losowych $X=\{X_t: t\in T\}$ nazywamy procesem stochastycznym. Indeks $t$ często reprezentuje czas. $X_t$ nazywamy stanem $X$ w momencie $t$.

Jeżeli $X_t$ przyjmuje wartoście ze skończonego zbioru, to proces stochastyczny nazwamy skończonym.

Jeżeli $T$ jest przeliczalny i nieskończony, proces nazywamy procesem dyskretnym.

# Łańcuch Markowa
Dyskretny proces stochastyczny nazwyamy **łańcuchem Markowa**, gdy 
$$P(X_t=a|X_{t-1}=b,X_{t-2}=a_{t-2},...,X_0=a_0)=P(X_t=a|X_{t-1}=b)=p_{b,a}.$$

Roważać będziemy procesy o skończonej liczbie stanów.

$p_{i,j}=P(X_t=j|X_{t-1}=i)$ jest prawdopodobieństwem, że proces przejdzie ze stanu $i$ to stanu $j$ w jednym kroku.

## Macierz przejścia
$$P_{i,j}=P(X_t=j|X_{t-1}=i)$$

Otrzymujemy $p(t)=p(t-1)P$.

$P^m_{i,j}=P(X_{t+m}=j|X_t=i)$ oznacza prawdopodobieństwo, że proces przejdzie ze stanu $i$ to stanu $j$ w $m$ krokach.

## Graf skierowany
Łańcuch Markowa może być przedstawiony jako skierowany graf ważony $(V,E)$:
* $V$ - przestrzeń stanów.
* $E$ - przejścia pomiędzy stanami z wagą $p_{i,j}$ dla krawędzi $(i,j)$.

# 2-SAT
Dla ustalonej formuły boolowskiej $F$, w której każda klauzula składa się z $2$ literałów musimy stwierdzić czy jest spełnialna.

Niech $n=\#F$.
<br /> 0. 1-3 powtarzamy $c$ razy.
<br/> 1. Zaczynamy z dowolnym przypisaniem watościowań zmiennym.
<br /> 2. Powtarzamy $2n^2$ razy:
<br /> (a) wybieramy niespełnioną klauzulę,
<br /> (b) wybieramy losowo jeden literał z klauzuli i zmieniamy jego wartość.
<br /> 3. Jeżeli zneleźliśmy dobrze przypisanie wartości, zwracamy je.
<br /> 4. Jeżeli po $c$ przejściach nie znajdziemy wartościowanie, uznajemy, że $F$ nie jest spełnialny.

Algorytm zwraca zły wynik, gdy formuła jest spełnialna, ale algorytm nie znajdzie dobrzego przypisania.

Jakie jest prawdopodobieństwo sukcesu?

Załóżmy, że $F$ jest spełnialna. Zatem istnieje przypisanie wartości do $n$ zmiennych takie, że $F$ jest prawdziwe. Niech $A^*$ nim będzie. Niech $A_t$ oznacza przypisanie wartości zmiennym po $t$-tej iteracji. Niech $X_t$ oznacza liczbę zmiennych, którym jest przyporządkowana ta sama wartość w $A_t$ oraz $A^*$. Zatem gdy $X_t=n$, algorytm kończy z dobrym przypisaniem (może też skończyć wcześniej, jeżeli znajdzie przypisanie inne niż $A^*$ ale wciąż poprawne).

Przyjrzyjmy się temu, jak $X_t$ zmienia się i zastanówmy się ile iteracji zajmie mu osiągnięcie $n$.

Najpierw zauważmy, że
$$P(X_{t+1}=1|X_t=0)=1.$$
Jeżeli $X_t=j$, $1\leq j \leq n-1$, wybieżamy klauzulę fałszywą z przypisaniem $A_t$ i zmienimy wartość jednej zmiennej. Zatem $X_{t+1}\in \{ j-1,j+1\}$. Która opcja jest bardziej prawdopodobna?

$j+1$. Ponieważ $A^*$ sprawia, że ta klauzula jest prawdziwa, w tej klauzli musi być jedna lub dwie źle przypisane zmienne. Jeżeli zmienimy wartość losowo, to z prawdopodobieństwem przynajmniej $\frac{1}{2}$ $A_{t+1}$ będzie bardziej zgodne z $A^*$ nie $A_t$.

Zatem dla $1\leq j \leq n-1$ mamy
$$P(x_{t_1}=j+1|X_t=j)\geq \frac{1}{2}$$
$$P(x_{t_1}=j-1|X_t=j)\leq \frac{1}{2}$$

Zwróćmy uwagę, że proces $X_0,X_1,...$ niekoniecznie jest łańcuchem Markowa.
$P(X_{t+1}=j+1|X_t=j)$ nie jest stała (może to być $1$, może to być $\frac{1}{2}$), wartość ta zależy od tego, które $j$ zmiennych zgadze się z $A^*$, zatem zależy od historii jak otrzymaliśmy $A_t$.

Definiujemy więc łańcuch Markowa
* $Y_0=X_0$
* $P(Y_{t+1}=1|Y_t=0)=1$
* $P(Y_{t+1}=j+1|Y_t=j)=\frac{1}{2}$
* $P(Y_{t+1}=j-1|Y_t=j)=\frac{1}{2}$
W porównaniu z $X_0,X_1,...$, temu procesowi dłużej zajmuje osiągnięcie $n$. Zatem będziemy ograniczać czas potrzebny, aby $Y_0,Y_1,...$ osiągnął $n$.

Niech $h_j=E[\text{czas potrzebny } Y \text{ aby osiągnąć } n \text{ zaczynając od stanu } j]$.
Oczywiście $h_n=0$ oraz $h_0=h_1+1$. Mamy też 
$$h_j=\frac{1}{2}(h_{j-1}+1)+\frac{1}{2}(h_{j+1}+1)$$
Indukcją wykazujemy, że $h_j=n^2-j^2\leq n^2$.

Zatem mamy
$$E[\text{czas potrzebny } X \text{ aby osiągnąć } n \text{ zaczynając od stanu } X_0]\leq n^2.$$

Czyli zakładając, że $F$ jest spełnialna a algorytm będzie działał aż do znalezienia poprawnego wartościowania, oczekiwana liczba iteracji to $n^2$.

Ponieważ algorytm działa przez $2cn^2$ iteracji, możemy pokazać za pomocą nierówności Markowa, że problem 2-SAT zakończy się udzielając poprawnej odpowiedzi z prawdopodobieństwem $\geq 1-\frac{1}{2}^c$. Z nierówności Markowa otrzymujemy $P(X\geq 2n^2)\leq \frac{1}{2}$, zatem wykonując $c$ niezależnych przejść algorytmu otrzymujemy szacowanie.

# Nierówność Markowa
$$P(X\geq a) \leq \frac{E[X]}{a}$$
dla $a>0$.
