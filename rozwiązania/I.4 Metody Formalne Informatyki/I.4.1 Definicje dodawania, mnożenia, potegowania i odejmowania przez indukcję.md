Definicje dodawania, mnożenie, potęgowania i odejmowania w oparciu o twierdzenie o definiowaniu przez indukcję. Własności tych działań.

---

# Zanim przeczytasz ten rozdział

Przed przeczytaniem tego rozdziału zapoznaj się z konstrukcją liczb naturalnych oraz ich własnościami w rozdziale I.4.6 w szczególności z **Fakt 1** _Każda liczba naturalna jest albo zbiorem pustym, albo następnikiem liczby naturalnej_.

# Twierdzenie o definiowaniu przez indukcję

Niech $A$ i $B$ będą zbiorami, a $f \colon A \to B$ i $g \colon B \times \mathbb{N} \times A \to B$ funkcjami. Istnieje unikalna funkcja $h \colon \mathbb{N} \times A \to B$ taka, że:

$h(0,a)=f(a)$, dla każdego $a \in A$,  
$h(n^{\prime},a)=g(h(n,a),n,a)$, dla każdego $a \in A$ i $n \in \mathbb{N}$.

# Dodawanie, mnożenie i potęgowanie

Odejmowanie zostanie zdefinowane, jako **Własność 7** dodawania.

Dodawanie, mnożenie i potęgowanie są funkcjami dwuargumentowymi  
$\mathbb{N} \times \mathbb{N} \to \mathbb{N}$

Wszystkie poniższe definicje przeprowadzimy z wykorzystaniem twierdzenia o definiowaniu przez indukcję.  
We wszystkich poniższych definicjach podstawiamy:  
$A = B = \mathbb{N}$

## Dodawanie

$f(n) = n$  
$g(m,n,p)=m^{\prime}$

Na mocy twierdzenia o definiowaniu przez indukcję istnieje funkcja $h \colon \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ taka, że  
$h(0,m)=m$  
$h(n^{\prime},m)=h(n,m)^{\prime}$

Funkcja ta to dodawanie liczb naturalnych i będziemy używać notacji $h(n,m)=n+m$.

## Mnożenie

$f(n)=0$  
$g(m,n,p)=m+p$

Na mocy twierdzenia o definiowaniu przez indukcję istnieje funkcja $h \colon \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ taka, że  
$h(0,m)=0$  
$h(n^{\prime},m)=h(n,m)+m$

Funkcja ta to mnożenie liczb naturalnych i będziemy używać notacji $h(n,m)=n\cdot m$.

## Potęgowanie

$f(n) = 1$  
$g(m,n,p)=m \cdot p$

Na mocy twierdzenia o definiowaniu przez indukcję istnieje funkcja $h \colon \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ taka, że  
$h(0,m) = 1$  
$h(n^{\prime}, m) = h(n,m) \cdot m$  

Funkcja ta to potęgowanie liczb naturalnych i będziemy używać notacji $h(n,m)=m^n$.

# Własności

## Dodawanie

### Własność 1: Jeśli suma dwóch liczb jest równa $0$, to obie liczby muszą być równe $0$.

Załóżmy, że dla dwóch liczb naturalnych $n$ i $m$ zachodzi $n+m=0$.

Jeśli liczba $n$ jest następnikiem jakiejś liczby naturalnej, to również $n+m$ jest następnikiem jakiejś liczby i w związku z tym $n+m\neq 0$. Wynika to wprost z definicji dodawania.

Na podstawie Faktu 1 w rozdziale I.4.6 (_Każda liczba naturalna jest albo zbiorem pustym, albo następnikiem liczby naturalnej_) wnioskujemy, że $n=0$. Wtedy $0+m=m$ ($h(0,m)=0$) i otrzymujemy $m=0$, co należało wykazać.

### Własność 2: Łączność dodawania

$$\forall k \forall m \forall n\; (k\in\mathbb{N} \land m\in \mathbb{N} \land n\in \mathbb{N})\implies k+(m+n)=(k+m)+n$$

Dowód jest indukcją ze względu na $k$.

Jeśli $k=0$, to $0+(m+n)$ = $m+n$ oraz $0+m=m$ i w związku z tym $(0+m)+n = m+n$, co należało pokazać.

