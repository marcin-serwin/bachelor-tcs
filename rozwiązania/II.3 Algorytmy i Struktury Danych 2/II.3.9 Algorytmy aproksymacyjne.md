Algorytmy aproksymacyjne dla problemow obliczeniowo trudnych.

---

# Algorytmy aproksymacyjne

Dla problemów optymalizacyjnych (np. pokrycie wierzchołkowe o minimalnej liczności) wyróżniamy:
* Rozwiązania **dopuszczalne** (np. poprawne pokrycie wierzchołkowe, ale niekoniecznie najmniej liczne),
* Rozwiązania (być może dokładnie jedno) **optymalne**.

Algorytm aproksymacyjny znajduje dowolne rozwiązanie **dopuszczalne**.
## Zależy nam aby algorytm aproksymacyjny:
* Miał niską złożoność (na ogół: wielomianową, wielomianowe strategie aproksymacyjne).
* Znajdował rozwiązanie o koszcie zbliżonym do kosztu rozwiązania optymalnego.

Algorytmy aproksymacyjne często stosuje się gdy analizowany problem jest NP - trudny - wtedy korzystamy z rozwiązania działającego szybko, ale niekoniecznie dającego optymalne rozwiązanie.

## Parametry algorytmu aproksymacyjnego
* Rozmiar instancji $I$ - $n(I)$
* Koszt rozwiązania dopuszczalnego znalezionego przez algorytm aproksymacyjny - $B(I)$.
* Koszt rozwiązania optymalnego - $OPT(I)$.
* Współczynnik efektywności alg. aproksymacyjnego - $r(n)$. Dla każdej instancji rozmiaru $n$ zachodzi (przy problemie maksymalizacyjnym, np. CLIQUE) $\frac{OPT(I)}{B(I)} \leq r(n)$. Dla problemu minimalizacyjnego (np. TSP) nierówność ma postać $\frac{B(I)}{OPT(I)} \leq r(n)$.

Algorytm dokładny osiąga zawsze  $r(n) = 1$. <br>
Algorytm aproksymacyjny osiąga zawsze $r(n) \geq 1$, im bliższe 1 tym lepiej. Dobrze jest jeśli $r(n)$ jest stałą niezależną od $n$, ale dla niewielu problemów z NPC istnieją tak dobre algorytmy.

## Algorytm aproksymacyjny dla Vertex Cover
Niech $G=(V, E)$ - graf nieskierowany. Wynikiem będzie $C \subseteq V$ - pokrycie wierzchołkowe.
### Pseudokod
````
Approximate-Vertex-Cover(G)
{
	C = empty_set
	E' = E(G)
	while E' is not empty
	{
		wybierz dowolną krawędź (u, v) z E'
		dodaj wierzchołki u, v do C
		usuń z E' wszystkie krawędzie  incydentne z u lub v		
	}
	return C
}
````
Dla tego algorytmu zachodzi $r(n) \leqslant 2$. <br>
Dowód: <br>
Niech $A$ będzie zbiorem krawędzi wybieranych w pętli *while*. <br>
Wybieramy |A| krawędzi, z których żadne dwie nie mają wspólnego wierzchołka. Każda krawędź musi mieć któryś wierzchołek w pokryciu, więc widać, że pokrycie optymalne musi być rozmiaru co najmniej |A|. Pokrycie  zalezione przez alg. aproksymacyjny ma rozmiar 2|A|, więc jest gorsze od OPT co najwyżej 2 razy - $r(n) \leq \frac{2|A|}{|A|} = 2$.

## Algorytm aproksymacyjny dla Problemu plecakowego
Wejście :
* $s_1, \ldots, s_n \in \mathbb{N}$ - rozmiary elementów.
* $v_1, \ldots, v_n \in \mathbb{N}$ - wartości elementów.
* $B$ - pojemność plecaka.

Wynik:
* podzbiór $A$ mieszczący się w plecaku $(\sum_{i \in A} s_i \leq B)$, o możliwie największej wartości $\sum_{i \in A}\,\, v_i$

### Algorytm
1. Posortuj elementy malejąco względem "gęstości wartości": $\frac{v_1}{s_1} \geq \frac{v_2}{s_2} \geq \ldots \geq \frac{v_n}{s_n}$.
2. Plecak-1. Zacznij od pustego plecaka. Kolejno dla $i=1, \ldots, n$ jeśli $i$-ty element mieści się w plecaku to go tam wstaw.
3. Plecak-2. Wstaw do pustego plecaka element o maksymalnej wartości.
4. Zwróć wynik $GR(I) = max(Plecak-1, Plecak-2)$.

### Fakt. $GR(I) > \frac{1}{2} OPT(I)$.
Niech $m = min \{ i : \text{element i-ty nie wszedł do Plecaka-1} \}$ (indeks pierwszego elementu który się nie zmieścił). 

$GR(I) \geq v_1 + \ldots + v_{m-1}$ z własności Plecaka-1. <br>
$GR(I) \geq v_m$ - z własności Plecaka-2.

Sumując stronami mamy $2GR(I) = v_1 + \ldots + v_m$.

Zauważmy teraz, że suma $v_1 + \ldots + v_m$ stanowi optymalne upakowanie dla pewnego plecaka o pojemności $s_1 + \ldots + s_m > B$ dzięki temu, że na początku posortowaliśmy malejąco po $\frac{v_i}{s_i}$ oraz element $v_m$ nie zmieścił się do plecaka. Zatem ta suma  jest większa niż $OPT(I)$. Mamy więc, że $2GR(I) > OPT(I) \Rightarrow GR(I) > \frac{1}{2}OPT(I)$.