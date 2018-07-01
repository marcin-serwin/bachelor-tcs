Omów twierdzenie Myhilla–Nerode’a, podając ideę dowodu i związek z minimalizacją automatów skończonych.

---

# Twierdzenie Myhilla-Nerode'a
Zgodnie z tym twierdzeniem, poniższe trzy własności są równoważne:

* Język $L \subseteq \Sigma^{\ast}$ jest akceptowany przez pewien automat skończony.
* $L$ jest sumą skończonej liczby klas równoważności.
* Relacja równoważności $R_L : x \sim y$ wtw. dla każdego $z \in \Sigma^{\ast}$, $xz \in L$ dokładnie wtedy kiedy $yz \in L$.

Twierdzenie Myhilla-Nerode'a orzeka, że język $L$ jest regularny wtedy i tylko wtedy, gdy relacja $R_L$ dzieli $\Sigma^{\ast}$ na skończenie wiele klas abstrakcji. Dodatkowo, jeśli $L$ jest regularny, to liczba stanów minimalnego DFA rozpoznającego $L$ jest równa liczbie klas abstrakcji relacji $R_L$.

Nieformalnie, $R_L$ "skleja" ze sobą słowa, których "przyszłości" z punktu widzenia automatu są takie same. Intuicyjnie, jeśli klas abstrakcji jest nieskończenie wiele, to automat rozpoznający $L$ musiałby mieć nieskończenie wiele stanów, co jest niemożliwe.

## Przykład
Język $L = \{\ a^nb^n\ \}$ nie jest regularny. Rozpatrzmy dwa słowa:

$$\begin{align}
& w = a^kb^k \\
& v = a^{k+c}b^k \\
\end{align}$$

Dla dowolnego $c \geq 1$ sufiks $u = b^c$ rozróżnia te dwa słowa, gdyż $wu \notin L$, oraz $vu \in L$. Zatem relacja $R_L$ ma nieskończenie wiele klas abstrakcji, więc $L$ nie jest regularny.

## L-kongruencja
Zdefiniowana wyżej relacja $R_L \subseteq \Sigma^{\ast} \times \Sigma^{\ast}$ jest też nazywana L-kongruencją. Formalnie:

$$(v, w) \in R_L \Leftrightarrow \forall z \in \Sigma^* (xz \in L \Leftrightarrow yz \in L)$$

**Relacja Myhilla–Nerode’a** dla $L$ to L-kongruencja o skończonym indeksie (czyli taka L-kongruencja $R_L$, że zbiór $\Sigma^{\ast} / R_L$ jest skończony).

## Dowód

### $\Rightarrow$
Jeśli $L$ jest językiem regularnym, to istnieje DFA $A$, który go rozpoznaje. Wiemy, że DFA ma skończoną liczbę stanów - nazwijmy tę liczbę $n$.

Podzielmy zbiór wszystkich stanów tego automatu na $n$ podzbiorów, gdzie podzbiór $S_i$ będzie zawierał wszystkie takie słowa, dla których po przeczytaniu każdego z nich automat $A$ skończy w stanie $i$. Oznacza to, że dla każdych dwóch słów $x$ i $y$ z danego zbioru $S_i$, i dla każdego słowa $z \in \Sigma^{\ast}$, automat osiągnie ten sam stan dla $xz$ co dla $yz$. Czyli musi albo zaakceptować zarówno $xz$ jak i $yz$ albo odrzucić je jednocześnie.

Z tego wynika, że żaden ciąg znaków $z$ nie może być rozróżniającym sufiksem dla $x$ i $y$, więc te słowa muszą być w relacji $R_L$. $S_i$ jest zatem klasą równoważności w $R_L$. Łącząc ten fakt z informacją, że każde słowo nad alfabetem $\Sigma$ należy do dokładnie jednego spośród zbiorów $S_i$, liczba klas równoważności musi być skończona i co najwyżej równa liczbie stanów, czyli $n$.

### $\Leftarrow$
Załóżmy, że $R_L$ ma skończoną liczbę klas równoważności. W takim razie jest możliwe, aby skonstruować DFA $A$, który ma jeden stan dla każdej z klas równoważności. Stan początkowy takiego automatu powiązany byłby z klasą równoważności zawierającą słowo puste $\epsilon$.

Funkcja przejścia ze stanu $q_x$ dla wejścia $w$ prowadzi automat do innego stanu, który to koresponduje z klasą równoważności zawierającą słowo $xw$, gdzie $x$ to dowolnie wybrane słowo z klasy równoważności dla $q_x$. Oznacza to, że bez względu na to jakiego reprezentanta $x$ weźmiemy dla stanu $q_x$, za każdym razem przejdziemy do takiego samego stanu.

Stan automatu jest akceptującym, jeśli korespondująca z nim klasa równoważności zawiera słowo w $L(A)$. W tym przypadku, znowu, definicja relacji prowadzi do wniosku, że wszystkie słowa w tej samej klasie równoważności muszą należeć do języka, bo inaczej puste słowo $\epsilon$ byłoby słowem rozróżniającym dla pewnej pary słów w tej klasie.

## Związek z minimalizacją automatu deterministycznego
Procedura minimalizacji automatu deterministycznego korzysta z tego samego wniosku, co twierdzenie Myhilla-Nerode'a: każdy stan minimalnego automatu odpowiada jednej klasie abstrakcji relacji $R_L$.

Szukamy dla każdej pary stanów jakiegoś słowa, które je rozróżnia. Jeśli takiego słowa nie znajdziemy, to oba stany odpowiadają tej samej jednej klasie abstrakcji - można je zatem scalić. Jeśli jednak je znajdziemy, to mamy dwie osobne klasy abstrakcji - nie można ich scalić.
