Sieci przepływowe, metoda Forda-Fulkersona, algorytm Edmondsa-Karpa.

---

# Sieci przepływowe
Sieć przepływowa to czwórka $(G=(V, E),\, s,\, t,\, c)$, gdzie:

* $G$ - graf **skierowany**,
* $s \neq t$ - dwa wyróżnione wierzchołki - źródło i ujście sieci przepływowej
* $c: V \times V \to \mathbb{R}$ - funkcja przepustowości krawędzi - $c(u, v) \geq 0$ dla każdych $u,v \in V$, $c(u, v) = 0$ gdy $(u, v) \notin E$.

## Przepływ w grafie $G$  (definicja Cormen et al.)
to funkcja $f: V \times V \to \mathbb{R}$, spełniająca warunki:

* $\forall_{u, v\, \in\, V}\,\, f(u,v) \leq c(u,v)$ *(przepustowość)*
* $\forall_{u, v\, \in\, V}\,\, f(u,v)  = -f(v, u)$ *(skośna symetria)*
* $\forall_{u\, \in\, V -  \{ s, t \} }  \,\, \sum_{v \in V}f(v, u) = 0$ *(warunek zachowania przepływu)*

**Wartość przepływu** definiujemy jako $|f| := \sum_{v\in V} f(s, v)$.

## Sieć residualna sieci przepływowej
Siecią residualną dla sieci przepływowej $G$, nazywamy sieć $G_f = (V, E_f)$, gdzie $E_f$ jest zdefiniowane następująco:

$E_f =  \left \{ (u, v) \in V \times V : c_f(u, v) > 0 \right \}$, gdzie $c_f(u, v)$ oznacza tzw. **przepustowość residualną dla krawędzi $(u, v)$**.  

Ta natomiast jest dana wzorem: $c_f(u, v) = c(u, v) - f(u, v)$.

Krawędzie należące do $E_f$ nazywa się **krawędziami residualnymi**.  

Bardziej intuicyjnie, przepustowość residualna dla pewnej krawędzi $(u, v)$ oznacza, o ile można zwiększyć przepływ przez nią, aby nie przekroczył jej przepustowości.

Do sieci residualnej należą te krawędzie, przez które przepływ można zwiększyć.

**Uwaga!** Może zachodzić $c_f(u, v) > c(u, v)$ - w przypadku gdy $f(u, v) < 0$. W szczególności do $E_f$ mogą należeć krawędzie, które nie należą do $E$.

## Metoda Forda - Fulkersona
### Ścieżka powiększająca dla sieci przepływowej $G$
**Ścieżką powiększającą** dla sieci $G$ nazywamy dowolną ścieżkę z $s$ do $t$ w sieci residualnej dla $G$.  

**Przepustowość residualną** ścieżki powiększającej $p$ dla sieci $G$ określamy wzorem $c_f(p) = \min \left \{ c_f(u, v): (u, v) \in p \right \}$.

Jest to wartość, o jaką maksymalnie można zwiększyć przepływ przez wszystkie krawędzie należące do ścieżki $p$.

#### Ogólny algorytm
````
while istnieje pewna ścieżka powiększająca p w grafie rezydualnym
  foreach  (u, v) in p 
    f(u, v) += c_f(p)
    f(v, u) -= c_f(p)
````

Złożoność:
Zależy od sposobu wyszukiwania ścieżek powiększających. <br>
Górne (trywialne) ograniczenie na złożoność wynosi $O(|E| \cdot |f|)$, bo w każdej iteracji pętli while przepływ wzrasta co najmniej o 1, a wyszukiwanie ściezki można zrealizować w czasie $O(|E|)$, chociażby DFS-em - zakładamy że graf jest spójny więc $|E| \geq |V| - 1$.

**Uwaga!** Nie musi to być złożoność wielomianowa, bo nie znamy wartości $|f|$. 

Wielomianowy jest chociażby algorytm **Edmondsa - Karpa** - metoda Forda - Fulkersona + *wyszukiwanie ściezek powiększających BFS-em* (co daje zawsze najkrótsza ściezkę) pozwala osiągnąć wielomianową złożoność $O(V E^2)$.
