Definicje dodawania, mnożenie, potęgowania i odejmowania w oparciu o twierdzenie o definiowaniu przez indukcję. Własności tych działań.

---

# Dodawanie, mnożenie i potęgowanie
Dodawanie, mnożenie i potęgowanie są funkcjami dwuargumentowymi $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$. We wszystkich poniższych definicjach podstawiamy: $A = B = \mathbb{N}$.

Zobacz [twierdzenie o definiowaniu przez indukcję](I.4.7 Zasada minimum. Zasada maksimum. Twierdzenie o definiowaniu przez indukcję.md).

## Dodawanie
Dodawanie liczb naturalnych $h(n,m)=n+m$:

$$\begin{align}
f(n) &= n \\
g(m,n,p) &= m^{\prime} \\
\Downarrow \\
h(0,m) &= m \\  
h(n^{\prime},m) &= h(n,m)^{\prime} \\
\end{align}$$

## Mnożenie
Mnożenie liczb naturalnych: $h(n,m)=n\cdot m$:

$$\begin{align}
f(n) &= 0 \\
g(m,n,p) &= m + p \\
\Downarrow \\
h(0,m) &= 0 \\  
h(n^{\prime},m) &= h(n,m) + m \\
\end{align}$$

## Potęgowanie
Potęgowanie liczb naturalnych $h(n,m)=m^n$:

$$\begin{align}
f(n) &= 1 \\
g(m,n,p) &= m \cdot p \\
\Downarrow \\
h(0,m) &= 1 \\  
h(n^{\prime},m) &= h(n,m) \cdot m \\
\end{align}$$

## Odejmowanie
Definiujemy odejmowanie jako własność dodawania.

### Teza
Jeśli $m < k$, to istnieje dopełnienie $n > 0$ takie, że $m+n=k$.

Dowodzimy tego faktu przez indukcję na $k$.

### Baza
Jeśli $k$ jest równe $0$, to nie istnieje $m < k$.

### Indukcja
Zakładamy słuszność tezy dla liczb $\leq k$. Weźmy $k^{\prime}$ i dowolne $m < k^{\prime}$.

1. Jeśli $m=k$, to bierzemy $n=1$ i $k^{\prime} = m +1$ dowodzi kroku indukcyjnego.  
2. Jeśli $m< k $, to (na podstawie założenia indukcyjnego) istnieje $n$ takie, że: $k = m+n$. Wtedy, kończąc dowód:

$$k^{\prime} = (m+n)^{\prime} = m+n^{\prime}$$

# Własności

## Dodawanie

1. $a + b = 0 \iff a=0 \land b=0$
2. $(a+b)+c = a+(b+c)$
3. $n + 0 = n$
4. $a^{\prime}+b=b+a^{\prime}$
5. $a+b = b+a$
6. $a+c = b+c \iff a=b$

## Mnożenie

1. $k\cdot 1 = k$
2. $k\cdot (m+n) = k\cdot m +k\cdot n$
3. $(k+m)\cdot n = k\cdot n + m\cdot n$
4. $k\cdot(m\cdot n) = (k\cdot m)\cdot n$
5. $k\cdot 0 = 0$
6. $k\cdot m = 0 \iff k=0\lor m=0$
7. $k\cdot m = m\cdot k$
8. Jeśli $k\cdot n = m\cdot n$ i $n\neq 0$ to $k=m$.

## Potęgowanie

1. $a^0 = 1$
2. $a^{m+1} = a^m \cdot a$
3. $a^1 = a$
4. $a^{m+k} = a^m \cdot a^k$
