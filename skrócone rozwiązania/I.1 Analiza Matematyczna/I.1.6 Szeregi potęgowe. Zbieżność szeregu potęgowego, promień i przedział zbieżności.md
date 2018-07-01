Szeregi potęgowe. Zbieżność szeregu potęgowego, promień i przedział zbieżności.

---

# Szereg potęgowy
Szereg funkcyjny, gdzie $x_0$ to środek szeregu potęgowego.

$$f(x) = \sum_{n=0}^\infty a_n \left( x- x_0 \right)^n$$

## Zbieżność
Dla wszystkich liczb w kole zbieżności $\{x:|x-x_0| < r\}$ szereg jest bezwzględnie zbieżny. Poza nim jest rozbieżny.

Dodatkowo, dla dowolnego zwartego podzbioru w kole jest jednostajnie zbieżny. A funkcja jest w nim ciągła.

### Promień zbieżności
Kres górny zbioru argumentów, dla których jest on zbieżny:

$$r=\frac{1}{\limsup\limits_{n\to\infty} \sqrt[n]{|a_n|}}$$

Jeśli ta granica wyjdzie $\infty$, to przyjmujemy $r = 0$ i szereg zbieżny tylko w $x_0$. Jeśli natomiast granica wyjdzie $0$, to promień jest nieskończony i szereg jest zbieżny dla wszystkich $x$.

Fajniejszy wzór, ale tylko gdy wiemy, że występuąca granica istnieje:

$$r=\frac{1}{\lim\limits_{n\to\infty}\left|{a_{n+1} \over a_n}\right|}$$

## Przykłady

### Wielomian
$f(x) = x^2 + 2x + 3$ wokół środka $x_0 = 0$ to:

$$f(x) = 3 + 2 x + 1 x^2 + 0 x^3 + 0 x^4 + \cdots $$

Można użyć dowolnej stałej $x_0$, ale dwumianom $(x - x_0)^n$ trzeba policzyć odpowiednie współczynniki.

Chociaż szeregi potęgowe nie są żadnymi wielomianami, można myśleć o nich jak o *wielomianach nieskończonego stopnia*.

### Szereg geometryczny
$$\frac{1}{1-x} = \sum_{n=0}^\infty x^n = 1 + x + x^2 + x^3 + \cdots$$

### Szereg wykładniczy
$$e^x = \sum_{n=0}^\infty \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$

### Sinus
$$\sin(x) = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!}+\cdots$$

Te szeregi potęgowe są również przykładami szeregów Taylora.
