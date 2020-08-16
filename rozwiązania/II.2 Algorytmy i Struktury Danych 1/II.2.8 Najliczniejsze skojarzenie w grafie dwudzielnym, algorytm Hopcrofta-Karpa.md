Najliczniejsze skojarzenia w grafie dwudzielnym, metoda przepływów lub
algorytm Hopcrofta-Karpa.

---

# Najliczniejsze skojarzenia w grafie dwudzielnym

## Oznaczenia

Graf $G = (X \cup Y, E)$ dwudzielny *($X \cap Y = \emptyset$, $e \in E \Rightarrow (x \in X \wedge y \in Y$)*, nieskierowany

## Skojarzenie

Skojarzeniem w grafie $G = (V, E)$ nazywamy taki zbiór krawędzi $M \subseteq E$, że każdy wierzchołek z $V$ jest incydentny z co najwyżej jedną krawędzią z $M$.

Wierzchołek $v \in V$ incydentny do jakiejś krawędzi z $M$ nazywamy *skojarzonym*, w przeciwnym przypadku wierzchołek nazywamy *wolnym*.
Podobnie krawędzie należące do $M$ nazywamy *skojarzonymi*, a pozostałe *wolnymi*.

## Skojarzenie maksymalne

Skojarzenie $M$ nazywamy maksymalnym, gdy ma największą liczność ze wszystkich skojarzeń grafu $G$.

## Ścieżka powiększająca

Ścieżka powiększająca $p$ to ścieżka prosta *(nie przechodząca dwa razy przez ten sam wierzchołek)* taka, że krawędzie na niej są na przemian skojarzone i wolne, a krawędzie początkowa i końcowa są wolne.

Jeśli istnieje ścieżka powiększająca $p$ względem skojarzenia $M$, to $M$ nie jest skojarzeniem maksymalnym. Można bowiem stworzyć skojarzenie $M' = M \oplus p$ zamieniając krawędzie z $p$ ze skojarzonych na wolne i odwrotnie *(prosty dowód indukcyjny po $|p|$ aby udowodnić, że $M'$ jest skojarzeniem)*. Początkowy i końcowy wierzchołek na ścieżce Powstanie wtedy skojarzenie liczniejsze, bo krawędzi wolnych w $p$ było więcej niż skojarzonych.

## Twierdzenie o ścieżkach powiększających

> Skojarzenie $M$ jest maksymalne, gdy nie istnieje względem niego żadna ścieżka powiększająca.

## Algorytm Hopcrofta-Karpa

### Idea

* Wykorzystuje technikę ścieżek powiększających do konstrukcji skojarzenia.


Rozpatrywać będziemy ścieżki na krawędziach $E_M=\{(x,y):xy\in E \} \cup \{(y,x)$.

Input: Graf dwudzielny $G(U\cup V,E)$
Output: Matching $M\subset E$
* $P=\{ P_1,...,P_k\}$ - maksymalny zbiór rozłącznych najkrótszych ścieżek alternujących
* $M=M\otimes (P_1\cup ... \cup P_k)$
Kończymy, gdy $P=\emptyset$.

Każda faza składa się z etapów:
* BFS dzieli wierzchołki na warstwy. Wolne wierzchołkiz $U$ są pierwszą warstwą. Kolejna warstwa to ich sąsiedzi, do których istnieją krawędzie spoza matchingu. Kolejna z sąsiadami z matchingu itd. Kończymy warstwy (bfs), gdy w warstwie znajdziemy wolny wierzchołek z $V$.
* Wszystkie wolne wierzchołki z ostatniej warstwy $k$ zbieramy do jednego zbioru $F$. Wierzchołek jest w $F$, gdy kończy najkrótszą alternującą ścieżkę.
* Teraz za pomocą dfs szukamy rozdziny zbiorów $P$. Tzn. startujemy z F i idziemy aż znajdziemy wierzchołek wolny z $U$ (znów naprzemienne krawędzie na ścieżce).
* Każda z tak znalezionych ścieżek zwiększa matching $M$.


### Złożoność

* Złożoność funkcji `BFS` i `DFS` to $O(V + E)$
* W kolejnych fazach długości ścieżek powiększają się; są nieparzyste, więc powiększają się przynajmniej o $2$
* Liczba faz jest rzędu $O(\sqrt{V})$.

**Dowód**: Rozważmy skojarzenie $M$ po wykonaniu $\sqrt{V}$ faz. Od tej pory wszstkie ścieżki powiększające są długości przynajmniej $2\sqrt{V} + 1$. Niech $M'$ będzie maksymalnym skojarzeniem. Wtedy $M \oplus M'$ to zbiór cykli i ścieżek zawierający $k = |M'| - |M|$ rozłącznych wierzchołkowo ścieżek powiększających $p_i$ względem $M$ dających w rezultacie $M'$ (zamianie skojarzonych krawędzi na wolne i vice versa). Suma długości tych ścieżek wynosi co najwyżej $V$, gdzyż są one rozłączne. Zatem $k(2\sqrt{V} + 1) \leq \sum_{i=1}^{k} |p_i| \leq V$, czyli $k \leq \frac{1}{2}\sqrt{V}$. Ponieważ w każdej fazie skojarzenie rośnie przynajmniej o $1$, to ograniczenie na $k$ jest również ograniczeniem na liczbę następnych faz po otrzymaniu skojarzenia $M$.

* Całkowita złożoność - $O((E + V) \sqrt{V}) = O(E\sqrt{V})$
