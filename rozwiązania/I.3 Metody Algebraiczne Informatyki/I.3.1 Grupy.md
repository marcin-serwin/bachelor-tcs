Grupy, ich przykłady i zastosowania.
---
# Definicje

## Grupa
Grupa to uporządkowana czwórka ${\mathbf G}=(G,*,',e)$, gdzie $G$ jest dowolnym zbiorem niepustym,  $*$ działaniem dwuargumentowym,  $'$ jest działaniem jednoargumentowym, a $e\in G$, przy czym, dla dowolnych $x,y,z\in G$, spełnione sa następujące warunki:

- $\forall_{x,y \in G} \,\, x*y \in G$,
- $\forall_{x \in G} \exists_{x' \in G}: \,\, x*x'=x'*x=e$, czyli $x'$ jest elementem odwrotnym do $x$ w ${\mathbf G}$.
- (łączność) $(x*y)*z=x*(y*z)$,
- $e*x=x*e=x$, czyli $e$ to element neutralny grupy ${\mathbf G}$.

*Rząd grupy* skończonej ${\mathbf G}=(G,*,e)$ to liczba $\left \vert G \right \vert$ jej elementów. Gdy grupa ${\mathbf G}$ nie jest skończona, to mówimy, że ma rząd nieskończony.

*Grupa cykliczna* jest to grupa generowana zbiorem jednoelementowym.

Grupę nazywamy przemienną, lub *abelową*, jeśli jej działanie jest przemienne.

# Przykłady:

$(\mathbb Z, +, -, 0)$

- $+$ jest działaniem dwuargumentowym określonym na $\mathbb Z$, tzn. dla dowolnych $a, b \in \mathbb Z$ jest $a + b \in \mathbb Z$;

- dla dowolnych $a, b, c \in \mathbb Z$ zachodzi $(a + b) + c = a + (b + c)$;

- istnieje liczba całkowita, mianowicie $0 \in \mathbb Z$, która spełnia $a + 0 = a$ dla wszystkich $a \in \mathbb Z$;

- dla wszystkich $a \in \mathbb Z$ istnieje liczba całkowita, jest nią $-a$, dla której $a + (-a) = 0$.


$(\mathbb Z_n, +, -, 0)$ $+$ - dodawanie modulo $n$

- $+$ jest działaniem dwuargumentowym na $\mathbb Z_n$, tzn. dla dowolnych $\overline a, \overline b \in \mathbb Z_n$ jest $\overline a + \overline b \in \mathbb Z_n$;
- dla dowolnych $\overline a, \overline b, \overline c \in \mathbb Z_n$ zachodzi $(\overline a + \overline b) + \overline c = \overline a + (\overline b + \overline c)$;
- istnieje liczba całkowita modulo $n$, mianowicie $\overline 0 \in \mathbb Z_n$, która spełnia $\overline a + \overline 0 = \overline a$ dla wszystkich $\overline a \in \mathbb Z_n$;
- dla wszystkich $\overline a \in \mathbb Z_n$ istnieje liczba całkowita modulo $n$, jest nią $\overline{-a}$, dla której $\overline a + (\overline {-a}) = \overline 0$.

$(\mathbb R^+, \cdot, ^{-1}, 1)$ 

- $\cdot$ jest działaniem dwuargumentowym na $\mathbb R^+$, tzn. dla dowolnych $a, b \in \mathbb R^+$ jest $a \cdot b \in \mathbb R^+$;
- dla dowolnych $a, b, c \in \mathbb R^+$ zachodzi $(a \cdot b) \cdot c = a \cdot (b \cdot c)$;
- istnieje dodatnia liczba rzeczywista, mianowicie $1 \in \mathbb R^+$, która spełnia $a \cdot 1 = a$ dla wszystkich $a \in \mathbb R^+$;
- dla wszystkich $a \in \mathbb R^+$ istnieje dodatnia liczba rzeczywista, jest nią $a^{-1} = 1/a$, dla której $a \cdot \frac{1}{a} = 1$.

Niech $X$ oznacza niepusty zbiór, zaś $\mathrm S_X$ jest zbiorem wszystkich permutacji zbioru $X$. 
$\circ$ - składanie przekształceń z $\mathrm S_X$

$(\mathrm S_X, \circ, ^{-1}, id)$

- $\circ$ jest działaniem dwuargumentowym na $\mathrm S_X$, ponieważ jeśli $\sigma, \tau$ są wzejmnie jednoznacznymi przekształceniami $X$ na siebie, to $\sigma \circ \tau$ również;
dla dowolnych $\sigma, \tau, \mu \in \mathrm S_X$ zachodzi $(\sigma \circ \tau) \circ \mu = \sigma \circ (\tau \circ \mu)$;
- istnieje przekształcenie w $\mathrm S_X$, mianowicie $id \in \mathrm S_X$, które spełnia $\sigma \circ id = \sigma$ dla wszystkich $\sigma \in \mathrm S_X$;
- dla wszystkich $\sigma \in \mathrm S_X$ istnieje przekształcenie, jest nim $\sigma^{-1}$, dla którego $\sigma \circ \sigma^{-1} = id$.

# Zastosowania:
Ciąg n operacji na elementach z grupy da się wykonać w czasie $O(\log{n}) \cdot$czas operacji (wykorzystując łączność).
Jeśli elementy macierzy należą do pewnej grupy, to zbiór macierzy o tych samych wymiarach z działaniami po współrzędnych tworzy grupę, zatem koszt ciągu n takich operacji wynosi $O(\log{n}) \cdot$czas operacji na 2 macierzach.

W RSA wykorzystujemy grupę z działaniami mnożenia modulo n dla liczb względnie pierwszych z n (wykorzystujemy własność elementu odwrotnego). Wybieramy pewien element z tej grupy i używamy go w kluczu publicznym, a jego odwrotność w kluczu prywatnym.

Grupy wykorzystuje się także w algorytmach testowania pierwszości - patrz [Testy pierwszości](../II.3 Algorytmy i Struktury Danych 2/II.3.5 Liczby pierwsze.md).
