Konstrukcja Cantora liczb rzeczywistych. Porządek na liczbach rzeczywistych. Twierdzenie o rozwinięciu liczby rzeczywistej w szereg.

---

# Konstrukcja Cantora liczb rzeczywistych

Będziemy korzystać z definicji liczb wymiernych z
[Pytania I.4.12](I.4.12 Konstrukcja liczb calkowitych i wymiernych-operacje.md).

Ciągiem liczb wymiernych $(a_n)_{n\in\mathbb{N}}$ będziemy nazywać każdą funkcję $a: \mathbb{N} \rightarrow \mathbb{Q}$. Przez $a_n$ oznaczamy element ciągu $a(n)$.

Ciąg nazywamy ciągiem Cauchy’ego, gdy:

$$\forall_{\mathbb{Q}\ni\varepsilon>0}\exists_{n_0\in\mathbb{N}}\forall_{p,q>n_0}|a_p-a_q|<\varepsilon.$$

Zbiór wszystkich ciągów Cauchy’ego złożonych z liczb wymiernych oznaczmy $\mathcal{C}$. W zbiorze tym wprowadzamy relację równoważności $\sim$:

$$(a_n)_{n\in\mathbb{N}} \sim (b_n)_{n\in\mathbb{N}} \iff \forall_{\mathbb{Q}\ni\varepsilon>0}\exists_{n_0\in\mathbb{N}}\forall_{n>n_0}|a_n-b_n|<\varepsilon.$$

Łatwo sprawdzić, że istotnie jest ona zwrotna, symetryczna i przechodnia (więc jest relalcją równoważności).

Zbiór $\mathbb{R}$ jest przestrzenią ilorazową $\mathcal{C}/_{\sim}$ (zbiorem klas równoważności relacji $\sim$).
Wówczas $\mathbb{Q}$ możemy identyfikować ze zbiorem klas ciągów stałych.

Intuicyjnie, liczba rzeczywista jest zbiorem ciągów zbieżnych do tej liczby.

# Działania na liczbach rzeczywistych

Działania w $\mathbb{Q}$ przenoszą się na działania na naszych ciągach, a więc także na $\mathcal{C}$. Dzięki temu możemy wprowadzić działania i porządek w $\mathbb{R}=\mathcal{C}/_{\sim}$, ograniczając się do reprezentantów. Niech $(a_n)_{n\in\mathbb{N}}, (b_n)_{n\in\mathbb{N}} \in\mathcal{C}$.

|Pojęcie|Definicja|
|:-----:|:-------:|
| Dodawanie |$[(a_n)_{n\in\mathbb{N}}]+[(b_n)_{n\in\mathbb{N}}]=[(a_n+b_n)_{n\in\mathbb{N}}]$ |
| Element neutralny dodawania | $[0]\;$ – ciąg stale równy $0$ |
| Element przeciwny | $-[(a_n)_{n\in\mathbb{N}}]=[(-a_n)_{n\in\mathbb{N}}]$ |
| Mnożenie | $[(a_n)_{n\in\mathbb{N}}]\cdot [(b_n)_{n\in\mathbb{N}}]=[(a_nb_n)_{n\in\mathbb{N}}]$ |
| Element neutralny mnożenia | $[1]\;$ – ciąg stale równy $1$ |
| Porządek | $[(a_n)_{n\in\mathbb{N}}]<[(b_n)_{n\in\mathbb{N}}] \iff \exists_{0<r\in\mathbb{Q}}\exists_{n_0\in\mathbb{N}}\forall_{n>n_0}a_n+r<b_n$ |

## Dowód, że dodawanie jest poprawnie zdefiniowane
Na przykładzie dodawania pokażemy, że definicje nie zależą od wyboru reprezentantów (mnożenie idzie analogicznie).

