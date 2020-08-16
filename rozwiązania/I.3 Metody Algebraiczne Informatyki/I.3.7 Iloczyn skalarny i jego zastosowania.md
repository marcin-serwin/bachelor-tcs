Iloczyn skalarny i jego zastosowania.
---

# Definicje
Iloczynem skalarnym wektorów $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ ($\mathbf{u} = (u_1, ..., u_n)$ oraz $\mathbf{w} = (w_1, ..., w_n)$) nazywamy liczbę rzeczywistą $\mathbf{u} \cdot \mathbf{v} = \sum_{i = 1}^{n} { u_i \cdot v_i }$

Z powyższej definicji wynika kilka pożytecznych własności:
* $\mathbf{u} \cdot \mathbf{u} \ge 0$ (z definicji jest to suma kwadratów)
* $\mathbf{u} \cdot \mathbf{u} = 0 \iff u = 0$ (z powyższej własności)
* $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$ (z przemienności mnożenia)
* $(\mathbf{u} + \mathbf{v}) \cdot \mathbf{w} = \mathbf{u} \cdot \mathbf{w} + \mathbf{v} \cdot \mathbf{w}$
(rozdzielność dodawania względem mnożenia)
* $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v})$

Oprócz tego, iloczyn skalarny w $\mathbb{R}^n$ ma równoważną definicję (geometryczną):
$\mathbf{u} \cdot \mathbf{v} = ||\mathbf{u}|| \cdot ||\mathbf{v}|| \cos \theta$
gdzie $||\mathbf{u}||$ jest długością wektora $u$, a $\theta$ kątem między wektorami $\mathbf{u}, \mathbf{v}$.

# Zastosowania
* obliczenie długości euklidesowej zadanego wektora: $||\mathbf{u}|| = \sqrt{\mathbf{u} \cdot \mathbf{u}}$,

* obliczenie kąta pomiędzy dwoma wektorami: $\theta = \arccos\left({\frac{\mathbf{u} \cdot \mathbf{v}}{||\mathbf{u} ||\mathbf{v}||}}\right)$,

* wykonanie rzutu prostopadłego jednego wektora na drugi:

![](../../resources/I.3.7-Projection.png)

