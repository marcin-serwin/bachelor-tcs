Złożoność sortowania, dolne ograniczenia w przypadku pesymistycznym i średnim.

---

# Złożoność sortowania

Załóżmy, że chcemy posortować n różnych elementów $x_1, \ldots, x_n$ i jedynym sposobem ustalenia porządku pomiędzy nimi jest porównywanie ich w parach.
Możliwych wyników sortowania jest oczywiście tyle, ile wszystkich permutacji zbioru n-elementowego, czyli n!.

Każdy algorytm sortowania przez porównania można zapisać za pomocą drzewa decyzyjnego.

## Drzewo decyzyjne
**Drzewo decyzyjne** jest drzewem binarnym, w którym wszystkie węzły wewnętrzne mają po dwóch synów.
W tych węzłach zapisujemy pary indeksów $i:j$, $1 \le i < j \le n$.
Każda taka para $i:j$ oznacza, że interesuje nas wynik porównania $x_i$ z $x_j$.

Jeśli wynikiem porównania jest TAK, co oznacza, że $x_i$ jest mniejsze od $x_j$, kierujemy się do lewego poddrzewa, w przeciwnym przypadku przechodzimy do prawego poddrzewa.

### Przykładowe drzewo decyzyjne
![Drzewo decyzyjne](../../resources/II.1.5-drzewo_decyzyjne.png)

Sortowanie polega na przejściu w drzewie od korzenia do pewnego liścia.
Jeśli odpowiedzi na zadane pytania pozwalają na wskazanie porządku w zbiorze $\{x_1,x_2,\ldots,x_n\}$, stosowna permutacja wyznaczająca ten porządek znajduje się właśnie w liściu na końcu ścieżki.

## Dolne ograniczenie na pesymistyczny czas sortowania
Pesymistyczna złożoność algorytmu opisanego za pomocą drzewa decyzyjnego, to ścieżka od korzenia do najgłębszego liścia, czyli wysokość tego drzewa.

Drzewo decyzyjne sortujące $n$ elementów jest drzewem binarnym o **co najmniej** $n!$ liściach (może być więcej liści, ale niektóre z nich nieosiągalne, np. w drzewie decyzyjnym dla sortowania bąbelkowego).

Najmniejsza wysokość drzewa binarnego o $k$ liściach wynosi $\lceil \log k \rceil$.
Wynika stąd, że każdy algorytm sortujący przez porównania wykonuje w pesymistycznym przypadku $\lceil \log n! \rceil$ porównań.

Można pokazać, że $\lceil \log n! \rceil \ge n\log n - 1.45n$.

## Dolne ograniczenie na średni czas sortowania
Podobne dolne ograniczenie zachodzi, gdy pytamy o średnią liczbę porównań w modelu losowych permutacji, tzn. gdy każdy z $n!$ wyników sortowania jest możliwy z jednakowym prawdopodobieństwem $\frac{1}{n!}$.
Średni czas sortowania to średnia długość ścieżki od korzenia do liścia (średnia głębokość liścia) w drzewie decyzyjnym. 

### Fakt
> Dla dowolnego drzewa pełnego binarnego o $k$ liściach średnia głębokość liścia $\geq \lg k$.

Można tego dowodzić indukcyjnie. Dowodzimy, że suma odległości liści od korzenia wynosi nlogn. ($2 \cdot n/2 log n/2 + n = n log n$ )

