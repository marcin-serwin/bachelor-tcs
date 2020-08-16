Ciągłość funkcji w punkcie i na zbiorze. Warunki równoważne ciągłości. Własności funkcji ciągłych na zbiorach zwartych.

---

# Funkcja ciągła

## Ciągłość funkcji w punkcie
Poniższe definicje są sobie równoważne. We wszystkich z nich funkcja $f$ jest określona na liczbach rzeczywistych.

### Definicja przez granicę
Funkcja $f$ jest *ciągła* w pewnym punkcie $c$ swojej dziedziny jeśli granica $f(x)$ przy $x$ zbiegającym do $c$ istnieje i jest równa $f(x)$. Formalnie:

$$\lim_{x \to c}{f(x)} = f(c)$$

Oznacza to, że:
1. $f$ musi być zdefiniowana w punkcie $c$.
2. Granica obustronna musi istnieć.
3. Wartość granicy wynosi $f(c)$.

### Definicja przez granice ciągów
Funkcja $f$ jest ciągła w punkcie $c$, jeśli dla każdego ciągu $(x_n)$ punktów z dziedziny $M \subseteq \mathbb R$, które zbiegają do $c$, odpowiadający ciąg wartości $\left(f(x_n)\right)$ zbiega do $f(x)$. Formalnie:

$$\forall_{(x_n) \subset M} \quad \lim_{n\to\infty} x_n=c \Rightarrow \lim_{n\to\infty} f(x_n)=f(c)$$

Definicja ciągowa jest również zwana definicją Heinego.

### Definicja epsilonowo-deltowa
Funkcja $f$, jak poprzednio, jest ciągła w punkcie $c$, jeśli

$$\forall_{\varepsilon > 0}\; \exists_{\delta > 0}\; \forall_{x \in M}\ \ \ |x-x_0| < \delta \Rightarrow |f(x) - f(x_0)| < \varepsilon$$

Powyższa definicja jest również zwana definicją Cauchy'ego. Równoważnie:
$$\forall U \text{ - otoczenie } f(x_0) \exists V \text{ - otoczenie } x_0 \forall x \in V\cap A : f(x)\in U.$$

## Ciągłość funkcji na zbiorze
Każdy punkt $x_0$, w którym funkcja $f$ jest ciągła nazywa się **punktem ciągłości funkcji**.

Funkcja $f$ jest ciągła w przedziale otwartym $(a, b)$, jeżeli jest ciągła w każdym punkcie $x_0 \in (a, b)$.

Funkcja $f$ jest ciągła w przedziale domkniętym $[a, b]$, jeżeli spełnia następujące warunki:
1. Jest ciągła w $(a, b)$.
2. $\lim_{x \to a^+} {f(x)} = f(a)$ - jest prawostronnie ciągła w $a$.
3. $\lim_{x \to b^-} {f(x)} = f(b)$ - jest lewostronnie ciągła w $b$.

## Własności

### Zbiory zwarte
Zbiór $A\subseteq \mathbb{R}^n$ jest zwarty wtedy i tylko wtedy, gdy jest domknięty i ograniczony.

#### Obraz zbioru zwartego w funkcji ciągłej
Jeśli $A$ jest zbiorem zwartym w $\mathbb{R}$ oraz $f\colon A \to \mathbb{R}$ jest funkcją ciągłą, to $f(A)$ jest zbiorem zwartym w $\mathbb{R}$.

#### Twierdzenie Weierstrassa
Jeśli $f: [a,b] \to \mathbb R$ jest funkcją ciągłą, to jej **obraz jest zbiorem ograniczonym**. Ponadto funkcja $f$ **osiąga swoje kresy**, tzn. dla pewnych liczb $x_1,x_2\in [a,b]$ mamy:

$$\forall x \in [a,b]\quad f(x_1) \leqslant f(x) \leqslant f(x_2)$$

#### Twierdzenie Darboux
Każda funkcja ciągła określona na przedziale rzeczywistym przyjmuje wszystkie wartości pośrednie między obrazami krańców przedziału.

Niech $f\colon [a, b] \to \mathbb R$ będzie funkcją ciągłą. Jeżeli $f(a) \cdot f(b) < 0$ (tzn. wartości funkcji $f$ na końcach przedziałów mają różne znaki), to istnieje taki punkt $c$ w przedziale $(a, b)$, dla którego

$$f(c) = 0$$
