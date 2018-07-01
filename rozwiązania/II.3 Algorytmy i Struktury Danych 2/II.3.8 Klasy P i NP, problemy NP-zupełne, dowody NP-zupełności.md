Klasy P i NP, problemy NP-zupełne, przykłady dowodów NP-zupełności.

---

# NP-zupełność

* Problemy obliczeniowo łatwe - posiadają algorytmy o wielomianowej złożoności czasowej.
* Problemy obliczeniowo trudne - nie znamy dla nich algorytmów o wielomianowej złożoności czasowej.

Na współczesnych komputerach nie da się rozwiązać problemu trudnego obliczeniowo (i być może nigdy nie będzie się dało), nawet dla stosunkowo niewielkich danych ze względu na czas wykonania algorytmu. 

Załóżmy że procesor potrafi wykonywać $10^9$ operacji na sekundę i mamy wykonać algorytm o złożoności $\Theta(2^n)$ dla $n = 100$. Zajmie to około $4*10^{13}$ lat.

## Podejście formalne
* Dane: Alfabet $\Sigma$, np. $\Sigma = \{0, 1\}$ oraz język $L \subseteq \Sigma^{*}$
* Problem: Skonstruować Maszynę Turinga $M$, ktora rozpoznaje $L$.

W praktyce często chodzi o rozwiązanie problemu decyzyjnego $Q$, czyli o skonstruowanie algorytmu, który mając na wejściu dowolną instancję $I$ problemu $Q$ prawidłowo odpowiada "tak" lub "nie".

Formalnie mając daną dziedzinę problemu $D(Q)$ chcemy wyznaczyć jej podzbiór $Y(Q)$ instancji, dla których odpowiedź brzmi "tak".

Może także chodzić o rozwiązanie problemu optymalizacyjnego - nie tylko chcemy znać odpowiedź czy dla danej instancji odpowiedź brzmi "tak", ale chcemy znaleźć konkretną instancję, która daje najbardziej optymalny (np. minimalny albo maksymalny) wynik.

### Przykład - problem komiwojażera (TSP)
Dane:
* Liczba miast $n$
* Odległości $d[i, j]$ dla każdej pary miast $(i, j)$
* Liczba $B \in \mathbb{N}$

Pytanie:
* Czy istnieje droga komiwojażera o długości nie większej niż $B$, przechodząca przez każde miasto dokładnie raz i wracająca do miejsca startu ?

## jak wykazać trudność problemu ?
* Metoda ogólna: wykazać, że rozpatrywany problem jest nie łatwiejszy niż inny problem, o którym już wiadomo, że jest trudny.
*  Metoda wykazywania, że jeden problem jest nie łatwiejszy niż inny to **redukcja wielomianowa**.

### Redukcja wielomianowa
Przekształcenie danych dla problemu $Q$ w dane dla problemu $Q'$, w taki sposób, że jeśliby istniał algorytm wielomianowy dla $Q'$, to złożenie redukcji z tym algorytmem dałoby wielomianowy algorytm dla $Q$.

Formalnie chodzi o znalezienie funkcji $f: D(Q) \to D(Q')$ realizowalnej w czasie wielomianowym oraz takiej, że $\forall_{I \in D(Q)}\,\, I \in Y(Q) \Leftrightarrow f(I) \in Y(Q')$. <br>
Mówimy, że $Q$ jest wielomianowo redukowalny do $Q'$ (i oznaczamy to $Q \leqslant_P Q'$), jeśli istnieje taka funkcja $f$.

#### Własności redukcji wielomianowej
* Jeśli $Q \leqslant_P Q'$ to $(Q'$ łatwy $\Rightarrow Q$ łatwy $)$. Bo jeśli $Q'$ ma algorytmwielomianowy, to złożenie redukcji z algorytmem dla $Q'$ daje algorytm wielomianowy dla $Q$.
* Jeśli  $Q \leqslant_P Q'$ to $(Q$ trudny $\Rightarrow Q'$ trudny $)$ - przez kontrapozycję poprzedniego.

#### Przykład redukcji wielomianowej
Problem cyklu Hamiltona (HC)
* Dane: Graf nieskierowany $G$
* Pytanie: Czy $G$ posiada cykl Hamiltona ?

Pokażemy, że $HC \leqslant_P TSP$. <br>
Dowód: <br>
Konstruujemy funkcję $f$, która odwzorowuje instancję problemu cyklu Hamiltona w instancję problemu komiwojażera:
* Zbiór miast (dla TSP) := Zbiór wierzchołków grafu $G$ (dla HC).
* $d[i,j] := 1$, jeśli $(i,j)$ jest krawędzią w grafie $G$, $2$ wpp.
*  $B$ := liczba wierzchołków w grafie $G$.

