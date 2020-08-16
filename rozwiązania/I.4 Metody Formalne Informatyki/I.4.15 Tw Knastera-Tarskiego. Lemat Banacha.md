Twierdzenie Knastera-Tarskiego (dla zbiorów). Lemat Banacha.

----

# Twierdzenie Knastera-Tarskiego

## Definicje:

### Funkcja monotoniczna
Funkcję $f:\mathcal{P}(X) \rightarrow \mathcal{P}(X)$ nazwiemy monotoniczną ze względu na inkluzję, jeśli

$\forall_{x\subset X} \forall_{y \subset X} (x\subset y \Rightarrow f(x) \subset f(y))$.

### Punkt stały
Element $x \in X$ jest punktem stałym funkcji f$:X \rightarrow X$, jeśli

$f(x)=x$.

### Najmniejszy punkt stały
Punkt $x_0 \subset X$ jest najmniejszym punktem stałym funkcji $f:\mathcal{P}(X) \rightarrow \mathcal{P}(X)$, jeśli $f(x_0)=x_0$ oraz

$\forall_{x_1\subset X} f(x_1)= x_1 \Rightarrow x_0 \subset x_1$.

### Największy punkt stały
Punkt $x_0 \subset X$ jest największym punktem stałym funkcji $f:\mathcal{P}(X) \rightarrow \mathcal{P}(X)$, jeśli $f(x_0)=x_0$ oraz

$\forall_{x_1\subset X} f(x_1)= x_1 \Rightarrow x_0 \supset x_1$.

## Twierdzenie Knastera-Tarskiego:
Każda monotoniczna funkcja $f:\mathcal{P}(X) \rightarrow \mathcal{P}(X)$ posiada najmniejszy i największy punkt stały.

# Lemat Banacha
Dla dowolnych zbiorów $X,Y$ oraz funkcji $f:X \rightarrow Y$ i $g:Y\rightarrow X$ istnieją zbiory $A_1,A_2 \subset X$ oraz $B_1,B_2 \subset Y$ takie, że:

- $\{A_1,A_2\}$ jest rozbiciem zbioru $X$,
- $\{B_1,B_2\}$ jest rozbiciem zbioru $Y$,
- $\vec{f}(A_1)= B_1$,
- $\vec{g}(B_2)= A_2$
