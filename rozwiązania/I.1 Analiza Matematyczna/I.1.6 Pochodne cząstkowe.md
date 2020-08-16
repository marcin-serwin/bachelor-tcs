Pochodne cząstkowe. Różniczkowalność funkcji wielu zmiennych. Zależność
między istnieniem pochodnych cząstkowych a różniczkowalnością.

---

# Pochodne cząstkowe
Niech $A\subset \mathbb{R}^n$ i niech $f:A\rightarrow \mathbb{R}^m$ będzie $n$-arną funkcją. Pochodna cząstkowa w punkcie $a\in int(A)$ względem zmiennej $a_k$ (w kierunku $x_i$) zdefiniowana jest jako granica 
$\frac{\mathrm{d}f}{\mathrm{d}x_i}(a_1,...,a_n)=\lim_{h\rightarrow 0} \frac{f(a_1,...,a_i+h,...,a_n)-f(a_1,...,a_n)}{h}$.

# Różniczkowalność
Funkcja $f:\mathbb{R}^m\rightarrow \mathbb{R}^n$ jest różniczkowalna w punkcie $x_0$, gdzie stnieje przekształcenie liniowe $J:\mathbb{R}^m\rightarrow \mathbb{R}^n$ spełniające
$\lim_{h\rightarrow 0} \frac{\|f(x_0+h) - f(x_0)-J(h)\|_{\mathbb{R}^n}}{\|h\|_{\mathbb{R}^m}}=0$.

## Zależność między istnieniem pochodnych cząstkowych a różniczkowalnością.
Jeżeli funkcja jest różniczkowalna w $x_0$, to wszystkie cząstkowe pochodne istnieją w $x_0$ a $J$ jest zadane przez Jakobian $f$:
$J=\begin{bmatrix}\frac{\mathrm{d}f}{\mathrm{d}x_1} ... \frac{\mathrm{d}f}{\mathrm{d}x_n}  \end{bmatrix}$.

