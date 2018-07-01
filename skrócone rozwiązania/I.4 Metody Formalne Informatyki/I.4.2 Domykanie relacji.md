Domykanie relacji ze względu na różne własności. Podaj przykłady własności na które istnieje i na które nie istnieje domknęcie.

---

# Domknięcie relacji
Domknięcie relacji $R$ to najmniejsza (w sensie inkluzji) relacja $R'$ zawierająca $R$ i posiadająca wymaganą własność.

Relacja $R'$ jest domknięciem relacji $R$, gdy:  
 1. $R \subset R'$,
 2. $R'$ posiada pożądaną własność,
 3. $R'$ jest minimalna w sensie inkluzji - dla każdej relacji $T$ posiadającej pożądaną własność jeżeli $R \subset T$ to $R' \subset T$.

Jeśli relacja $R$ posiada pożądaną własność, to jest sama swoim domknięciem, czyli $R = R'$.

# Przykłady
Wszystkie poniższe domknięcie rozważam dla $R \subset X \times X$.

## Istniejące domknięcia

### Zwrotność
Dla każdego $x \sim x$.

Domknięcie zwrotne $R\cup 1_X$.

$$1_X = \{ (x,x) : x\in X \}$$

 1. $R \subset R \cup 1_X$,
 2. $1_X \subset R \cup 1_X$, a więc jest zwrotna,
 3. Weźmy dowolną zwrotną relację $T\supset R$. Ponieważ $T$ jest zwrotna to $T\supset 1_X$, a więc $T\supset R \cup 1_X$, więc $R\cup 1_X$ jest najmniejsza w sensie inkluzji.

### Symetria
$x \sim y \iff y \sim x$.

Domknięcie symetryczne to $R\cup R^{-1}$.

 1. $R \subset R \cup R^{-1}$,
 2. $(R \cup R^{-1})^{-1} = R^{-1} \cup (R^{-1})^{-1}= R^{-1} \cup R= R \cup R^{-1}$, a więc jest symetryczna,
 3. weźmy dowolną symetryczną relację $T\supset R$. Ponieważ $T$ jest symetryczna to $T \supset T^{-1}$. Skoro $T \supset R$ to $T^{-1} \supset R^{-1}$. Ponieważ $T \supset T^{-1}$, to $T\supset R\cup R^{-1}$.

### Przechodniość
$x \sim y$ oraz $y \sim z$ $\implies$ $x \sim z$.

Domknięcie przechodnie to $R^* = \bigcup_{i \in \mathbb{N_+}} R^i$

Zauważmy, że jeśli $(x, y) \in R^i$ oraz $(y, z) \in R^j$ to $(x, z) \in R^{i+j}$ czyli relacja $R^{\ast}$ jest przechodnia i $R \subset R^{\ast}$.

Jeśli pokażemy, że dla dowolnej przechodniej relacji $T \supset R$ relacja $R^* \subset T$, to pokażemy, że $R^{\ast}$ jest przechodnim domknięciem. Udowodnijmy indukcyjnie, że $\forall_{n > 0} R^n \subset T$:
1. $R \subset T$
2. Załóżmy, że dla wszystkich $0 < m < n$ mamy, że $R^m \subset T$, wtedy z przechodniości $T$ wynika, że $R \circ R^{n-1} = R^n \subset T$.

## Nieistniejące domknięcia

### Spójność
Dowolne dwa elementy są w relacji $x \sim y$ lub $y \sim x$.

Weźmy $R = \{(0,0),(1,1)\}$. Istnieją relacje:
* $\{(0,1)\} \cup R$,
* $\{(1,0)\} \cup R$,

które mogłyby uspójnić naszą relację. Wybór jest niejednoznaczny, więc domknięcie zgodnie z definicją nie istnieje.

### Antysymetria
Jeśli $x \sim y$ oraz $y \sim x$ to $x=y$.

Weźmy $R = \{(0,1),(1,0)\}$. Ta relacja sama w sobie nie jest antysymetryczna i trzebaby sprawić, że $0 = 1$.
