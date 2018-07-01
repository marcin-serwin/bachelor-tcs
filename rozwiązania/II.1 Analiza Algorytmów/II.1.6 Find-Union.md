Problem sumowania zbiorów rozłącznych, przykładowe rozwiązania i ich złożoność, zastosowania.

---

# Sumowanie zbiorów rozłącznych
## Wprowadzenie
Dany jest pewien zbiór elementów *(uniwersum)* $U$ - o mocy $n$.

Problemem jest zaprojektowanie struktury danych do efektywnej realizacji operacji na rodzinie parami rozłącznych podzbiorów zbioru $U$.

Chcemy efektywnie wykonać następujące operacje:
* $MakeSet(x)$ - utwórz jednoelementowy zbiór $\{ x \}$.
* $Union(S_i, S_j)$ - złącz *(suma mnogościowa)* zbiory $S_i$ i $S_j$ - są one usuwane z rodziny zbiorów, a w ich miejsce wstawiana jest ich suma.
* $Find(x)$ - zwróć zbiór, którego elementem jest $x$.

## Implementacje
### 1. Tablicowa
* Uniwersum $U = \{1, \ldots, n \}$.
* Tablica $Representant[1 \ldots n]$ - tablica reprezentantów zbiorów.
* Dla danego $x$ wartość $Representant[x]$ to reprezentant zbioru, do którego należy $x$. 
* Początkowo $Representant[x] = -1$ dla każdego $x$ - zakładamy, że żaden element $x$ nie należy do żadnego zbioru.

````
MakeSet (x) 
  Representant[x] = x

Find (x)
  return Representant[x]

Union (x, y) // x, y - reprezentanci podzbiorów
  for i=1 to n
    if Representant[i] == y
      Representant[i] = x
````

#### Złożoność
* MakeSet: $\Theta(1)$.
* Find: $\Theta(1)$.
* Union: $\Theta(n)$.

### 2. Listowa
* Każdy podzbiór elementów jest listą.
* Każdy element listy zawiera odsyłacz $head$ do nagłówka listy.
* W nagłówku listy pamiętana jest liczność podzbioru ($cardinality$).
* Dla każdego wierzchołka podany jest odsyłacz do odpowiadającego mu elementu listy – zbioru do którego wierzchołek należy.

````
MakeSet(x)
  L = empty list
  add x to L
  x.head = head of L
  L.cardinality = 1

Find(x)
  return x.head

Union(x, y)
  A = list that contains x
  B = list that contains y

  if length of A > length of B
    swap (A, B)

  Extend B with elements from A
  for each element x from A set x.head to head of B
  B.cardinality += A.cardinality
  destroy A
````

#### Fakt
Wykonanie $n-1$ operacji *Union* kosztuje $O(n \log n)$, a nie aż $n^2$.

**Uzasadnienie**
* Dominują aktualizacje wskaźnika $head$ dla krótszej listy (dłuższa nie jest w ogóle przeglądana), wszystkie inne operacje w czasie stałym.
* Każdy element $x$ ma zmieniany wskaźnik $head$ jeśli jest w liście krótszej, a wtedy przechodzi do zbioru o liczności co najmniej $2$ razy większej.
* Każdy element $x$ jest na początku elementem zbioru o licznosci $1$, a finalnie elementem zbioru o liczności $\leq n$, zatem może zmieniać swój wskaźnik $head$ co najwyżej $\log n$ razy.

#### Złożoność
* MakeSet: $\Theta(1)$.
* Find: $\Theta(1)$.
* Union: $n-1$ operacji o sumarycznym koszcie $O(n \log n)$.

### 3. Drzewowa z kompresją ścieżek
* Każdy element jest węzłem drzewa.
* Każdy zbiór z rodziny jest drzewem (drzewa są parami rozłączne).
* Drzewo reprezentujemy przez wskaźniki do ojca $parent$, nie pamiętamy wskaźników na dzieci.
*  Węzeł $x$ zawiera pole $rank$ o wartości równej wysokości poddrzewa o korzeniu $x$ (*ranga* poddrzewa o korzeniu $x$) .
* W czasie wykonywania operacji $Find(x)$ dokonujemy kompresji ścieżki - wszystkie węzły na ścieżce od $x$ do korzenia stają się dziećmi korzenia (węzeł $x$) też.
* Operacja $Union(x, y)$ powoduje, że drzewo o mniejszej randze staje się poddrzewem większego (gdy rangi obu drzew są równe, sztucznie podnosimy o 1 rangę jednego z drzew.

**Uwaga.** Pole `rank` w węźle nie ma znaczenia dla działania algorytmu. Pierwsza z brzegu operacja 'Find' może zepsuć tę wartość i nigdy później nikt jej nie naprawi. Wartości `rank` są istotne jedynie z punktu widzenia analizy złożoności. 

````
MakeSet(x)
  rank[x] = 0
  parent[x] = x;

Find(x)
  if parent[x] != x
    parent[x] = Find(parent[x]) // kompresja ścieżki
  return parent[x]

Union(x, y) // x, y - korzenie drzew
  if rank[x] > rank[y]
    parent[y] = x
  else
    parent[x] = y

  if rank[x] == rank[y] 
    rank[y] += 1
````

#### Fakt 
Koszt wykonania ciągu operacji, w którym jest $m \geq n$ operacji $Find$ oraz nie więcej niż $n-1$ operacji $Union$ na $n$-elementowym zbiorze, wynosi $O((m+n) lg^*\, n)$, gdzie $lg^*\, n = min \{k:\, lg^{(k)}\, n \leq 1 \}$.

$(lg^{(k)}\, n$ oznacza logarytm iterowany $k$ razy$)$. Jest to funkcja odwrotna, w pewnym sensie, do
uproszczonej 1-argumentowej funkcji Ackermanna. W praktycznych zastosowaniach wartość $\log^*(n)$ nie przekracza $5$. Teoretycznie ta funkcja rośnie w nieskończoność.

## Zastosowania
* Algorytm Kruskala dla minimalnego drzewa rozpinającego w grafie:
	* Na początku tworzymy $n$ jednoelementowych podzbiorów - każdy wierzchołek grafu w osobnym podzbiorze.
	* Tworzymy kolejkę priorytetową ze zbioru krawędzi grafu, priorytetem jest waga krawędzi. UWAGA! To jest odwrotnie sortująca kolejka!
	* Dopóki kolejka jest niepusta, wyciągamy krawędź o najmniejszej wadze.
	* Jeśli łączy ona wierzchołki będące w dwóch różnych podzbiorach, dodajemy ją do drzewa rozpinającego i robimy $Union$ na tych podzbiorach, w przeciwnym razie pomijamy tę krawędź.
* Znajdowanie spójnych składowych grafu nieskierowanego, szczególnie w wersji gdy krawędzie podawane są on-line i chcemy umieć odpowiadać poprawnie w dowolnym momencie. 
	* Na początku tworzymy $n$ zbiorów jednoelementowych (wierzchołki, jeszcze nie połączone). 
	* Gdy dostaniemy krawędź $(u, v)$ taką że $Find(u) \neq Find(v)$ robimy $Union$. 
	* Sprawdzanie czy wierzchołki są w jednej składowej to sprawdzenie czy $Find(u) == Find(v)$.