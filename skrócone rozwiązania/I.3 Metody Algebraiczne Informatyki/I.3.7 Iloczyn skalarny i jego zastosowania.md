Iloczyn skalarny i jego zastosowania.

---

# Iloczyn skalarny
Dla dwóch wektorów $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ jest to liczba rzeczywista:

$$\mathbf{u} \cdot \mathbf{v} = \sum_{i = 1}^{n} { u_i \cdot v_i }$$

## Własności
* $\mathbf{u} \cdot \mathbf{u} \ge 0$ (bo to suma kwadratów)
* $\mathbf{u} \cdot \mathbf{u} = 0 \iff \mathbf{u} = 0$
* $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$ (przemienność mnożenia)
* $(\mathbf{u} + \mathbf{v}) \cdot \mathbf{w} = \mathbf{u} \cdot \mathbf{w} + \mathbf{v} \cdot \mathbf{w}$
(rozdzielność dodawania względem mnożenia)
* $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v})$

## Definicja geometryczna
Jest równoważna. Liczymy długości wektorów i mnożymy przez kąt między nimi:

$$\mathbf{u} \cdot \mathbf{v} = ||\mathbf{u}|| \cdot ||\mathbf{v}|| \cdot \cos \alpha$$

## Zastosowania
* Obliczenie długości wektora: $||\mathbf{u}|| = \sqrt{\mathbf{u} \cdot \mathbf{u}}$,

* Obliczenie kąta pomiędzy dwoma wektorami: $\alpha = \arccos\left({\frac{\mathbf{u} \cdot \mathbf{v}}{||\mathbf{u} ||\mathbf{v}||}}\right)$,

* Wykonanie rzutu prostopadłego jednego wektora na drugi:

![](../../resources/I.3.7-Projection.png)
