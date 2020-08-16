Konstrukcja liczb naturalnych von Neumanna, twierdzenie o indukcji. Własności
liczb naturalnych.

----

# Konstrukcja liczb naturalnych von Neumanna
Liczby naturalne definiujemy następująco. Liczbą naturalną zero jest zbiór pusty $\emptyset$. Każdą następną liczbę naturalną otrzymujemy z poprzedniej w prosty sposób: jeśli $n$ jest liczbą naturalną, to następną po niej liczbą jest $n'\stackrel{\textrm{def}}{=} \{n\} \cup n$.

# Twierdzenie o indukcji
Dla dowolnego zbioru $P$ jeśli:
- $P \subseteq \mathbb{N}$  
- $\emptyset \in P$
- $\forall_{x}\; x\in P \implies x'=x\cup\{x\}\in P$,

to $P=\mathbb{N}$.

# Własności liczb naturalnych
 - Każdy element liczby naturalnej jest również liczbą naturalną. Formalnie:  

 $$\forall_{x}\; x\in\mathbb{N} \implies \forall_{y}\;\left( y\in x  \implies y\in\mathbb{N}\right)$$

 - Każda liczba naturalna jest albo zbiorem pustym, albo następnikiem liczby naturalnej. Formalnie:  

 $$\forall_{x}\; x\in\mathbb{N} \implies (x = \emptyset \lor \exists_{y}\; (y\in\mathbb{N} \land x=y'))$$

 - Dla dowolnej liczby naturalnej $n$ i dowolnego zbioru $y$, jeśli $y\in n$, to $y\subset n$.

 - Jeżeli $m'=n'$, to $m=n$.

 - Jeżeli $m\subset n$ i $m\neq n$, to $m\in n$.

 - $m\subset n$ lub $n\subset m$ - czyli wszystkie liczby naturalne są porównywalne przez inkluzję

 - $m\in n$ albo $m=n$ albo $m\ni n$ - czyli dla dowolnych dwóch **różnych liczb** naturalnych jedna jest elementem drugiej.