Funkcja jest oczywiście trywialnie realizowalna w czasie wielomianowym. <br>
Ponadto $G$ ma cykl Hamiltona $\Leftrightarrow$ Komiwojażer ma ścieżkę długości $\leq B$.


## Klasy problemów P i NP
### Klasa P (polynomial)
Ogół problemów decyzyjnych rozwiązywalnych w czasie wielomianowym (problemy obliczeniowo łatwe).

### Klasa NP (nondeterministic polynomial)
Ogół problemów rozwiązywalnych w czasie wielomianowym algorytmem niedeterministycznym (czyli przez niedeterministyczną maszynę Turinga).

#### Niedeterministyczna Maszyna Turinga
* Definicja 1
	* Funkcja przejścia nie jest jednoznaczna (jest relacją).
	* Maszyna akceptuje słowo wtedy i tylko wtedy gdy istnieje ciąg wyborów kolejnych konfiguracji zgodny z relacją przejścia, prowadzący do stanu akceptującego.
* Definicja 2
	* Maszyna na wejściu oprócz słowa x, które ma zaakceptowac lub odrzucić, dysponuje drugim słowem y (zwanym certyfikatem lub świadectwem). 
	* Maszyna sprawdza czy obliczenie (deterministyczne) dla x i y kończy się w stanie akceptującym.
	* Maszyna akceptuje słowo x wtedy i tylko wtedy, gdy istnieje taki certyfikat y, że obliczenie na x i y kończy się akceptacją.
	* Maszyna odrzuca słowo x wtedy i tylko wtedy, gdy nie istnieje żaden taki certyfikat y, że obliczenie na x i y kończy się akceptacją.

