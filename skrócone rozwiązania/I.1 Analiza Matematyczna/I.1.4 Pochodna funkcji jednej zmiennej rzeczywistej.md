Pochodna funkcji jednej zmiennej rzeczywistej. Interpretacja geometryczna. Zastosowanie rachunku różniczkowego do badania przebiegu zmienności funkcji jednej zmiennej.

---

# Pochodna

## Definicja
Funkcja jest różniczkowalna w punkcie $x_0$ jeśli jest określona w otoczeniu tego punktu i istnieje granica ilorazu różnicowego. Pochodna funkcji w punkcie to:

$$f'(x_0) = \lim_{h \to 0}\frac{f(x_0+h)-f(x_0)}{h}$$

Jak funkcja ma pochodną $x_0$ to jest w tym punkcie ciągła. W drugą stronę nie działa.

## Działania
Jeśli istnieją pochodne $f'$ i $g'$ to:

$$\begin{align}
(f+g)'(x) &= f'(x )+g'(x) \\
(f\cdot g)'(x) &= f'(x) \cdot g(x) + f(x) \cdot g'(x) \\
\bigg(\frac{f}{g} \bigg)'(x) &= \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g(x)^2}, \text{ o ile } g(x)\neq 0.
\end{align}$$

## Interpretacja geometryczna
Iloraz różnicowy to współczynnik kierunkowy siecznej przechodzącej przez punkty $(x_0, f(x_0))$ oraz $(x_0+h, f(x_0+h))$. Czyli to tangens kąta, jaki ta sieczna tworzy z osią $x$.

Gdy $h$ zmierza do zera, dostajemy styczną do wykresu w punkcie $(x_0, f(x_0))$. Czyli pochodną $f'(x_0)$ jest współczynnik kierunkowy stycznej do wykresu funkcji w tym punkcie.

## Badanie przebiegu zmienności
Jak funkcja jest różniczkowalna w $(a,b)$ to w zależności od znaku pochodnej $f'(x)$ jest rosnąca, stała, albo malejąca.

## Ekstrema
Jeśli osiąga ekstremum w punkcie $x_0\in (a,b)$ i ma w nim pochodną, to ta pochodna jest równa $0$. To jest warunek konieczny.

Wystarczający, to jeśli ma drugą pochodną w otoczeniu $x_0$ (i ta druga pochodna jest ciągła w tym punkcie), plus dodatkowo:

$$f'(x_0) = 0 \text{ i } f ''(x_0) ≠ 0$$

to badamy znak $f ''(x_0)$. Jak dodatni to minimum. Jak ujemny to maksimum. Jak równy zero to nie wiadomo.