Zakładamy, że równość jest prawdziwa dla $k$ (dla dowolnych $m$ i $n$). Ustalmy dowolne liczby naturalne $m$ i $n$, wtedy:  
$k^{\prime}+(m+n) = (k+(m+n))^{\prime} = ((k+m) + n)^{\prime} = (k+m)^{\prime} +n = (k^{\prime}+m) +n$  
gdzie druga równość wynika z założenia indukcyjnego, a wszystkie pozostałe równości z definicji dodawania.

Dzięki twierdzeniu o indukcji matematycznej dodawanie jest łączne dla wszystkich liczb naturalnych.

### Własność 3: $n + 0 = n$

Dowodzimy przez indukcję na $n$. Niewątpliwie $0 + 0 = 0$. Jeśli $n+0 =n$, to $n^{\prime}+0=(n+0)^{\prime} = n^{\prime}$, gdzie druga równość wywodzi się z założenia indukcyjnego. Na mocy twierdzenia o indukcji $n+0= n$, dla każdej liczby naturalnej $n$.

### Własność 4: $k^{\prime}+m=k+m^{\prime}$

Dowodzimy ten fakt przez indukcję na $k$.

Niewątpliwie, dla $k=0$ i dla dowolnego $m$, mamy:  
$0^{\prime}+m=(0+m)^{\prime}=m^{\prime}=0+m^{\prime}$.

Pozostaje założyć, że fakt jest prawdą dla k i wykazać go dla $k^{\prime}$. Dla dowolnego $m$:  
$k^{\prime\prime}+m = (k^{\prime}+m)^{\prime}=(k+m^{\prime})=k^{\prime}+m^{\prime}$,  
co dowodzi kroku indukcyjnego i całego faktu.

### Własność 5: Przemienność dodawania

Przemienności dodawania dowodzimy przez indukcję na $k$.

Niewątpliwie, dla $k=0$ i dla dowolnego $m$, mamy $0+m=m=m+0$.

Załóżmy teraz, że teza jest prawdziwa dla $k$ i dla dowolnych $m$. Ustalmy dowolne $m$, wtedy:  
$k^{\prime}+m = (k+m)^{\prime} = (m+k)^{\prime}= m^{\prime}+k$,  
gdzie druga równość jest konsekwencją założenia indukcyjnego.

Korzystając z poprzedniej własności, dostajemy:  
$m^{\prime}+k=m+k^{\prime}$,  
co dowodzi, że dla dowolnego $m$ mamy  
$k^{\prime}+m=m+k^{\prime}$.

Używając twierdzenia o indukcji konkludujemy, że dodawanie w liczbach naturalnych jest przemienne.

### Własność 6: $k+n = m+n \implies k=m$

Tę własność dowodzimy indukcją na $n$.

Jeśli $n=0$, to $k+0=m+0$ niewątpliwie implikuje, że $k=m$. Załóżmy, że własność skracania zachodzi dla $n$ (dla dowolnych $k$ i $m$), wtedy:  
$k+n^{\prime} = n^{\prime}+k = (n+k)^{\prime} = (k+n)^{\prime}$  
i podobne rozumowanie jest prawdziwe dla $m+n^{\prime}$, dając,  
$(k+n)^{\prime} = (m+n)^{\prime}$.

Na podstawie wcześniejszych własności wiemy, że jeżeli następniki liczb są sobie równe, to liczby też muszą być równe, więc:  
$k+n = m+n$.

Co, po zastosowaniu założenia indukcyjnego gwarantuje, że $k=m$. Twierdzenie o indukcji powoduje, że dodawanie jest skracalne.

### Własność 7: Odejmowanie - Jeśli $k>m$, to istnieje $n>0$ takie, że $k=m+n$.

Dowodzimy tego faktu przez indukcję na $k$.

Jeśli $k$ jest równe $0$, to nie istnieje $m<k$, czyli teza jest prawdziwa.

Załóżmy teraz, że teza jest prawdziwa dla $k$ i dla wszystkich $m<k$. Ustalmy $k^{\prime}$ i dowolne $m<k^{\prime}$.  
Jeśli $m=k$, to bierzemy $n=1$ i $k^{\prime} = m +1$ dowodzi kroku indukcyjnego.  
Jeśli $m<k$, to, na podstawie założenia indukcyjnego, istnieje n takie, że:  
$k = m+n$.

Wtedy  
$k^{\prime} = (m+n)^{\prime} = m+n^{\prime}$,  
co otrzymujemy, korzystając z poprzednich identyczności.  
Krok indukcyjny został dowiedziony i, na podstawie twierdzenia o indukcji, fakt jest prawdą dla wszystkich liczb naturalnych.

