Centralne Twierdzenie Graniczne. Warianty mocniejszych wypowiedzi.

---

# Rozkład normalny

Rozkład $P$ nazywamy rozkładem normalnym, jeżeli istnieją takie liczby rzeczywiste $m$ oraz $\sigma>0$, że funkcja $f\colon {\Bbb R}\longrightarrow {\Bbb R}$, określona wzorem:
$$ f(x) =  \frac{1}{\sqrt{2\pi}\sigma}\,e^{-\frac{1}{2}(\frac{x - m}{\sigma})^2}\;\;\mbox{ dla } x\in {\Bbb R},$$
jest gęstością tego rozkładu.

# Centralne Twierdzenie Graniczne

# Założenia
$(\Omega, \Sigma,P)$ jest przestrzenią probabilistyczną, zaś $X_1,\,X_2,\, X_3,\dots$ - ciągiem niezależnych zmiennych losowych określonych na $\Omega$. Wszystkie zmienne losowe  $X_i$ mają taki sam rozkład, a ich wspólna wartość oczekiwana $m$ oraz wariancja $\sigma^2$ istnieją i są skończone, przy czym $\sigma > 0$ (ten ostatni warunek oznacza, że zmienne losowe nie są stałymi). Jak zawsze oznaczamy:
$$ S_n = X_1 + \dots +X_n.$$

Będziemy badać najpierw zbieżność tak zwanych sum standaryzowanych, a dopiero potem wyciągniemy wnioski dotyczące samych sum $S_n$ oraz średnich $S_n \over n$.

Zmienną losową:
$$Z_n   :=   \frac{S_n   -E(S_n)}{\sqrt{D^2(S_n)}}   =    \frac{S_n -nm}{\sigma \sqrt{n}}$$

nazywamy standaryzacją sumy $S_n$. Jak łatwo zauważyć:

$$E(Z_n) = 0\;\; \textrm{oraz}\;\; D^2(Z_n) = 1.$$

# Twierdzenie Linderberg-Levy
> Dla każdego $x \in  {\Bbb R}$ zachodzi równość:
$$ \lim_{n\rightarrow \infty}P(Z_n \le  x)  =  \Phi(x),$$
gdzie $\Phi$ jest dystrybuantą rozkładu $N(0,1)$.

## Centralne Twierdzenie Graniczne dla sum
> Rozkład zmiennej losowej $S_n$ jest asymptotycznie równy rozkładowi  $N(nm,\sigma\sqrt{n})$. Inaczej:
$$ \lim_{n\rightarrow \infty}(F_{S_n}(x)   - \Phi_{nm,\sigma\sqrt{n}}(x)) = 0,$$
dla $x \in  {\Bbb R}$.

## Centralne Twierdzenie Graniczne dla średnich
>Rozkład zmiennej losowej $\frac{S_n}{n}$ jest asymptotycznie równy rozkładowi $N(m,{\sigma\over \sqrt{n}})$. Inaczej:
$$\lim_{n\rightarrow         \infty}(F_{\frac{S_n}{n}}(x)         - \Phi_{m,{\sigma\over \sqrt{n}}}(x)) = 0,$$
dla $x \in  {\Bbb R}$.

## Centralne Twierdzenie Graniczne - sformułowanie ogolne
**Schemat serii** – tablica zmiennych losowych postaci $(X_{n,k_{n}})$, gdzie  $k_{n}\to \infty, n=1,2, \dots$. Zmienne $X_{n,1},X_{n,2},\dots ,X_{n,k_{n}}$ są niezależne i zdefiniowane na tej samej przestrzeni probabilistycznej.

>Niech $(X_{n,k})$ będzie schematem serii, w którym $EX_{n,k}=0$ dla $k\leqslant n$ i dla każdego $n$ mamy $\sum _{k=1}^{n}D^{2}X_{n,k}=1$. Jeśli spełniony jest warunek Lindeberga, tj. dla każdego $\epsilon >0$ zachodzi $\lim _{n\to \infty }\sum _{k=1}^{n}EX_{n,k}^{2}\mathbf {1} _{\{|X_{n,k}|>\epsilon \}}=0$, to $\sum _{k=1}^{n}X_{n,k}{\xrightarrow {D}}N(0,1)$.
