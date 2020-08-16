Kolejka priorytetowa, kopiec, zastosowanie do sortowania.

---
# Kopce i kolejki priorytetowe

## Kolejka priorytetowa
Kolejka priorytetowa jest kolejką, w której elementy są ułożone nie w kolejności wprowadzania, lecz w kolejności priorytetu. Każdy element kolejki posiada dodatkowe pole prio, w którym przechowuje swój priorytet – czyli ważność. Gwarantuje to pobieranie z kolejki jako pierwszych elementów o najwyższym priorytecie. Elementy o priorytetach niższych zostaną pobrane dopiero wtedy, gdy zostaną usunięte wszystkie elementy o priorytetach wyższych.

## Kopiec - definicja ogólna
* Max-kopiec to drzewo, w którym dla każdej pary węzłów postaci $(v, parent(v))$ zachodzi **warunek kopca:** $key(parent(v)) \geq key(v)$. Element największy zawsze znajduje się w korzeniu, na dowolnej ścieżce w dół klucze się zmniejszają, minimum jest w którymś liściu.
* Min-kopiec - analogicznie, $key(parent(v)) \leq key(v)$. Element najmniejszy w korzeniu, na dowolnej ścieżce w dół klucze się zwiększają, maksimum jest w którymś liściu.

**Kopiec binarny**  to drzewo binarne, w którym:
* Dla każdego węzła zachodzi warunek kopca.
* Wszystkie poziomy, za wyjątkiem być może ostatniego, są całkowicie wypełnione.
* Ostatni poziom jest wypełniony od lewej strony.

Wysokość kopca binarnego o $n$ wierzchołkach to $\lfloor lg\, n \rfloor$.

### Kopiec binarny - reprezentacja w tablicy:

* tablica $A[1 \ldots n]$, 
* $A[1]$ - korzeń
* $A[2i], A[2i+1]$ - lewe i prawe dziecko węzła $i$,
* $A[i/2]$ - ojciec węzla $i$

### Przesiewanie w górę (upheap) w kopcu binarnym:
Wartość $A[k]$ zwiększyła się, przywracamy warunek kopca na ścieżce od $A[k]$ do korzenia.

````
upheap(A[1...n], k as integer)
  while k > 1 and A[k] > A[k/2]
    swap A[k], A[k/2]
    k = k/2
````

### Przesiewanie w dół (downheap) w kopcu binarnym:
Wartość $A[k]$ zmniejszyła się, przywracamy warunek kopca w poddrzewie o korzeniu $A[k]$ .

````
downheap(A[1...n], k as integer)
  max_index = k
  if k*2 <= n and A[k*2] > A[max_index]
    max_index = k*2
  if k*2+1 <= n and A[k*2+1] > A[max_index]
    max_index = k*2+1
  if max_index != k
    swap A[k], A[max_index]
````

### Realizacja kolejki priorytetowej przy pomocy kopca
* $Insert(A, e)$ - zwiększ kopiec o $1$, wstaw $A[n] = e$, wykonaj $upheap(A, n)$.
* $DeleteMax(A)$ - $swap A[1], A[n]$, zmniejsz kopiec o $1$, wykonaj $downheap(A, 1)$.
* $GetMax(A)$ - zwróć $A[1]$.

**Uwaga:** kolejkę priorytetową można zrealizować także za pomocą innych struktur danych, np. kopca dwumianowego, kopca Fibonacciego, zwykłej listy, czy drzewa BST.

Ponadto jeśli znalibyśmy zakres elementów, to kolejkę priorytetową można zrealizować za pomocą drzewa przedziałowego z operacją $max$.

### 3. Heapsort

#### Idea algorytmu
* Skonstruuj max-kopiec z elementów wejściowej tablicy (kopiec, który ma maksimum w korzeniu). **Uwaga.** Konstrukcja kopca realizowalna w $\Theta(n)$.
* Dopóki kopiec nie jest pusty, usuwaj korzeń z kopca. Następnie usunięty element wstaw na koniec wynikowej tablicy. Elementy w tej tablicy będą posortowane malejąco więc trzeba ją na koniec odwrócić.
* Można zmniejszyć zużycie pamięci do stałej pamięci roboczej, robiąc wszystko w oryginalnej tablicy - pierwszą część *(początkowo całą tablicę)* przeznaczamy na kopiec, pozostałą część *(na końcu algorytmu będzie to cała tablica)* przeznaczamy na przechowywanie wyniku. Kiedy zdejmujemy coś z kopca jego rozmiar się zmniejsza a wyjęty element wkładamy w powstałą "dziurę". W tym podejściu nie trzeba odwracać tablicy.

#### Zalety
* Złożoność w każdym przypadku $\Theta(n\, \log n)$.
* Nie wykorzystuje pamięci roboczej.
* Prosty w implementacji.
* Sortuje w miejscu (potrzebuje tylko stałej pamięci roboczej poza pamięcią na elementy sortowane).

#### Wady
* Stała przy $\Theta$ większa niż w quicksorcie więc różnica czasowa dla dużych danych jest odczuwalna.
* Niestabilny.
