Omów zamkniętość klasy jezyków regularnych na operacje na językach.

---

# Operacje na językach regularnych
Niech języki regularne $L_1$ i $L_2$ będą rozpoznawane odpowiednio przez deterministyczne automaty skończone $A_1 = (Q_1, \Sigma_1, \delta_1, s_1, F_1)$ i $A_2 = (Q_2, \Sigma_2, \delta_2, s_2, F_2)$ oraz niech będą definiowane odpowiednio przez wyrażenia regularne $\alpha_1$ i $\alpha_2$. Sprawdzimy, czy dane operacje na językach regularnych zawsze produkują język, który jest także regularny.

## $\checkmark$ Suma $L_1 \cup L_2$
Język ten jest opisywany przez wyrażenie regularne $(\alpha_1 + \alpha_2)$.

## $\checkmark$ Katenacja $L_1L_2$
Język ten jest opisywany przez wyrażenie regularne $(\alpha_1\alpha_2)$.

## $\checkmark$ Gwiazdka Kleene'ego $L_1^{\ast}$
Język ten jest opisywany przez wyrażenie regularne $(\alpha_1^{\ast})$.

## $\checkmark$ Dopełnienie $L_1^c = \Sigma^* \setminus L_1$
Język ten jest rozpoznawany przez deterministyczny automat skończony $A = (Q_1, \Sigma_1, \delta_1, s_1, Q_1 \setminus F_1)$.

## $\checkmark$ Przecięcie $L_1 \cap L_2$
Język ten jest rozpoznawany przez **niedeterministyczny** automat skończony $A = (Q_1 \times Q_2, \Sigma_1 \cap \Sigma_2, \delta, (s_1, s_2), F)$, gdzie:

* $F = F_1 \times F_2$
* $\delta( (q_1, q_2), a) = \{(\delta_1(q_1, a), \delta_2(q_2, a))\}$ dla każdych $q_1 \in Q_1, q_2 \in Q_2, a \in \Sigma_1 \cap \Sigma_2$

Automat ten niejako symuluje jednoczesne działanie automatów $A_1$ i $A_2$ - każdy z nich na jednej współrzędnej pary stanów - i akceptuje  słowo wtedy i tylko wtedy, gdy oba automaty je akceptują.

## $\checkmark$ Odwrócenie $L_1^R$
Język ten jest rozpoznawany przez **niedeterministyczny** automat skończony $A = (Q_1, \Sigma_1, \delta_1^R, F_1, \{s\})$, gdzie:

* $\delta_1^R(q, a) = \{p \in Q: \delta_1(p, a) = q\}$

Jest to ten sam automat, lecz z odwróconymi "strzałkami" przejść oraz z zamienionymi stanem początkowym i stanami końcowymi.

## $\checkmark$ Homomorfizm $h(L_1)$
Homomorfizmy to transformacje na symbolach, które zamieniają każdy symbol na słowo, które może być puste, jedną literką, lub dłuższym ciągiem znaków. Kiedy dany homomorfizm jest zastosowany dla wszystkich słów danego języka regularnego, tak otrzymany język jest również regularny.

Homomorfizm określony na danym alfabecie (np. $\Sigma = \{\ 0, 1\ \}$) to funkcja, która zwraca słowo dla każdego znaku w tym alfabecie. Np.:

* $h(0) = ab$,
* $h(1) = \epsilon$,
* $h(a_1 a_2 \ldots a_n) = h(a_1) h(a_2) \ldots h(a_n)$.

Przykładowo, $h(01010) = ababab$.

Twierdzimy, że jeśli weźmiemy język regularny $L$ i zastosujemy na nim homomorfizm $H$ to otrzymamy również język regularny:

$$H(L) = \{\ H(w) : w \in L\ \}$$

Niech $E$ będzie wyrażeniem regularnym dla języka $L$. Jeśli zastosujemy homomorfizm $H$ na każdym symbolu w tym wyrażeniu regularnym, to wynik też będzie wyrażeniem regularnym.

Przykładowo, dla tej samej funkcji co wcześniej: jeśli $L$ jest opisywany przez wyrażenie $01^{\ast} + 10^{\ast}$, to $h(L)$ jest opisywany przez:

$$ab\epsilon^{\ast} + \epsilon(ab)^{\ast} = ab + (ab)^{\ast} = (ab)^{\ast}$$

## $\checkmark$ Odwrócony homomorfizm $h^{-1}(L_1)$
Możemy również zdefiniować odwrócony homomorfizm. Niech $h$ będzie homomorfizmem, a $L$ językiem regularnym, którego alfabetem jest $h(\Sigma)$. Odwrócony homomorfizm definiujemy jako:

$$h^{-1}(L) = \{\ w : h(w) \in L\ \}$$

W dowodzie zamkniętości posłużymy się deterministycznym automatem skończonym $A$ akceptującym język $L$. Stworzymy dla niego automat $B$ akceptujący język $h^{-1}(L)$, w którym:

* jest ten sam zbiór stanów,
* jest ten sam stan startowy,
* są takie same stany akceptujące,
* ale alfabetem będzie zbiór symboli, na których $h$ działa (argumenty, które zamienia na słowa),
* funkcję przejścia zdefiniujemy na nowo, ale tylko odzwierciedlając zmiany w alfabecie.

Załóżmy, że $B$ jest w stanie $q$, a symbol wejściowy to $a$. Obliczmy więc słowo $h(a)$ i zobaczmy w jakim stanie automat $A$ by się znalazł czytając takie słowo. Czyli formalnie:

$$\delta_B(q,\ a) = \hat \delta_A(q,\ h(a))$$

Sercem dowodu jest indukcja po długości $|w|$, która pokazuje, że:

$$\hat \delta_B(q_0,\ w) = \hat \delta_A(q_0,\ h(w))$$

Oznacza to, że $B$ akceptuje słowo $w$ wtedy i tylko wtedy, gdy $A$ akceptuje $h(w)$. Czyli $B$ akceptuje $h^{-1}(L)$.
