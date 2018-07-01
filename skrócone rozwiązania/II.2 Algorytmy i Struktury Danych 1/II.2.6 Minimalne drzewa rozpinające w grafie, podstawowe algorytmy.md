Minimalne drzewa rozpinające w grafie, podstawowe algorytmy.

---

# Minimalne drzewo rozpinające
Dla grafu spójnego i nieskierowanego szukamy drzewa rozpinającego o minimalnej sumie wag.

Wszystkie poniższe algorytmy są zachłanne.

## Borůvka
Zakładamy, że wagi krawędzi są unikalne (jak nie są to indeksujemy je i przy porównywaniu krawędzi z takimi samymi wagami wybieramy tę o niższym indeksie).

1. Każdy wierzchołek niech będzie oddzielną spójną składową.
2. Dopóki istnieje więcej niż jedna spójna składowa:
    * Dla każdej spójnej składowej $S_1$ znajdź najtańszą krawędź wychodzącą poza tę składową (prowadzącą do jakiejś innej $S_2$).
    * Połącz $S_1$ i $S_2$.

#### Złożoność
Każda iteracja zmniejsza liczbę spójnych składowych przynajmniej dwukrotnie. Dlatego cała pętla wykona się $O(\log \, V)$ razy. Wyszukiwanie najtańszej krawędzi to $O(E)$.

W sumie $O(E \, \log \, V)$.

## Prim
To taki Dijkstra, gdzie wrzucamy do kolejki priorytetowej sąsiadów obecnego wierzchołka.

1. Wybierz dowolny wierzchołek grafu. Jest naszym tymczasowym MST, które będziemy powiększać.
2. Utwórz kolejkę priorytetową $Q$, zawierającą wierzchołki osiągalne z naszego MST (w tym momencie jest w nim jeden wierzchołek, więc na początku w kolejce będą tylko sąsiedzi początkowego wierzchołka), o priorytecie najmniejszego kosztu dotarcia do danego wierzchołka z MST.
3. Dopóki kolejka nie jest pusta (czyli MST nie obejmie wszystkich wierzchołków):
    * Wśród nieprzetworzonych wierzchołków (spoza obecnego MST) wybierz ten, dla którego koszt dojścia z obecnego MST jest najmniejszy.
    * Dodaj do obecnego MST ten wierzchołek i krawędź realizującą najmniejszy koszt.
    * Zaktualizuj kolejkę priorytetową, uwzględniając nowe krawędzie wychodzące z dodanego wierzchołka.

#### Złożoność
Każdy wierzchołek jest dodany do kolejki i do MST raz: $\Theta(V)$.

Zależy od kolejki priorytetowej.
* Zwykły kopiec: $O(E\cdot \log V)$.
* Kopiec Fibonacciego: $O(E+V\cdot \log V)$.

## Kruskal
Korzystamy z jakiejś strukturki [Find-Union](../../II.1 Analiza Algorytmów/II.1.6 Find-Union.md).

1. Tworzymy $n$ jednoelementowych podzbiorów - każdy wierzchołek grafu jest w osobnym podzbiorze.
2. Sortujemy krawędzie rosnąco względem wag.
3. Bierzemy kolejne krawędzie z posortowanego zbioru. Jeśli rozważana krawędź łączy wierzchołki będące w różnych podzbiorach, to dodajemy ją do MST i robimy $\operatorname{Union}$ na tych podzbiorach. Jeśli łączy wierzchołki z tego samego podzbioru to pomijamy ją.

#### Złożoność
* Złożoność sortowania - $O(E \, \log \, E)$.
* Złożoność struktury lasu zbiorów rozłącznych - $O(E \, \log^\ast \, V)$.
* Całkowita złożoność - $O(E \, \log \, E) = O(E \, \log \, V^2) = O(E \, \log \, V)$.
