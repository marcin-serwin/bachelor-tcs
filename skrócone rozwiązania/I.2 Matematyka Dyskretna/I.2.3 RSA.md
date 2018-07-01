Zastosowania teorii liczb w kryptografii, twierdzenie Eulera, kryptosystem RSA.

---

# Kryptografia
Opiera się na złożoności obliczeniowej problemów trudnych, które często pochodzą właśnie z teorii liczb.

## Funkcja Eulera
$\phi(N)$ - ilość liczb względnie pierwszych z $N$, mniejszych niż $N$. Dla dwóch liczb pierwszych:

$$\phi(P \cdot Q) = (P - 1) \cdot (Q - 1)$$

## Twierdzenie Eulera
Jeśli $T$ i $R$ są względnie pierwsze, a w dodatku $T < R$, to:

$$T^{\phi(R)} \equiv 1 \mod R$$

# RSA

Najpierw losujemy dwie duże liczby pierwsze o podobnym rozmiarze: $P$ i $Q$. Niech liczba $N$ będzie równa ich iloczynowi:

$$N = P \cdot Q$$

Wiemy, że zachodzi:

$$\phi(N) = (P - 1) \cdot (Q - 1)$$

Losujemy liczbę $e$ względnie pierwszą z $\phi(N)$. To będzie **klucz publiczny**.

## Znajdowanie klucza prywatnego
Jesteśmy w ciele $\mathbb{Z}_{\phi(N)}$ i chcemy znaleźć odwrotność liczby $e$:

$$e \cdot d \equiv 1 \mod \phi(N)$$

$d$ znajdziemy używając rozszerzonego algorytmu Euklidesa. Czyli przy okazji liczenia $nwd(e,\ \phi(N))$ znajdziemy nim jeszcze takie dwie liczby $a$ i $b$, że zachodzi

$$\begin{align}
a \cdot e + b \cdot \phi(N) &= 1 \\
a \cdot e &= 1 - b \cdot \phi(N) \\
a \cdot e &\equiv 1 \mod \phi(N)
\end{align}$$

Czyli $d$ = $a$.

## Szyfrowanie
$T$ to wiadomość do zaszyfrowania - liczba względnie pierwsza z $N$. Szyfrujemy licząc $T^e$.

## Deszyfrowanie
Przychodzi wiadomość $Q = T^e$. Liczymy:

$$Q^d = (T^e)^d = T^{ed} = T^{a \cdot \phi(n) + 1} = T$$

#### Obserwacja 1
$16 \equiv 1 \bmod 5$ znaczy tyle, że dla pewnej stałej $a$ (tu $3$) zachodzi $a \cdot 5 + 1 = 16$.

O $e \cdot d$ wiemy, że spełnia:

$$e \cdot d \equiv 1 \mod \phi(N)$$

Więc istnieje taka stała $a$, że zachodzi:

$$a \cdot \phi(N) + 1 = e \cdot d$$

#### Obserwacja 2
Z twierdzenia Eulera $T^{\phi(N)} \equiv 1 \mod N$. Skoro to jest jedynką w tym ciele, to po podniesieniu do jakiejś potęgi dalej będzie:

$$\begin{align}
T^{a \cdot \phi(N)} &\equiv 1 \mod N \\
T^{a \cdot \phi(N) + 1} &\equiv T \mod 
\end{align}$$

## Jak złamać RSA?
Mamy dostepne $N$, klucz publiczny $e$, a także zaszyfrowaną wiadomość $Q = T^e$. Trzeba znaleźć klucz prywatny, który jest odwrotnością liczby $e \bmod \phi(N)$.

Nie znamy jednak $\phi(N)$ - żeby to zrobić, musielibyśmy rozłożyć $N$ na czynniki pierwsze. Zauważmy, że $N$ jest nie tylko duże - dodatkowo wybraliśmy takie dwa czynniki pierwsze $P$ i $Q$, że ich rozmiary są zbliżone. Taka konfiguracja powoduje, że faktoryzacja jest trudniejsza.

Bezpieczeństwo RSA opiera się na tym, że faktoryzacja $N$ jest zbyt długa obliczeniowo.
