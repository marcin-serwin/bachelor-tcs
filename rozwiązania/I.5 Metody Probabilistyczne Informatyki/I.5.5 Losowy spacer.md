Losowy spacer na płaszczyźnie. Pionek znajduje się w punkcie $(0, 0)$ na płaszczyźnie. W $i$-tym kroku ($i > 1$) losowany jest kąt $\alpha_i$ jednostajnie na $[0, 2\pi ]$ (i niezależnie od poprzednich losowań), a pionek przesuwa się ze swojej aktualnej pozycji o wektor jednostkowy wyznaczony przez kąt $\alpha_i$ (z osią OX). Jaki jest oczekiwany kwadrat odległości od punktu $(0, 0)$ po $n$ krokach?

---

# Losowy spacer na płaszczyźnie

Na podstawie [mathworld](https://mathworld.wolfram.com/RandomWalk2-Dimensional.html)
Położenie pionka określa liczba zespolona. Pozycja pionka po $n$ krokach wynosi
$$z=\sum_{j=1}^n e^{i\theta_j}.$$
Liczymy 
$$|z|^2=\sum_{j=1}^n e^{i\theta_j}\sum_{k=1}^n e^{-i\theta_k} =\sum_{j=1}^n\sum_{k=1}^ne^{i(\theta_j - \theta_k)} = n+\sum_{j,k=1, j\ne k}^n e^{i(\theta_j-\theta_k)}.$$
Zatem
$$E[|z|^2\big]=E[n]+E[\sum_{j,k=1, j\ne k}^n e^{i(\theta_j-\theta_k)}].$$
Każdy kierunek jest równo prawdopodobny. Przesunięcia są zmiennymi losowymi o takich samych średnich równych $0$. Ich różnice również są zmiennymi losowymi i też otrzymujemy przesunięcie średnio o $0$. Zatem $E[|z|^2]=n$.
