Twierdzenie Ramseya. Przykłady zastosowań.

---

# Twierdzenie Ramseya

## Twierdzenie
Dla dowolnych $k\geq p\geq 1, q_1,..., q_k \geq 1$ istnieje $N$ takie, że dla każdego kolorowania $c:\binom{[N]}{p}\to [k]$ istnieje $X\subset [N]$ oraz $\alpha\in [k]$ takie, że $|X|=q_\alpha$ oraz $\binom{X}{p}\subset c^{-1}(\alpha)$.

Liczba $N$ to liczba Ramsaya $R^p(q_1,...,q_k,k)$.

# Zastosowanie

## Twierdzenie Shura
Dla dowolnego $k\geq 2$ istnieje $N$ takie, że dla każdego kolorowania $c:[N]\to [k]$ istnieją liczby $x,y,z\in[N]$ takie, że $x+y=z$ oraz $c(x)=c(y)=c(z)$.

*Dowód*:
1. $N$ dla $p=2$ oraz $q_i=3$ spełnia warunki twierdzenia.
2. Niech $c:[N]\to [k]$ będzie kolorowaniem elementów.
3. Rozważmy kolorowanie $c':\binom{[N]}{2}\to [k]$, takie że
$$c'({i,j})=c(|i-j|).$$
4. Wiemy już, że istnieją $i<j<k$ takie, że $c'(\{i,j\})=c'(\{j,k\})=c'(\{i,k\})$.
5. Niech $x=j-i$, $y=k-j$ oraz $z=k-i$.

## Twierdzenie Edosa-Szekeresa
Dla każdego $n$ istnieje $N$ takie, że dla dowolnych $N$ punktów w pozycji ogólnej
na płaszczyźnie pewne $n$ spośród nich są w pozycji wypukłej 

Zbiór punktów $P$ na płaszczyźnie jest w pozycji ogólnej jeżeli żadne trzy punkty
z $P$ nie są współliniowe.

Powiemy, że zbiór punktów płaszczyzny P znajduje się w pozycji wypukłej jeżeli
żaden z punktów z $P$ nie leży wewnątrz otoczki wypukłej zawierającej wszystkie
punkty z $P$ (najmniejszego zbioru wypukłego zawierającego wszystkie punkty z
$P$).

*Obserwacja 1.*
Zbiór punktów $P$ jest w pozycji wypukłej wtedy i tylko wtedy, gdy każde $4$
punkty z $P$ są w pozycji wypukłej.

Dowód. Jeżeli $P$ nie jest w pozycji wypukłej, to pewien punkt z $P$ leży we
wnętrzu pewnego trójkąta, którego wierzchołkami są punkty z $P$.

*Obserwacja 2.*
W zbiorze $P$ dowolnych $5$ punktów na płaszczyźnie w pozycji ogólnej istnieje $4$
punkty, które są w pozycji wypukłej.

Dowód. Załóżmy, że każde cztery punkty z $P$ nie są w pozycji wypukłej.
Oznacza to, że otoczką wypukłą $P$ jest trójkąt $T$ o wierzchołkach w $P$
zawierający w swoim wnętrzu dwa pozostałe punkty z $P$, powiedzmy $A$, $B$.
Zauważmy, że po jednej stronie prostej przechodzącej przez punkty $A$, $B$
znajdują się dwa wierzchołki trójkąta $T$. Zauważmy, że punkty te, wraz z
punktami $A$, $B$, są w pozycji wypukłej.

1. $N=R^{4}(n,5;2)$ spełnia warunki Twierdzenia Erdősa-Szekeresa.
2. Rozpatrzmy zbiór $P$ składający się z $N$ punktów znajdujących się w
pozycji ogólnej. Wykażemy, że pewne $n$ spośród nich znajduje się w
pozycji wypukłej.
3. Rozpatrujemy kolorowanie $c$ zbioru $\binom{P}{4}$, takie że
$\{A,B,C,D\}$ kolorujemy na $R$ jeżeli $A,B,C,D$ są w pozycji wypukłej, $B$ wpp.
3. Z obserwacji 2 wynika, że w zbiore $P$ nie może istnieć $5$-cio elementowy zbiór, którego wszystkie podzbioru elelementowe są koloru $B$. Ponieważ $|P|=N$, to w zbiorze $P$ musi istnieć podzbiór $Q$ mocy $n$, taki że wszystkie czwórki są koloru $R$. Z obserwacji 1 wynika, że zbiór Q jest w pozycji wypukłej.
