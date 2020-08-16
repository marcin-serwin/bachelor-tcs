Ekstrema funkcji wielu zmiennych. Efektywne metody wyznaczania ekstremów lokalnych funkcji wielu zmiennych.

---
# Ekstrema funkcji wielu zmiennych
Funkcja $f$ ma w punkcie $x_0$ minimum lokalne (maksimum lokalne), jeżeli istnieje otoczenie $U\subset X$ punktu $x_0$, takie że dla każdego punktu $x\in U$ spełniona jest nierówność: $f(x)\geq f(x_0)$ ($f(x)\leq f(x_0)$).

Funkcja $f$ ma w punkcie $x_0$ minimum lokalne właściwe (maksimum lokalne właściwe), jeżeli istnieje otoczenie $U\subset X$ punktu $x_0$, takie że dla każdego punktu $x\in U$ spełniona jest nierówność: $f(x)> f(x_0)$ ($f(x)< f(x_0)$).

Minima i maksima lokalne nazywamy ekstremami lokalnymi.

Liczbę $m$ ($M$) nazywamy najmniejszą (największą) wartością funkcji $f$ na zbiorze $A\subseteq X$, jeżeli istnieje punkt $x_0\in A$, taki że $f(x_0)=m$ i dla każdego punktu $x\in A$, $f(x)\geq f(x_0)=m$ ($f(x)\leq f(x_0) = M$).
Liczbę $m$ nazywamy minimum (maksimum) globalnym funkcji $f$ na zbiorze $A$.

Minimum i maksimum globalne nazywamy ekstremami globalnymi.

# Warunek konieczny istnienia ekstremum funkcji wielu zmiennych
Jeżeli
* $f$ ma ekstremum w punkcie $x_0$,
* istnieją pochodne $\frac{\mathrm{d}f}{\mathrm{d}x_i}, i=1,...,n$ cząstkowe w punkcie $x_0$,

to 
$$\frac{\mathrm{d}f}{\mathrm{d}x_1}(x_0)=0,\frac{\mathrm{d}f}{\mathrm{d}x_2}(x_0)=0,...,\frac{\mathrm{d}f}{\mathrm{d}x_n}(x_0)=0 \Leftrightarrow \nabla f(x_0)=[0,0,...,0].$$

# Wyznaczanie ekstremów
Punkt $x_0$, w którym przynajmniej jedna pochodna cząstkowa nie istnieje lub w którym wszystkie pochodne cząstkowe są równe zero nazywamy punktem krytycznym funkcji $f$.

Punkt krytyczny $x_0$, w którym jest spełniony warunek $\nabla (x_0) = [0,0,…,0]$ nazywamy punktem
stacjonarnym funkcji $f$.

Załóżmy teraz, że w punkcie $x_0 \in X$ istnieją wszystkie pochodne cząstkowe rzędu drugiego funkcji $f$.

Macierz
$$H_f(x_0) := \begin{bmatrix}  \frac{\mathrm{d}^2f}{\mathrm{d}x_1^2}(x_0) &...& \frac{\mathrm{d}^2f}{\mathrm{d}x_1x_n}(x_0)  \\&...&\\ \frac{\mathrm{d}^2f}{\mathrm{d}x_nx_1}(x_0) &...& \frac{\mathrm{d}^2f}{\mathrm{d}x_n^2}(x_0) \end{bmatrix}$$
nazywamy hesjanem funkcji $f$ w punkcie $x_0$.
Niech
$\Delta_i(x_0) := det(H_{1:i,1:i}), i=1,...,n.$

## Warunek wystarczający istnienia ekstremum (Kryterium Sylvestera)
Załóżmy, że $\frac{\mathrm{d}f}{\mathrm{d}x_1}(x_0)=0,\frac{\mathrm{d}f}{\mathrm{d}x_2}(x_0)=0,...,\frac{\mathrm{d}f}{\mathrm{d}x_n}(x_0)=0$, gdzie $x_0$ jest punktem stacjonarnym funkcji f. Jeżeli
* $\Delta_i(x_0)>0$, dla $i=1,2,...,n$ ($H_f$ dodatnio określony), to w punkcie $x_0$ funkcja $f$ ma minum lokalne właściwe,
* $\Delta(x_0) < 0, \Delta_2 > 0, ..., (-1)^n\Delta_n(x_0)>0$ ($H_f$ ujemnie określony), to w punkcie $x_0$ funkcja $f$ ma maksimum lokalne właściwe.

Analogicznie niewłaściwe minima ze słabymi nierównościami.
