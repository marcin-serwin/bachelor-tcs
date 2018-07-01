Metoda funkcji tworzących prawdopodobieństwa, przykład zastosowania do analizy złożoności średniej.

---

# Funkcja tworząca prawdopodobieństwa
Pokażemy jak dokonać analizy oczekiwanego czasu działania algorytmu (liczby wykonań wybranych instrukcji) za pomocą funkcji tworzących. Najpierw definicja. Dla przypomnienia: dla danego ciągu $(a_n)$ **funkcją tworzącą** $G(z)$ jest:

$$G(z) = \sum_{n=0}^{\infty} a_n \cdot z^n$$

W naszym przypadku, niech zmienna losowa $X_n$ zwraca liczbę kroków wykonanych przez algorytm dla danych rozmiaru $n$. Interesować nas będzie wartość oczekiwana $\mathbb{E}[X_n]$.

## Wartość oczekiwana
Oznaczmy przez $P_{n}^{k} = P(X_n = k)$ prawdopodobieństwo, że dla danych wejściowych rozmiaru $n$ program wykona dokładnie $k$ kroków.

Rozważmy ciąg prawdopodobieństw dla wszystkich $k$:

$$P_{n}^{0},\ P_{n}^{1},\ P_{n}^{2},\ \ldots$$

Funkcją tworzącą prawdopodobieństwa zmiennej losowej $X_n$ będzie:

$$G_n(z) = \sum_{k=0}^\infty P_{n}^{k} \cdot z^k$$

Oczywistym faktem jest, że wartość funkcji tworzącej w punkcie $1$ jest po prostu sumą wszystkich prawdopodobieństw, a więc $1$:
$$G_n(1) = \sum_{k=0}^\infty P_{n}^{k} = 1$$

Policzmy pochodną funkcji tworzącej:

$$G_n'(z) = \sum_{k=1}^\infty k \cdot P_{n}^{k} \cdot z^{k-1}$$

Zauważmy teraz czym jest wartość pochodnej w punkcie $1$:

$$G_n'(1) = \sum_{k=1}^\infty k \cdot P_{n}^{k} = \sum_{k=1}^\infty k \cdot P(X_n = k) = \mathbb{E}[X_n]$$

Znaleźliśmy zatem wzór na obliczanie oczekiwanej liczby kroków wykonanych przez program dla danych rozmiaru $n$ - wystarczy znaleźć wartość pierwszej pochodnej w punkcie $1$.

## Przykład - problem wyboru sekretarki
Dla danej losowej permutacji $A$ rozmiaru $n$ znajdź maksymalne $A[k_{max}]$. Zakładamy, że rozkład prawdopodobieństwa jest jednostajny, tj. szansa na wylosowanie każdej z permutacji wynosi $\frac{1}{n!}$.

Problem ten ma dwa warianty. W **wersji online** sprawdzamy $k$ pierwszych sekretarek, a następnie wybieramy pierwszą lepszą niż te wszystkie $k$ kandydatek (jeśli nie ma takiej, to po prostu ostatnią). Natomiast w **wersji offline** widzimy wszystkie kandydatki wcześniej, więc zawsze wybierzemy najlepszą. Rozważmy drugi wariant problemu:

````
k_max = 1
for k = 2 to n
  if A[k] > A[k_max]         // rozmowa z kandydatką
    k_max = k                // (*) - zmiana kandydatki

return A[k_max]
````

### Ile razy wykona się operacja $(\ast)$?
Niech liczba wykonań operacji $(\ast)$ dla danych rozmiaru $n$ będzie reprezentowana przez zmienną losową $X_n$. Będziemy chcieli oszacować (policzyć wartość oczekiwaną) ile razy zmienimy sekretarkę.

#### Obliczenie $P_{n}^{k}$
Wszystkich permutacji mamy $n!$. W zależności od tego jaka permutacja zostanie wylosowana, liczba kroków $k$ może być różna. Zdarzą się jednak sytuacje, że dla różnych permutacji ta liczba będzie taka sama. Oznaczmy przez $C_{n}^{k}$ liczbę permutacji, dla których wykona się dokładnie $k$ kroków.

Niech $a_1, ..., a_n$ będzie permutacją wejściową. Rozważmy sytuację, w której algorytm dotarł już do $n$-tej pozycji. Są dwie możliwości co do wybrania ostatniej, $k$-tej sekretarki:  może albo zostać wybrana teraz ostatnia kandydatka jako najlepsza ($1$ możliwość) albo mogła już wcześniej zostać wybrana i na $n$-tej pozycji jest $n-1$ "nienajlepszych" kandydatek. Więc mamy:

$$C_{n}^{k} = C_{n-1}^{k-1} \cdot 1 + C_{n-1}^{k} \cdot (n-1)$$

Oznaczmy przez $P_{n}^{k} = P(X_n = k)$ prawdopodobieństwo, że dla danych wejściowych rozmiaru $n$ program wykona dokładnie $k$ kroków. Zauważmy, że $P_{n}^{k} = \frac{C_{n}^{k}}{n!}$. Zatem, po podstawieniu pod $C_{n}^{k}$:

$$n! \cdot P_{n}^{k} = (n-1)! \cdot P_{n-1}^{k-1} + (n-1)! \cdot P_{n-1}^{k} \cdot (n-1)$$

Upraszczając:

$$P_{n,k} = \frac{1}{n} \cdot P_{n-1}^{k-1} + \frac{n-1}{n} \cdot P_{n-1}^{k}$$

#### Podstawienie do funkcji tworzącej
Wróćmy teraz do naszego wzoru na funkcję tworzącą. Podstawmy obliczone właśnie $P_{n}^{k}$ i dokonajmy serii przekształceń:

$$\begin{align}
G_n(z) &= \sum_{k=0}^\infty P_{n}^{k} \cdot z^k\\
&= \sum_{k=0}^\infty \bigg(\frac{1}{n} \cdot P_{n-1}^{k-1} + \frac{n-1}{n} \cdot P_{n-1}^{k} \bigg) \cdot z^k\\
&= \Bigg( \frac{z}{n} \sum_{k=0}^\infty P_{n-1}^{k-1} \cdot z^{k-1} \Bigg) + \Bigg( \frac{n-1}{n} \sum_{k=0}^\infty P_{n-1}^{k} \cdot z^k \Bigg) \\
&= \Bigg( \frac{z}{n} \sum_{k=0}^\infty P_{n-1}^{k} \cdot z^{k} \Bigg) + \Bigg( \frac{n-1}{n} \sum_{k=0}^\infty P_{n-1}^{k} \cdot z^k \Bigg) \\
&= \frac{z + n - 1}{n} \cdot G_{n-1}(z)
\end{align}$$

Otrzymaliśmy już skróconą wersję wzoru. Naszym celem jest policzenie wartości oczekiwanej, więc musimy obliczyć pochodną i sprawdzić wartość w punkcie $1$.

$$\begin{align}
G_n(z) &= \frac{z + n - 1}{n} \cdot G_{n-1}(z) \\
G_n'(z) &= \frac{1}{n} \cdot G_{n-1}(z) + \frac{z + n - 1}{n} \cdot G_{n-1}'(z) \\
G_n'(1) &= \frac{1}{n} \cdot 1 + 1 \cdot G_{n-1}'(1) \\
&= \frac{1}{n} + \frac{1}{n-1} + \cdots + \frac{1}{2} \\
&= H_n - 1
\end{align}$$

Zatem oczekiwana liczba kroków $k$ dla danych rozmiaru $n$ wynosi

$$\mathbb{E}[X_n] = G_n'(1) = H_n - 1 \approx \ln n -1$$
