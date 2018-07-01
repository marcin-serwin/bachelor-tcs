Całka Riemanna. Podstawowe twierdzenie rachunku całkowego.

---

# Funkcja pierwotna
Taka $F$, że $F' = f$. Mamy rodzinę funkcji pierwotnych i wszystkie różnią się o stałą.

# Interpretacja geometryczna
Rozważmy przedział $[a,b]$. Podział tego przedziału jest zdefiniowany za pomocą ciągu liczb, gdzie pierwsza to $a$, ostatnia to $b$, a pośrodku są jakieś dowolne punkty (ale po kolei od lewej do prawej).

Średnica przedziału to największa różnica (odległości $x_{i + 1} - x_i$) w tym przedziale. Jak weźmiemy sobie ciąg takich podziałów to będzie on *normalny*, jeśli ciąg średnic tych przedziałów zbiega do zera.

Mamy dolną i górną sumę całkową. Dolna to jest: dla każdego przedziału weź najmniejszą wartość i policz prostokąt (przemnóż przez długość przedziału). W górnej weź najwiekszą wartość i zrób to samo.

Suma całkowa (tak po prostu) jest zdefiniowana dla dowolnych punktów pośrednich. Czyli dla każdego przedziału sobie jakiś wybierasz i sumujesz.

# Całka Riemanna
Jeżeli przy dowolnym ciągu normalnym podziałów $[a,b]$ oraz przy dowolnym wyborze punktów pośrednich ciąg sum całkowych dąży zawsze do skończonej granicy równej $I$, to tę granicę nazywamy całką oznaczoną funkcji na przedziale i oznaczamy jako:

$$I = \int\limits_a^b f(x)\,dx$$

Funkcja jest całkowalna na przedziale wtedy i tylko wtedy, gdy dla dowolnego ciągu podziałów różnica górnej i dolnej sumy całkowej zbiega do zera.

## Własności
* $\int\limits_b^a f(x)\,dx \ \stackrel{df}{=} -\int\limits_a^b f(x)\,dx$,
* $\int\limits_a^a f(x)\,dx  \stackrel{df}{=}\, 0$
* $\int\limits_a^b kf(x)\,dx \ =\ k\displaystyle\int\limits_a^b f(x)\,dx.$
* $\int\limits_a^b\big[f(x)\pm g(x)\big]\,dx \ =\ \displaystyle\int\limits_a^b f(x)\,dx\pm\displaystyle\int\limits_a^b g(x)\,dx$.
* $\int\limits_a^b f(x)\,dx \ =\ \int\limits_a^c f(x)\,dx + \int\limits_c^b f(x)\,dx$.
* Jeśli $f\le g$, to $\int\limits_a^b f(x)\,dx \le \int\limits_a^b g(x)\,dx$.

## Podstawowe twierdzenie rachunku całkowego
Jeśli $f: [a,b] \to \mathbb{R}$ jest funkcją ciągłą, $F$ jest pierwotną funkcji $f$, to

$$\int\limits_a^b f(x)dx \ =\ F(b)-F(a) = F\vert_{a}^{b}$$
