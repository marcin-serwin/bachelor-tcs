Najliczniejsze skojarzenia w grafie dwudzielnym, algorytm Hopcrofta-Karpa

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

> **Skojarzenie $M$ jest maksymalne, gdy nie istnieje względem niego żadna ścieżka powiększająca.**

### Dowód (nie wprost)

Niech $M'$ będzie skojarzeniem liczniejszym niż $M$. Skonstruujmy graf $G' = (V, M \oplus M')$. Zauważmy, że stopień każdego wierzchołka w $G'$ jest nie większy niż $2$. Zatem graf $G'$ składa się z rozłącznych cykli i ścieżek. Wszystkie cykle zawierają tyle samo krawędzi z $M$ co z $M'$ - krawędzie na cyklu są na przemian z $M$ i $M'$. W ścieżkach, natomiast, może występować jedna krawędź więcej z któregoś ze skojarzeń $M$ lub $M'$ - bo krawędzie na ścieżce również są na przemian z $M$ i $M'$. W grafie $G'$ jest więcej krawędzi z $M'$, zatem musi istnieć ścieżka, na której jest więcej krawędzi z $M'$ - jest to ścieżka powiększająca.


## Algorytm Hopcrofta-Karpa

### Idea

* Wykorzystuje technikę ścieżek powiększających do konstrukcji skojarzenia.
* Algorytm działa w fazach.
* W każdej fazie korzystając z obliczonego wcześniej skojarzenia $M$ konstruujemy pomocniczy skierowany graf acykliczny składający się ze ścieżek powiększających jednakowej długości, maksymalny ze względu na inkluzję.
* W pomocniczym grafie wyszukujemy ścieżki powiększające rozłączne wierzchołkowo i powiększamy nimi skojarzenie $M$.
* Wszystkie rozpatrywane ścieżki powiększające zaczynają się z dodatkowym wierzchołku $s$ i kończą w dodatkowym wierzchołku $t$.

````
G = (V = (X + Y + {s, t}), E)
Z s wychodzi krawędź do każdego wierzchołka X
Z każdego wierzchołka z Y wychodzi krawędź do t
distance[1...|V|] := array of INFINITY values

BFS(G as graph)
  distance[1...|V|] := array of INFINITY values
  Q := empty queue
  distance[s] := 0

  for v in X
    if match[v] is NULL
      distance[v] := 1
      Q.push(v)

  while Q not empty and distance[Q.first()] < distance[t]:
    u := Q.pop()
    for each neighbour of u as v
      if match[v] == NULL
        distance[t] = distance[u] + 1
      else if distance[match[v]] == INFINITY
        distance[match[v]] = distance[u] + 1
        Q.push(v)

  return distance[t]

DFS(u as vertex)
  if u == t
    return true

  for each neighbour of u as v
    if distance[match[v]] == distance[u] + 1
      if DFS(match[v]) == true
        match[v] = u
        match[u] = v
        return true
  distance[u] = INFINITY
  return false

Hopcroft-Karp(G as graph)
  match[1...|V|] := array of NULL values
  matching = 0

  while BFS(G) != INFINITY
    for each x in X
      if match[x] == NULL
        if DFS(u) == true
          matching = matching + 1
  return matching
````

### Złożoność

* Złożoność funkcji `BFS` i `DFS` to $O(V + E)$
* W kolejnych fazach długości ścieżek powiększają się; są nieparzyste, więc powiększają się przynajmniej o $2$
* Liczba faz jest rzędu $O(\sqrt{V})$. Dowód:

Rozważmy skojarzenie $M$ po wykonaniu $\sqrt{V}$ faz. Od tej pory wszstkie ścieżki powiększające są długości przynajmniej $2\sqrt{V} + 1$. Niech $M'$ będzie maksymalnym skojarzeniem. Wtedy $M \oplus M'$ to zbiór cykli i ścieżek zawierający $k = |M'| - |M|$ rozłącznych wierzchołkowo ścieżek powiększających $p_i$ względem $M$ dających w rezultacie $M'$ (zamianie skojarzonych krawędzi na wolne i vice versa). Suma długości tych ścieżek wynosi co najwyżej $V$, gdzyż są one rozłączne. Zatem $k(2\sqrt{V} + 1) \leq \sum_{i=1}^{k} |p_i| \leq V$, czyli $k \leq \frac{1}{2}\sqrt{V}$. Ponieważ w każdej fazie skojarzenie rośnie przynajmniej o $1$, to ograniczenie na $k$ jest również ograniczeniem na liczbę następnych faz po otrzymaniu skojarzenia $M$.

* Całkowita złożoność - $O((E + V) \sqrt{V}) = O(E\sqrt{V})$
