Wzór Taylor'a dla funkcji jednej zmiennej rzeczywistej. Zastosowania wzoru Taylora do obliczeń przybliżonych. Rozwijanie funkcji w szereg potęgowy.

---

# Twierdzenie Taylor'a

Niech będzie dana funkcja $f$ określona i $n$-krotnie różniczkowalna w pewnym otoczeniu punktu $a$. Niech $x$ należy do tego otoczenia. Wówczas istnieje takie $c$ zależne od $n$, że $c \in [a,x]$  dla $x>a$ lub $c \in [x,a]$ dla $x<a$ oraz:

$$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + ... + \frac{f^{(n-1)}(a)}{(n-1)!}(x-a)^{n-1} + R_n,$$

gdzie $R_n = \frac{f^{(n)}(c)}{n!}(x-a)^n$ nazywamy ręsztą w postaci Lagrange'a.  

Szczególny przypadek wzoru Taylor'a w którym $a = 0$ stanowi wzór Maclaurina:

$$f(x) = f(0)+\frac{f'(0)}{1!}\cdot x + \frac{f''(0)}{2!}\cdot x^2 + \frac{f'''(0)}{3!}\cdot x^3 + \dots $$

# Zastosowania wzoru Taylora do obliczeń przybliżonych.

Wzór Taylora pozwala zmiejszczyć ilość wykonywanych obliczeń podczas obliczania wartości funkcji poprzez ograniczenie się do liczenia jedynie pierwszych kilku wyrazów szeregu (najlepiej za pomocą schematu Hornera). Reszta $R_n$ we wzorze Taylor'a pozwala kontrolować błąd. Ze względu na silnię w mianowniku wszystkich wyrazów rozwinięcia, wystarczy zwykle rozwinięcie do pierwszych kilku wyrazów szeregu.

## Przykład zastosowania rozwinięcia Taylor'a

Poniższy przykład ilustruje rozwinięcie Taylor'a funkcji $sin(x)$ wraz z analizą błędu.

Wypiszmy cztery pierwsze wyrazy rozwinięcia funkcji $sin(x)$ wokół zera:

$$sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + ... $$

Błąd oszacowania pochodzącego z rozwinięcia do wyrazów stopnia szóstego(efektywnie piątego, bo szósty jest zerowy), zgodnie ze wzorem na resztę $R_n$, wynosi:

$$\left|\frac{x^7}{7!}\right| = \frac{|x|^7}{5040}$$

Jeżeli weźmiemy $x$ w przedziale $(-0.3, 0.3)$, wówczas błąd wyniesie co najwyżej:

$$ \frac{(0.3)^7}{5040} \approx 4.3 \times 10^{-8}.$$

# Rozwijanie funkcji w szereg potęgowy
Jeśli funkcja $f: D \to \mathbb{R}$, gdzie $D \subseteq \mathbb {R}$ ma w punkcie $x_{0}\in D$ pochodne dowolnego rzędu, to można rozważać szereg:

$\sum _{n=0}^{\infty }{\frac {1}{n!}}f^{(n)}(x_{0})(x-x_{0})^{n}$, 

gdzie $f^{(n)}(x_0)$ oznacza $n$-tą pochodną funkcji $f$ oraz przyjęto $f^{(0)}(x_{0})=f(x_{0})$.  Szereg ten nazywamy *szeregiem Taylora* funkcji $f$. Jeśli $x_0=0$ to szereg ten nazywamy *szeregiem Maclaurina*.

Samą funkcję $f$ nazywa się funkcją **analityczną** w punkcie $x_0$, jeśli dla pewnego otoczenia tego punktu powyższy szereg jest zbieżny punktowo do funkcji $f$ (funkcja jest równa swojemu rozwinięciu Taylora). Jeśli jest ona analityczna w każdym punkcie dziedziny, to nazywa się ją po prostu analityczną lub gładką.