## Mnożenie

### Własność 1: Dla dowolnej liczby naturalnej $k$ mamy $k\cdot 1 = k$

Dowód tego faktu jest indukcją ze względu na $k$.

Jeśli $k=0$, to $0\cdot 1 = 0$.  

Jeśli równość jest prawdą dla $k$, to  
$k^{\prime}\cdot 1 = k\cdot 1 + 1$,  
co, na mocy założenia indukcyjnego, jest równe  
$k+1=k^{\prime}$.

Dowiedliśmy kroku indukcyjnego, a co za tym idzie całej identyczności.

### Własność 2: $k\cdot (m+n) = k\cdot m +k\cdot n$ - dodawanie jest rozdzielne względem mnożenia z prawej strony

Dowód tego faktu jest indukcją ze względu na $k$.

Jeżeli $k=0$, to zarówno $0\cdot (m+n)$ jak i $0\cdot m$ oraz $0\cdot n$ są równe zero i równość jest prawdziwa. Jeśli równość jest prawdziwa dla $k$ i dla dowolnych $m$ i $n$, to dla $k^{\prime}$:

$k^{\prime}\cdot(m+n) =k\cdot(m+n) + (m + n) = (k\cdot m +k\cdot n) + (m +n) =$  
na mocy założenia indukcyjnego i dalej:

$= (k\cdot m +m) + (k\cdot n +n) =$  
używając przemienności i łączności dodawania. W końcu:

$= k^{\prime}\cdot m + k^{\prime}\cdot n$,  
co należało pokazać dla kroku indukcyjnego. Twierdzenie o indukcji gwarantuje, że równość jest prawdą dla wszystkich $k$.

### Własność 3: $(k+m)\cdot n = k\cdot n + m\cdot n$ - dodawanie jest rozdzielne względem mnożenia z lewej strony

Przedstawiamy dowód przez indukcję na $k$.

Jeśli $k=0$, to lewa strona równości jest równa $(0+m)\cdot n= m\cdot n$, a prawa $0\cdot n + m\cdot n = 0 +m\cdot n = m\cdot n$, czyli równość jest prawdą. Jeśli równość jest prawdziwa dla $k$ (przy dowolnych $m$ i $n$) to dla $k^{\prime}$, (i dowolnych $m$ i $n$):

$(k^{\prime}+m)\cdot n = (k+m)^{\prime}\cdot n = (k+m)\cdot n + n=(k\cdot n + m\cdot n) + n =$  
korzystając z założenia indukcyjnego. Dalej, używając przemienności i łączności dodawania, dostajemy:

$=(k\cdot n + n) + m\cdot n = k^{\prime}\cdot n + m\cdot n$,  
co dowodzi kroku indukcyjnego i, co za tym idzie, prawdziwości tezy.

### Własność 4: $k\cdot(m\cdot n) = (k\cdot m)\cdot n$ - mnożenie jest łączne

Dowód przez indukcję na $k$.

Jeśli $k=0$, to $0\cdot (m\cdot n) = 0$, również $0\cdot m=0$ i $(0\cdot m)\cdot n=0$, co dowodzi podstawy indukcji. Załóżmy teraz, że równość jest prawdą dla $k$ i dla dowolnych $m$ i $n$. Ustalmy dowolne $m$ i $n$ i:

$k^{\prime}\cdot (m\cdot n) = k\cdot(m\cdot n) + (m\cdot n) = (k\cdot m)\cdot n  + (m\cdot n)=$  
na mocy założenia indukcyjnego. Dalej:

$= ((k\cdot m) +m)\cdot n =$  
na podstawie rozdzielności i:

$= (k^{\prime}\cdot m) \cdot n$.
Co dowodzi kroku indukcyjnego i całej identyczności.

### Własność 5: $k\cdot 0 = 0$

Dowód przez indukcję na $k$.

Jeśli $k=0$, to, oczywiście, $0\cdot 0 = 0$ i teza jest spełniona. Załóżmy teraz, że $k\cdot 0 = 0$, mamy wtedy $k^{\prime}\cdot 0 = k\cdot 0 + 0 = 0 + 0 = 0$ na podstawie założenia indukcyjnego i identyczności dotyczących dodawania.

### Własność 6: $k\cdot m = 0$ wtedy i tylko wtedy, kiedy $k=0\lor m=0$

