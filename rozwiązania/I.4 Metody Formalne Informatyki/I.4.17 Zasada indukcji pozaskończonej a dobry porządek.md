Zasada indukcji pozaskończonej a dobry porządek.

---

## Definicje wstępne

### Porządek liniowy

Porządek $(X, R)$ jest liniowy, jeśli relacja $R$ jest spójna, czyli taka, że $\forall_{x,\ y\ \in X}\ (x, y) \in R \text{ lub } (y,x) \in R$. Inaczej mówiąc w porządku liniowym każde dwa elementy są porównywalne.

### Przedział początkowy

Zbiór $A \subset  X$ nazywamy przedziałem początkowym zbioru $X$, jeżeli $(x \in A \land y \le x) \implies y \in A$

### Następnik

W porządku $(X, \le)$ następnikiem elementu $x \in X$ jest element $y \in X$ gdy:
* $x < y$
* $\forall_{w \in X}: x < w \implies y \le w$

# Zbiory dobrze uporządkowane

## Definicja

Porządek $(X, \le)$ nazywamy dobrym, gdy każdy niepusty podzbiórzbioru $X$ ma element najmniejszy.

## Własności
* W dobrym porządku każdy element, za wyjątkiem największego, posiada następnik.
* W dobrym porządku każdy przedział początkowy właściwy jest postaci $\{x \in X: x < x_0\}$ dla pewnego $x_0 \in X$.

# Zasada indukcji (pozaskończonej)
## Definicja
Niech $(X, \le)$ będzie liniowym porządkiem. W $(X, \le)$ obowiązuje *zasada indukcji*, jeżeli dla dowolnego zbioru $Z$, takiego że:

* $Z \subset X$
* $Z \neq \emptyset$
* jeżeli $\{y \in X: y < x\} \subset Z$, to $x \in Z$

zachodzi, że $Z = X$.

## Twierdzenie 1

> W dobrym porządku obowiązuje zasada indukcji.

## Twierdzenie 2

>Niech $(X, \le)$ będzie liniowym porządkiem. Jeśli w $(X, \le)$ istnieje element najmniejszy oraz obowiązuje zasada indukcji, to $(X, \le)$ jest porządkiem dobrym.
