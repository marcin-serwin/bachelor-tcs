Randomizacja drzew poszukiwań binarnych: model permutacyjny, kopcodrzewa.

---

# Losowe drzewa *BST*

Wśród losowych drzew *BST*, wyróżniamy dwa modele:

**Model 1.** 

* Wylosuj drzewo binarne $n$-wierzchołkowe.
* Wstaw klucze w posortowanej kolejności.

**Model 2 (permutacyjny).**

* Wstawiaj kolejno do **początkowo pustego** *BST* klucze **w kolejności losowej** (każda permutacja kluczy jednakowo prawdopodobna).

W praktyce stosowany jest model permutacyjny.

## Fakty
Jeśli drzewo powstaje jak w modelu permutacyjnym, to:
* Dla liścia $v$ zachodzi $E[depth(v)] = \Theta(\log\, n)$.
* Oczekiwana wysokość drzewa $E[h(BST)]$ = $\Theta(\log n)$.

**Uwaga.** Należy odróżnić oczekiwaną wysokość drzewa od oczekiwanej głębokosci liścia. Oczekiwana wysokość drzewa, to oczekiwana długość **najdłuższej** ścieżki od korzenia do liścia, czyli głębokość najgłębszego liścia. Natomiast oczekiwana głębokość liścia to średnia po głębokościach wszystkich liści w drzewie.

## Kopcodrzewa (*Treaps*)
*Treap = tree + heap*

*  każdy element, przy wstawianiu ma wylosowaną dodatkową wartość liczbową – priorytet (unikalny)
* ze względu na wartości kluczy drzewo jest *BST*
* ze względu na priorytety drzewo jest kopcem, max jest w korzeniu

Uwaga. Dla zadanego zbioru kluczy i ich unikalnych priorytetów istnieje **dokładnie jedno drzewo *Treap*.**

Uzasadnienie <br>
* Korzeń tego drzewa znamy - to ten węzeł, w którym priorytet jest maksymalny.
* Lewe poddrzewo: klucze mniejsze od korzenia z ich priorytetami, rekurencyjnie.
* Prawe poddrzewo: klucze większe od korzenia z ich priorytetami, rekurencyjnie.

Zatem postać drzewa *Treap* przy ustalonych kluczach i ich priorytetach **nie zależy od kolejności wstawiania.**

## Operacje słownika na kopcodrzewach:
### 1. Search(x)
Tak jak w zwykłym drzewie *BST*.

### 2. Insert(x)
* Wstaw $x$ do drzewa, jak dla *BST* (x staje się liściem).
* Wylosuj piorytet dla $x$.
* Na ścieżce od $x$ do korzenia dokonuj pojedynczych rotacji promujących $x$ w górę, aż warunek kopca będzie spełniony.

### 3. Delete(x)
* Ustaw priorytet $x$ na $-\infty$.
* Przywróc warunek kopca ($x$ stanie się liściem).
* Odetnij x.

### Twierdzenie
Oczekiwana wysokość drzewa treap wynosi $\Theta(\log n)$.

### Szkic dowodu:
* Wiemy że dla zadanego zbioru kluczy i unikalnych priorytetów istnieje dokładnie jedno drzewo *Treap* - nazwijmy je $S$.
* Drzewo $S$ można utworzyć następująco:
	* Dla każdego elementu wylosuj priorytet.
	* Wstawiaj do (początkowo pustego) drzewa *BST* elementy w kolejności malejących priorytetów (jest to losowa permutacja).
	* Wiemy, że wstawianie losowej permutacji elementów do początkowo pustego *BST* daje drzewo o oczekiwanej wysokości $\Theta(\log n)$.
