Szeregi potęgowe. Zbieżność szeregu potęgowego, promień i przedział zbieżności.

---

# Szereg potęgowy
Szereg funkcyjny postaci:

$$f(x) = \sum_{n=0}^\infty a_n \left( x- x_0 \right)^n$$

gdzie stała $x_0$, zwana **środkiem szeregu potęgowego**, i **współczynniki** $a_n$ są liczbami rzeczywistymi lub zespolonymi. Zmienna $x$ również może być rzeczywista lub zespolona.

## Zbieżność

### Przedział zbieżności
Szereg potęgowy jest bezwzględnie zbieżny dla wszystkich liczb należących do pewnego koła otwartego $\{x:|x-x_0| < r\}$ o ośrodku w punkcie $x_0$. Poza domknięciem tego koła, jest on rozbieżny. Dlatego też koło to nazywamy **kołem zbieżności** szeregu.

Szereg potęgowy jest **jednostajnie zbieżny** na dowolnym zwartym podzbiorze koła zbieżności.

Wynika stąd natychmiast, że szereg potęgowy przedstawia funkcję ciągłą wewnątrz koła zbieżności. Dwa szeregi przedstawiają tę samą funkcję wtedy i tylko wtedy, gdy mają równe wszystkie współczynniki przy tych samych potęgach dwumianu $(x - x_0)$.

### Promień zbieżności
Promieniem zbieżności szeregu nazywamy kres górny zbioru argumentów, dla których jest on zbieżny:

$$r=\frac{1}{\limsup\limits_{n\to\infty} \sqrt[n]{|a_n|}}$$

Powyższy wzór należy rozumieć następująco:
* Jeśli $\limsup\limits_{n\to\infty} \sqrt[n]{|a_n|}=\infty$, to $r=0$ i szereg jest zbieżny jedynie dla $x=x_0$.
* Jeśli natomiast $\limsup\limits_{n\to\infty} \sqrt[n]{|a_n|}=0$, to $r=\infty$ i szereg jest zbieżny dla wszystkich $x$.

Inny wzór na promień zbieżności szeregu:

$$r=\frac{1}{\lim\limits_{n\to\infty}\left|{a_{n+1} \over a_n}\right|}$$

Ostatni wzór jest najwygodniejszy w użyciu, lecz można go stosować jedynie wtedy, gdy występująca tam granica istnieje.

### Przykłady

#### Wielomian
Dowolny wielomian może być wyrażony jako szereg potęgowy wokół środka $c$, chociaż prawie wszystkie ze współczynników będą zerami (szereg potęgowy ma z definicji nieskończenie wiele wyrazów). Przykładowo, wielomian $f(x) = x^2 + 2x + 3$
może być zapisany jako szereg potęgowy wokół środka $c=0$ jako:

$$f(x) = 3 + 2 x + 1 x^2 + 0 x^3 + 0 x^4 + \cdots $$

lub wokół środka $c=1$ jako:

$$f(x) = 6 + 4 (x-1) + 1(x-1)^2 + 0(x-1)^3 + 0(x-1)^4 + \cdots$$

Analogicznie można użyć dowolnej stałej $c$.

Chociaż szeregi potęgowe nie są żadnymi wielomianami, można myśleć o nich jak o *wielomianach nieskończonego stopnia*.

#### Szereg geometryczny
$$\frac{1}{1-x} = \sum_{n=0}^\infty x^n = 1 + x + x^2 + x^3 + \cdots$$

#### Szereg wykładniczy
$$e^x = \sum_{n=0}^\infty \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$

#### Sinus
$$\sin(x) = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!}+\cdots$$

Te szeregi potęgowe są również przykładami szeregów Taylora.
