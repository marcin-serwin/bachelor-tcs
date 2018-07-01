Zastosowania teorii liczb w kryptografii, twierdzenie Eulera, kryptosystem RSA.

---

# Zastosowania teorii liczb w kryptografii

Algorytmy kryptograficzne wykorzystujące klucz publiczny najczęściej opierają swoje działanie na złożoności obliczeniowej problemów "trudnych", często pochodzących z teorii liczb.

# Twierdzenie Eulera
**Funkcja Eulera $\phi(N)$**- ilość liczb względnie pierwszych z $N$, mniejszych niż $N$. Dla liczby pierwszej $P$ wartość funkcji $\phi$ wynosi $P - 1$. Łatwo wykazać, że dla liczb pierwszych $P$ i $Q$ zachodzi:

$$\phi(P \cdot Q) = (P - 1) \cdot (Q - 1)$$

**Twierdzenie Eulera** głosi, że jeśli $NWD(T,\ R) = 1$ i $T < R$ to:

$$T^{\phi(R)} = 1 \mod R$$

# RSA

Najpierw losujemy dwie duże liczby pierwsze o podobnym rozmiarze: $P$ i $Q$. Niech liczba $N$ będzie równa ich iloczynowi:

$$N = P \cdot Q$$

Wiemy, że zachodzi:

$$\phi(N) = (P - 1) \cdot (Q - 1)$$

Losujemy liczbę $e$ względnie pierwszą z $\phi(N)$. Udostępniamy liczbę $e$ jako nasz **klucz publiczny**.

> Zauważamy, że w zbiorze liczb $\{\ 1,\ \ldots,\ \phi(N) - 1\ \}$ takich kandydatów na liczbę $e$ jest dość sporo. Dlaczego? Jak wiesz to tu napisz dlaczego.

## Znajdowanie klucza prywatnego
Mamy dane $e$ i $\phi(N)$. Chcemy znaleźć odwrotność liczby $e \bmod \phi(N)$, czyli takie $d$, że zachodzi:

$$e \cdot d \equiv 1 \mod \phi(N)$$

Da się to oczywiście zrobić tylko jeśli $e$ jest względnie pierwsze z $\phi(N)$ - ale takie właśnie wybraliśmy $e$, więc nie ma problemu.

Liczbę $d$ znajdujemy używając rozszerzonego algorytmu Euklidesa. Dla przypomnienia, $rnwd(x,\ y)$ zwraca trójkę liczb - $nwd(x,\ y)$ i dodatkowo takie dwie liczby $a$ i $b$, że zachodzi

$$a \cdot x + b \cdot y = 1$$

Obliczamy zatem $rnwd(e,\ \phi(N))$. Czyli dostajemy takie dwie liczby $a$ i $b$, że:

$$a \cdot e + b \cdot \phi(N) = 1$$

Co to oznacza? Otrzymaliśmy takie liczby $a$ i $b$, że:

$$a \cdot e = 1 - b \cdot \phi(N)$$

Czyli, robiąc modulo po obu stronach:

$$a \cdot e \equiv 1 \mod \phi(N)$$

Zatem $a$ jest po prostu odwrotnością dla $e$ (w ciele $\mathbb{Z}_{\phi(N)}$). Zatem klucz prywatny $d$ jest równy $a$.

## Szyfrowanie
Niech $T$ (wiadomość do zaszyfrowania) będzie liczbą względnie pierwszą z $N$. Szyfrowanie odbywa się poprzez obliczenie $T^e$.

## Deszyfrowanie
Deszyfrowanie otrzymanej wiadomości $Q = T^e$ odbywa się poprzez obliczenie

$$Q^d = (T^e)^d = T^{ed} = T^{a \cdot \phi(n) + 1} = T$$

#### Obserwacja 1
Słowo komentarza dla ostatnich przejść. Przykładowo, zastanówmy się co oznaczałoby $16 \equiv 1 \bmod 5$. Znaczyłoby to tyle, że istnieje pewna stała $a$ (w tym przypadku równa $3$), dla której zachodzi $a \cdot 5 + 1 = 16$.

O iloczynie $e \cdot d$ wiemy, że spełnia równość:

$$e \cdot d \equiv 1 \mod \phi(N)$$

Zatem istnieje taka stała $a$, że zachodzi:

$$a \cdot \phi(N) + 1 = e \cdot d$$

#### Obserwacja 2
Twierdzenie Eulera mówi nam, że $T^{\phi(N)} \equiv 1 \bmod N$. Jeśli ta równość jest prawdziwa, to prawdziwa musi być również następująca:

$$T^{a \cdot \phi(N)} \equiv 1 \mod N$$

Przemnóżmy to równanie przez $T$. Otrzymamy:

$$T^{a \cdot \phi(N) + 1} \equiv T \mod N$$

Zatem obliczając $Q^d$ jesteśmy w stanie odszyfrować wiadomość, otrzymując $T$. Klucz prywatny $d$ musi być trzymany w tajemnicy.

## Jak złamać RSA?
Mamy dostepne $N$, klucz publiczny $e$, a także zaszyfrowaną wiadomość $Q = T^e$. Trzeba znaleźć klucz prywatny, który jest odwrotnością liczby $e \bmod \phi(N)$.

Nie znamy jednak $\phi(N)$ - żeby to zrobić, musielibyśmy rozłożyć $N$ na czynniki pierwsze. Zauważmy, że $N$ jest nie tylko duże - dodatkowo wybraliśmy takie dwa czynniki pierwsze $P$ i $Q$, że ich rozmiary są zbliżone. Taka konfiguracja powoduje, że faktoryzacja jest trudniejsza.

Bezpieczeństwo RSA opiera się na tym, że faktoryzacja $N$ jest zbyt długa obliczeniowo.
