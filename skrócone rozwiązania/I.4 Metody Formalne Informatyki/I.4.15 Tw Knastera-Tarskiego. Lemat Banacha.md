Twierdzenie Knastera-Tarskiego (dla zbiorów). Lemat Banacha.

----

# Twierdzenie Knastera-Tarskiego
Każda monotoniczna funkcja $f:\mathcal{P}(X) \rightarrow \mathcal{P}(X)$ posiada najmniejszy i największy punkt stały.

## Wyjaśnienia

### Funkcja monotoniczna
Funkcję $f:\mathcal{P}(X) \rightarrow \mathcal{P}(X)$ nazwiemy monotoniczną ze względu na inkluzję, jeśli dla dowolnych podzbiorów $X$ zachodzi:

$$x\subset y \implies f(x) \subset f(y)$$

### Punkt stały
Element $x \in X$ jest punktem stałym funkcji $f:X \rightarrow X$, jeśli:

$$f(x)=x$$

### Najmniejszy punkt stały
Punkt stały $x_0 \subset X$ funkcji $f:\mathcal{P}(X) \rightarrow \mathcal{P}(X)$ jest **najmniejszym** jeśli dla dowolnego podzbioru $X$:

$$f(x)= x \implies x_0 \subset x$$

### Największy punkt stały
Punkt stały $x_0 \subset X$ funkcji $f:\mathcal{P}(X) \rightarrow \mathcal{P}(X)$ jest **największym** jeśli dla dowolnego podzbioru $X$:

$$f(x)= x \Rightarrow x \subset x_0$$

# Lemat Banacha
Dla dowolnych zbiorów $X,Y$ oraz funkcji $f:X \rightarrow Y$ i $g:Y\rightarrow X$ istnieją zbiory $A_1,A_2 \subset X$ oraz $B_1,B_2 \subset Y$ takie, że:

- $\{A_1,A_2\}$ jest rozbiciem zbioru $X$,
- $\{B_1,B_2\}$ jest rozbiciem zbioru $Y$,
- $\vec{f}(A_1)= B_1$,
- $\vec{g}(B_2)= A_2$
