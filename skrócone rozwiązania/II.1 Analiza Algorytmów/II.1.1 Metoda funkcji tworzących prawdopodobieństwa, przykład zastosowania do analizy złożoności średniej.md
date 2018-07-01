Metoda funkcji tworzących prawdopodobieństwa, przykład zastosowania do analizy złożoności średniej.

---

# Funkcja tworząca prawdopodobieństwa
Oczekiwana ilość wykonania określonych instrukcji. Użyjemy funkcji tworzących:

$$G(z) = \sum_{n=0}^{\infty} a_n \cdot z^n$$

Niech zmienna losowa $X_n$ zwraca liczbę kroków wykonanych przez algorytm dla danych rozmiaru $n$. Policzymy $\mathbb{E}[X_n]$.

## Wartość oczekiwana
Niech $P_{n}^{k} = P(X_n = k)$ to prawdopodobieństwo, że dla danych wejściowych rozmiaru $n$ program wykona dokładnie $k$ kroków. Dla ciągu $P_{n}^{0},\ P_{n}^{1},\ P_{n}^{2},...$ funkcją tworzącą prawdopodobieństwa zmiennej losowej $X_n$ będzie:

$$G_n(z) = \sum_{k=0}^\infty P_{n}^{k} \cdot z^k$$

Oczywiście jak podstawimy $1$ to dostaniemy sumę prawdopodobieństw:

$$G_n(1) = \sum_{k=0}^\infty P_{n}^{k} = 1$$

Policzmy pochodną funkcji tworzącej:

$$G_n'(z) = \sum_{k=1}^\infty k \cdot P_{n}^{k} \cdot z^{k-1}$$

Zauważmy teraz czym jest wartość pochodnej w punkcie $1$:

$$G_n'(1) = \sum_{k=1}^\infty k \cdot P_{n}^{k} = \sum_{k=1}^\infty k \cdot P(X_n = k) = \mathbb{E}[X_n]$$

Znaleźliśmy zatem wzór na obliczanie oczekiwanej liczby kroków wykonanych przez program dla danych rozmiaru $n$ - wystarczy znaleźć wartość pierwszej pochodnej w punkcie $1$.

## Przykład - problem wyboru sekretarki
Mamy permutację rozmiaru $n$ i szukamy największej wartości. Zakładamy rozkład prawdopodobieństwa jednostajny - szansa na wylosowanie każdej z permutacji wynosi $\frac{1}{n!}$.

* **Wersja online** - zobacz $k$ pierwszych sekretarek, a potem wybierz pierwszą lepszą (albo ostatnią).
* **Wersja offline** (nasza):

````
k_max = 1
for k = 2 to n
  if A[k] > A[k_max]         // rozmowa z kandydatką
    k_max = k                // (*) - zmiana kandydatki

return A[k_max]
````

### Ile razy wykona się operacja $(\ast)$?
Niech liczba zmian sekretarki $(\ast)$ będzie zwracana przez $X_n$. Policzymy wartość oczekiwaną tej liczby.

#### Znalezienie wzoru na $P_{n}^{k}$
Oznaczmy przez $C_{n}^{k}$ liczbę permutacji, dla których wykona się dokładnie $k$ kroków. Ustalmy wzór zauważając, że $k$-ta sekretarka na ostatniej pozycji może albo być najlepszą ($1$ możliwość) albo nienajlepszą ($n-1$):

$$C_{n}^{k} = C_{n-1}^{k-1} \cdot 1 + C_{n-1}^{k} \cdot (n-1)$$

Zauważmy, że $P_{n}^{k} = \frac{C_{n}^{k}}{n!}$. Zatem, po podstawieniu pod $C_{n}^{k}$:

$$n! \cdot P_{n}^{k} = (n-1)! \cdot P_{n-1}^{k-1} + (n-1)! \cdot P_{n-1}^{k} \cdot (n-1)$$

Upraszczając:

$$P_{n,k} = \frac{1}{n} \cdot P_{n-1}^{k-1} + \frac{n-1}{n} \cdot P_{n-1}^{k}$$

#### Podstawienie do funkcji tworzącej
$$\begin{align}
G_n(z) &= \sum_{k=0}^\infty P_{n}^{k} \cdot z^k\\
&= \sum_{k=0}^\infty \bigg(\frac{1}{n} \cdot P_{n-1}^{k-1} + \frac{n-1}{n} \cdot P_{n-1}^{k} \bigg) \cdot z^k\\
&= \Bigg( \frac{z}{n} \sum_{k=0}^\infty P_{n-1}^{k-1} \cdot z^{k-1} \Bigg) + \Bigg( \frac{n-1}{n} \sum_{k=0}^\infty P_{n-1}^{k} \cdot z^k \Bigg) \\
&= \Bigg( \frac{z}{n} \sum_{k=0}^\infty P_{n-1}^{k} \cdot z^{k} \Bigg) + \Bigg( \frac{n-1}{n} \sum_{k=0}^\infty P_{n-1}^{k} \cdot z^k \Bigg) \\
&= \frac{z + n - 1}{n} \cdot G_{n-1}(z)
\end{align}$$

Aby dostać wartość oczekiwaną liczymy pochodną i sprawdzamy wartość dla $1$:

$$\begin{align}
G_n(z) &= \frac{z + n - 1}{n} \cdot G_{n-1}(z) \\
G_n'(z) &= \frac{1}{n} \cdot G_{n-1}(z) + \frac{z + n - 1}{n} \cdot G_{n-1}'(z) \\
G_n'(1) &= \frac{1}{n} \cdot 1 + 1 \cdot G_{n-1}'(1) \\
&= \frac{1}{n} + \frac{1}{n-1} + \cdots + \frac{1}{2} \\
&= H_n - 1
\end{align}$$

Zatem oczekiwana liczba kroków $k$ dla danych rozmiaru $n$ wynosi

$$\mathbb{E}[X_n] = G_n'(1) = H_n - 1 \approx \ln n -1$$
