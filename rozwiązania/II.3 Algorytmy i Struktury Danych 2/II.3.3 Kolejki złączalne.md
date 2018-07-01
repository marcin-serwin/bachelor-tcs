Złączalne kolejki priorytetowe, przykład efektywnej realizacji, zastosowania.

---

# Złączalne kolejki priorytetowe
Kolejka priorytetowa (dokładniej opisane w [Kolejki priorytetowe](../II.4/II.4.8 Kopce i kolejki priorytetowe.md)) to struktura danych, która umożliwia wykonanie następujących operacji:
* $CreateEmptyQueue()$ - utworzenie pustej kolejki priorytetowej.
* $Insert(Q, x)$ - wstawienie elementu o wartości $x$ do kolejki $Q$.
* $FindMin(Q)$ - znalezienie  w kolejce $Q$ elementu o najmniejszej wartości.
* $DeleteMin(Q)$ - usunięcie z kolejki $Q$ elementu o najmniejszej wartości.

Czasami ten zbiór operacji poszerzony jest o następujące:
* $DecreaseValue(Q, x, y)$ - nadanie elementowi o wartości $x$ w kolejce $Q$ mniejszej wartości $y$.
* $Delete(Q, x)$ - usunięcie elementu o wartości $x$ z kolejki $Q$,

Jeśli struktura danych udostępnia dodatkowo operację łączenia kolejek - $Union(Q_1, Q_2)$, to nazywamy ją **złączalną kolejką priorytetową**.

## Przykład efektywnej realizacji
Kopce lewicowe *(leftist heaps)*.

### Reprezentacja w pamięci
* Kopiec lewicowy jest drzewem binarnym.
* W każdym węźle $x$ przechowujemy wartość $x.value$ oraz dwa wskaźniki $x.left$ i $x.right$ na lewe i prawe dziecko tego węzła. Odpowiedni wskaźnik jest równy $NULL$ jeśli węzeł nie ma lewego lub prawego dziecka.
* W kopcu lewicowym zachodzi warunek kopca, czyli dla każdej pary węzłów $(x, parent(x))$ zachodzi $parent(x).value \leq x.value$, gdzie $parent(x)$ jest rodzicem węzła $x$.
* Dostęp do kopca poprzez wskaźnik do korzenia $root$.
* Pusty kopiec reprezentujemy przez wskaźnik $NULL$.

### Niezmienniki
* Dla każdego wierzchołka $v$ w kopcu trzymamy wartość $dist(v)$ - odległość od tego wierzchołka do najbliżeszego $NULL$-a. Zakładamy, że $dist(NULL) = -1$ oraz $dist(v) = 0$ dla $v$ będącego lliściem.
* Dla każdego wierzchołka $v$ ścieżka od tego węzła w dół taka, że za każdym razem przechodzimy do prawego dziecka (tzw. *skrajna prawa ścieżka*) jest **najkrótszą** ścieżką od węzła $v$ do $NULL$-a. 

### Implementacja operacji na kopcu

````
CreateEmptyQueue()
  root = NULL

FindMin(Q as leftist heap)
  if Q is null
    return null
  return Q.root.value

Insert(Q as leftist heap, x as value)
  create one-node leftist heap H with H.root.value = x
  return Union(Q, H)

DeleteMin(Q as leftist heap)
  L = left subtree of Q.root
  R = right subtree of Q.root
  return Union(L, R)

Union(A as leftist heap, B as leftist heap)
  if A is null
    return B
  if B is null
    return A
  if B.root.value < A.root.value
    swap A, B
  
  A.root.right = Union(A.root.right, B)
  if dist(A.root.right) > dist(A.root.left)
    swap A.root.left, A.root.right

  if A.root.right is null
    dist(A.root) = 0
  else
    dist(A.root) = dist(A.root.right) + 1
  
````

### Fakt
Operacja $Union(A, B)$ w kopcach lewicowych ma złożonośc $O(\log n)$, gdzie  $n$ jest sumą rozmiarów kopców $A$ i $B$.

W oczywisty sposób wynika z tego, że operacje $Insert$ oraz $DeleteMin$ także mają złożoność $O(\log n)$.

## Inne realizacje złączalnych kolejek priorytetowych
* Kopiec binarny (nieefektywna operacja *Union*).
* Kopiec skośny (*skew heap*).
* Kopiec dwumianowy - więcej w [Metody Programowania - Kopce](../II.4 Metody Programowania/II.4.4 Szybkie algorytmy sortowania.md).
* Kopiec Fibonacciego.

## Zastosowania
* Wykorzystywane w algorytmie Dijkstry wyznaczania najkrótszych ścieżek w grafach.
* Wykorzystywane w algorytmie Prima wyznaczania minimalnego drzewa rozpinającego.
* Wykorzystywane w geometrii obliczeniowej (*technika zamiatania*).
* Wykorzystywane w algorytmie *kodowania Huffmana*.