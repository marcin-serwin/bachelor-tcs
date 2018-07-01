Relacje równoważności i podziały zbiorów. Relacja równoważności jako środek do definiowania pojęć abstrakcyjnych.

---

# Relacja równoważności
* **Zwrotna**: $x \sim x$
* **Symetryczna**: $x \sim y \implies y \sim x$
* **Przechodnia**: $x \sim y \wedge y \sim z \implies x \sim z$

Dwa elementy w relacji (oznaczana jako $\sim$ lub  $\equiv$) są **równoważne**.

# Klasa abstrakcji (równoważności)
Zbiór wszystkich elementów zbioru $X$ równoważnych z $x$:

$${[x]}_\sim = \{y \in X : y \sim x \}$$

Każdy element $x \in X$ należy do dokładnie jednej klasy abstrakcji, mianowicie $[x]$. Zatem dwie klasy równoważności odpowiadające elementom $x, y$ są albo identyczne (gdy $x \sim y$), albo rozłączne (gdy $x \nsim y$), czyli:
$$a \sim b \Leftrightarrow [a] = [b]$$

 Klasa abstrakcji nie może być pusta, bo każdy element jest w relacji z samym sobą.

# Podział zbioru
Rozbicie zbioru, partycja zbioru. Dla niepustego $A$ jest to rodzina takich jego podzbiorów $A_i$, że:

* są **niepuste**: $A_i \neq \emptyset$,
* są **rozłączne**: $A_i\neq A_j \Longrightarrow A_i\cap A_j = \emptyset$,
* **sumują się do $A$**: $\bigcup_{t\in T} A_t = A$.

Podzbiory $A_i$ to **klasy rozbicia**. Czyli klasy abstrakcji są klasami rozbicia.

Btw, liczba sposobów podziału skończonego zbioru $n$-elementowego wyraża się $n$-tą liczbą Bella.

## Przykłady

### Relacja równości
Na dowolnym zbiorze $X$ zdefiniowana jest relacja:
$$x R y \iff x = y$$ Jest ona nazywana równością, a jej klasami abstrakcji są zbiory jednoelementowe $\{x\}$.

### Relacja modulo
W zbiorze $A = \{1,2,3,4,5,6,7\}$ określamy relację $x \equiv y$ $\iff$ $x$ i $y$ daję tę samą resztę z dzielenia przez 3. Jest to relacja równoważności z klasami abstrakcji:

* $[1] = [4] = [7] = \{1,4,7\}$
* $[2] = [5] = \{2, 5\}$
* $[3] = [6] = \{3, 6\}$

Poszczególne warstwy są rozłączne, a przestrzenią ilorazową (czyli zbiorem wszystkich klas równoważności) jest zbiór:
$${A/}_\equiv = \left \{ \left \{ 1, 4, 7 \right \}, \left \{ 2, 5 \right \}, \left \{ 3,6 \right \} \right \}$$

### Samoloty
W zbiorze wszystkich samolotów istnieje relacja równoważności: dwa samoloty są równoważne, gdy mogą przewieźć tę samą liczbę pasażerów. Klasą abstrakcji danego samolotu zabierającego na pokład równo 50 osób jest zbiór wszystkich samolotów mogących przewieźć dokładnie 50 osób.