Weźmy 4 ciągi:
$(a_n)_{n\in\mathbb{N}} \sim (c_n)_{n\in\mathbb{N}}$ i $(b_n)_{n\in\mathbb{N}} \sim (d_n)_{n\in\mathbb{N}}$. Będziemy chcieli pokazać, że:
$[(a_n)_{n\in\mathbb{N}}] + [(b_n)_{n\in\mathbb{N}}] = [(c_n)_{n\in\mathbb{N}}] +  [(d_n)_{n\in\mathbb{N}}]$.

Z definicji dodawania powyższy warunek jest równoważny $[(a_n + b_n)_{n\in\mathbb{N}}] = [(c_n + d_n)_{n\in\mathbb{N}}]$
i $(a_n + b_n)_{n\in\mathbb{N}} \sim (c_n + d_n)_{n\in\mathbb{N}}$.

Ponieważ $(a_n)_{n\in\mathbb{N}} \sim (c_n)_{n\in\mathbb{N}}$ i $(b_n)_{n\in\mathbb{N}} \sim (d_n)_{n\in\mathbb{N}}$

$$\begin{align}
\forall_{\mathbb{Q}\ni\varepsilon>0}\exists_{n_1\in\mathbb{N}}\forall_{n>n_1}|a_n-c_n|<\frac{\varepsilon}{2}\\
\forall_{\mathbb{Q}\ni\varepsilon>0}\exists_{n_2\in\mathbb{N}}\forall_{n>n_2}|b_n-d_n|<\frac{\varepsilon}{2}
\end{align}$$

Z dwóch powyższych:

$$\begin{align}
\forall_{\mathbb{Q}\ni\varepsilon>0}\exists_{n_0\in\mathbb{N}}\forall_{n>n_0}|(a_n+b_n)-(c_n+d_n)| \leqslant |a_n-c_n|+|b_n-d_n| < \varepsilon.
\end{align}$$

Zatem $(a_n + b_n)_{n\in\mathbb{N}} \sim (c_n + d_n)_{n\in\mathbb{N}}$ czyli dodawanie jest dobrze zdefiniowane.

## Rozwinięcie liczby rzeczywistej w szereg

Dla każdej liczby rzeczywistej $0 \leqslant X < 1$ istnieje ciąg $(r_n)_{n\in\mathbb{N}} \in 2^\mathbb{N}$ taki, że ciąg jego sum cześciowych $x_n: \mathbb{N} \rightarrow \mathbb{Q}$ dany jako $x_n = \sum^n_{i=0} \frac{r_i}{2^{i+1}}$, spełnia:

1. $(x_n)_{n\in\mathbb{N}}$ jest ciągiem Cauchy'ego.
2. $[(x_n)_{n\in\mathbb{N}}] = X$.

Taki ciąg $(r_n)_{n\in\mathbb{N}}$ nazwiemy rozwinięciem liczby $X$ przy podstawie 2.

Dla każdej liczby rzeczywistej $X$ podamy indukcyjną konstrukcję ciągu $r$ będącego dwójkowym rozwinięciem liczby $X$ i równolegle
ciągu $(x_n)_{n\in\mathbb{N}}$ jego sum cześciowych. Jeżeli $0 \leqslant X < \frac{1}{2}$, to definiujemy $r_0 = 0$, w przeciwnym wypadku, to znaczy
kiedy $\frac{1}{2} \leqslant X < 1$, definiujemy $r_0 = 1$. Załóżmy, że mamy zdefiniowany ciąg $r$ do wyrazu $k$. Wyraz $k+1$ definiujemy:

1. $r_{k+1} = 1$, jeżeli $\sum^k_{i=0} \frac{r_i}{2^{i+1}} + \frac{1}{2^{k+2}} \leqslant X$,
2. $r_{k+1} = 0$, jeżeli $\sum^k_{i=0} \frac{r_i}{2^{i+1}} + \frac{1}{2^{k+2}} > X$.

Ciąg $x_k$ definiujemy tak jak w tezie twierdzenia, to znaczy $x_k = \sum^k_{i=0} \frac{r_i}{2^{i+1}}$.
