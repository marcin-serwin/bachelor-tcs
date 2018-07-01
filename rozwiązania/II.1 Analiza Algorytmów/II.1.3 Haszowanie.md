Zaawansowane problemy haszowania: rodziny funkcji haszujących, haszowanie doskonałe.

---

# Haszowanie

W tablicy z adresowaniem bezpośrednim element o kluczu $k$ zostaje umieszczony na pozycji o indeksie $k$.

W tablicy z haszowanem element ten trafia na pozycję $h(k)$ - do obliczenia pozycji dla klucza $k$ używa się __funkcji haszującej__ $h$. Ta funkcja odwzorowuje zbiór kluczy $U$ w zbiór pozycji tablicy z haszowaniem $\{ 1, \ldots, m \}$.

Funkcje haszujące wprowadza się, aby zmniejszyć liczbę potrzebnych pozycji w tablicy z $|U|$ do $m$, co może znacznie ograniczyć wymagania pamięciowe. Ceną, jaką płacimy za te ogromne oszczędności pamięci, jest możliwość kolizji, tj. sytuacji, w której funkcja haszująca przypisuje dwu różnym kluczom tę samą pozycję w tablicy. Istnieje kilka metod radzenia sobie z kolizjami.  

## Metoda łańcuchowa
W tej metodzie na pozycji $j$ w tablicy jest pamiętany wskaźnik do początku listy tych wszystkich elementów dla których funkcja $h$ daje wartość $j$.

## Haszowanie uniwersalne, rodziny funkcji haszujących
*Haszowanie uniwersalne* polega na losowym wybraniu parametrów funkcji haszującej w fazie inicjalizacji tablicy haszującej, w celu wyeliminowania podatności na złośliwe dobieranie kluczy (np. wybieranie wyłącznie kluczy przechodzących na jeden hash, których jest zwykle na tyle by atak się udał).  

Niech $\mathcal{H}$ będzie skończoną rodzina funkcji haszujących, które odwzorowują dane uniwersum kluczy $U$ w zbiór $\{0, 1, \dots, m-1\}$. Taką rodzinę będziemy nazwywać __uniwersalną__, jeśli dla każdej pary różnych kluczy $k,l \in U$ liczba funkcji haszujących $h \in \mathcal{H}$, dla których $h(k) = h(l)$, wynosi co najwyżej $|\mathcal{H}|/m$. Innymi słowy, jeśli losowo wybierzemy funkcję haszującą $h$ z rodziny $\mathcal{H}$, to prawdopodobieństwo kolizji między $k$ a $l$ (jeżeli $k \neq l$) wynosi co najwyżej $1/m$. Jest ono zatem nie większe niż prawdopodobieństwo kolizji, gdyby $h(k)$ i $h(l)$ były wybierane losowo i niezależne ze zbioru $\{0, 1, \dots, m-1\}$.  

Termin ten jest szczególnie ważny ze względu na następujące, fundamentalne twierdzenie.

>Jeśli używamy haszowania łańcuchowego z funkcją haszującą $h$ wybraną losowo z uniwersalnej rodziny funkcji haszujących, to oczekiwane czasy wszystkich operacji słownikowych są stałe.

### Przykłady rodzin uniwersalnych

#### Haszowanie tabulacyjne
Pomysł na haszowanie tabulacyjne opiera się na tym, aby traktować klucze z przestrzeni $U$ jako wektory $c$ składowych, z których każda jest $r$-bitowa. Zatem wszystkie liczby są $(cr)$-bitowe, reprezentowane jako wektory $(x_1, x_2, \dots, x_c)$. Oczywiście:

$$U=\{0, \dots, 2^{cr}−1\}$$

W typowych zastosowaniach $U$ składa się z $32$- lub $64$-bitowych liczb naturalnych, natomiast $r = 8$ (czyli składowe to kolejne bajty).

Ponadto zakładamy, że długość tablicy haszującej $m$ jest potęgą dwójki. Zatem zbiorem wartości dla funkcji haszujących będzie $M = \{0, \ldots, m-1\}$.

Rozważmy więc rodzinę funkcji haszujących, z których każda jest postaci $h: U \rightarrow M$. Funkcja haszująca korzysta z $c$ tablic $T_1, T_2, \dots, T_c$ - każda rozmiaru $r$ - wypełnionych losowymi liczbami ze zbioru $M$. Funkcja, otrzymując klucz z $U$, traktuje go jako wektor $c$ mniejszych liczb. Dla każdej składowej $x_i$ pobiera wartość $T_i[x_i]$ i wykonuje na nich operację XOR (tu oznaczana jako $\oplus$).

Mamy zatem rodzinę funkcji, z których każda jest postaci:

