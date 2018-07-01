Szeregi liczbowe. Podstawowe kryteria zbieżności.

---

# Szereg
Konstrukcja umożliwiająca wykonanie uogólnionego dodawania **przeliczalnej liczby** składników.

Szeregi mogą składać się z elementów z dowolnego zbioru, w tym z liczb rzeczywistych, liczb zespolonych czy funkcji (wtedy mówi się o szeregach funkcyjnych). Poniższa definicja podana będzie dla liczb rzeczywistych, lecz można ją uogólniać.

Dla danego nieskończonego ciągu liczb rzeczywistych $(a_n)$ definiuje się $N$-tą **sumę częściową** ciągu $(a_n)$ bądź **sumą częściową szeregu** wzorem:

$$s_N = \sum_{n=0}^N a_n =a_0 + a_1 + a_2 + \dots + a_N$$

**Szeregiem** nazywa się ciąg $(s_N)$ sum częściowych. Formalnie szereg należy więc traktować jako parę uporządkowaną $\bigl((a_n), (s_N)\bigr)$.

**Sumą szeregu** nazywa się liczbę $$S = \lim_{N \rightarrow \infty }s_N$$ o ile granica ta istnieje i jest właściwa. W przeciwnym przypadku szereg nie ma sumy. Szereg, który ma sumę nazywa się **zbieżnym**, który jej nie ma − **rozbieżnym**.

## Zbieżność i rozbieżność
O szeregu $\sum a_n$ mówi się, że jest **zbieżny**, jeżeli ciąg $(s_N)$ sum częściowych ma skończoną granicę, wtedy

$$\sum_{n = 0}^\infty a_n = \lim_{N \to \infty} s_N = \lim_{N \to \infty} \sum_{n = 0}^N a_n$$

Jeżeli granica $(s_N)$ jest nieskończona lub nie istnieje, to szereg nazywa się **rozbieżnym**.

Jeśli ciąg sum częściowych $(s_N)$ jest rozbieżny do $\displaystyle\pm\infty$, to mówimy, że szereg jest rozbieżny do $\displaystyle\pm\infty$ (lub, że ma sumę niewłaściwą $\displaystyle\pm\infty$) i piszemy $\displaystyle\displaystyle \sum_{n=0}^{\infty} a_n=\pm\infty$.

### Zbieżność względna i bezwzględna
Mówimy, że szereg $\sum a_n$ jest **zbieżny bezwzględnie**, gdy zbieżny jest szereg $\sum |a_n|$.

Jeżeli szereg jest zbieżny, ale nie bezwzględnie, to jest **zbieżny względnie**:

$$\sum a_n < \infty, \text{ lecz } \sum |a_n| = \infty$$

### Szereg a suma
Należy zaznaczyć, że istnieją szeregi, których suma zależy od kolejności sumowania wyrazów. Jednak dla szeregów zbieżnych bezwzględnie suma szeregu nie zależy od kolejności sumowania. 

### Kryteria zbieżności
Grupa twierdzeń pozwalających ustalić, czy dany szereg jest zbieżny czy nie. W większości kryteria są warunkami koniecznymi na zbieżność lub rozbieżność szeregu - w takim przypadku niespełnienie kryterium oznacza pewność co do zbieżności lub niezbieżności.

#### Warunek konieczny zbieżności
Podstawowym kryterium zbieżności szeregu jest warunek konieczny zbieżności. Pozwala on stwierdzić, kiedy dany szereg **nie** jest zbieżny. Badanie problemu zbieżności szeregu powinno się zaczynać od sprawdzenia tego kryterium, a jeśli warunek konieczny jest spełniony, przejść do kolejnych kryteriów.

Jeśli szereg $\displaystyle \sum a_n$ jest zbieżny, to $\displaystyle\lim\limits_{n\rightarrow \infty} a_n=0$.

Jeśli więc wyraz ogólny szeregu nie zbiega do $0$, to szereg ten jest rozbieżny.

#### Warunek Cauchy’ego zbieżności
Szereg liczbowy $\sum a_n$ jest zbieżny wtedy i tylko wtedy, gdy:

$$\forall_{\varepsilon > 0}\; \exists_{n_0 \in N}\; \forall_{n\geqslant n_0}\; \forall_{k\in N} \left \vert \sum_{i=n}^{n+k} a_i \right \vert < \varepsilon$$

Czyli od pewnego miejsca $n_0$ suma dowolnej ilości kolejnych $k$ wyrazów ciągu $(a_n)$ jest dowolnie mała.

#### Zbieżność bezwzględna
Jeśli szereg $\displaystyle \sum a_n$ jest bezwzględnie zbieżny, to jest on zbieżny.

#### Kryterium porównawcze
Niech $\sum a_n$ i $\sum b_n$ będą szeregami o wyrazach nieujemnych. Jeśli $a_n\leq b_n$ dla prawie każdego $n\in\mathbb{N}$, to

* $\sum b_n$ jest zbieżny $\Rightarrow$ $\sum a_n$ jest zbieżny.
* $\sum a_n$ jest rozbieżny $\Rightarrow$ $\sum b_n$ jest rozbieżny.

#### Kryterium d'Alemberta
W przypadku, gdy szereg $\sum a_n$ ma wyrazy dodatnie:

* $\lim_{n \to \infty} \frac{a_{n+1}}{a_n} < 1 \Rightarrow$ szereg $\sum a_n$ jest zbieżny

* $\lim_{n \to \infty} \frac{a_{n+1}}{a_n} > 1 \Rightarrow$ szereg $\sum a_n$ jest rozbieżny

* $\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = 1 \Rightarrow$ kryterium nie rozstrzyga

#### Kryterium Cauchy'ego
Jeżeli granica ciągu $\sqrt[n]{|a_n|}$ istnieje i jest mniejsza od $1$, to szereg $\sum a_n$ jest zbieżny; jeżeli granica ta jest większa od $1$, szereg jest rozbieżny. Jeśli granica jest równa $1$, to kryterium nie rozstrzyga.

#### Kryterium ilorazowe
Niech $\sum a_n$ i $\sum b_n$ będą szeregami o wyrazach nieujemnych. Jeśli spełnione są nierówności $0 < \displaystyle \lim_{n \to \infty} \frac{a_n}{b_n} < \infty$, to

* Ze zbieżności jednego z szeregów wynika zbieżność drugiego szeregu.
* Z rozbieżności jednego z szeregów wynika rozbieżność drugiego szeregu.

Ponadto:

* $\displaystyle \lim_{n \to \infty} \frac{a_n}{b_n}=0$ i $\sum b_n$ jest zbieżny $\Rightarrow \sum a_n$ jest zbieżny.
* $\displaystyle \lim_{n \to \infty} \frac{a_n}{b_n}=\infty$ i $\sum b_n$ jest rozbieżny $\Rightarrow \sum a_n$ jest rozbieżny.

#### Kryterium Leibniza
Jeżeli ciąg $(a_{n})$ spełnia następujące dwa warunki:
* $\displaystyle \lim_{n \to \infty} a_n=0$,
* ciąg $(a_{n})$ jest malejący,

to szereg $\sum (-1)^{n}a_{n}$ jest zbieżny.

#### Kryterium Abela
Jeżeli szereg $\sum a_n$ jest zbieżny, a ciąg $(b_n)$ jest monotoniczny i ograniczony, to szereg $\sum a_nb_n$ jest zbieżny.
