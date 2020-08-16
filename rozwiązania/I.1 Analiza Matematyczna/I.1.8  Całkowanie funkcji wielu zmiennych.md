Całkowanie funkcji wielu zmiennych. Twierdzenie Fubiniego. Twierdzenie o zamianie zmiennych.

---

# Definicja całki Riemanna funkcji wielu zmienych
Kostką w $\mathbb{R}^n$ będziemy nazywać zbiór $K:=[a_1,b_1]\times ... \times [a_n,b_n]$, czyli iloczyn kartezjański przedziałów $[a_i,b_i], i=1,...,n$.

Objętością kostki będziemy nazywać liczbę $v(K):=(b_1-a_1)\cdot ... \cdot (b_n-a_n)$.

Liczbę $\delta(K):=max\{(b_1-a_1),...,(b_n-a_n)\}$ nazwiemy średnicą kostki $K$.

Podzielmy teraz naszą kostkę na mniejsze kostki $K_1,...,K_s$, rozłącznych wnętrzach i takich, że $K=K_1 \cup ...\cup K_s$. Oznaczmy tern zbiór kostek $K_1,...,K_s$ przez $P$.

Określony wyżej zbiór $P$ nazywamy podziałem kostki $K$.
Liczbę $\delta(P):=max\{\delta(K_1),...,\delta(K_s)$ nazywamy średnicą podziału $P$.

Weźmy teraz ciąg takich podziałów kostki $K$, czyli ciąg $P_1,P_2,P_3,\ldots$. Niech $\delta_j$ oznacza średnicę podziału $P_j$.

Ciąg podziałów $P_1,P_2,P_3,\ldots$ nazwiemy ciągiem normalnym, gdy  $\lim_{j\to\infty}\delta_j=0$, czyli gdy średnice kolejnych podziałów zmierzają do zera.

Weźmy teraz funkcję ograniczoną $f: K\to \mathbb{R}$.
Analogicznie, jak w przypadku funkcji jednej zmiennej, określamy górną sumę całkową i dolną sumę całkową, a także sumę całkową zależną od punktów pośrednich


(1) Dla podziału $P=\{K_1,\ldots ,K_t\}$ kostki $K$ i funkcji ograniczonej $f: K\to \mathbb{R}$ definiujemy

$$\begin{aligned}  m_i(f,P) &= \inf\{f(x), x\in K_i\},\\ M_i(f,P) &= \sup\{f(x), x\in K_i\}, \end{aligned}$$
dla $i=1,\ldots ,t$.

(2) Dolną sumą całkową odpowiadającą podziałowi $P$ nazywamy liczbę

$$L(f,P):=\sum_{i=1}^tm_i(f,P)v(K_i).$$
(3) Górną sumą całkową odpowiadającą podziałowi $P$ nazywamy liczbę

$$U(f,P) \ :=\ \sum_{i=1}^tM_i(f,P)v(K_i).$$
(4) W każdej z kostek wybierzmy dowolny punkt $x_i\in K_i$. Dostajemy ciąg punktów pośrednich, $x_1,\ldots ,x_t$.
Sumą całkową (funkcji $f$ dla podziału $P$ i punktów pośrednich $x_1,\ldots ,x_t$) nazywamy liczbę

$$S(f,P,x_1,\ldots ,x_t)=\sum_{i=1}^tf(x_i)v(K_i).$$

Weźmy teraz normalny ciąg $P_1,P_2,\ldots$. podziałów kostki $K$. Dla każdego podziału  $P_j$ wybierzmy ciągpunktów pośrednich $x_1^j,\ldots,x_{t_j}^j$. Weźmy sumę całkową $S(f, P,x_1^j,\ldots,x_{t_j}^j)$. Możemy teraz postawić następującą definicję:

## Definicja
Niech $f: K\to \mathbb{R}$ będzie funkcją ograniczoną. Mówimy, że funkcja $f$ jest całkowalna w sensie Riemanna na kostce $K$, jeśli dla każdego normalnego ciągu podziałów $P_1,P_2,\ldots$., istnieje granica
$$\lim_{j\to\infty} S(f, P,x_1^j,\ldots,x_{t_j}^j)$$
i granica ta nie zależy ani od wyboru ciągu podziałów, ani od wyboru punktów pośrednich.
Powyższą granicę oznaczamy
$$\displaystyle\int\limits_Kf(x)dx$$
i nazywamy całką Riemanna funkcji $f$ po kostce $K$.

# Twierdzenie Fubiniego
> Niech $A$ będzie kostką w $\mathbb{R}^n$ a $B$ kostką w $\mathbb{R}^m$. Zmienne w $\mathbb{R}^n$ oznaczmy przez $x$ a w $\mathbb{R}^m$ przez $y$. Weźmy funkcję $f:A\times B\to \mathbb{R}$. Załóżmy, że dla każdego ustalonego $y\in B$ funkcja $f(\cdot,y)$ jest całkowalna w sensie Riemanna na $A$ oraz że dla każdego ustalonego $x\in A$ funkcja $f(x,\cdot)$ jest całkowalna w sensie Riemanna na $B$. Wtedy
$$\int\limits_{A\times B}f(x,y)\ dxdy=\int\limits_A\left(\int\limits_B f(x,y) dy\right)dx \ =\ \int\limits_B\left(\int\limits_A f(x,y) dx\right)dy.$$

# Twierdzenie o zamianie zmiennych
Załóżmy, że mamy zbiory J-mierzalne (miara Jordana - klasyczna objętość kostki) $B$ i $D$ w $\mathbb{R}^n$ oraz odwzorowanie $\varphi : B\to D$, które jest ${\cal C^1}$-dyfeomorfizmem (to znaczy, że $\varphi$ jest bijekcją klasy ${\cal C^1}$ i odwzorowanie odwrotne do $\varphi$ też jest tej klasy). Dla odwzorowania $\varphi(x)=(\varphi_1(x_1,\ldots,x_n),\ldots,\varphi_n(x_1,\ldots,x_n))$ możemy wypisać macierz Jacobiego, czyli macierz pochodnych cząstkowych (w punkcie $x\in B$):

$$Jac_x\varphi \ =\ \left[ \begin{array} {ccc}  \frac{\partial \varphi_1}{\partial x_1}(x) &\ldots&  \frac{\partial\varphi_1}{\partial x_n}(x)\\ \vdots&\ldots&\vdots \\  \frac{\partial \varphi_n}{\partial x_1}(x) &\ldots&  \frac{\partial\varphi_n}{\partial x_n}(x) \end{array}  \right].$$
Wyznacznik tej macierzy (w punkcie $x\in B$) nazywamy jakobianem $\varphi$ w punkcie $x$. Gdy $\varphi$ jest dyfeomorfizmem, to $\det Jac_x\varphi\ne 0$.

Współrzędne w zbiorze $D$ oznaczmy przez $y=(y_1,\ldots,y_n)$.
> Przy oznaczeniach i założeniach jak wyżej, niech $f:D\to  \mathbb{R}$ będzie funkcją ciągłą. Wtedy

$$\int\limits_Df(y)dy_1\ldots dy_n \ =\ \int\limits_Bf(\varphi(x))|\det Jac_x\varphi|dx_1\ldots dx_n.$$
