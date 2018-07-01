Problem sumowania zbiorów rozłącznych, przykładowe rozwiązania i ich złożoność, zastosowania.

---

# Sumowanie zbiorów rozłącznych
Dla uniwersum $U$ chcemy strukturę do efektywnej realizacji operacji na rodzinie parami rozłącznych podzbiorów $U$:

* $\operatorname{MakeSet}(x)$ - zrób $\{x\}$.
* $\operatorname{Union}(A_i, A_j)$ - wstaw w miejsce tych zbiorów $A_i \cup A_j$.
* $\operatorname{Find}(x)$ - daj zbiór, którego elementem jest $x$.

## Implementacje
### Tablicowa
Mamy tablicę reprezentantów `R[1...n]`. Wartościami są zbiory, do których należą indeksy. Początkowo wszędzie są $-1$ (żaden nie należy do żadnego zbioru).

````
MakeSet(x)
  R[x] = x

Find (x)
  return R[x]

Union (x, y)
  R.Where(value == y).Set(value = x)
````

#### Złożoność
* MakeSet: $\Theta(1)$.
* Find: $\Theta(1)$.
* Union: $\Theta(n)$.

### Listowa
Każdy podzbiór to lista, w której każdy element zawiera wskaźnik do jej początku. Lista wie ile ma elementów. Elementy wiedzą do jakiej listy należą.

````
MakeSet(x)
  L = new List() { x }
  x.list = L
  L.size = 1

Find(x)
  return x.list

Union(x, y)
  X = x.list
  Y = y.list

  // powiedzmy, że X to dłuższa lista
  // ustaw w Y wskaźniki .list na X

  X.AddRange(Y)
  X.size += Y.size

  destroy Y
````

#### Fakt
Wykonanie $n-1$ operacji `Union` kosztuje $O(n \log n)$, a nie aż $n^2$. Argument jest prosty - każdy element, kiedy przechodzi do innej listy, to jest w danym momencie w krótszej liście. Więc znajdzie się w liście co najmniej $2$ razy dłuższej. Co najwyżej więc może być przepisywany  $\log n$ razy.

#### Złożoność
* MakeSet: $\Theta(1)$.
* Find: $\Theta(1)$.
* Union: $O(n \log n)$ dla $n-1$ operacji.

### Drzewowa z kompresją ścieżek
Każdy podzbiór to drzewo, gdzie to dzieci mają wskaźnik do ich ojca. Na potrzeby analizy każdy węzeł $x$ ma pole `rank` o wartości równej wysokości poddrzewa o korzeniu $x$.

Kompresja ścieżek jest w czasie operacji `Find(x)` - wszystkie węzły na ścieżce od $x$ (włącznie) do korzenia stają się dziećmi korzenia.

Operacja `Union(x, y)` spowoduje, że drzewo o mniejszej randze stanie się poddrzewem większego. Jeśli są równe to sztucznie podnosimy o $1$ rangę jednego z nich.

````
MakeSet(x)
  x.rank = 0
  x.parent = x

Find(x)
  if x.parent != x
    x.parent = Find(x.parent) // kompresja

  return x.parent

Union(x, y) // korzenie drzew
  if x.rank > y.rank
    y.parent = x
  else
    x.parent = y

  if x.rank == y.rank
    x.rank += 1
````

#### Fakt
Koszt wykonania ciągu operacji gdzie:

* $n$-elementowy zbiór
* co najwyżej $n - 1$ operacji `Union`
* $m \geq n$ operacji `Find`

wynosi: $$O((m+n)\; \log^{\ast} n)$$

gdzie $\lg^{(k)} n$ oznacza logarytm iterowany $k$ razy. W pewnym sensie jest to funkcja odwrotna do $1$-argumentowej funkcji Ackermanna. Choć w teorii $\log^{\ast} n$ rośnie w nieskończoność, w praktyce  nie przekracza $5$.

## Zastosowania
* Algorytm Kruskala.
* Znajdowanie spójnych składowych grafu nieskierowanego, szczególnie w wersji gdy krawędzie podawane są on-line i chcemy umieć odpowiadać poprawnie w dowolnym momencie.
	1. Tworzymy $n$ zbiorów jednoelementowych (wierzchołki, jeszcze nie połączone).
	2. Gdy dostaniemy krawędź $(u, v)$ taką, że $\operatorname{Find}(u) \neq \operatorname{Find}(v)$ robimy $\operatorname{Union}$.
	3. Sprawdzanie czy wierzchołki są w jednej składowej to sprawdzenie $\operatorname{Find}(u) == \operatorname{Find}(v)$.
