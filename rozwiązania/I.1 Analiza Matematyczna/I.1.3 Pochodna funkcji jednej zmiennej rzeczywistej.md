Pochodna funkcji jednej zmiennej rzeczywistej (definicja i interpretacja geometryczna). Zastosowanie rachunku różniczkowego do badania przebiegu zmienności funkcji jednej zmiennej.

---
# Pochodna
## Definicja pochodnej funkcji jednej zmiennej rzeczywistej
Niech $A \subseteq \mathbb{R}$ oraz $f:A \mapsto \mathbb{R}$ będzie dowolną funkcją.

Mówimy, że funkcja $f$ jest **różniczkowalna** w punkcie $x_0 \in A$, jeśli:

* istnieje takie $\epsilon > 0$ że $(x_0 - \epsilon, x_0 + \epsilon) \subseteq A$ (mówiąc inaczej $x_0 \in int(A)$, czyli $x_0$ należy do wnętrza zbioru $A$)
* istnieje granica ilorazu różnicowego $\lim_{h \to 0}\frac{f(x_0+h)-f(x_0)}{h}$. 

Granicę tę - jeśli istnieje - nazywamy **pochodną funkcji $f$ w punkcie $x_0$** i oznaczamy symbolem: $f'(x_0)$. 

Funkcję $x\mapsto f'(x)$, która argumentowi $x$ przyporządkowuje wartość pochodnej  $f'(x)$ nazywamy **funkcją pochodną** funkcji $f$ lub krótko **pochodną** funkcji $f$.

### Ciągłość w punkcie
Jeśli funkcja $f$ jest różniczkowalna w punkcie $x_0 \in A$, to jest w tym punkcie ciągła. Twierdzenie odwrotne nie jest prawdziwe $(f(x) = |x|)$.

## Interpretacja geometryczna pochodnej
Zwróćmy uwagę, że iloraz różnicowy $\dfrac{f( x_0 +h )-f(x_0 )}{h}$ jest równy **współczynnikowi kierunkowemu siecznej** wykresu funkcji $f$ przechodzącej przez punkty $(x_0, f(x_0))$ oraz $(x_0+h, f(x_0+h))$, a więc jest równy tangensowi kąta, jaki sieczna ta tworzy z osią $x$.

Gdy $h$ zmierza do zera, punkt $(x_0+h, f(x_0+h))$ zbliża się do punktu $(x_0, f(x_0))$. Jeśli istnieje pochodna $f'(x_0)$, to prostą o równaniu $y-f(x_0)=f'(x_0)(x-x_0)$, będącą granicznym położeniem siecznych przechodzących przez punkty $(x_0, f(x_0))$ oraz $(x_0+h, f(x_0+h))$, nazywamy **styczną do wykresu funkcji $f$ w punkcie $(x_0, f(x_0))$.** 

Pochodna $f'(x_0)$ jest więc **współczynnikiem kierunkowym stycznej do wykresu funkcji $f$ w punkcie $(x_0, f(x_0))$.**

## Badanie przebiegu zmienności

Niech $f$ będzie funkcją różniczkowalną w przedziale $(a,b)$.

* Jeśli $f'(x) \geq 0$ dla wszystkich $x \in (a,b)$, to $f$ jest **rosnąca** w przedziale $(a,b)$.
* Jeśli $f'(x) > 0$ dla wszystkich $x \in (a,b)$, to $f$ jest **ściśle rosnąca** w przedziale $(a,b)$.
* Jeśli $f'(x) = 0$ dla wszystkich $x \in (a,b)$, to $f$ jest **stała** w przedziale $(a,b)$.
* Jeśli $f'(x) \leq 0$ dla wszystkich $x \in (a,b)$, to $f$ jest **malejąca** w przedziale $(a,b)$.
* Jeśli $f'(x) < 0$ dla wszystkich $x \in (a,b)$, to $f$ jest **ściśle malejąca** w przedziale $(a,b)$.

### Warunek konieczny isnienia ekstremum lokalnego
Jeśli funkcja $f:(a,b) \mapsto \mathbb{R}$ osiąga ekstremum w punkcie $x_0\in (a,b)$ i jest różniczkowalna w   $x_0$, to $f'(x_0) = 0$.

### Warunek wystarczający istnienia ekstremum lokalnego

Jeżeli funkcja $f$ spełnia następujące założenia:

* ma pochodną $f ''(x)$ w pewnym otoczeniu punktu $x_0$,
* $f''(x)$ jest ciągła w punkcie $x_0$,
* $f'(x_0) = 0 \text{ i } f ''(x_0) ≠ 0$,

to funkcja $f$ ma w punkcie $x_0$:

* **minimum**, gdy $f ''(x_0) > 0$
* **maksimum**, gdy $f ''(x_0) < 0$.
* gdy $f''(x_0) = 0$ to może być jakakolwiek sytuacja, ekstremum może być ale nie musi.
