Równoliczność zbiorów na przykładach $(A^B)^C \sim A^{B \times C}$ oraz $(A \times B)^C \sim A^C \times B^C$.

---
# Definicja

Zbiory $A$ i $B$ nazywamy równolicznymi, jeżeli istnieje bijekcja $f : A \rightarrow B$.

# $(A^B)^C \sim A^{B \times C}$

Skonstruujmy $F: (A^B)^C \rightarrow A^{B \times C}$ taką że $F(f) = g$ gdzie wartość $g(b,c)$ ustalamy jako $f(c)(b)$.

### 1. Jest to surjekcja.

Weźmy dowolną $g : B \times C \rightarrow A$. Dla każdego $c \in C$ skonstruujmy $f_{c} : B \rightarrow A$ taką, że $f_{c}(b) = g(b,c)$. Skonstruujmy funkcję $f : C \rightarrow A^B$,
taką, że $\forall_{c \in C} f(c) = f_{c}$ zatem $\forall_{c \in C, b \in B} f(c)(b) = g(b,c) \Rightarrow F(f) = g$. Dla każdego elementu $a \in A^{B \times C}$ potrafimy znaleźć taki
argument $b$, że $F(b) = a$, a więc $F$ istotnie jest surjekcją.

### 2. Jest to iniekcja.

Niech $f_{1}, f_{2} \in (A^B)^C$ oraz $f_1 \neq f_{2}$. Zatem $\exists_{c \in C} f_{1}(c) \neq f_{2}(c) \Rightarrow \exists_{b \in B} f_{1}(c)(b) \neq f_{2}(c)(b)$.
Dalej $F(f_{1})(b,c) = f_{1}(c)(b) \neq f_{2}(c)(b) = F(f_{2})(b,c)$, co oznacza, że $F(f_{1}) \neq F(f_{2})$, a więc $F$ istotnie jest iniekcją.

### 3. Ponieważ $F$ jest zarówno surjekcją jak i iniekcją, to jest ona bijekcją, a więc zbiory te są równoliczne. QED

# $(A \times B)^C \sim A^C \times B^C$

Skonstruujmy $F: A^C \times B^C \rightarrow (A \times B)^C$ taką że $F((g_{1}, g_{2})) = f$ gdzie $f(c) = (g_{1}(c), g_{2}(c))$.

### 1. Jest to surjekcja.

Weźmy dowolną $f \in (A \times B)^C$. Niech $(g_{1},g_{2})$ będzie taka, że $\forall_{c \in C} g_{1}(c) = x_{c} \wedge g_{2}(c) = y_{c}$ gdzie $(x_{c},y_{c}) = f(c)$.
Wtedy $\forall_{c \in C} F((g_{1},g_{2}))(c) = (g_{1}(c), g_{2}(c)) = (x_{c}, y_{c}) = f(c) \Rightarrow F(g_{1},g_{2}) = f$. Co oznacza, że $F$ jest suriekcją.
 

### 2. Jest to iniekcja.

Niech $(f_{1}, f_{2}), (g_{1}, g_{2}) \in A^{C} \times B^{C}$ oraz $(f_{1},f_{2}) \neq (g_{1},g_{2})$. Zatem $f_{1} \neq g_{1} \vee f_{2} \neq g_{2} \Rightarrow
\exists_{c \in C} f_{1}(c) \neq g_{1}(c) \vee \exists_{c \in C} f_{2}(c) \neq g_{2}(c) \Rightarrow$ $\Rightarrow \exists_{c \in C} f_{1}(c) \neq g_{1}(c) \vee f_{2}(c) \neq g_{2}(c)
\Rightarrow \exists_{c \in C} (f_{1}(c),f_{2}(c)) \neq (g_{1}(c),g_{2}(c)) \Rightarrow F((f_{1},f_{2})) \neq F((g_{1}, g_{2}))$.
Dla dwóch różnych argumentów otrzymujemy dwie różne wartości, zatem jest to iniekcja.

### 3. Ponieważ $F$ jest zarówno surjekcją jak i iniekcją, to jest ona bijekcją, czyli sa one równoliczne. QED
