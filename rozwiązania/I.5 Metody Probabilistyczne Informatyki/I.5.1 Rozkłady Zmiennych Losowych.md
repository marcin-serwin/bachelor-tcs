Przykładowe rozkłady dyskretnych zmiennych losowych.

---

# Dyskretny rozkład prawdopodobieństwa
Rozkład prawdopodobieństwa zmiennej losowej $X: \Omega \mapsto \mathbb{R}$ dający się opisać przez podanie wszystkich przyjmowanych przez nią wartości, wraz z prawdopodobieństwem przyjęcia każdej z nich.

Funkcja $f$ przypisująca prawdopodobieństwo $f(x) = P(X = x)$ do konkretnej wartości zmiennej losowej jest nazywana **funkcją rozkładu prawdopodobieństwa**. Zachodzi:

$$\sum_x P(X = x) = 1$$

gdzie $x$ przebiega zbiór możliwych wartości zmiennej $X$. Zwykle zbiór przyjmowanych wartości jest zbiorem izolowanych punktów. Istnieją jednak zmienne dyskretne, dla których zbiór przyjmowanych wartości jest gęsty.


## Przykłady

### Wstepny przykład
Prawdopodobieństwa przyjęcia przez zmienną wartości $1$, $3$ i $7$ wynoszą odpowiednio $0.2$, $0.5$, $0.3$. Inne wartości mają zerowe prawdopodobieństwo.

### Rozkład jednostajny
Wszystkim elementom z $\Omega$ przypisane jest jednakowe prawdopodobieństwo $\frac{1}{|\Omega|}$.

### Rozkład dwupunktowy
Rozkład, w którym zmienna losowa przyjmuje tylko dwie różne wartości.

### Rozkład zero-jedynkowy
Szczególny przypadek rozkładu dwupunktowego, dla którego zmienna losowa przyjmuje tylko wartości: $1$ i $0$. Jest on na przykład rezultatem doświadczenia (zwanego **próbą Bernoulliego**), w wyniku którego określone zdarzenie *wystąpi* lub *nie wystąpi*:

* $1$, interpretowane jako *sukces*, z prawdopodobieństwem $p$
* $0$, interpretowane jako *porażka*, z prawdopodobieństwem $1-p$.

### Rozkład dwumianowy
Rozkład opisujący liczbę $k$ sukcesów w ciągu $n$ niezależnych prób Bernouliego, o prawdopodobieństwie sukcesu $p$. Funkcja rozkładu prawdopodobieństwa:
$$f(k) = P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$$

### Rozkład geometryczny
Rozkład opisujący prawdopodobieństwo zdarzenia, że ciąg prób Bernoulliego odniesie pierwszy sukces dokładnie w $k$-tej próbie. $k$ musi być liczbą naturalną dodatnią.  Funkcja rozkładu prawdopodobieństwa:
$$f(k) = P(X = k) = (1 - p)^{k-1}p$$
