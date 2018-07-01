Niezależność zdarzeń i zmiennych losowych - przykłady i własności.

---

# Doświadczenie losowe
W praktyce każda czynność, która może zakończyć się kilkoma nieprzewidywalnymi wynikami, np. rzut kostką do gry.

# Zdarzenie elementarne
Wynik doświadczenia losowego, np. wyrzucenie na kostce. Zbiorem wszystkich zdarzeń elementarnych jest $\Omega = \{1, 2, 3, 4, 5, 6\}$.

# Zdarzenie losowe
Dowolny podzbiór wszystkich zdarzeń elementarnych np. wyrzucenie parzystej liczby oczek $A = \{2, 4, 6\}$.

Jeśli dane zdarzenie elementarne spełnia warunki zdarzenia losowego, to mówimy, że *sprzyja* zdarzeniu losowemu. Np. wyrzucenie $2$, jeśli $A$ to wyrzucenie parzystej liczby oczek.

# Niezależność zdarzeń
Niezależność zdarzeń oznacza, że zajście dowolnego z nich nie wpływa na prawdopodobieństwo wystąpienia innych.

## Dwa zdarzenia
Dwa zdarzenia $A, B$ są **niezależne**, jeżeli $$P(A \cap B) = P(A) \cdot P(B)$$

Zakładając, że powyższe równanie jest prawdziwe, można łatwo pokazać niezależność. Przykładowo, prawdopodobieństwo zajścia $A$ pod warunkiem zajścia $B$:

$$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A) \cdot P(B)}{P(B)} = P(A)$$

## Więcej niż dwa zdarzenia
Skończony zbiór zdarzeń $A$ jest **parami niezależny** jeśli każda para zdarzeń jest niezależna. Jest natomiast **łącznie niezależny** jeśli prawdopodobieństwo zajścia przecięcia każdego $n$-elementowego podzbioru zdarzeń $\{A_{i}\}$ jest równe iloczynowi tych zdarzeń:

$$\mathrm{P}\left(\bigcap_{i=1}^n A_i\right)=\prod_{i=1}^n \mathrm{P}(A_i)$$

### Niezależność parami vs łącznie
Łącznie niezależne zdarzenia są również zawsze parami niezależne. Jednak działa to tylko w jedną stronę - istnieją zbiory parami niezależne, które nie są łącznie niezależne.

Rozważmy pudełko z następującymi elementami:

$$\{112, 121, 211, 222\}$$

Doświadczenie będzie polegało na losowym wybraniu jednego z elementów. Zdefiniujmy zdarzenia losowe następująco:

* $A_1 = \{\text{1 jest na pierwszym miejscu}\}$,
* $A_2 = \{\text{1 jest na drugim miejscu}\}$,
* $A_3 = \{\text{1 jest na trzecim miejscu}\}$.

Prawdopodobieństwo zajścia każdego z tych zdarzeń wynosi $P(A_i) = \frac{1}{2}$. Rozważmy teraz prawdopodobieństwa par zdarzeń:

* $P(A_1 \cap A_2) = P(\{112\}) = \frac{1}{4}$,
* $P(A_1 \cap A_3) = P(\{121\}) = \frac{1}{4}$,
* $P(A_2 \cap A_3) = P(\{211\}) = \frac{1}{4}$.

Możemy więc stwierdzić, że zdarzenia $A_1$, $A_2$, $A_3$ są **parami niezależne**. Nie są jednak **łącznie niezależne**. Rozważmy prawdopodobieństwo zajścia wszystkich zdarzeń:

$$P(A_1 \cap A_2 \cap A_3) = P(\emptyset) = 0$$
$$P(A_1) \cdot P(A_2) \cdot P(A_3) = (\frac{1}{2})^3$$

## Własności
### Samo-niezależność
Zdarzenie jest niezależne od siebie samego wtw. gdy:

$$\mathrm{P}(A) = \mathrm{P}(A \cap A) = \mathrm{P}(A) \cdot \mathrm{P}(A) \Leftrightarrow \mathrm{P}(A) = 0 \text{ lub } 1$$

### Niezależność przeciwieństw
Jeśli $A$ i $B$ są niezależne, to również niezależne są pary zdarzeń:
  * $A$ i $B'$,
  * $A'$ i $B$,
  * $A'$ i $B'$,

gdzie $A'$ oznacza zdarzenie przeciwne do $A$.

# Niezależność zmiennych losowych
Dwie zmienne losowe są niezależne jeśli spełnienie jednej z nich nie wpływa na rozkład prawdopodobieństwa drugiej.

## Dwie zmienne
Dwie zmienne losowe $X$, $Y$ są niezależne, jeśli dla dowolnych liczb rzeczywistych $x$ i $y$ zachodzi równość:

$$P(X \le x) \cdot P(Y \le y) = P(X \le x \land Y \le y)$$

W szczególności, dyskretne zmienne losowe $X$ i $Y$ są niezależne, jeśli:

$$P(X = x) \cdot P(Y = y) = P(X = x \land Y = y)$$

## Więcej niż dwie zmienne
Skończony zbiór dyskretnych zmiennych losowych $\{X_i\}$ jest **parami niezależny** jeśli każda para zmiennych losowych jest niezależna.

Jest natomiast **łącznie niezależny**, jeśli dla dowolnego skończonego podzbioru $X_1, \ldots, X_n$ i dowolnego skończonego ciągu liczb $a_1, \ldots, a_n$, zdarzenia $\{X_1 = a_1\}, \ldots, \{X_n = a_n\}$ są łącznie niezależne (zgodnie z definicją wyżej).

## Własności
* Jeśli zmienne $X$, $Y$ są niezależne, to $E[X \cdot Y] = E[X] \cdot E[Y]$.

## Przykład

### Rzut monetą
Rzucamy jeden raz monetą, dla której prawdopodobieństwo wyrzucenia orła wynosi $p$. Zdefiniujmy zmienne losowe:

* $X$ - wypadł orzeł,
* $Y$ - wypadła reszka.

Czy zmienne $X$ i $Y$ są niezależne? Rozpatrzmy przypadek, gdy oba zdarzenia mają zajść:

* $P(X = Y = 1) = 0$
* $P(X = 1) \cdot P(Y = 1) = p \cdot (1 - p)$

Zmienne $X$, $Y$ nie są niezależne.
