Klasy $P$ i $NP$, problemy $NP$-zupełne, przykłady redukcji: do wyboru $2$ spośród
SAT-$3$SAT, $3$SAT-KLIKA, CYKL-HAMILTONA-KOMIWOJAŻER.

---

## Klasy problemów P i NP
### Klasa P (polynomial)
Ogół problemów decyzyjnych rozwiązywalnych w czasie wielomianowym (problemy obliczeniowo łatwe).

### Klasa NP (nondeterministic polynomial)
Ogół problemów rozwiązywalnych w czasie wielomianowym algorytmem niedeterministycznym (czyli przez niedeterministyczną maszynę Turinga).

### Klasa NPC (NP - Complete)
Problem $Q$ jest NP-zupełny, jeśli:
* $Q \in NP$,
* $\forall_{Q' \in NP}\,\, Q' \leqslant_P Q$

Zatem problem NP-zupełny jest **najtrudniejszy w NP**, tzn. jeśliby dla niego istniał algorytm wielomianowy, to wszystkie problemy w NP byłyby łatwe.

### Cykl Hamilton - Komiwojażer
Problem cyklu Hamiltona (HC)
* Dane: Graf nieskierowany $G$
* Pytanie: Czy $G$ posiada cykl Hamiltona ?

Pokażemy, że $HC \leqslant_P TSP$. <br>
Dowód: <br>
Konstruujemy funkcję $f$, która odwzorowuje instancję problemu cyklu Hamiltona w instancję problemu komiwojażera:
* Zbiór miast (dla TSP) := Zbiór wierzchołków grafu $G$ (dla HC).
* $d[i,j] := 1$, jeśli $(i,j)$ jest krawędzią w grafie $G$, $2$ wpp.
*  $B$ := liczba wierzchołków w grafie $G$.

Czy istnieje droga komiwojażera o długości nie większej niż B, przechodząca przez każde miasto dokładnie raz i wracająca do miejsca startu ?

Funkcja jest oczywiście trywialnie realizowalna w czasie wielomianowym. <br>
Ponadto $G$ ma cykl Hamiltona $\Leftrightarrow$ Komiwojażer ma ścieżkę długości $\leq B$.


### 3SAT - Klika
Klika
* Wejście: Graf nieskierowany $G$ oraz liczba $k \leq |V|$
* Pytanie: Czy $G$ ma klikę o liczności $\geq k$, tzn. czy istnieje $V' \subseteq V$, że $|V'| \geq k$ oraz $\forall_{u, v \in V'}\, \{u, v \} \in E$.

Pokażemy, że $3-SAT \leqslant_P CLIQUE$.
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
