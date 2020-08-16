Omów klasy złożoności: $PTIME$, $NPTIME$ oraz $coNPTIME$. Podaj przykład problemu, który jest w $PTIME$ oraz przykłady jezyków zupełnych dla $NPTIME$ i $coNPTIME$. Nakreśl dowód twierdzenia Cooke’a.

---
*Uwaga*: odpowiedzi maszyn to "tak"/"nie".

![](../../resources/I.6.9klasy.png)

# PTIME
Problemy decyzyjne, dla których rozwiązanie można znaleźć w czasie wielomianowym.

## Przykłady
* Czy zbiór zawiera $1$?

# NPTIME
Problemy decyzyjne, dla których rozwiązanie można zweryfikować w czasie wielomianowym. Równoważna definicja mówi, że problem jest w klasie NP, jeśli może być rozwiązany w wielomianowym czasie na niedeterministycznej maszynie Turinga.

## Własności
* Klasa $NP$ jest zamknięta na: sumy zbiorów, przecięcia zbiorów, konkatenację, domknięcie Kleene'ego, odwrotność.
* Nie wiadomo, czy $NP$ jest zamknięte na odwrotność (czy $NP=coNP$).

## Przykłady NP-complete
* Problemy $SAT$ Czy formuła jest spełnialna?
* Problem plecakowy. Czy wartość co najmniej V może być osiągnięta bez przekraczania pojemności plecaka?

# coNPTIME
Klasa złożoności dopełniająca dla problemów decyzyjnych $NP$. Przykładowo dopełnieniem problemu typu „czy wszystkie elementy zbioru $X$ spełniają warunek $Y$” jest „czy istnieje element zbioru $X$ niespełniający warunku $Y$”.

## Przykłady coNPTIME-complete
* $TAUTOLOGY$ - czy dana formuła boolowska jest tautologią? (coSAT)

# Twierdzenie Cooke'a
>Problem $SAT$ jest $NP-zupełny$.

*Dowód*:
Musimy wykazać, że:
* $SAT$ jest $NP$.
* Każdy problem w $NP$ ma wielomianową redukcję do $SAT$.

*Krok 1*: $SAT$ jest w $NP$. Maszyna niedeterministyczna może ”zgadnąć” rozwiązanie, a następnie zweryfikować czy jest ono wartościowaniem spełniającym zadaną formułę. Operację sprawdzenia wartości formuły boolowskiej można wykonać w czasie wielomianowym ze względu na jej długość. Zatem $SAT$ jest w $NP$.

*Krok 2*: Będziemy pokazywać, że dla dowolnego języka w $NP$ istnieje jego wielomianowe przekodowanie do $SAT$. W tym celu pokażemy, że dla każdej niedeterministycznej maszyny Turinga $M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)$ działającej w czasie wielomianowym $p(n)$ i słowa w ($|w| = n$) można
zbudować formułę boolowską $f$ taką, że $M$ akceptuje w wtedy i tylko wtedy, gdy dla $f$ istnieje wartościowanie spełniające.

Zauważmy, że ponieważ złożoność $M$ jest oszacowana przez wielomian $p(n)$, to wystarczy rozpatrywać tylko komórki taśmy położone o nie dalej niż $p(n)$ od pozycji głowicy w stanie $q_0$. Pozycję na taśmie w $q_0$ oznaczamy jako $0$, a następnie numerujemy pozycje na taśmie symetrycznie po obu stronach $0$ liczbami z zakresu od $−p(n)$ do $p(n)$. Operacje przesunięcia głowicy w prawo i lewo będziemy identyfikowali z dodaniem odpowiednio $+1$ i $-1$ do licznika pozycji.

Niech $q \in Q$, $−p(n) \leq i \leq p(n)$, $j \in\Sigma$ i $0 \leq k ≤ p(n)$. Kodowanie
maszyny zaczniemy od podania zmiennych boolowskich które wystąpią w
naszej formule.

$T_{ijk}$ jest prawdziwa (przyjmuje wartość $1$) $\iff$ $i$-ta komórka na taśmie zawiera symbol $j$ w $k$-tym kroku obliczenia. Takich zmiennych jest $O(p(n)^2)$.

$H_{ik}$ jest prawdziwa $\iff$ głowica znajduje się nad $i$-tą komórką taśmy w $k$-tym kroku obliczenia. Takich zmiennych jest $O(p(n)^2)$.

$Q_{qk}$ jest prawdziwa $\iff$ $M$ jest w stanie $q$ w $k$-tym kroku obliczenia.
Takich zmiennych jest $O(p(n))$.

Za pomocą tak wprowadzonych zmiennych zbudujemy formułę boolowską,
która będzie wyrażała obliczenie M. Ogółem mamy $O(p(n)^2)$ zmiennych.


Formuła $f$ jest koniunkcją podformuł kodujących:
* $T_{ij0}$ - $i$-ta komórka w stanie $q_0$ zawiera symbol $j$. Jest $O(p(n))$ takich elementów.
* $Q_{s0}$ - stan początkowy (jeden).
* $H_{00}$ – początkowe położenie głowicy (jedno).
* $T_{ijk} \Rightarrow \neg T_{ij'k}$ dla $j \ne j'$ - w każdym kroku obliczenia, w każdej komórce jest dokładnie jeden symbol. Jest $O(p(n)^2)$ takich elementów.
* $T_{ijk} \Rightarrow T_{ij(k+1)} \wedge H_{ik}$ - zmiana na taśmie może nastąpić tylko na pozycji głowicy. Jest $O(p(n)^2)$ takich elementów. 
* $Q_{qk} \Rightarrow \neg Q_{q'k}$ dla $q\ne q'$ - w każdym kroku obliczenia jesteśmy w
dokładnie jednym stanie. Jest $O(p(n))$ takich elementów.
* $H_{ik} \Rightarrow \neg H_{i'k}$ dla $i\ne i'$ - w każdym kroku obliczenia głowica jest w
dokładnie jednej pozycji. Jest $O(p(n))$ takich elementów.
* $\bigvee_{(q,\sigma,q',\sigma',d)\in \delta} (H_{ik}\wedge Q_{qk}\wedge T_{i\sigma k}) \Rightarrow (H_{(i+d)(k+1)}\wedge Q_{q'(k+1)}\wedge T_{(i+d)\sigma '(k+1)})$ - przejścia do kolejnego stanu
w każdym kroku muszą być zgodne z relacją przejścia $\delta$. Jest $O(p(n)^2)$ takich elementów.
* $\bigvee_{\hat{q}\in F}Q_{\hat{q}p(n)}$ – stan po zakończeniu obliczenia musi być akceptujący.

Zauważmy, że jeżeli znamy legalne obliczenie dla $M$ na słowie $w$, to formuła $f$ przedstawiona poprzednio jest spełniona. Jeżeli mamy wartościowanie spełniające formułę $f$ to z wartości $T_{ijk}$, $H_{ik}$, $Q_{qk}$ odczytamy, krok po kroku, przebieg legalnego obliczenia akceptującego dla maszyny $M$.
Koszt przekodowywania daje się oszacować wielomianem względem $p(n)$.
