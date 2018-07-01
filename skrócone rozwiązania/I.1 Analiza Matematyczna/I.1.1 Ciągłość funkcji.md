Ciągłość funkcji w punkcie i na zbiorze. Warunki równoważne ciągłości. Własności funkcji ciągłych na zbiorach zwartych.

---

# Funkcja ciągła
Funkcja $f$ jest *ciągła* w pewnym punkcie $x_0$ swojej dziedziny jeśli granica $f(x)$ przy $x$ zbiegającym do $x_0$ istnieje i jest równa $f(x_0)$. Formalnie:

$$\lim_{x \to c}{f(x)} = f(x_0)$$

## Definicja Heinego
$$\forall_{(x_n) \subset M} \quad \lim_{n\to\infty} x_n=x_0 \implies \lim_{n\to\infty} f(x_n)=f(x_0)$$

## Definicja Cauchy'ego
$$\forall_{\varepsilon > 0}\; \exists_{\delta > 0}\; \forall_{x \in M}\ \ \ |x-x_0| < \delta \implies |f(x) - f(x_0)| < \varepsilon$$

# Własności
## Ciągłość na zbiorze
Funkcja $f$ jest ciągła w przedziale otwartym $(a, b)$, jeżeli jest ciągła w każdym punkcie $x_0 \in (a, b)$. Na domkniętym musi być mieć granicę lewostronną w $b$ i prawostronną w $a$.

## Arytmetyka
Ciągłe są:

1. $|f_1|$ jest funkcją ciągłą w $c$;
2. $f_1\pm f_2$ jest funkcją ciągłą w $c$;
3. $f_1\cdot f_2$ jest funkcją ciągłą w $c$;
4. $\frac{f_1}{f_2}$ jest funkcją ciągłą w $c$ (o ile $f_2(c)\ne 0$);
5. $f$ jest ciągła w $c$ oraz $g$ jest ciągła w $f(c)$, to $g \circ f$

## Twierdzenie Weierstrassa
Dla funkcji ciągłej mamy obraz jako zbiór ograniczony. Osiąga swoje kresy:

$$\forall x \in [a,b]\quad f(x_1) \leqslant f(x) \leqslant f(x_2)$$

## Twierdzenie Darboux
Przyjmuje wszystkie wartości pośrednie. Dodatkowo, jak wartości na krańcach są przeciwne to istnieje punkt $c$ w przedziale $(a, b)$, dla którego

$$f(c) = 0$$
