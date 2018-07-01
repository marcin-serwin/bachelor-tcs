Najliczniejsze skojarzenia w grafie dwudzielnym, algorytm Hopcrofta-Karpa.

---

# Najliczniejsze skojarzenia w grafie dwudzielnym

## Ścieżka powiększająca
Wierzchołek $v \in V$ incydentny do jakiejś krawędzi z $M$ nazywamy *skojarzonym*, w przeciwnym przypadku wierzchołek nazywamy *wolnym*. Podobnie krawędzie należące do $M$ nazywamy *skojarzonymi*, a pozostałe *wolnymi*.

Ścieżka powiększająca $p$ to ścieżka prosta *(nieprzechodząca dwa razy przez ten sam wierzchołek)* taka, że krawędzie na niej są na przemian skojarzone i wolne, a krawędzie początkowa i końcowa są wolne.

Jeśli istnieje ścieżka powiększająca $p$ względem skojarzenia $M$, to $M$ nie jest skojarzeniem maksymalnym. Możemy ją odwrócić i dostać liczniejsze skojarzenie. Zatem jeśli nie istnieje względem skojarzenia $M$ ścieżka powiększająca, to jest on maksymalny.

## Hopcroft-Karp
Wykorzystuje ideę ścieżek powiększających do konstrukcji skojarzenia.

Algorytm działa w fazach. Opis fazy jest następujący:

1. Startujemy BFSa w wolnych wierzchołkach lewego zbioru. Z każdego wierzchołka idziemy równolegle po istniejących krawędziach w prawo, potem w lewo, i tak cały czas, po nieodwiedzonych jeszcze wierzchołkach. Jeśli w którymś momencie natrafimy na wierzchołek po prawej, który jest wolny, kończymy ten krok. Mogliśmy znaleźć kilka takich wierzchołków.
2. Wolne wierzchołki, do których trafił BFS są w takiej samej długości. Zauważmy, że te wierzchołki kończą ścieżki powiększające.
3. W tak powstałym grafie (drzewo węgierskie) idziemy ze znalezionych wierzchołków z powrotem do korzenia. Znajdujemy w ten sposób ścieżki.
4. Każda taka ścieżka jest użyta do zwiększenia skojarzenia.

Algorytm kończy się jeśli BFS nic nie znalazł.

<iframe width="560" height="315" src="https://www.youtube.com/embed/n7r4Dp6cVg8" frameborder="0" allowfullscreen></iframe>

### Złożoność
Każda faza to jeden BFS i jeden DFS. Zatem koszt pojedynczej fazy to $O(V + E)$. Każda faza zwiększa również długość skojarzeń przynajmniej o $1$.

Kluczowe jest, aby zauważyć, że wystarczy wykonać $O(\sqrt{V})$ faz, aby znaleźć się w miejscu, z którego nie znajdziemy już więcej ścieżek powiększających.

Złożoność: $O((E + V) \sqrt{V}) = O(E\sqrt{V})$.
