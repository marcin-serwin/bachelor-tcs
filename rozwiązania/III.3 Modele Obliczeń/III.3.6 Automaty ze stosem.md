Omów automaty ze stosem, w szczególności rodzaje akceptacji oraz ich równoważność.

---

# Automaty ze stosem

Automaty ze stosem to niedeterministyczne automaty skończone, które mogą dodatkowo korzystać ze stosu do przechowywania danych. W takiej wersji rozpoznają one języki bezkontekstowe. Warto pamiętać, że ich deterministyczna wersja ma od nich istotnie mniejszą moc rozpoznawania języków. Istnieją języki bezkontekstowe, nierozpoznawalne przez żaden taki automat. Przykładem jest język palindromów $L = \{ww^R: w \in \Sigma^{\ast}\}$, dla którego w trakcie czytania słowa i nie znając jego długości, nie jesteśmy w stanie deterministycznie ustalić miejsca środka słowa, względem którego mamy badać "lustrzane odbicie".

# Definicja

$A = (Q, \Sigma, \Gamma, \delta, \perp, q_0, F)$

gdzie:

* $Q$ - zbiór stanów
* $\Sigma$ - alfabet wejściowy
* $\Gamma$ - alfabet stosu
* $\perp \in \Gamma$ - startowy element na stosie
* $q_0 \in Q$ - stan startowy
* $F \subseteq Q$ - zbiór stanów końcowych
* $\delta$ - funkcja $Q \times (\Sigma \cup \{\epsilon\}) \times \Gamma \rightarrow \mathcal{P}_{finite}(Q \times \Gamma^{\ast})$

Zaczynając od stanu startowego, automat czyta słowo wejściowe. Na podstawie obecnie czytanego znaku (można przeczytać $\epsilon$), obecnego stanu oraz górnego symbolu na stosie (który zostaje ściągnięty), otrzymuje on zbiór dozwolonych przejść w tym kroku, polegających na zmianie stanu oraz wrzuceniu skończonej liczby symboli na stos. Automat jest niedeterministyczny, tj. dla każdej trójki z $Q \times (\Sigma \cup \{\epsilon\}) \times \Gamma$ może istnieć dowolna liczba możliwych przejść (także $0$).


Istnieją dwa rodzaje akceptacji dla automatów ze stosem:

* akceptacja przez stany końcowe
* akceptacja przez pusty stos

## Akceptacja przez stany końcowe

W wersji z akceptacją przez stany końcowe, automat ze stosem akceptuje słowo wtedy i tylko wtedy, gdy znajdziemy prawidłową ścieżkę po tym słowie ze stanu $q_0$ do pewnego $q \in F$.

## Akceptacja przez pusty stos

W wersji z akceptacją przez pusty stos, przyjmujemy $F = \emptyset$. Zamiast tego automat akceptuje słowo wtedy i tylko wtedy, gdy znajdziemy prawidłową ścieżkę ze stanu $q_0$, czytającą całe słowo, po pokonaniu której otrzymamy pusty stos.

# Konfiguracja automatu
Konfiguracja to reprezentacja aktualnego stanu obliczeniowego automatu. Jest to trójka $(q, \omega, \gamma) \in Q \times \Sigma^{\ast} \times \Gamma^{\ast}$, która oznacza aktualny stan, słowo, które pozostało do przeczytania i zawartość stosu.
  * konfiguracja początkowa to $(s, w, \perp)$
  * konfiguracja akceptująca przez stany końcowe to $(f, \varepsilon, \gamma)$, gdzie $f \in F$
  * konfiguracja akceptująca przez pusty stos to $(q, \varepsilon, \varepsilon)$

# Dowód równoważności obu rodzajów akceptacji

## Akceptacja przez stany końcowe $\rightarrow$ akceptacja przez pusty stos

Dla automatu ze stosem $A = (Q, \Sigma, \Gamma, \delta, \perp, q_0, F)$, akceptującego przez stany końcowe, stwórzmy równoważny automat $A' = (Q \cup \{q_S, q_F\}, \Sigma, \Gamma \cup \{\perp'\}, \delta', \perp, q_S, \emptyset)$, akceptujący przez pusty stos, przy czym $\delta'$ zawiera te same przejścia co $\delta$ oraz dodatkowo:

* $(q_S, \epsilon, \perp) \rightarrow (q_0, \perp\perp')$
* $(\forall q \in F$ $\forall A \in \Gamma: (q, \epsilon, A) \rightarrow (q_F, A)$
* $\forall A \in \Gamma: (q_F, \epsilon, A) \rightarrow (q_F, \epsilon)$

Jeżeli automat $A$ akceptował pewne słowo, to posiada ścieżkę po tym słowie do $q \in F$. Zatem $A'$ też się tam znajdzie, skąd będzie mógł przejść do stanu $q_F$, który służy do opróżniania stosu.

Jednocześnie poprzez dodanie nowego dna stosu $\perp'$ mamy pewność, że opróżnienie go (akceptacja w $A'$) jest możliwe tylko po znalezieniu się w stanie $q_F$ (akceptacja w $A$).

## Akceptacja przez pusty stos $\rightarrow$ akceptacja przez stany końcowe

Dla automatu ze stosem $A = (Q, \Sigma, \Gamma, \delta, \perp, q_0, \emptyset)$, akceptującego przez pusty stos, stwórzmy równoważny automat $A' = (Q \cup \{q_S, q_F\}, \Sigma, \Gamma \cup \{\perp'\}, \delta', \perp, q_S, \{q_F\})$, akceptujący przez pusty stos, przy czym $\delta'$ zawiera te same przejścia co $\delta$ oraz dodatkowo:

* $(q_S, \epsilon, \perp) \rightarrow (q_0, \perp\perp')$
* $\forall q \in Q: (q, \epsilon, \perp') \rightarrow (q_F, \epsilon)$

Symbol $\perp'$ pozostanie na spodzie stosu i będzie "odsłonięty" w czasie działania automatu $A'$ wtedy i tylko wtedy, kiedy równoważny automat $A$ opróżniłby swój stos (czyli zaakceptował słowo). Odsłonięcie $\perp'$ na szczycie stosu pozwala natomiast zawsze na przejście do stanu końcowego $A'$.
