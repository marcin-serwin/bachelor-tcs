Problem sortowania topologicznego, rozwiązania algorytmiczne.

---

# Sortowanie topologiczne
__Input__: Graf skierowany $G = (V, E)$ bez cykli (DAG).

__Output__: Liniowy porządek $v_1, \ldots, ,v_n$ wierzchołków taki, że $\forall_{i<j}\,  (v_j, v_i) \notin E$

# Algorytmy
## Metoda *obgryzania grafu* (Algorytm Kahna)

* Znajdź wierzchołek $v \in V$ taki, że $v$ nie ma poprzedników w $G$,
* Dodaj $v$ do ciągu wyjściowego i usuń go z grafu - oczywiście razem z krawędziami od niego wychodzącymi,
* Powtarzaj kroki 1 i 2 aż do wyczerpania zbioru wierzchołków

Złożoność: da się w $O(V + E)$.

### Szczegóły implementacyjne
 * Dla każdego wierzchołka $i$ trzymamy wartość $count[i]$ - liczbę bezpośrednich poprzedników $i$ oraz listę $List[i]$ bezposrednich następników $i$.
* Wierzchołki do odcięcia z grafu trzymamy w kolejce. 
* Jeśli przy wyrzucaniu wierzchołka $i$ okaże się że jego następnik $j$ nie ma już poprzedników (czyli $count[j] == 0$) to $j$ ląduje w kolejce.

Całość łatwo realizowalna w $O(V + E)$.

## Wykorzystując *DFS* (Algorytm Tarjana)

* Utwórz pustą listę na wierzchołki.
* Wykonaj DFS na grafie $G$. Przy wychodzeniu z wierzchołka  wstawiaj go na początek listy.
* Po zakończeniu DFS wypisz zawartość listy od początku do końca.
* Patrząc inaczej, można zamiast listy mieć stos i podczas wychodzenia z wierzchołka w DFS wrzucać go na szczyt stosu. Na końcu wypisujemy wierzchołki w kolejności zdejmowania ze stosu.

### Poprawność
Posługujemy się wartościami *finished_at_call* przypisanymi wierzchołkom podczas *DFS* (szczegóły w [DFS](II.4.3 DFS - algorytm i zastosowania.md)).

Zakładamy, że $G$ jest $DAG$-iem *(directed acyclic graph)*. Wystarczy wykazać, że jeśli $(u,v) \in E$, to $\text{finished_at_call[v]} < \text{finished_at_call[u]}$.

Kiedy badamy krawędź $(u,v)$, to wierzchołek $u$ jest szary, natomiast $v$ nie jest szary, bo znaleźlibyśmy cykl, a graf jest $DAG$-iem.

Mogą zatem zajść dwa  przypadki:
* $v$ jest biały - wtedy wchodzimy w niego rekurencyjnie i zakończymy jego badanie przed powrotem do $u$, więc  $\text{finished_at_call[v] < finished_at_call[u]}$.
* $v$ jest czarny - wtedy $v$ ma już ustawione $\text{finished_at_call}$, a wierzchołek $u$ jeszcze nie ma, bo jest jeszcze badany, zatem $\text{finished_at_call[v] < finished_at_call[u]}$.

Złożoność: $O(V + E)$
