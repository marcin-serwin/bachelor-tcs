Igłę długości $l$ rzucono na podłogę z desek o szerokości $d$, przy czym $l\leq d$. Jakie jest prawdopodobieństwo, że igła przetnie krawędź deski?

---

# Igła Buffona

Niezależne zmienne:
* $Z$ - odległość środka igły do najbliższej krawędzi w górę lub dół
* $\alpha$ - ostry kąt wyznaczony przez igłę i wyznaczoną krawędź między deskami

$$f(z)=\frac{2}{d}, \text{ dla } z\in [0,d/2],$$ 
$$f(\alpha )=\frac{2}{\pi }, \text{ dla } \alpha \in [0,\pi/2 ],$$
$$f(z,\alpha )=\frac{4}{d\pi}.$$ 
$$B=\{(z,\alpha ): z\leq \frac{l}{2}sin\alpha \}$$

$$P(\text{igła przetnie krawędź})=\int \int\limits_B f(z,\alpha )dzd\alpha=\frac{1}{d\pi}\int\limits_0^\frac{\pi}{2} \Big( \int\limits_0^{\frac{l}{2}sin\alpha} dz  \Big) d\alpha =\frac{2}{\pi}\cdot \frac{l}{d}.$$

