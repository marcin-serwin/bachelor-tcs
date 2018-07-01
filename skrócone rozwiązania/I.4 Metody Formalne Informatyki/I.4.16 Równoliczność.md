Równoliczność zbiorów na przykładach $(A^B)^C \sim A^{B \times C}$ oraz $(A \times B)^C \sim A^C \times B^C$.

---

# Równoliczność

Zbiory $A$ i $B$ nazywamy równolicznymi, jeżeli istnieje bijekcja (surjekcja i iniekcja) $f : A \rightarrow B$.

## $(A^B)^C \sim A^{B \times C}$
Skonstruujmy $F: (A^B)^C \rightarrow A^{B \times C}$ taką że $F(f) = g$ gdzie wartość $g(b,c)$ ustalamy jako $f(c)(b)$.

### Surjekcja
Weźmy dowolną $g : B \times C \rightarrow A$. Dla każdego $c \in C$ skonstruujmy $f_{c} : B \rightarrow A$ taką, że $f_{c}(b) = g(b,c)$. Skonstruujmy funkcję $f : C \rightarrow A^B$,
taką, że $\forall_{c \in C} f(c) = f_{c}$ zatem $\forall_{c \in C, b \in B} f(c)(b) = g(b,c) \Rightarrow F(f) = g$. Dla każdego elementu $a \in A^{B \times C}$ potrafimy znaleźć taki
argument $b$, że $F(b) = a$, a więc $F$ istotnie jest surjekcją.

### Iniekcja
Niech $f_{1}, f_{2} \in (A^B)^C$ oraz $f_1 \neq f_{2}$. Zatem $\exists_{c \in C} f_{1}(c) \neq f_{2}(c) \Rightarrow \exists_{b \in B} f_{1}(c)(b) \neq f_{2}(c)(b)$.
Dalej $F(f_{1})(b,c) = f_{1}(c)(b) \neq f_{2}(c)(b) = F(f_{2})(b,c)$, co oznacza, że $F(f_{1}) \neq F(f_{2})$, a więc $F$ istotnie jest iniekcją.

## $(A \times B)^C \sim A^C \times B^C$
Skonstruujmy $F: A^C \times B^C \rightarrow (A \times B)^C$ taką, że:
* $F((g_{1}, g_{2})) = f$
* $f(c) = (g_{1}(c), g_{2}(c))$

### Surjekcja
Pokażemy, że dla dowolnej $f \in (A \times B)^C$ istnieją takie $g_1$ i $g_2$, że $F((g_{1},g_{2})) = f$.

Dla dowolnego $c \in C$ zachodzi $f(c) = (a,b)$. Weźmy sobie dwie funkcje:
* $g_1: g_1(c) = a$
* $g_2: g_2(c) = b$

Takie funkcje na pewno istnieją, bo mamy zbiory wszystkich funkcji. Wtedy:

$$\begin{align}
F((g_{1},g_{2}))(c) &= (g_{1}(c), g_{2}(c)) \\
&= (a, b) \\
&= f(c)
\end{align}$$

Pokazaliśmy, że $F((g_{1},g_{2})) = f$, zatem $F$ jest surjekcją.

### Iniekcja
Dla dowolnych różnych par funkcji dostaniemy inną funkcję $C \rightarrow A \times B$. Weźmy więc dwie dowolne pary $(f_{1}, f_{2})$ i $(g_{1}, g_{2})$ ze zbioru $A^{C} \times B^{C}$, które są różne.

$$\begin{align}
& (f_{1},f_{2}) \neq (g_{1},g_{2}) \\
\implies & f_{1} \neq g_{1} \vee f_{2} \neq g_{2} \\
\implies & \exists_{c \in C}\; f_{1}(c) \neq g_{1}(c) \vee \exists_{c \in C}\; f_{2}(c) \neq g_{2}(c) \\
\implies & \exists_{c \in C}\; f_{1}(c) \neq g_{1}(c) \vee f_{2}(c) \neq g_{2}(c) \\
\implies & \exists_{c \in C}\; (f_{1}(c),f_{2}(c)) \neq (g_{1}(c),g_{2}(c)) \\
\implies & F((f_{1},f_{2})) \neq F((g_{1}, g_{2}))
\end{align}$$

Dla dwóch różnych argumentów otrzymujemy dwie różne wartości, zatem jest to iniekcja.