$$h(x) = T_0[x_0]\ \oplus\ T_1[x_1]\ \oplus\ \cdots\ \oplus\ T_c[x_c]$$

#### Rodzina funkcji liniowych
Niech $p$ będzie dowolną liczbą pierwszą większą od $|U|$. Będziemy rozważać funkcje postaci:

$$h(x) = ((ax + b) \bmod p) \bmod m$$

gdzie:
* $a \in \{1, \dots,p-1\}$,
* $b \in \{0, \dots, p-1\}\}$,
* $m$ - rozmiar tablicy haszującej.

Zauważmy, że każda funkcja z $\mathcal{H}$ jest reprezentowana przez zaledwie dwie liczby $a$ i $b$. Wydawać by się mogło, że w praktyce wygląda to bardziej atrakcyjnie niż reprezentacje funkcji z rodzin tabulacyjnych. Ta rodzina ma jednak znacznie mniejsze znaczenie w zastosowaniach ze względu na czas obliczania wartości funkcji. Chociaż pozostaje on stały w sensie asymptotycznym, podczas obliczania wartości funkcji wykonywane są kosztowne operacje mnożenia i obliczania reszty z dzielenia przez $p$ i $m$. Można próbować dobierać specjalne wartości, aby te obliczenia zoptymalizować, ale mimo wszystko eksperymenty pokazują jednak, że obliczanie wartości w haszowaniu tabulacyjnym jest istotnie szybsze.

#### Rodzina wielomianów
Uogólnienie rodziny z poprzedniego punktu. Dla współczynników $a_i \in \{0, \dots, p-1\}$ , mamy:

  $$\mathcal{H}^m = \{ x \mapsto \left((a_0 + a_1 x + \dots + a_{k-1}x^{k-1})\bmod p \right) \bmod m \}$$

Zauważmy, że każdy ze współczynników $a_0, \ldots, a_{k-1}$ może być równy $0$, a więc $\mathcal{H}^m$ zawiera funkcje stałe, które w kontekście zastosowań słownikowych zachowują się fatalnie! Taka definicja pozwala jednak uprościć rozumowania (zauważmy ponadto, że prawdopodobieństwo wylosowania funkcji stałej jest bardzo małe).

## Haszowanie doskonałe

Chociaż haszowanie znajduje najczęściej zastosowanie ze względu na swoje znakomite zachowanie w przypadku średnim, to okazuje się, że również w przypadku pesymistycznym można uzyskać podobną jakość, jeśli zbiór kluczy jest zbiorem statycznym: po umieszczeniu kluczy w tablicy jej zawartość nigdy nie ulega już zmianie. O haszowaniu mówimy, że jest doskonałe, jeśli w przypadku pesymistycznym wyszukiwanie wymaga stałej liczby odwołań do tablicy.  

W haszowaniu doskonałym stosujemy dwupoziomowe haszowanie uniwersalne. Pierwszy poziom przypomina haszowanie łańcuchowe: $n$ kluczy rozrzucamy w $m$ miejsc za pomocą funkcji haszującej. Zamiast jednak tworzyć listę kluczy odwzorowanych na pozycję $j$, bierzemy dodatkową tablicę z haszowaniem $S_j$, wraz ze związaną z nią funkcja haszującą $h_j$.  

Dobierając rozmiar $m_j$ tablicy $S_j$ jako kwadrat liczby $n_j$, czyli liczby kluczy odwzorowanych na pozycję $j$, można zagwarantować że na drugim poziomie nie będzie kolizji. Pozwala na to następujące twierdzenie:

>Jeśli $n$ kluczy zapamiętujemy w tablicy z haszowaniem o rozmiarze $m = n^2$, wykorzystując do tego celu funkcję haszującą wybraną losowo z uniwersalnej klasy funkcji haszujących, to prawdopodobieństwo wystąpienia jakiejkolwiek kolizji jest mniejsze od $1/2$.

Na podstawie powyższego twierdzenia: prawdopodobieństwo wystąpienia jakiejkolwiek kolizji jest mniejsze od $1/2$, więc jeśli wykonamy kilka losowań (po każdym sprawdzając czy nie ma kolizji), to prawdopodobieństwo kolizji szybko maleje.

Chociaż mogłoby się wydawać, że dopuszczając kwadratową zależność $m_j$ od $n_j$, spowodujemy, że rozmiar potrzebnej pamięci będzie zbyt duży, to można pokazać, że wybierając dowolną funkcję z rodziny uniwersalnej prawdopodobieństwo tego, że ogólna ilość pamięci wymaganej na tablicę drugiego poziomu będzie większa od $4n$ jest mniejsze niż $1/2$.  

Brak kolizji gwarantuje stałe czasy operacji co czyni haszowanie doskonałym.
