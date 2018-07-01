Liczby Stirlinga pierwszego i drugiego rodzaju, liczba baz przestrzeni wektorowej,
liczba różnych podprzestrzeni wektorowych danej przestrzeni.

---

# Liczby Stirlinga pierwszego rodzaju
Zobacz [liczby Stirlinga](I.2.4 Metoda funkcji tworzacych.md).

# Liczba baz przestrzeni wektorowej nad skończonym ciałem $q$-elementowym
By stworzyć bazę przestrzeni $k$-wymiarowej musimy wybrać $k$ liniowo
niezależnych wektorów. Pierwszy wektor możemy wybrać na $(q^k-1)$ sposobów,
drugi na $(q^k-q)$ sposobów ponieważ pierwszy wektor rozpina przestrzeń $1$
wymiarową. I tak dalej. Powstaje wzór:
$$(q^k-1)(q^k-q)\dots(q^k-q^{k-1})$$

# Liczba różnych podprzestrzeni przestrzeni wektorowej nad skończonym ciałem $q$ elementowym
Podobnie jak wcześniej chcemy wybrać bazę przestrzeni $k$-wymiarowej tylko
tym razem z przestrzeni $n$-wymiarowej, możemy to zrobić na
$(q^n-1)(q^n-q)\dots(q^n-q^{k-1})$ sposobów.

Ale zauważmy że wliczamy każdą możliwą bazę podprzestrzeni $k$ wymiarowej, a chcemy tylko
ilość takich podprzestrzeni, trzeba więc podzielić to przez ilość różnych baz
dla przestrzeni $k$ wymiarowej, ale to już wcześniej policzyliśmy. I tak mamy
ostateczny wzór:
$$\frac{(q^n-1)(q^n-q)\dots(q^n-q^{k-1})}{(q^k-1)(q^k-q)\dots(q^k-q^{k-1})}$$
