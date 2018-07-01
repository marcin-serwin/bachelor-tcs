Podstawowe metody całkowania funkcji jednej zmiennej rzeczywistej.

---

# Podstawowe metody całkowania

## Liniowość całki

Niech $f, g: [a,b] \rightarrow \mathbb{R}$ oraz istnieją dla nich całki nieoznaczone. Ponadto niech $\lambda \in \mathbb{R}$ będzie stałą.  <br>
Wtedy zachodzi:
* $\int(f\pm g)(x)\,dx= \int f(x)\,dx\pm\int g(x)\,dx$.
* $\int(\lambda f)(x)\,dx =\lambda\int f(x)\,dx$.

## Całkowanie przez części

Niech $f, g: [a,b] \rightarrow \mathbb{R}$ mają na $[a, b]$ ciągłe pochodne. <br>
 Wtedy zachodzi:

$\int f(x)\cdot g'(x)\, dx = f(x)\cdot g(x)\, -\, \int f'(x)\cdot g(x) dx$ 
**na przedziale $[a, b]$.**

### Przykłady
Chcemy policzyć $\int x \, cos(x) dx$.
Podstawiamy $f = x$, $g' = cos(x)$. Wtedy $f' = 1$, $g = sin(x)$.
$\int x \cdot cos(x)\, dx = x\cdot sin(x)\, -\, \int sin(x)\, dx = x\cdot sin(x) - cos(x) + C$.

Podobnie $\int ln \, x\, dx = \int 1 \cdot ln(x)\, dx$.
Podstawiamy $f = ln\, x$, $g' = 1$.

Wtedy $\int ln\, x\, dx = x\cdot ln(x) - \int 1\, dx = x\cdot ln(x) - x + C$.

## Całkowanie przez podstawienie (przez zamianę zmiennych)
Jeżeli funkcja $f$ jest całkowalna na przedziale $P$, zaś funkcja $g$ ma ciągłą pochodną na przedziale $T$ i przekształca go na przedział $P$ oraz znana jest całka <br> $\int f(t)\, dt = F(t) + C$, <br> to <br> $\int f(g(x)) \cdot g'(x)\, dx = F(g(x)) + C$.

### Przykłady

$\int (e^x+5)\cdot e^x\, dx$.
Podstawiamy $t = e^x$. Wtedy $dt = e^x\, dx$ (bierzemy pochodne obu stron).
Zatem $\int (e^x+5)\cdot e^x\, dx = \int (t+5)\, dt = \frac{t^2}{2} + 5t + C = \frac{e^{2x}}{2} + 5e^x + C$.

$\int sinx \cdot cos x\, dx$. Podstawiamy $t = sin x$. Wtedy $dt = cos x \, dx$.
$\int sin x\cdot cos x \, dx = \int t\, dt = \frac{t^2}{2} + C = \frac{sin^2 x}{2} + C$.