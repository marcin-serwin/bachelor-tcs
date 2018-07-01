Grupy, ich przykłady i zastosowania.

---

# Grupa
${\mathbf G}=(G,\cdot,^{-1},e)$, gdzie:
* $G$ jest dowolnym zbiorem niepustym,
* $\cdot$ działaniem dwuargumentowym,
* $^{-1}$ jest działaniem jednoargumentowym,
* $e \in G$.

**Rząd grupy** - liczba $|G|$ jej elementów. Jak grupa nie jest skończona, to ma rząd nieskończony.

**Grupa cykliczna** - generowana zbiorem jednoelementowym.


## Aksjomaty
Dla dowolnych $x,y,z\in G$:

* **Zamkniętość na działanie**: $x \cdot y \in G$
* **Element neutralny**: $e \cdot x = x$
* **Element odwrotny**: $x \cdot x^{-1} = e$
* **Łączność**: $(x \cdot y) \cdot z = x \cdot (y \cdot z)$.

Grupę nazywamy przemienną (lub abelową) jeśli jej działanie jest przemienne.

# Przykłady

* $(\mathbb Z, +, -, 0)$ - całkowite z dodawaniem
* $(\mathbb Z_n, +, -, 0)$ - dodawanie modulo
* $(\mathbb R^+, \cdot, ^{-1}, 1)$
* $(\mathrm S_X, \circ, ^{-1}, id)$ - permutacje $\sigma$ zbioru $X$

# Zastosowania
* **RSA** - grupa z mnożeniem modulo $n$ dla liczb względnie pierwszych z $n$ (własność elementu odwrotnego). Wybieramy element z grupy (klucz publiczny) i znajdujemy jego odwrotność (klucz prywatny).

* **Algorytmy testowania pierwszości** - [klik](../II.3 Algorytmy i Struktury Danych 2/II.3.6 Liczby pierwsze.md).
