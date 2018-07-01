Cykle Eulera i cykle Hamiltona w grafach.

---

# Cykl Eulera
Cykl w grafie, który przechodzi przez każdą krawędź dokładnie raz. Jeśli w grafie istnieje taki cykl, graf nazywany jest grafem eulerowskim.

> Graf $G = (V, E)$ jest eulerowski wtedy i tylko wtedy, gdy jest spójny i stopień każdego wierzchołka jest parzysty.

# Cykl Hamiltona
Cykl w grafie, w którym każdy wierzchołek (oprócz startowego) jest odwiedzany dokładnie raz. Graf posiadający cykl Hamiltona nazywany jest grafem hamiltonowskim.

Warunek wystarczający na to aby graf posiadał cykl Hamiltona podaje **Twierdzenie Orego**.

> Jeżeli w grafie prostym $G$ o $n > 2$ wierzchołkach zachodzi nierówność $\deg(u)+\deg(v) \geqslant n$ dla każdej pary niepołączonych bezpośrednio krawędzią wierzchołków $u$ i $v$, to graf $G$ posiada cykl Hamiltona.



Problem znajdowania cyklu Hamiltona jest problemem NP – zupełnym.
