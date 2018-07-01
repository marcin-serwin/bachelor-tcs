Wartości własne macierzy.

---

# Wprowadzenie
Powiedzmy, że mamy pewien wektor $\mathbf v$ i chcemy go przekształcić przez odwzorowanie dane macierzą $A$. Podstawmy jakieś wartości dla przykładu:

$$\mathbf w = A \cdot \mathbf
v =
\begin{bmatrix}
1 & 0
\\ 0 & 2
\end{bmatrix}
\cdot
\begin{bmatrix}
1
\\ 2
\end{bmatrix} =
\begin{bmatrix}
1 \cdot 1 + 0 \cdot 2
\\ 0 \cdot 1 + 2 \cdot 2
\end{bmatrix} =
\begin{bmatrix}
1
\\ 4
\end{bmatrix}
$$

W wyniku tego odwzorowania wektor nie został tylko przeskalowany - zmienił również swój kierunek. Mogłoby się natomiast zdarzyć tak, że dla pewnego odwzorowania, które jest macierzą, pewien wektor w wyniku takiego odwzorowania byłby **jedynie przeskalowany** - jak gdyby został przemnożony przez skalar:

$$A \mathbf v = \lambda \mathbf v$$

Wektor, który po odwzorowaniu macierzą $A$ zachowuje kierunek jest **wektorem własnym** tej macierzy. Jest to taki szczególny wektor odwzorowania $A$, który jest "odporny" na to odwzorowanie. Macierz $A$ może go tylko co najwyżej przeskalować (zmniejszyć, zwiększyć, ewentualnie zmienić jego zwrot). Wartość $\lambda$, przez którą się skaluje, jest **wartością własną**.

Należy dodać, że wektor zerowy nas nie interesuje, gdyż taki zawsze by spełnił nasze równanie, więc nie było by w nim niczego szczególnego. Zatem chcemy $\mathbf{v} \neq 0$.

# Wartości i wektory własne
Niech $A$ będzie macierzą kwadratową $n \times n$ nad ciałem $\mathbb{K}$. Jeżeli $\mathbf{v} \in \mathbb{K}^n$ jest wektorem, takim że:
$$A\mathbf{v} = \lambda \mathbf{v}$$
to $\lambda$ nazywamy wartością własną, a $\mathbf{v}$ wektorem własnym macierzy $A$.

## Twierdzenie
Pokażemy teraz proste uzasadnienie dla faktu, że:
$$\det (A-I\lambda) = 0$$

Zacznijmy od równania $A\mathbf{v} = \lambda \mathbf{v}$. Przenieśmy wyrazy na jedną stronę: $A \mathbf{v}-\lambda \mathbf{v} = 0$. Następnie wyłączamy **za** nawias wektor: $(A-I\lambda)\mathbf{v} = 0$. Teraz zauważamy, że mamy dwie możliwości:

* $det(A-I\lambda)\mathbf{v} = 0$
* $det(A-I\lambda)\mathbf{v} \neq 0$

Zajmijmy się najpierw tą drugą. Zakładając, że jest ona prawdziwa, istniałaby macierz $(A-I\lambda)^{-1}$, ponieważ wyznacznik nie jest zerowy. W takim razie można równanie $(A-I\lambda)\mathbf{v} = 0$ przemnożyć lewostronnie przez $(A-I\lambda)^{-1}$, co po uproszczeniu da $I\mathbf{v}=0$, czyli $\mathbf{v}=0$. Jedyne rozwiązanie jakie otrzymaliśmy to wektor zerowy, ale założyliśmy, że takie nas nie interesuje. Więc pomijamy tę możliwość i zostajemy z:

$$\det (A-I\lambda) = 0$$

## Własności
Jeśli $\lambda$ jest wartością własną macierzy $A$, a $\mathbf{v}$ jej wektorem własnym, to dla $k \geq 1$, $\lambda^k$ jest wartością własną macierzy $A^k$ oraz $\mathbf{v}$ jest jej wektorem własnym.

Jeśli $\lambda$ jest wartością własną macierzy $A$ a $\mathbf{v}$ jej wektorem własnym oraz $A$ jest odwracalna to $\frac{1}{\lambda}$ jest wartością własną macierzy $A^{-1}$ oraz $\mathbf{v}$ jest jej wektorem własnym.
