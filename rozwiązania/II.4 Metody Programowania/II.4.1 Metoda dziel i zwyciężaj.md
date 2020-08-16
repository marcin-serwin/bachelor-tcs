Metoda ”dziel i zwyciężaj” konstrukcji algorytmów na przykładzie szybkiego
mnożenia macierzy - idea algorytmu Strassena (bez dokładnej znajomości wzorów), oszacowanie złożoności.

---

# Dziel i zwyciężaj

## Abstrakt
W tej strategii problem dzieli się rekurencyjnie na jeden lub więcej mniejszych podproblemów tego samego (lub podobnego) typu tak długo, aż fragmenty staną się wystarczająco proste do bezpośredniego rozwiązania. Z kolei rozwiązania otrzymane dla podproblemów scala się, uzyskując rozwiązanie całego zadania.

## Szablon metody
* Podziel całe zadanie na mniejsze podzadania.
* Rekurencyjnie rozwiąż podzadania.
* Otrzymane rozwiązania podzadań scal, tworząc rozwiązanie całego zadania.

## Wzory
Dzielimy macierze $A,B,C$, takie że $AB=C$ na podmacierze. Otrzymujemy 
$$ \mathbf {A} ={\begin{bmatrix}\mathbf {A} _{1,1}&\mathbf {A} _{1,2}\\\mathbf {A} _{2,1}&\mathbf {A} _{2,2}\end{bmatrix}}{\mbox{ , }}\mathbf {B} ={\begin{bmatrix}\mathbf {B} _{1,1}&\mathbf {B} _{1,2}\\\mathbf {B} _{2,1}&\mathbf {B} _{2,2}\end{bmatrix}}{\mbox{ , }}\mathbf {C} ={\begin{bmatrix}\mathbf {C} _{1,1}&\mathbf {C} _{1,2}\\\mathbf {C} _{2,1}&\mathbf {C} _{2,2}\end{bmatrix}}$$

$$\mathbf {C} _{1,1}=\mathbf {A} _{1,1}\mathbf {B} _{1,1}+\mathbf {A} _{1,2}\mathbf {B} _{2,1}$$
$$\mathbf {C} _{1,2}=\mathbf {A} _{1,1}\mathbf {B} _{1,2}+\mathbf {A} _{1,2}\mathbf {B} _{2,2}$$
$$\mathbf {C} _{2,1}=\mathbf {A} _{2,1}\mathbf {B} _{1,1}+\mathbf {A} _{2,2}\mathbf {B} _{2,1}$$
$$\mathbf {C} _{2,2}=\mathbf {A} _{2,1}\mathbf {B} _{1,2}+\mathbf {A} _{2,2}\mathbf {B} _{2,2}$$

Definiujemy
$$\mathbf {M} _{1}:=(\mathbf {A} _{1,1}+\mathbf {A} _{2,2})(\mathbf {B} _{1,1}+\mathbf {B} _{2,2})$$
$$\mathbf{M} _{2}:=(\mathbf {A} _{2,1}+\mathbf {A} _{2,2})\mathbf {B} _{1,1}$$
$$\mathbf {M} _{3}:=\mathbf {A} _{1,1}(\mathbf {B} _{1,2}-\mathbf {B} _{2,2})$$
$$\mathbf {M} _{4}:=\mathbf {A} _{2,2}(\mathbf {B} _{2,1}-\mathbf {B} _{1,1})$$
$$\mathbf {M} _{5}:=(\mathbf {A} _{1,1}+\mathbf {A} _{1,2})\mathbf {B} _{2,2}$$
$$\mathbf {M} _{6}:=(\mathbf {A} _{2,1}-\mathbf {A} _{1,1})(\mathbf {B} _{1,1}+\mathbf {B} _{1,2})$$
$$\mathbf {M} _{7}:=(\mathbf {A} _{1,2}-\mathbf {A} _{2,2})(\mathbf {B} _{2,1}+\mathbf {B} _{2,2})$$

Wówczas
$$\mathbf {C} _{1,1}=\mathbf {M} _{1}+\mathbf {M} _{4}-\mathbf {M} _{5}+\mathbf {M} _{7}$$
$$\mathbf {C} _{1,2}=\mathbf {M} _{3}+\mathbf {M} _{5}$$
$$\mathbf {C} _{2,1}=\mathbf {M} _{2}+\mathbf {M} _{4}$$
$$\mathbf {C} _{2,2}=\mathbf {M} _{1}-\mathbf {M} _{2}+\mathbf {M} _{3}+\mathbf {M} _{6}$$

## Złożoność

Złożoność: $T(n) = 7T(\frac{n}{2}) + \Theta(n^2)$.

Z Twierdzenia o rekurencji uniwersanej $T(n) = \Theta(n^{log_2\, 7}) \approx \Theta(n^{2.81})$.
