Wzór Taylor'a dla funkcji jednej zmiennej rzeczywistej. Zastosowania wzoru Taylora do obliczeń przybliżonych. Rozwijanie funkcji w szereg potęgowy.

---

# Wzór Taylor'a
Mamy funkcję określoną i $n$-krotnie różniczkowalną w otoczeniu punktu $x_0$. Bierzemy $x$ z tego otoczenia. Istnieje jakieś takie $c$, że

$$f(x) = \sum_{n = 0}^{N} \left(\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n\right) + R_N$$

Reszta w postaci Lagrange'a to $R_N = \frac{f^{(N)}(c)}{N!}(x-x_0)^N$.

Jak podstawimy $x_0 = 0$ to mamy wzór Maclaurina:

$$f(x) = \sum_{n = 0}^{N} \left(\frac{f^{(n)}(0)}{n!}x^n\right) + R_N$$

## Obliczenia przybliżone
Liczymy kilka pierwszych wyrazów i mamy dobre przybliżenie. Reszta $R_n$ pozwala kontrolować błąd. Silnia szybko rośnie, więc wystarczy zwykle rozwinięcie do pierwszych kilku wyrazów szeregu.

Przykładowo, wokół zera:

$$sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + ... $$

Jeśli np. policzymy do wyrazu piątego i weźmiemy $x$ z przedziału $(-0.3, 0.3)$ to błąd wyniese co najwyżej:

$$\left|\frac{x^7}{7!}\right| = \frac{|x|^7}{5040} =  \frac{(0.3)^7}{5040} \approx 4.3 \times 10^{-8}$$

## Rozwijanie w szereg potęgowy
Jeśli funkcja ma w punkcie pochodne dowolnego rzędu, to można policzyć dokładnie:

$$\sum_{n=0}^{\infty }{\frac {f^{(n)}(x_{0})}{n!}}(x-x_{0})^{n}$$

Przyjmujemy, że $f^{(0)}(x_{0})=f(x_{0})$. To jest szereg Taylora, a jeśli $x_0=0$ to szereg ten nazywamy szeregiem Maclaurina.

Dodatkowo, jeśli dla otoczenia $x_0$ ten szereg jest zbieżny punktowo do funkcji $f$, to $f$ nazywamy funkcją analityczną w punkcie $x_0$. A jak jest tak w każdym punkcie dziedziny, to jest po prostu analityczna lub gładka.
