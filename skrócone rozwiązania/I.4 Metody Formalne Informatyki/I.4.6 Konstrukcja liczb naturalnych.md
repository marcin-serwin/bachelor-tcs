Konstrukcja liczb naturalnych von Neumanna, twierdzenie o indukcji. Własności liczb naturalnych.

----

# Konstrukcja von Neumanna
* Zerem jest zbiór pusty $\varnothing$.
* Następnikiem $n$ jest $n'\stackrel{\textrm{def}}{=} \{n\} \cup n$.

$$\begin{align}
0 &= \varnothing \\
1 &= \{0\}=\{\varnothing\} \\
2 &= \{0,1\}=\{\varnothing,\{\varnothing\}\} \\
3 &= \{0,1,2\}=\{\varnothing,\{\varnothing\},\{\varnothing,\{\varnothing\}\}\} \\
\;\vdots
\end{align}$$

Jeśli przez $\mathbb{N}$ oznaczać zbiór liczb naturalnych, wówczas:

$$\mathbb{N}=\{\varnothing,\{\varnothing\},\{\varnothing,\{\varnothing\}\},\{\varnothing,\{\varnothing\},\{\varnothing,\{\varnothing\}\}\},\ldots\}=\{0,1,2,3,\ldots\}$$

W teorii mnogości zbiór liczb naturalnych oznacza się też przez $\omega$ (liczba porządkowa).

# Twierdzenie o indukcji
Dla dowolnego zbioru $P$ jeśli:
- $P \subseteq \mathbb{N}$  
- $\varnothing \in P$
- $\forall_{x}\; x\in P \implies x'=x\cup\{x\}\in P$,

to $P=\mathbb{N}$.

# Własności liczb naturalnych
 - Każdy element liczby naturalnej jest również liczbą naturalną.  

 $$\forall_{x}\; x\in\mathbb{N} \implies \forall_{y}\;\left( y\in x  \implies y\in\mathbb{N}\right)$$

 - Każda liczba naturalna jest albo zbiorem pustym, albo następnikiem liczby naturalnej.  

 $$\forall_{x}\; x\in\mathbb{N} \implies (x = \varnothing \lor \exists_{y}\; (y\in\mathbb{N} \land x=y'))$$

 - Dla dowolnej liczby naturalnej $n$ i dowolnego zbioru $y$, jeśli $y\in n$, to $y\subset n$.

 - Jeżeli $m'=n'$, to $m=n$.

 - Jeżeli $m\subset n$ i $m\neq n$, to $m\in n$.

 - $m\subset n$ lub $n\subset m$ - czyli wszystkie liczby naturalne są porównywalne przez inkluzję

 - $m\in n$ albo $m=n$ albo $m\ni n$ - czyli dla dowolnych dwóch **różnych liczb** naturalnych jedna jest elementem drugiej.

## Porządek na $\mathbb{N}$
Na zbiorze liczb naturalnych zdefiniowanym jak wyżej definiujemy relację mniejszości:

* $m\leq n \stackrel{\textrm{def}}{\equiv} m\subset n$
* $m< n \stackrel{\textrm{def}}{\equiv} m\in n$
