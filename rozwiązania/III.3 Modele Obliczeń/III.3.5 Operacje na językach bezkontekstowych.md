Omów zamkniętość klasy jezyków bezkontekstowych na operacje na językach.

---

# Operacje na językach bezkontekstowych
Niech języki $L_1$ i $L_2$ będą generowane odpowiednio przez gramatyki $G_1 = (\Sigma_1, N_1, P_1, S_1)$ oraz $G_2 = (\Sigma_2, N_2, P_2, S_2)$. Sprawdzimy, czy dane operacje na językach bezkontekstowych zawsze produkują język, który jest także bezkontekstowy. Dla wygody załóżmy, że $N_1 \cap N_2 = \emptyset$ (jeśli tak nie jest, możemy zawsze przemianować symbole).

## Zamkniętość

### $\checkmark$ Suma $L_1 \cup L_2$
Stwórzmy gramatykę bezkontekstową $G = (\Sigma_1 \cup \Sigma_2, N_1 \cup N_2 \cup \{S\}, P, S)$, przy czym $P$ posiada wszystkie produkcje z $P_1$, $P_2$ oraz dodatkowe produkcje $$S \rightarrow S_1\ |\ S_2$$

### $\checkmark$ Katenacja $L_1L_2$
Analogicznie: tworzymy gramatykę bezkontekstową $G = (\Sigma_1 \cup \Sigma_2, N_1 \cup N_2 \cup \{S\}, P, S)$, gdzie $P$ posiada wszystkie produkcje z $P_1$, $P_2$ oraz dodatkowe produkcje $$S \rightarrow S_1S_2$$

### $\checkmark$ Gwiazdka Kleene'ego $L_1^{\ast}$
Analogicznie: tworzymy gramatykę bezkontekstową $G = (\Sigma_1, N_1 \cup \{S\}, P, S)$, gdzie $P$ posiada wszystkie produkcje z $P_1$ oraz dodatkowe produkcje $$S \rightarrow S_1S\ |\ \epsilon$$

### $\checkmark$ Odwrócenie: $L_1^R$
Tworzymy gramatykę bezkontekstową $G = (\Sigma_1, N_1, P', S)$, przy czym $P'$ zawiera tylko reguły postaci:

$$A \rightarrow \alpha^R$$

gdzie:

* $A$ - nieterminal
* $\alpha$ - słowo nad $(\Sigma_1 \cup N_1)$
* $A \rightarrow \alpha$ jest jedną z reguł dla gramatyki $G_1$

### $\checkmark$ Przecięcie z językami regularnymi
Kiedy zrobimy przecięcie języka bezkontekstowego z językiem regularnym to zawsze otrzymamy język bezkontekstowy. Pomysł na dowód jest taki, żeby symulować DFA jednocześnie z PDA (akceptującym przez stany końcowe).

Niech DFA $A = (Q_A, \Sigma, \delta_A, s_A, F_A)$ rozpoznaje język regularny $L_A$, a PDA $P = (Q_P, \Sigma, \Gamma, \delta_P, \perp, s_P, F_P)$ rozpoznaje język bezkontekstowy $L_P$. Język $L_A \cap L_P$ jest bezkontekstowy, ponieważ rozpoznaje go automat PDA $R = (Q, \Sigma, \Gamma, \delta, \perp, s, F)$, gdzie:

* $Q = Q_A \times Q_P$
* $s = (s_A, s_P)$
* $F = F_A \times F_P$

Funkcja przejścia $\delta([q,\ p], a, X)$ zawiera $([\delta_A(q, a), r], \alpha)$ jeśli $\delta_P(p, a, X)$ zawiera $(r, \alpha)$.

Prosty dowód indukcyjny polega na tym aby pokazać, że:

$$([s_A, s_P], w, Z_0)\ \vdash^{\ast}\ ([q, p], \epsilon, \alpha)$$

wtedy i tylko wtedy gdy:

$$\delta_A(s_A, w) = q \quad \text{ oraz } \quad (s_P, w, Z_0)\ \vdash^{\ast}\ (p, \epsilon, \alpha)$$

Czyli nowy PDA dotrze ze stanu startowego $[s_A, s_P]$ do $[q, p]$ czytając wejście $w$ i zamieniając na stosie $Z_0$ na $\alpha$ wtedy i tylko wtedy gdy w DFA możemy z $s_A$ po takim samym wejściu dostać się do $q$, a w PDA możemy z $s_P$ dostać się do $p$, również czytając wejście $w$ i zamieniając na stosie $Z_0$ na $\alpha$.

## Niezamkniętość

### $\times$ Przecięcie $L_1 \cap L_2$
Języki regularne były zamknięte na przecięcie, co pokazywaliśmy symulując działanie dwóch DFA jednocześnie. Nie damy jednak rady symulować dwóch PDA i wciąż mieć PDA, ponieważ to by wymagało dwóch niezależnych stosów, a PDA może mieć tylko jeden.

Rozważmy dwa języki, o których wiemy, że są bezkontekstowe, bo znamy ich gramatyki:

$$\begin{align}
& L_1 = \{a^nb^nc^i\} \\
& \\
& S \rightarrow AB \\
& A \rightarrow aAb\ |\ ab \\
& B \rightarrow cB\ | \ c \\
\end{align}$$

oraz

$$\begin{align}
& L_2 = \{a^ib^nc^n\} \\
& \\
& S \rightarrow AB \\
& A \rightarrow aA\ |\ a \\
& B \rightarrow bBC\ | \ bc \\
\end{align}$$

Przecięcie $L_1 \cap L_2$ tych dwóch języków to język $L_3 = \{a^nb^nc^n\}$, o którym wiemy, że nie jest bezkontekstowy. Jest klasycznym przykładem na zastosowanie lematu o pompowaniu dla języków bezkontekstowych.

### $\times$ Dopełnienie $L_1^c = \Sigma^* \setminus L_1$
Pokazaliśmy już zamkniętość na sumę, więc jeżeli prawdziwa byłaby także zamkniętość na dopełnienie, to kolejno języki:

* $L_1^c$
* $L_2^c$
* $L_1^c \cup L_2^c$
* $(L_1^c \cup L_2^c)^c$

musiałyby być bezkontekstowe, dla dowolnych bezkontekstowych $L_1, L_2$. Z praw De Morgana:

$$(L_1^c \cup L_2^c)^c = L_1 \cap L_2$$

Zatem także przecięcie $L_1 \cap L_2$ dowolnych języków musiałoby zawsze być bezkontekstowe, a już pokazaliśmy, że tak nie jest.
