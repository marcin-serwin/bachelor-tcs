Programowanie liniowe - podstawowe pojęcia, algorytm sympleks.

---

# Programowanie liniowe
Program liniowy (PL) to problem minimalizacji/maksymalizacji funkcji liniowej o $n$ argumentach $x_1,x_2, \ldots, x_n$, zwanej dalej funkcją celu, przy zachowaniu pewnej liczby równości i/lub nierówności liniowych (będziemy je nazywać ograniczeniami) zawierających zmienne $x_i$.

## Przykład
Zminimalizuj $x_1 + 2x_2$ <br>
z zachowaniem warunków:
* $x_ 2 \leqslant x_1+2$
* $2x_1 + x_2 \leqslant 4$
* $2x_2 + x_1 \geqslant 0$
* $x_2 \geqslant 0$

Za pomocą programów liniowych można wyrazić bardzo wiele naturalnych problemów optymalizacyjnych. <br>
Dla przykładu, problem maksymalnego przepływu w sieci o $n$ wierzchołkach, źródle $s$, ujściu $t$, i funkcji przepustowości $c: V^2 \to \mathbb{R}$ można wyrazić za pomocą następującego programu liniowego o $|V|^2$ zmiennych (dla każdej pary wierzchołków $(v,w)$ mamy zmienne $f_{vw}$ i $f_{wv}$ odpowiadające przepływowi od $v$ do $w$ i odwrotnie):


Zmaksymalizuj $\sum_{v \in V}\, f_{sv}$ <br>
z zachowaniem warunków:
* $\forall\, v, w \in V \,\,f_{vw} \leqslant c(v,w)$ 
* $\forall\, v, w \in V \,\, f_{vw} = -f_{wv}$ 
* $\forall\, v \in V - \{ s, t \} \,\, \sum_{w \in V}\, f_{vw} = 0$

## Definicje i notacja
Rozważamy Program Liniowy o $n$ zmiennych $x_1, \ldots, x_n$.
* Wartości zmiennych utożsamiamy z wektorem $x = (x_1, \ldots, x_n) \in \mathbb{R}^n$.
* Liniową funkcję celu $\sum_{j=1}^n \, c_j x_j$ można zapisać krócej, jako $c^Tx$, gdzie $c$ jest wektorem ze współczynnikami w funkcji celu, $c=(c_1, \ldots, c_n)$.
* $x \in \mathbb{R}^n$ jest **rozwiązaniem dopuszczalnym** PL gdy spełnia wszystkie ograniczenia.
* $x \in \mathbb{R}^n$  jest **rozwiązaniem optymalnym** PL gdy $x$ jest rozwiązaniem dopuszczalnym i optymalizuje funkcję celu, tzn. jeśli dla dowolnego dopuszczalnego $y \in \mathbb{R}^n$ zachodzi $c^Tx \geq c^Ty$ gdy PL jest maksymalizacyjny, a nierównośc w drugą stronę dla minimalizacyjnego.
* PL jest **dopuszczalny** gdy istnieje rozwiązanie dopuszczalne, w przeciwnym przypadku jest **sprzeczny**.
* PL jest **nieograniczony** gdy jest dopuszczalny ale nie ma rozwiązań optymalnych, tzn. dla PL minimalizacyjnego dla dowolnego $\lambda \in \mathbb{R}$ istnieje rozwiązanie dopuszczalne $x$ takie, że $c^Tx < \lambda$. Dla PL maksymalizującego nierówność w drugą stronę.
* PL jest **ograniczony** gdy jest dopuszczalny i posiada rozwiązanie optymalne,

## Postacie programów liniowych
### Postać kanoniczna
Zmaksymalizuj $\sum_{j=1}^n c_jx_j$ <br>
z zachowaniem warunków $\sum_{j=1}^n a_{ij}x_j \leqslant b_i \,\, \forall i=1, \ldots, m$, <br>
gdzie $\{ a_{ij}, b_i, c_j \}$ są dane. 

Można także używać zapisu macierzowego: <br>
Zmaksymalizuj $c^Tx$ <br>
z zachowaniem warunków $Ax \leq b$.

**Każdy PL można sprowadzić do postaci kanonicznej.**
### Postać standardowa
(Szczególny przypadek postaci kanonicznej)
Zmaksymalizuj $c^Tx$ <br>
z zachowaniem warunków: 
* $Ax \leq b$, 
* $x \geq 0$.

