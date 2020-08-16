Relacje równoważności i podziały zbiorów. Relacja równoważności jako środek
do definiowania pojęć abstrakcyjnych.

---
# Relacja równoważności
Niech $X$ będzie zbiorem. Relację $R \subseteq X \times X$ nazywamy **relacją równoważności** wtw, gdy jest ona:
* **zwrotna**: dla dowolnych $x \in X : x R x$
* **symetryczna**: dla dowolnych $x, y \in X : x R y \Rightarrow y R x$
* **przechodnia**: dla dowolnych $x, y, z \in X : (x R y \wedge y R z) \Rightarrow x R z$

Dwa elementy $x,y \in X$, takie że $x R y$ nazywa się **równoważnymi**. Relację równoważności oznacza się zwykle symbolami $\sim$ albo  $\equiv$.

# Klasy abstrakcji
Niech $X$ będzie zbiorem, na którym określono relację równoważności $\sim$. **Klasą równoważności** lub **klasą abstrakcji** (także warstwą) elementu $x$  nazywa się zbiór:
$${[x]}_\sim = \{y \in X : y \sim x \}$$
czyli zbiór wszystkich elementów zbioru $X$  równoważnych z $x$.

Każdy element $x \in X$ należy do dokładnie jednej klasy abstrakcji, mianowicie $[x]$. Zatem dwie klasy równoważności odpowiadające elementom $x, y$ są albo identyczne (gdy $x \sim y$), albo rozłączne (gdy $x \nsim y$), czyli:
$$a \sim b \Leftrightarrow [a] = [b]$$

 Klasa abstrakcji nie może być pusta, bo każdy element jest w relacji z samym sobą.

# Podział zbioru
Dla niepustego zbioru $A$ to taka rodzina $\Pi$ niepustych podzbiorów tego zbioru, że każdy element zbioru $A$ należy do dokładnie jednego podzbioru tej rodziny.

Formalnie, rodzina $\Pi = \{ A_t : t\in T \}$ podzbiorów zbioru $A\neq\emptyset$ jest jego rozbiciem wtedy i tylko wtedy, gdy:
* Podzbiory są **niepuste** - $\forall_{t\in T} A_t\neq\emptyset$,
* Podzbiory są **rozłączne** - $A_i\neq A_j \Longrightarrow A_i\cap A_j = \emptyset$,
* Podzbiory **sumują się do $A$** - $\bigcup_{t\in T} A_t = A$.

Podzbiory $A_t$ nazywane są **klasami rozbicia**.

Każda klasa abstrakcji na zadanym zbiorze wyznacza jednoznacznie podział tego zbioru i vice versa.

## Przykłady

Konstrukcja liczb całkowitych, wymiernych, rzeczywistych.
