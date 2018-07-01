Algorytmy zachłanne, wymagane własności problemu, przykład: kody Huffmana.

---

# Algorytmy zachłanne

## Definicja i własności
* Algorytm w każdym kroku dokonuje *zachłannego wyboru*, czyli decyzji lokalnie optymalnej
* Sekwencja lokalnie optymalnych wyborów daje w rezultacie rozwiązanie optymalne
* Zazwyczaj jest to metoda *top-down*, czyli dokonując wybóru redukujemy rozmiar zadania

## Dowodzenie poprawności algorytmu

* **Zasada zachłannego wyboru** \
Dowodzimy, że zachłanny wybór jest dobry, to znaczy, że istnieje rozwiązanie optymalne, które zawiera ten wybór

* **Własność optymalnej podstruktury** \
Dowodzimy, że łącząc zachłanny wybór z optymalnym rozwiązaniem podbroblemu otrzymamy rozwiązanie optymalne

## Kody Huffmana
### Problem
Optymalne kodowanie danych - kompresja. \
Dla zadanego alfabetu $C$ i zadanej częstotliwości (lub ilości) wystąpień znaku $c \in C$ w tekście równej $freq(c)$, podać słowa kodowe (jako ciągi bitów) tak, aby zminimalizować długość zakodowanego tekstu.

### Idea
* Kod prefiksowy - kod żadnego znaku nie jest prefiksem kodu innego znaku, co zapewnia jednoznaczność dekodowania zakodowanego tekstu.
* Reprezentujemy kod prefiksowy jako pełne drzewo binarne, gdzie liście są znakami, krawędzie w lewo mają etykiety $0$, a w prawo $1$ oraz kody znaków odpowiadają ciągowi etykiet na ścieżce do znaku (liścia).
* Na początku tworzymy listę węzłów - liści reprezentujących znaki.
* W każdym kroku dokonujemy zachłannego wyboru wybierając dwa węzły o najmniejszej częstotliwości wystąpień i usuwając je z listy.
* Tworzymy nowy węzeł jako poprzednik tych dwu węzłów i dodajemy do listy nadając mu częstotliwość równą sumie częstotliwości obydwu węzłów.

Koszt kodu $T$ - liczba bitów wymagana do zakodowania pliku z zadanym rozkładem ilości wystąpień znaku

$B(T) = \sum_{c \in C} freq(c) d_T(c)$, gdzie:
* $T$ - drzewo kodu
* $d_T(c)$ - odległość liścia znaku $c$ od korzenia

### Pseudokod algorytmu
````
Q := new PriorityQueue(C[1..n])   // priorytetem jest freq[]

for i = 1 to n-1 
  z := new Node()
  x := Q.popMin()
  y := Q.popMin()
  left[z] := x
  right[z] := y
  freq[z] := freq[x] + freq[y]
  Q.push(z)

root := Q.popMin()
````

### Złożoność
* Budowa kolejki (kopiec) - $\Theta(n)$
* Operacje na kolejce przy każdej iteracji - $O(log \, n)$
* Całkowita złożoność - $O(n \, log \, n)$

### Poprawność

#### Własność zachłannego wyboru

Niech $x$, $y$ będą znakami z $C$ o najmniejszej częstotliwośći wystąpień. Wówczas istnieje optymalny kod $T$ dla $C$ taki, że $x$ i $y$ są w tym kodzie liśćmi o wspólnym poprzedniku.

#### Dowód:
Weźmy dowolny optymalny kod $T'$ i na najdłuższej ścieżce zamieńmy liście z $x$ i $y$. Powstaje drzewo $T$ o koszcie nie większym niż koszt $T'$, a zatem o takim samym koszcie optymalnym.

#### Własność optymalnej podstruktury
Założenia:
* $x$, $y$ - znaki z $C$ o najmniejszej częstotliwośći wystąpień
* $T$ - optymalny kod dla $C$ taki, że $x$ i $y$ są liśćmi o tym samym poprzedniku
* $T'$ - drzewo otrzymane z $T$ poprzez zastąpienie $x$, $y$ i ich poprzednika liściem $z$, $freq(z) = freq(x) + freq(y)$

Wówczas $T'$ jest optymalnym kodem dla $C' = C \setminus \{ x, y \} \cup \{ z \}$.

#### Dowód (nie wprost):
Jeśli istniałby lepszy kod $T''$ dla $C'$, to zamieniając $T'$ w $T$ na $T''$ (pozostała część drzewa oprócz liści $x$ i $y$) otrzymalibyśmy lepszy kod dla $C$ - sprzeczność.
