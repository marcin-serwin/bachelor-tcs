Całka Riemanna. Podstawowe metody całkowania funkcji jednej zmiennej rzeczywistej. Całkowanie przez części. Całkowanie przez podstawienie.

---
# Wstęp
Niech $D \subseteq \mathbb{R}$ będzie przedziałem oraz niech $f: D\longrightarrow\mathbb{R}$ będzie funkcją.
Funkcję $F: D \longrightarrow \mathbb{R}$ nazywamy *funkcją pierwotną* funkcji $f$, jeśli $F$ jest różniczkowalna i $F' = f$.

Dwie dowolne pierwotne funkcji $f: \mathbb{R}\supseteq D \longrightarrow\mathbb{R}$ różnią się o stałą, to znaczy:
* Jeśli $F$ i $G$ są pierwotnymi funkcji $f$, to $F-G = c$ dla pewnego $c \in\mathbb{R}$
* Jeśli $F$ jest pierwotną funkcji $f$ oraz $F-G = c$ dla pewnego $c \in \mathbb{R}$, to $G$ też jest pierwotną funkcji $f$.

Niech $[a,b] \subseteq \mathbb{R}$ będzie przedziałem. Wtedy ciąg $(x_0, \ldots, x_n)$ liczb takich że $a=x_0$, $b=x_n$ oraz $x_i < x_{i+1}$ dla $i=0, \ldots, n-1$ nazywamy *podziałem* przedziału $[a,b]$.

Liczbę $d(P) \ \stackrel{df}{=}\  \max_{(i=1,\ldots n)}(x_i-x_{i-1})$ nazywamy *średnicą* podziału $P$. Ponadto wprowadzamy oznaczenie $\Delta x_i\stackrel{df}{=} x_i-x_{i-1}$ dla $i=1,\ldots,n$.

Ciąg podziałów $\{ P_m \}_{m\in\mathbb{N}}$ nazywamy *normalnym*, jeśli $\lim\limits_{m\rightarrow +\infty} d(P_m)=0$.

Niech $f: [a,b] \to \mathbb{R}$ będzie funkcją oraz $P=(x_0, \ldots, x_n)$ będzie podziałem przedziału $[a,b]$. Wtedy liczbę $L(f,P) \ \stackrel{df}{=}\   \sum_{i=1}^n\Delta x_i\cdot m_i(f,P)$, gdzie $m_i(f,P)\ \stackrel{df}{=}\ \inf_{x\in[x_{i-1},x_i]}f(x)$
 nazywamy *sumą dolną całkową*. \
Analogicznie liczbę $U(f,P) \stackrel{df}{=}\ \sum_{i=1}^n\Delta x_i\cdot M_i(f,P)$, gdzie $M_i(f,P)\ \stackrel{df}{=}\ \sup_{x\in[x_{i-1},x_i]}f(x)$ nazywamy *sumą górną całkową*. \
Liczbę $S(f,P) \ =\ S(f,P,y_1,\ldots,y_n) \ \stackrel{df}{=}\ \sum_{i=1}^n\Delta x_i\cdot f(y_i)$, dla $y_i\in[x_{i-1},x_i]$ nazywamy *sumą całkową* funkcji $f$ dla podziału $P$ wyznaczoną przez punkty pośrednie $y_1,\ldots,y_n$.

# Całka Riemanna
Niech $f: [a,b] \to \mathbb{R}$ będzie funkcją ograniczoną (to znaczy $\exists M>0\ \forall x\in[a,b]:\ \big|f(x)\big|\le M$). \
Funkcję $f$ nazywamy całkowalną w sensie Riemanna w przedziale $[a,b]$, jeśli dla dowolnego normalnego ciągu $\{ P_m \}_{m\in\mathbb{N}}$ podziałów przedziału $[a,b]$, istnieje granica $\lim\limits_{m\rightarrow +\infty} S(f,P_m,y_1^m,\ldots,y_{n_m}^m)$ niezależna od wyboru punktów pośrednich. \
Granicę tę nazywamy całką Riemanna funkcji $f$ w przedziale $[a,b]$ i oznaczamy $\int\limits_a^b f(x)\,dx$. 

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

## Całkowanie przez podstawienie (przez zamianę zmiennych)
Jeżeli funkcja $f$ jest całkowalna na przedziale $P$, zaś funkcja $g$ ma ciągłą pochodną na przedziale $T$ i przekształca go na przedział $P$ oraz znana jest całka <br> $\int f(t)\, dt = F(t) + C$, <br> to <br> $\int f(g(x)) \cdot g'(x)\, dx = F(g(x)) + C$.
