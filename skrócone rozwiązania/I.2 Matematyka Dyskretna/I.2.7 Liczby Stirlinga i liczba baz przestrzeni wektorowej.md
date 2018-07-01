Liczby Stirlinga pierwszego i drugiego rodzaju, liczba baz przestrzeni wektorowej, liczba różnych podprzestrzeni wektorowych danej przestrzeni.

---

# Liczby Stirlinga
Zobacz [liczby Stirlinga](I.2.4 Metoda funkcji tworzacych.md).

# Liczba baz przestrzeni wektorowej
Mamy przestrzeń $n$-wymiarową nad ciałem $q$-elementowym. By stworzyć jej bazę, musimy wybrać $n$ liniowo niezależnych wektorów. Policzmy więc na ile sposobów możemy wybrać taki zbiór.

Pierwszy wektor możemy wybrać na $(q^n-1)$ sposobów (nie liczymy $\vec{0}$). Zauważmy, że ten wybrany wektor rozpina nam przestrzeń $1$-wymiarową. Więc drugi wektor możemy wybrać na $(q^n-q)$ sposobów. I tak dalej:

$$(q^n-1)(q^n-q)\dots(q^n-q^{n-1})$$

# Liczba różnych podprzestrzeni
Podobnie jak wcześniej, mamy przestrzeń $n$-wymiarową nad ciałem $q$-elementowym. Znowu chcemy wybrać bazę, ale tym razem tylko z jej $k$-wymiarowej podprzestrzeni.

Wydawać by się mogło, że możemy to zrobić na

$$(q^n-1)(q^n-q)\dots(q^n-q^{k-1})$$

sposobów. Zauważmy jednak, że wliczamy każdą możliwą bazę podprzestrzeni $k$ wymiarowej, a chcemy tylko ilość takich podprzestrzeni, trzeba więc podzielić to przez ilość różnych baz dla przestrzeni $k$ wymiarowej. To już policzyliśmy wcześniej, więc ostateczny wzór to:

$$\frac{(q^n-1)(q^n-q)\dots(q^n-q^{k-1})}{(q^k-1)(q^k-q)\dots(q^k-q^{k-1})}$$
