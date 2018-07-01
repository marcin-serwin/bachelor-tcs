Zaawansowane problemy haszowania: rodziny funkcji haszujących, haszowanie doskonałe.

---

# Haszowanie
W zwykłej tablicy indeksem elementu o kluczu $k$ jest $k$. W tablicy haszującej natomiast jest to $h(k)$. Funkcja ta odwzorowuje zbiór kluczy $U$ w zbiór indeksów $M = \{ 0, \ldots, m - 1 \}$.

Zmniejszenie rozmiaru tablicy z $|U|$ do $m$ może robić różnicę. Ceną jest możliwość kolizji - $h(a) = h(b)$.

## Metoda łańcuchowa
Komórka $i$-ta tablicy trzyma wskaźnik do listy z elementami, dla których $h$ zwraca $i$.

## Rodziny funkcji haszujących
Haszowanie uniwersalne polega na losowym wybraniu parametrów funkcji haszującej na początku (żeby uniknąć podatności na złośliwy dobór kluczy).

Niech $\mathcal{H}$ będzie rodziną funkcji haszujących $h: U \rightarrow M$. Jest **uniwersalna** jeśli prawdopodobieństwo kolizji losowo wybranej funkcji dla dwóch dowolnych (różnych) kluczy wynosi co najwyżej $\frac{1}{m}$. Jest ono zatem nie większe niż prawdopodobieństwo kolizji gdyby $h(k)$ i $h(l)$ były wybierane losowo i niezależne ze zbioru $M$.

### Fundamentalne twierdzenie
Jeśli używamy haszowania łańcuchowego z funkcją haszującą $h$ wybraną losowo z uniwersalnej rodziny funkcji haszujących, to oczekiwane czasy wszystkich operacji słownikowych są stałe.

### Przykłady

#### Haszowanie tabulacyjne
Traktujemy klucze z $U$ jako liczby w zapisie binarnym ($cr$ bitów), gdzie składowa wektora ma rozmiar $r$. Typowo $32$ lub $64$ bity, a składowe są bajtami.

Funkcja haszująca z tej rodziny korzysta z tablic $T_1, T_2, \dots, T_c$ - każda rozmiaru $2^r$ - wypełnionych losowymi indeksami z $M$. Funkcja rozbija wektor na ciąg składowych i:

$$h(x) = T_0[x_0]\ \oplus\ T_1[x_1]\ \oplus\ \cdots\ \oplus\ T_c[x_c]$$

Wyjść może dowolna $r$-bitowa liczba, więc $|M| = 2^r$.

#### Rodzina funkcji liniowych
$$h(x) = ((ax + b) \bmod p) \bmod m$$

* $p$ - jakaś liczba pierwsza większa od $|U|$
* $a \in \{1, \dots,p-1\}$,
* $b \in \{0, \dots, p-1\}\}$,
* $m$ - rozmiar tablicy haszującej.

Mniejsze znaczenie w zastosowaniu, bo chociać czas jest stały w sensie asymptotycznym, to mnożenie i obliczanie reszty z dzielenia jest kosztowne. Można to optymalizować wybierając odpowiednie parametry, ale haszowanie tabulacyjne jest w praktyce istotnie szybsze.

#### Rodzina wielomianów
Uogólnienie poprzedniej rodziny.

  $$\mathcal{H}^m = \{ x \mapsto \left((a_0 + a_1 x + \dots + a_{k-1}x^{k-1})\bmod p \right) \bmod m \}$$

* $a_i \in \{0, \dots, p-1\}$

$\mathcal{H}^m$ zawiera funkcje stałe (gdy współczynniki zerują). Stałe są złe. Ale mało prawdopodobne. Taka definicja pozwala jednak uprościć rozumowania.

## Haszowanie doskonałe
W przypadku, gdy haszujemy raz i potem tylko czytamy, możemy sobie zoptymalizować. Haszowanie jest doskonałe jeśli wyszukiwanie wymaga **stałej liczby odwołań** do tablicy.

Stosujemy dwupoziomowe haszowanie uniwersalne. Pierwszy poziom to coś jak łańcuchowe, ale wskaźnik $i$-ty jest na dodatkową tablicę $S_i $z kolejnym haszowaniem $h_i$. Rozmiar każdej takiej tablicy jest kwadratem liczby kluczy, dla których funkcja pierwszego poziomu daje $i$. Dzięki temu nie mamy kolizji, zgodnie z twierdzeniem:

> Jeśli $n$ kluczy trzymamy w tablicy haszującej rozmiaru $n^2$, to przy korzystaniu z funkcji uniwersalnej prawdopodobieństwo wystąpienia jakiejkolwiek kolizji jest mniejsze od $\frac{1}{2}$.

Więc losujemy kilka razy tą drugę funkcję $h_i$ i prawdopodobieństwo kolizji szybko maleje.

Mogłoby się wydawać, że taka kwadratowa zależność spowoduje duży narzut pamięci, ale udowodniono, że prawdopodobieństwo, że suma rozmiarów wszystkich tablic drugiego poziomu jest większa niż $4n$ (gdzie $n$ to rozmiar pierwszej tablicy) jest mniejsze niż $\frac{1}{2}$. Czyli też możemy powtórzyć proces kilka razy aż uzyskamy satysfakcjonujący rozmiar.

Brak kolizji gwarantuje stałe czasy operacji co czyni haszowanie doskonałym.
