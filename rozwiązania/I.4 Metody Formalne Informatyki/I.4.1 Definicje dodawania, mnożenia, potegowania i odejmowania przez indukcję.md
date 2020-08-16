Definicje dodawania, mnożenie, potęgowania i odejmowania w oparciu o twierdzenie o definiowaniu przez indukcję. Własności tych działań.

---

# Zanim przeczytasz ten rozdział

Przed przeczytaniem tego rozdziału zapoznaj się z konstrukcją liczb naturalnych oraz ich własnościami w rozdziale I.4.6 w szczególności z **Fakt 1** _Każda liczba naturalna jest albo zbiorem pustym, albo następnikiem liczby naturalnej_.

# Twierdzenie o definiowaniu przez indukcję

Niech $A$ i $B$ będą zbiorami, a $f \colon A \to B$ i $g \colon B \times \mathbb{N} \times A \to B$ funkcjami. Istnieje unikalna funkcja $h \colon \mathbb{N} \times A \to B$ taka, że:

$h(0,a)=f(a)$, dla każdego $a \in A$,  
$h(n^{\prime},a)=g(h(n,a),n,a)$, dla każdego $a \in A$ i $n \in \mathbb{N}$.

# Dodawanie, mnożenie i potęgowanie

Odejmowanie zostanie zdefinowane, jako **Własność 7** dodawania.

Dodawanie, mnożenie i potęgowanie są funkcjami dwuargumentowymi  
$\mathbb{N} \times \mathbb{N} \to \mathbb{N}$

Wszystkie poniższe definicje przeprowadzimy z wykorzystaniem twierdzenia o definiowaniu przez indukcję.  
We wszystkich poniższych definicjach podstawiamy:  
$A = B = \mathbb{N}$

## Dodawanie

$f(n) = n$  
$g(m,n,p)=m^{\prime}$

Na mocy twierdzenia o definiowaniu przez indukcję istnieje funkcja $h \colon \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ taka, że  
$h(0,m)=m$  
$h(n^{\prime},m)=h(n,m)^{\prime}$

Funkcja ta to dodawanie liczb naturalnych i będziemy używać notacji $h(n,m)=n+m$.

## Mnożenie

$f(n)=0$  
$g(m,n,p)=m+p$

Na mocy twierdzenia o definiowaniu przez indukcję istnieje funkcja $h \colon \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ taka, że  
$h(0,m)=0$  
$h(n^{\prime},m)=h(n,m)+m$

Funkcja ta to mnożenie liczb naturalnych i będziemy używać notacji $h(n,m)=n\cdot m$.

## Potęgowanie

$f(n) = 1$  
$g(m,n,p)=m \cdot p$

Na mocy twierdzenia o definiowaniu przez indukcję istnieje funkcja $h \colon \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ taka, że  
$h(0,m) = 1$  
$h(n^{\prime}, m) = h(n,m) \cdot m$  

Funkcja ta to potęgowanie liczb naturalnych i będziemy używać notacji $h(n,m)=m^n$.

# Własności

## Dodawanie

1. Jeśli suma dwóch liczb jest równa $0$, to obie liczby muszą być równe $0$.
2. Łączność dodawania
3. $n + 0 = n$
4. $k^{\prime}+m=k+m^{\prime}$
5. Przemienność dodawania
6. $k+n = m+n \implies k=m$
7. Odejmowanie - Jeśli $k>m$, to istnieje $n>0$ takie, że $k=m+n$.

## Mnożenie

1. Dla dowolnej liczby naturalnej $k$ mamy $k\cdot 1 = k$
2. $k\cdot (m+n) = k\cdot m +k\cdot n$ - dodawanie jest rozdzielne względem mnożenia z prawej strony
3. $(k+m)\cdot n = k\cdot n + m\cdot n$ - dodawanie jest rozdzielne względem mnożenia z lewej strony
4. $k\cdot(m\cdot n) = (k\cdot m)\cdot n$ - mnożenie jest łączne
5. $k\cdot 0 = 0$
6. $k\cdot m = 0$ wtedy i tylko wtedy, kiedy $k=0\lor m=0$
7. $k\cdot m = m\cdot k$ - mnożenie jest przemienne
8. Jeśli $k\cdot n = m\cdot n$ i $n\neq 0$ to $k=m$.

## Potęgowanie

1. $a^0 = 1$
2. $a^{m+1} = a^m \cdot a$
3. $a^1 = a$
4. $a^{m+k} = a^m \cdot a^k$
