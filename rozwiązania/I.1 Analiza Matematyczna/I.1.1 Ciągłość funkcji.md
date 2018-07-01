Ciągłość funkcji w punkcie i na zbiorze. Warunki równoważne ciągłości. Własności funkcji ciągłych na zbiorach zwartych.

---

# Funkcja ciągła
Funkcja, którą intuicyjnie można scharakteryzować jako:

1. Funkcję, w której *mała* zmiana argumentu powoduje *małą* zmianę wartości funkcji. Inaczej mówiąc, dla argumentów leżących *blisko* siebie wartości funkcji też leżą *blisko*.

2. Funkcję rzeczywistą (określoną na zbiorze $\Bbb R$ lub jego podprzedziale), której wykresem jest *ciągła* linia tj. linia narysowana bez odrywania ołówka od papieru.

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
Funkcja $f$, jak poprzednio, jest ciągła w punkcie $c$, jeśli dla dowolnie małej liczby $\varepsilon > 0$ istnieje pewna liczba $\delta > 0$, która dla wszystkich $x$ w promieniu $\delta$ od $c$:

$$c - \delta < x < c + \delta$$

spełnia:

$$f(c) - \varepsilon < f(x) < f(c) + \varepsilon$$

Alternatywnie, ciągłość funkcji w punkcie $c$ oznacza:

$$\forall_{\varepsilon > 0}\; \exists_{\delta > 0}\; \forall_{x \in M}\ \ \ |x-x_0| < \delta \Rightarrow |f(x) - f(x_0)| < \varepsilon$$

Bardziej intuicyjnie, jeśli chcemy wybrać pewne małe otoczenie wartości $f(x)$ wokół $f(c)$, to musimy wybrać pewne małe otoczenie punktów $x$ wokół $c$. Co więcej, takie otoczenie może być dowolnie małe.

Powyższa definicja jest również zwana definicją Cauchy'ego.

## Ciągłość funkcji na zbiorze
Każdy punkt $x_0$, w którym funkcja $f$ jest ciągła nazywa się **punktem ciągłości funkcji**.

Funkcja $f$ jest ciągła w przedziale otwartym $(a, b)$, jeżeli jest ciągła w każdym punkcie $x_0 \in (a, b)$.

Funkcja $f$ jest ciągła w przedziale domkniętym $[a, b]$, jeżeli spełnia następujące warunki:
1. Jest ciągła w $(a, b)$.
2. $\lim_{x \to a^+} {f(x)} = f(a)$ - jest prawostronnie ciągła w $a$.
3. $\lim_{x \to b^-} {f(x)} = f(b)$ - jest lewostronnie ciągła w $b$.

## Własności

### Arytmetyka funkcji ciągłych
Jeśli $f_1$ i $f_2$ są funkcjami ciągłymi w punkcie $c$, to:
1. $|f_1|$ jest funkcją ciągłą w $c$;
2. $f_1\pm f_2$ jest funkcją ciągłą w $c$;
3. $f_1\cdot f_2$ jest funkcją ciągłą w $c$;
4. $\frac{f_1}{f_2}$ jest funkcją ciągłą w $c$ (o ile $f_2(c)\ne 0$);

### Ciągłość złożenia
Jeśli:

* $A, B \subseteq \mathbb{R}$,
* $f : A \to B$,
* $g : B \to \mathbb{R}$,

To:
1. Jeśli $f$ jest ciągła w $c$ oraz $g$ jest ciągła w $f(c)$, to $g \circ f$ jest ciągła w $c$.
2. Jeśli $f$ i $g$ są funkcjami ciągłymi, to ich złożenie również jest funkcją ciągłą.

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
