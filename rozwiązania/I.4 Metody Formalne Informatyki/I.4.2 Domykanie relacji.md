Domykanie relacji ze względu na różne własności. Podaj przykłady własności na które istnieje i na które nie istnieje domknęcie.

---

# Definicje

## Relacja

Relacją nazywamy każdy podzbiór iloczynu kartezjańskiego $X \times Y$.

## Relacja $1_X$

Dla zbioru $X$ definiujemy relację $1_X \subset X \times X$ jako $\{ (x,x) : x\in X \}$.

## Relacja równoważnośći, pole relacji

Relację $R \subset X \times X$ nazywamy relacją równoważności o polu $X$, jeżeli:  
 * zawiera relacje $1_X$ (zwrotność $R$),
 * $R^{-1} \subset R$ (symetria $R$),
 * $R \circ R \subset R$ (przechodniość $R$).

## Domknięcie relacji
Domknięcie relacji rozważamy ze względu na pewną własność, np. przechodniość. Domknięcie relacji $R$ to najmniejsza (w sensie inkluzji) relacja $R'$ zawierająca $R$ i posiadająca wymaganą własność.

Relacja $R'$ jest domknięciem relacji $R$, gdy:  
 1. $R \subset R'$,
 2. $R'$ posiada pożądaną własność,
 3. $R'$ jest minimalna w sensie inkluzji - dla każdej relacji $T$ posiadającej pożądaną własność jeżeli $R \subset T$ to $R' \subset T$.

Jeśli relacja $R$ posiada pożądaną własność, to jest sama swoim domknięciem, czyli $R = R'$.

# Przykłady
Dalej będziemy mówić o domykaniu relacji ze względu na pewne własności.

## Zwrotność (istnieje)
Relacja $R \subset X^2$ jest zwrotna, gdy $\forall_{ x\in X} (x,x) \in R$.

Pokażemy, że dla każdej relacji $R\subset X^2$ jej domknięcie zwrotne na $X$ to $R\cup 1_X$. Pokażemy po kolei, że spełnia warunki domknięcia:  
 1. $R \subset R \cup 1_X$,
 2. $1_X \subset R \cup 1_X$, a więc jest zwrotna,
 3. Weźmy dowolną zwrotną relację $T\supset R$. Ponieważ $T$ jest zwrotna to $T\supset 1_X$, a więc $T\supset R \cup 1_X$, więc $R\cup 1_X$ jest najmniejsza w sensie inkluzji.

## Symetria (istnieje)
Relacja $R \subset X^2$ jest symetryczna, gdy $\forall_{ x,y \in X} (x,y) \in R \Leftrightarrow (y,x) \in R$.

Pokażemy, że dla każdej relacji $R\in X^2$ jej domknięcie symetryczne na $X$ to $R\cup R^{-1}$. Pokażemy po kolei, że spełnia warunki domknięcia:  
 1. $R \subset R \cup R^{-1}$,
 2. $(R \cup R^{-1})^{-1} = R^{-1} \cup (R^{-1})^{-1}= R^{-1} \cup R= R \cup R^{-1}$, a więc jest symetryczna,
 3. weźmy dowolną symetryczną relację $T\supset R$. Ponieważ $T$ jest symetryczna to $T \supset T^{-1}$. Skoro $T \supset R$ to $T^{-1} \supset R^{-1}$. Ponieważ $T \supset T^{-1}$, to $T\supset R\cup R^{-1}$.

## Spójność (nie istnieje)
Relacja $R$ jest spójna, gdy $\forall_{x,y \in X} (x,y) \in R \vee (y,x)\in R$.

Przykładem takiej relacji jest $R = \{(0,0),(1,1)\}$. Istnieją relacje:
* $\{(0,1)\} \cup R$,
* $\{(1,0)\} \cup R$,

które mogłyby uspójnić naszą relację. Nie możemy jednoznacznie wybrać domknięcia, więc zgodnie z definicją nie istnieje.

## Antysymetria (nie istnieje)
Relacja $R$ jest antysymetryczna, gdy z faktu, że $(x,y) \in R$ oraz $(y,x) \in R$, wynika, że $x=y$.

Przykładem takiej relacji jest $\{(0,1),(1,0)\}$. Sama w sobie nie jest antysymetryczna. Nie da się dołożyć takich par, żeby $0$ było równe $1$, więc nie da się sprawić, żeby była antysymetryczna. Domknięcie nie istnieje.

## Przechodniość (istnieje)
Relacja $R$ jest przechodnia, gdy z faktu, że $(x,y) \in R$ oraz $(y,z) \in R$, wynika, że $(x,z) \in R$.

Domknięciem przechodnim relacji $R \subset X \times X$ jest relacja $R^* = \bigcup_{i \in \mathbb{N}, i>0} R^i$

Zauważmy, że jeśli $(x, y) \in R^i$ oraz $(y, z) \in R^j$ to $(x, z) \in R^{i+j}$ czyli relacja $R^*$ jest przechodnia i $R \subset R^*$. Jeśli pokażemy, że dla dowolnej przechodniej relacji $T \supset R$ relacja $R^* \subset T$, to pokażemy, że $R^*$ jest przechodnim domknięciem. Udowodnijmy indukcyjnie, że $\forall_{n > 0} R^n \subset T$:
1. $R \subset T$
2. Załóżmy, że dla wszystkich $0 <m < n$ mamy, że $R^m \subset T$, wtedy z przechodniości $T$ wynika, że $R \circ R^{n-1} = R^n \subset T$