**Każdy PL można sprowadzić do postaci standardowej.**
### Postać dopełnieniowa
Zminimalizuj $c^Tx$ <br>
z zachowaniem warunków: 
* $Ax = b$, 
* $x \geq 0$.
**Każdy PL można sprowadzić do postaci dopełnieniowej.**

**Uwaga.** Wszystkie dowody na temat sprowadzania do kolejnych postaci znajdują się na [Ważniaku](http://smurf.mimuw.edu.pl/book/export/html/1121).

## Geometria programów liniowych
* Zbiór punktów spełniających $c^Tx=b$, $c \in \mathbb{R}^n, b \in \mathbb{R}$ to hiperpłaszczyzna.
* Zbiór punktów spełniających $c^Tx \geq b$ to półprzestrzeń.
* Zbiór rozwiązań dopuszczalnych PL w postaci kanonicznej $Ax \leq b$ to przecięcie półprzestrzeni, czyli wielościan.
* Zbiór rozwiązań PL jest przecięciem zbiorów wypukłych (półprzestrzeni, hiperpłaszczyzn) a więc jest wypukły.

## Struktura rozwiązań optymalnych
* Wierzchołkiem wielościanu $P$ nazywamy dowolny punkt $x \in P$, który jest jedynym rozwiązaniem optymalnym dla pewnej funkcji celu $c$.
* Punktem ekstremalnym wielościanu $P$ nazywamy dowolny punkt $x \in P$, który nie jest wypukłą kombinacją dwóch innych punktów $y, z \in P$. (Wypukła kombinacja $y$ i $z$ to dowolny punkt postaci $\lambda y + (1− \lambda)z$ dla pewnego $\lambda \in (0,1)$.)
* Punkt $x$ jest wierzchołkiem wielościanu $P \Leftrightarrow x$ jest punktem ekstremalnym.
* Każdy ograniczony PL w postaci standardowej ma rozwiązanie optymalne, które jest punktem ekstermalnym.

## Algorytm sympleks
### Idea algorytmu
* Najpierw znajduje pewien wierzchołek wielościanu rozwiązań dopuszczalnych.
* Następnie w pętli przemieszcza się wzdłuż krawędzi do jednego z sąsiednich wierzchołków tak, aby poprawić wartość funkcji celu.
* Pesymistyczna złożoność jest wykładnicza, jednak praktyka pokazuje, że dla rzeczywistych danych działa doskonale i jest stosowany w praktyce.
* Uwaga. Istnieją wielomianowe algorytmy rozwiązujące programowanie liniowe.

### Przykład dla algorytmu sympleks
$$\begin{align}
max \,\, 3x_1+x_2+2x_3 \\
x_1+x_2+3x_3 \leq 30 \\
2x_1+2x_2+5x_3 \leq 24 \\
4x_1+x_2+2x_3 \leq 36 \\
x_1,x_2,x_3\geq 0.
\end{align}$$

Jest to PL w postaci standardowej, w wersji maksymalizacyjnej, wszystkie wyrazy wolne po prawych stronach nierówności są nieujemne, ma on zatem rozwiązanie dopuszczalne $(0,0,0)$.

Zapiszmy teraz ten program w postaci dopełnieniowej, wprowadzając zmienną dopełnieniową dla każdej nierówności (z wyłączeniem warunków nieujemnościowych). Dodatkowo funkcję celu zastąpmy nową zmienną $z$:

$$\begin{align}
max \,\, z \\
z = 3x_1 + x_2 + 2x_3 \\
x_4=30-x_1-x_2-3x_3 \\
x_5=24-2x_1-2x_2-5x_3 \\
x_6=36-4x_1-x_2-2x_3
\end{align}$$

Nasze aktualne rozwiązanie, rozszerzone o zmienne dopełnieniowe, ma postać: <br>
$x_1=0,x_2=0,x_3=0,x_4=30,x_5=24,x_6=36$.

Podczas działania algorytmu, w kolejnych krokach będziemy zmieniać nasz program liniowy. <br>
Mimo, iż ograniczenia będą się zmieniać, zawsze będą one opisywać ten sam wielościan (zbiór rozwiązań dopuszczalnych).<br>
W każdym kroku nasz program liniowy będzie miał szczególną postać, która w sposób jednoznaczny będzie wyznaczać pewien wierzchołek wielościanu --- najlepsze dotąd znalezione rozwiązanie.

### Niezmiennik
Podamy teraz niezmiennik, który opisuje postać tych programów.
 
> Zbiór zmiennych $\{ x_1 \ldots ,x_{n+m} \}$ dzieli się na dwa rozłączne zbiory: $m$ zmiennych bazowych i $n$ zmiennych niebazowych. Oznaczmy zbiór indeksów zmiennych bazowych przez $B=\{ B_1,\ldots,B_m \}$ (baza) i zmiennych niebazowych przez $N=\{ N_1 \ldots, N_n \}$. <br>
 Program zawiera:
> * Równanie postaci $z=v+\sum_{j=1}^n c_jN_j$.
> * Dla każdego $i=1, \ldots, m$ równanie postaci $x_{B_i}=b_i + \sum_{j=1}^n a_{i,j}x_{N_j}$, gdzie $b_i \geq 0$.
> * Dla każdego $i=1 \ldots ,n+m$ nierówność $x_i \geq 0$. 
>

### Twierdzenie
> Jeśli spełniony jest powyższy niezmiennik, to rozwiązanie $(x_1, \ldots, x_{n+m})$ postaci $x_i = 0$, gdy $i \in N$, $x_i = b_j$, gdy $i = B_j$ dla pewnego $j=1, \ldots, n$ jest rozwiązaniem dopuszczalnym o wartości funkcji celu  $v$.

W rozważanym przez nas przykładzie, powyższy niezmiennik jest spełniony dla $N= \{ 1,2,3 \}$ oraz $B= \{ 4,5,6 \}$.

### Działanie algorytmu sympleks
Naszym celem jest zwiększenie zmiennej $z$. W tym celu spójrzmy na dowolną zmienną niebazową z dodatnim współczynnikiem w funkcji celu. W tym przypadku możemy wybrać dowolną zmienną z $x_1,x_2,x_3$- wybierzmy $x_1$. <br>
Jak bardzo możemy powiększyć $x_1$, zachowując wszystkie ograniczenia? Dopóki zmienne bazowe pozostają nieujemne, a więc $x_1 = min \, \{ \frac{30}{1}, \frac{24}{2}, \frac{36}{4} \} = 9$. <br>
W tej chwili zmienna bazowa $x_6$ przyjmuje wartość $0$. Dokonujemy zmiany bazy - $x_1$ wchodzi do bazy, $x_6$ ją opuszcza. <br>
Wyliczamy $x_1$ z ostatniego równania: $x_1=9−\frac{1}{4}x_2−\frac{1}{2}x_3−\frac{1}{4}x_6$. <br>
Następnie wstawiamy wynik zamiast $x_1$ z prawej strony wszystkich równań. 

$$\begin{align}
z &= 27 + \frac{1}{4}x_2+ \frac{1}{2}x_3 - \frac{3}{4}x_6 \\
x_1 &= 9−\frac{1}{4}x_2−\frac{1}{2}x_3−\frac{1}{4}x_6 \\
x_4 &= 21−\frac{3}{4}x_2−\frac{5}{2}x_3+\frac{1}{4}x_6 \\
x_5 &= 6−\frac{3}{2}x_2−4x_3+\frac{1}{2}x_6
\end{align}$$

Otrzymaliśmy rozwiązanie $(9,0,0,21,6,0)$ o wartości funkcji celu $27$.

$N= \{ 2,3,6 \}$ oraz $B= \{ 1,4,5 \}$.

Wykonujemy kolejną operację wymiany bazy. Teraz jako zmienną wchodzącą możemy wybrać już tylko jedną z dwóch: $x_2$ lub $x_3$, bo tylko te zmienne mają dodatnie współczynniki w funkcji celu. Wszystkie kroki analogicznie jak wyżej.

Gdy nie możemy wykonać operacji wymiany bazy ponieważ wszystkie współczynniki w funkcji celu są ujemne, oznacza to, że otrzymaliśmy rozwiązanie optymalne i algorytm kończy działanie.

Zastanówmy się jeszcze, co by było, gdybyśmy nie mieli czego wziąć do minimum przy wymianie bazy, tzn. gdyby istniała zmienna z dodatnim współczynnikiem w funkcji celu i nieujemnymi współczynnikami w pozostałych równaniach.

Wtedy powiększając tę zmienną moglibyśmy otrzymać rozwiązanie dopuszczalne o dowolnie wysokiej wartości funkcji celu. W takiej sytuacji algorytm simplex zwraca komunikat *PROGRAM NIEOGRANICZONY* i kończy działanie.