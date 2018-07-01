Wyznacznik macierzy i jego zastosowania

---

# Wstęp
Wyznacznik to funkcja przyporządkowująca każdej macierzy kwadratowej $M_{n \times n}$
o współczynnikach z pewnego pierścienia przemiennego element tego pierścienia (pierścieniem jest np. ciało liczb rzeczywistych).
Wyznacznik jest wielomianem.

**Uwaga**: wyznacznik istnieje tylko dla ***kwadratowej*** macierzy. Dla prostokątnej się go w ogóle nie definiuje.

# Definicja permutacyjna
Dla $A \in M_{n \times n}$
$$\det(A) = \sum_{\sigma \in S_n} (-1)^{Inv(\sigma)} a_{1 \sigma (1)} \dots a_{n \sigma (n)}$$
Gdzie przez $Inv(\sigma)$ oznaczamy znak permutacji ($1$ - dla parzystej liczby inwersji
oraz $-1$ dla nieparzystej liczby inwersji).

# Definicja aksjomatyczna
Niech $A \in M_{n \times n} (\mathbb{R})$. Oznaczmy jej kolumny (lub analogicznie wiersze) przez $A_1, A_2, ..., A_n$. Wyznacznikiem tej macierzy jest funkcja $det: M_{n \times n}(\mathbb{R}) \rightarrow \mathbb{R}$, która spełnia:
*
 $det(A_1, ..., k \cdot A_i + k' \cdot A_i', ..., A_n) = k \cdot det(A_1, ..., A_i, ..., A_n) + k' \cdot det(A_1, ..., A_i', ..., A_n)$
* $det(A_1, ..., A_i, ..., A_j, ..., A_n) = -det(A_1, ..., A_j, ..., A_i, ..., A_n)$
* $det(I) = 1$

# Własności
Istnieje zbiór tak zwanych *operacji elementarnych*, które nie zmieniają wyznacznika lub zmieniają go w sposób przewidywalny:
1) **zamiana wierszy** - wyznacznik zmienia wtedy znak
2) **przemnożenie wiersza przez stałą** - wyznacznik zmienia się proporcjonalnie do tejże stałej
3) **dodanie wiersza przemnożonego przez stałą do innego wiersza** - wyznacznik się nie zmienia się

Typowe równości z wyznacznikiem:
* $\det(A^T) = \det(A)$
* $\det(A^{-1}) = \frac{1}{\det(A)}$
* $\det(AB) = \det(A)\det(B)$
* $\det(cA) = c^n\det(A)$

# Wyliczanie wyznacznika
Istnieje wiele metod, które pozwalają na obliczenie wartości wyznacznika. Niektóre z nich to:

## Metoda Gaussa
Z definicji również łatwo wykazać, że dla macierzy trójkątnej ($\forall_{i < j}\ a_{i,j} = 0$)
wyznacznik jest równy $\prod_{i = 1}^na_{i,i}$.
Można to wykorzystać poddając wcześniej macierz eliminacji Gaussa.

## Macierz blokowa
Wyznacznik dla macierzy wynosi:
$$\det\begin{pmatrix}A& 0 \\ C& D \end{pmatrix} = \det(A) \cdot \det(D) =
\det\begin{pmatrix}A& B \\ 0& D \end{pmatrix}$$

## Wzór Laplace'a
$$\det(A) = \sum_{j = 1}^n (-1)^{i + j} \cdot a_{i,j} \cdot \det(A_{i,j})$$
gdzie
$i$ - jest ustalone i określa wiersz, względem którego robimy rozwinięcie
$a_{i,j}$ - element macierzy w $i$-tym wierszu i $j$-tej kolumnie macierzy $A$.
$A_{i,j}$ - macierz powstała po skreśleniu $i$-tego wiersza i $j$-tej kolumny z macierzy $A$.

Wzór ten jest wygodny do liczenia wyznacznika, jeżeli pewna kolumna lub wiersz macierzy
posiadają mało niezerowych elementów (lub łatwo sprowadzić macierz do postaci, w której
tak jest).

# Interpretacja i Zastosowania

* Najbardziej naturalną interpretacją wyznacznika jest objętość $n$-wymiarowego
równoległoboku rozpiętego na wektorach będących wierszami macierzy. Możemy więc
używać metod liczenia wyznacznika, by poznawać objętości figur (gdzie "objętość"
pokrywa się z naturalną objętością tylko dla $n \leq 3$ (kolejno, objętość trójwymiarowa, pole i długość).
* Niezerowość wyznacznika oznacza nieosobliwość macierzy (czyli istnienie jej odwrotności)
* Wyznacznik wykorzystuje się przy rozwiązywaniu układu równań liniowych przy używaniu wzorów _Cramera_.