Implikacja z prawej strony w lewą wynika z poprzedniego punktu i z definicji mnożenia. Dowodzimy implikacji w prawą stronę.

Załóżmy, że $k\cdot m = 0$. Jeśli $k=0$, to implikacja jest prawdziwa.  
Jeśli $k\neq 0$, to, na podstawie Faktu 1 w rozdziale I.4.6 (_Każda liczba naturalna jest albo zbiorem pustym, albo następnikiem liczby naturalnej_), mamy $k=p^{\prime}$, dla pewnego $p$.  
Wtedy $k\cdot m = p^{\prime}\cdot m = p\cdot m + m = 0$.  
Z łącznośći dodawania wynika $m=0$, co dowodzi implikacji w prawą stronę.

### Własność 7: $k\cdot m = m\cdot k$ - mnożenie jest przemienne

Aby dowieść przemienności mnożenia, stosujemy indukcję względem $k$.

Jeśli $k=0$, to $0\cdot m= 0 = m\cdot 0$ (dla dowolnego $m$) na podstawie poprzedniego punktu. Załóżmy teraz, że teza jest prawdą dla $k$ i dla dowolnych $m$. Wtedy dla dowolnego $m$ mamy:  
$k^{\prime}\cdot m = k \cdot m + m = m \cdot k + m =$  
na podstawie założenia indukcyjnego.

Dalej używamy rozdzielności i poprzednich punktów:  
$m\cdot k + m\cdot 1 = m \cdot (k +1) = m\cdot k^{\prime}$,  
co należało wykazać.  
Krok indukcyjny jest dowiedziony, a co za tym idzie również cała identyczność.

### Własność 8: Jeśli $k\cdot n = m\cdot n$ i $n\neq 0$ to $k=m$.

Dowód jest indukcją ze względu na $k$.

Jeśli $k=0$, to $0\cdot n = m\cdot n$ implikuje, że $m\cdot n =0$. Ponieważ wiemy, że $n\neq 0$, to, używając poprzednich ćwiczeń, otrzymujemy: $m=0$, co dowodzi podstawy indukcji. Załóżmy teraz, że dowodzony fakt jest prawdą dla $k$ (dla dowolnych $m$ i $n\neq 0$). Ustalmy dowolne $m$ i $n\neq 0$ i załóżmy, że:  
$k^{\prime}\cdot n = m \cdot n$.

Liczba $m$ nie może być równa zero, ponieważ $k^{\prime}\neq 0$ i $n\neq 0$ i, co za tym idzie, $k^{\prime}\cdot n\neq 0$. W związku z tym $m=p^{\prime}$, na podstawie Faktu 1 w rozdziale I.4.6 (_Każda liczba naturalna jest albo zbiorem pustym, albo następnikiem liczby naturalnej_). W związku z tym, przekształcając powyższe równanie, dostajemy:  
$k\cdot n + n = p \cdot n+n$.

Używając, wcześniej wykazanej, skracalności dla dodawania liczb naturalnych otrzymujemy:  
$k\cdot n= p \cdot n$,

co, na mocy założenia indukcyjnego, implikuje $k=p$, a więc $k^{\prime} = p^{\prime}=m$, co należało wykazać.

## Potęgowanie

### Własność 1: $a^0 = 1$

Wynika wprost z definicji - $h(0, a) = f(a) = 1$

### Własność 2: $a^{m+1} = a^m \cdot a$

Z definicji  
$a^{m+1} = h(m+1, a) = g(a^m, 1, a) = a^m \cdot a$

### Własność 3: $a^1 = a$

Z własności 3 dodawania($n + 0 = 0$), własności 1 i 2 potęgowania oraz własności 7 i 1 mnożenia  
$a^1 = a^(0+1) = a^0 \cdot a = 1 \cdot a = a \cdot 1 = a$

### Własność 3: $a^{m+k} = a^m \cdot a^k$

Dowód jest indukcją ze względu na $k$.

Dla $k = 0$:  
Z lewej strony $a^{m+k} = a^{m+0} = a^m$  
Z prawej strony $a^m \cdot a^k = a^m \cdot a^0 = a^m \cdot 1 = a^m$

Krok indukcyjny $k^{\prime}$:  
$a^{m+k^{\prime}} = a^{m+k+1} = a^{(m+k)+1} = a^{m+k} \cdot a = a^m \cdot a^k \cdot a = a^m \cdot a^{k+1} = a^m \cdot a^{k^{\prime}}$
