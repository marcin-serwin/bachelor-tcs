Podstawowe metody całkowania funkcji jednej zmiennej rzeczywistej.

---

# Całkowanie przez części
Jeśli $f, g: [a,b] \rightarrow \mathbb{R}$ mają na $[a, b]$ ciągłe pochodne, to na tym przedziale zachodzi:

$$\int f(x)\cdot g'(x)\, dx = f(x)\cdot g(x)\, -\, \int f'(x)\cdot g(x) dx$$

#### Przykłady
Chcemy policzyć $\int x \, cos(x) dx$. Podstawiamy:
* $f = x \implies f' = 1$
* $g' = \cos(x) \implies g = \sin(x)$

$$\int x \cdot \cos(x)\, dx = x\cdot \sin(x)\, -\, \int \sin(x)\, dx = x\cdot \sin(x) + \cos(x) + C$$

Podobnie $\int \ln x\, dx = \int 1 \cdot \ln(x)\, dx$. Podstawiamy:
* $f = \ln x \implies f' = \frac{1}{x}$
* $g' = 1 \implies g = x$

$$\int \ln x\, dx = x\cdot \ln(x) - \int 1\, dx = x\cdot \ln(x) - x + C$$

# Całkowanie przez podstawienie
Jeśli $f$ jest całkowalna na przedziale $F$, a $g: G \rightarrow F$ ma ciągłą pochodną na przedziale $G$ oraz

$$\int f(t)\, dt = F(t) + C$$

to

$$\int f(g(x)) \cdot g'(x)\, dx = F(g(x)) + C$$

#### Przykłady
$\int (e^x+5)\cdot e^x\, dx$. Podstawiamy:
* $t = e^x \implies dt = e^x\, dx$

$$\int (e^x+5)\cdot e^x\, dx = \int (t+5)\, dt = \frac{t^2}{2} + 5t + C = \frac{e^{2x}}{2} + 5e^x + C$$

Podobnie $\int sinx \cdot cos x\, dx$. Podstawiamy:
* $t = sin x \implies dt = cos x \, dx$

$$\int sin x\cdot cos x \, dx = \int t\, dt = \frac{t^2}{2} + C = \frac{sin^2 x}{2} + C$$