### Klasa NPC (NP - Complete)
Problem $Q$ jest NP-zupełny, jeśli:
* $Q \in NP$,
* $\forall_{Q' \in NP}\,\, Q' \leqslant_P Q$

Zatem problem NP-zupełny jest **najtrudniejszy w NP**, tzn. jeśliby dla niego istniał algorytm wielomianowy, to wszystkie problemy w NP byłyby łatwe.

### Problemy NP - trudne
Problem $Q$ jest NP-trudny jeśli istnieje NP-zupełny problem $Q'$ taki, że $Q' \leqslant_P Q$. <br>
Inaczej problem NP-trudny to problem co najmniej tak trudny jak wszystkie problemy w NP.

## Fakt oczywisty - $P \subseteq NP$
Bo  każdy zwykły algorytm deterministyczny może być traktowany jako niedeterministyczny, który nie zważa na podany certyfikat.

## Dowody NP - zupełności
Wykazywanie, że konkretny problem $Q$ jest NP - zupełny: poprzez redukcję wielomianową z innego problemu $Q'$, o którym już wiadomo, że jest NP-zupełny.
### Problem spełnialności formuł logicznych (SAT)
#### Definicje
* Literałem nazywamy zmienną lub jej negację.
* Formuła logiczna $\Phi$ jest w koniunkcyjnej postaci normalnej *(CNF)* jeśli jest postaci $\Phi = C_1 \wedge C_2 \wedge \ldots \wedge C_m$, każde $C_j$ jest alternatywą literałów nad zmiennymi $x_1, \ldots, x_n$.

**Uwaga.** Każdą formułę logiczną można sprowadzić do formuły równoważnej w postaci CNF.

#### Sformułowanie problemu
* Wejście: formuła logiczna $\Phi$ w postaci CNF.
* Pytanie: Czy formuła $\Phi$ jest spełnialna ? Innymi słowy czy istnieje wartościowanie zmiennych $x_1, \ldots, x_n$ takie, że w każdej alternatywie co najmniej jeden literał ma wartość $1$ ?

#### Twierdzenie (Cook, Levin)
> Problem SAT jest NP - zupełny.

### Problem 3-SAT
* Wejście: Formuła $\Phi$ jak w problemie SAT, z dodatkowym założeniem, że każda alternatywa $C_j$ składa się z trzech literałów nad różnymi zmiennymi
* Pytanie: Czy $\Phi$ jest spełnialna ?

Dowodzimy, że $\, 3-SAT \in NPC$.
1. $3-SAT \in NP$, bo dla certyfikatu - ciągu $n$ wartości $0/1$ trywialnie sprawdzić w czasie wielomianowym od długości formuły czy jest ona spełnialna. 
2. Aby udowodnić, że $\, 3-SAT \in NPC$ konstruujemy redukcję $SAT \leqslant_P 3-SAT$. <br>
Przekształcamy dowolną formułę $\Phi$ z dziedziny problemu SAT na formułę $\Phi'$ z dziedziny problemu 3-SAT. <br>
Każdą alternatywę $C_j$ z formuły $\Phi$ przekształcamy osobno na $C_j'$:
* Jeśli $|C_j| = 3$ - zostaje bez zmian. $C_j$ spełnialna $\Leftrightarrow C_j'$ spełnialna.
* Jeśli $|C_j| = 2$ to dodajemy nową zmienną $z$ i $C_j$ zastępujemy przez 2 alternatywy 3-składnikowe, np. $(x_1 \vee x_2)$ przez $(x_1 \vee x_2 \vee z) \wedge (x_1 \vee x_2 \vee \neg z)$. $C_j$ spełnialna $\Leftrightarrow C_j'$ spełnialna.
* Jeśli $|C_j| = 1$ to dodajemy dwie nowe zmienne $Z_1, z_2$ i $C_j$ zastępujemy przez 4 alternatywy 3-składnikowe, np. $x_1$ zastępujemy przez $(x_1 \vee z_1 \vee z_2) \wedge (x_1 \vee \neg z_1 \vee z_2) \wedge (x_1 \vee z_1 \vee \neg z_2) \wedge (x_1 \vee \neg z_1 \vee \neg z_2)$. $C_j$ spełnialna $\Leftrightarrow C_j'$ spełnialna.
* Jeśli $|C_j| = k > 3$, to dodajemy $k - 3$ nowych zmiennych i $C_j$ zastępujemy przez $k-2$ alternatyw, np. $(x_1 \vee x_2 \vee x_3 \vee x_4 \vee x_5 \vee x_6)$ zastępujemy przez $(x_1 \vee x_2 \vee z_1) \wedge (\neg z_1 \vee x_3 \vee z_2) \wedge (\neg z_2 \vee x_4 \vee z_3) \wedge (\neg z_3 \vee x_5 \vee x_6)$. Jeśli pewne wartościowanie spełnia $C_j$ to można tak dobrać wartości nowych zmiennych aby spełniało $C_j'$. Jeśli $C_j'$ spełnione przez pewne wartościowanie to co najmniej jedna zmienna $x_i$ ma wartość $1$ więc $C_j$ spełniona. 

Wypisywanie nowych alternatyw łatwo realizowalne w czasie wielomianowo zależnym od długości zapisu formuły wejściowej.  <br>
Wykazaliśmy zatem poprawność redukcji, co kończy dowód.

### Problem kliki (CLIQUE)
* Wejście: Graf nieskierowany $G$ oraz liczba $k \leq |V|$
* Pytanie: Czy $G$ ma klikę o liczności $\geq k$, tzn. czy istnieje $V' \subseteq V$, że $|V'| \geq k$ oraz $\forall_{u, v \in V'}\, \{u, v \} \in E$.

Dowodzimy, że $\, CLIQUE \in NPC$.
1. $CLIQUE \in NP$ bo certyfikatem jest żądany zbiór wierzchołków, a weryfikatorem program sprawdzający czy każda para wierzchołków jest połączona krawędzią – łatwo realizowalne w czasie wielomianowym.
2. Pokażemy, że $3-SAT \leqslant_P CLIQUE$.
Przekształcamy formułę $\Phi = C_1 \wedge \ldots \wedge C_m$ nad zmiennymi $x_1, \ldots, x_n$ w graf $G=(V, E)$. <br>
Każde $C_i$ jest alternatywą 3 literałów, $C_i = (L_1^i, L_2^i, L_3^i)$. <br>
Dla każdej alternatywy $(L_1^i, L_2^i, L_3^i)$ dodajemy do grafu nowe wierzchołki $v_1^i, v_2^i, v_3^i$  (czyli $|V|=3m$). <br>
$\{ v_i^r, v_j^s \}$ jest krawędzią jeśli:
	* oba sa w różnych alternatywach, czyli $r \neq s$,
	* odpowiadające im literały są niesprzeczne (jeden nie jest zaprzeczeniem drugiego).

Bierzemy k = m. Algorytm wczytujący taką formułę i wypisujący tak zdefiniowany graf łatwo zrealizować w czasie wielomianowym. <br>
Wykażemy, że $\Phi$ jest spełnialna $\Leftrightarrow G$ ma klikę liczności $k$. <br>
1. $(\Rightarrow) \,\, \Phi$ jest spełnialna więc w każdej alternatywie $C_k$ jest literał $L_i^k = 1$ . Bierzemy  po jednym takim z każdej alternatywy, odpowiadający im zbiór wierzchołków $V'$ ma liczność $k=m$ i jest kliką, bo każde dwa takie wierzchołki pochodzą z różnych alternatyw i są równe 1, więc są niesprzeczne.
2. $(\Leftarrow) \,\,$ Istnieje klika m węzłów, więc  odpowiadające im literały są w różnych alternatywach, po jednym w każdej, a ponieważ są niesprzeczne (bo są między nimi krawędzie), to można je wszystkie ustawić na $1$, więc istnieje wartościowanie w którym przynajmniej jeden literał w każdej alternatywie jest równy 1, więc formuła jest spełnialna.
