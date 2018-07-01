Sieci przepływowe, metoda Forda-Fulkersona, przykładowy algorytm o złożoności wielomianowej.

---

# Sieć przepływowa
Graf skierowany, w którym każda krawędź $(u,v)$ ma nieujemną przepustowość $c(u,v)\geqslant 0$. W sieci wyróżniamy dwa wierzchołki: źródło $s$ i ujście $t$.

## Przepływ
Każda funkcja $f: V \times V \to R$ spełniająca warunki:
* **warunek przepustowości**: dla wszystkich krawędzi $(u,v) \in E$ zachodzi $f(u,v)\leqslant c(u,v)$.
* **warunek skośnej symetryczności**: dla wszystkich krawędzi $(u,v)\in E$ zachodzi $f(u,v)= -f(v,u)$.
* **warunek zachowania przepływu**: dla każdego $u \in V \setminus \{ s,t \}$ zachodzi $\sum_{v\in V} f(v,u) = \sum_{v\in V} f(u,v) $.

**Wartość przepływu** definiujemy jako $|f| = \sum_{v\in V} f(s, v)$.

## Sieć residualna
Dla sieci przepływowej $G$ jest to sieć $G_f = (V, E_f)$, gdzie **krawędzie residualne** mają wagi równe **przepustowości residualnej** - czyli o ile można zwiększyć przepływ przez nią, aby nie przekroczył jej przepustowości.

Do sieci residualnej należą te krawędzie, przez które przepływ można zwiększyć.

Może zachodzić $c_f(u, v) > c(u, v)$ - w przypadku gdy $f(u, v) < 0$. W szczególności do $E_f$ mogą należeć krawędzie, które nie należą do $E$.

## Ford-Fulkerson
W skrócie: tak długo jak istnieje pewna ścieżka powiększająca $p$ w grafie residualnym, powiększ przepływ na wszystkich krawędziach tej ścieżki o wartość jej przepustowości.

**Ścieżką powiększającą** dla sieci $G$ nazywamy dowolną ścieżkę z $s$ do $t$ w sieci residualnej dla $G$.  

**Przepustowość residualną** ścieżki powiększającej $p$ dla sieci $G$ określamy wzorem $c_f(p) = \min \left \{ c_f(u, v): (u, v) \in p \right \}$.

Jest to wartość, o jaką maksymalnie można zwiększyć przepływ przez wszystkie krawędzie należące do ścieżki $p$.

Należy założyć że przepustowości są całkowitoliczbowe. Jeśli dopuszczamy przepustowości rzeczywiste, to metoda nie ma zagwarantowanej własności stopu.

### Złożoność
Zależy od sposobu wyszukiwania ścieżek powiększających. <br>
Górne ograniczenie na złożoność wynosi $O(|E| \cdot |f|)$, bo w każdej iteracji pętli while przepływ wzrasta co najmniej o 1, a wyszukiwanie ściezki można zrealizować w czasie $O(|E|)$, chociażby DFS-em - zakładamy że graf jest spójny więc $|E| \geq |V| - 1$.

Nie musi to być jednak złożoność wielomianowa, bo nie znamy wartości $|f|$. Wielomianowy jest chociażby **Edmonds-Karp**, czyli Ford-Fulkerson + szukanie ścieżek powiększających **BFSem** (co da zawsze najkrótszą ścieżkę). Złożoność jest wielomianowa $O(V E^2)$.

Algorytm **push-relabel**, oparty na zupełnie innym podejściu, osiąga złożoność $O(V^3)$.
