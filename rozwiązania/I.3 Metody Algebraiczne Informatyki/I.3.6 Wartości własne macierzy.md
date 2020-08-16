Wartości własne macierzy - własności, metody liczenia i praktyczne zastosowania.

---

# Wartości i wektory własne
Wektor własny przekształcenia można rozumieć jako wektor, którego kierunek nie ulega zmianie po przekształceniu go endomorfizmem; wartość własna odpowiadająca temu wektorowi to skala podobieństwa tych wektorów.

Niech $A$ będzie macierzą kwadratową $n \times n$ nad ciałem $\mathbb{K}$. Jeżeli $\mathbf{v} \in \mathbb{K}^n$ jest wektorem, takim że:
$$A\mathbf{v} = \lambda \mathbf{v}$$
to $\lambda$ nazywamy wartością własną, a $\mathbf{v}$ wektorem własnym macierzy $A$.

## Twierdzenie
$$\det (A-I\lambda) = 0$$

## Własności
Jeśli $\lambda$ jest wartością własną macierzy $A$, a $\mathbf{v}$ jej wektorem własnym, to dla $k \geq 1$, $\lambda^k$ jest wartością własną macierzy $A^k$ oraz $\mathbf{v}$ jest jej wektorem własnym.

Jeśli $\lambda$ jest wartością własną macierzy $A$ a $\mathbf{v}$ jej wektorem własnym oraz $A$ jest odwracalna to $\frac{1}{\lambda}$ jest wartością własną macierzy $A^{-1}$ oraz $\mathbf{v}$ jest jej wektorem własnym.

Jeżeli $\lambda \in K$ jest wartością własną operatora $\mathrm {T}$ , to $|\lambda |\leqslant \|\mathrm {T} \|$.

# Metody liczenie
## Metoda Jacobiego dla macierzy symetrycznej
> Każda macierz rzeczywista symetryczna $A$ wymiaru $N$ ma rozkład
$A = Q\Lambda Q^T$,
gdzie $Q\in R^{N\times N}$ jest ortogonalna (tzn. $Q^TQ = I$), a jej kolumnami są wektory własne $A$, natomiast $\Lambda\in R^N$ jest diagonalna z wartościami własnymi $A$ na diagonali:
$$\Lambda = \begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_N\end{pmatrix}.$$

Pomysł metody Jacobiego jest stosunkowo prosty: należy sekwencją przekształceń ortogonalnych $J_0,J_1,\ldots$ sprowadzić wyjściową macierz symetryczną $A$ do postaci (prawie) diagonalnej:

$$J_k^T J_{k-1}^T \cdots J_0^T  A J_0 \cdots J_{k-1} J_k \approx \begin{pmatrix}  \lambda_1 & & & \\ &  \lambda_2 & & \\ & & \ddots & \\ & & & \lambda_N \end{pmatrix}.$$

Kolejne $J_i$ wybieramy jako obroty givensa, kóre wyzerują parę $a_{pq},a_{qp}, p\ne q$.

Obrót Givensa to macierz $O_{pq}$, taka że ma $1$ na przekątnej oraz $o_{pp}=c=o_{qq}$, $o_{pq}=s=-o_{qp}$ ($c=cos \phi, s=sin\phi$). Istniją wzory słyżące do wyliczenie $c$ i $s$ dla danej iteracji.

## Zera wielomianu charakterystycznego
Jak wiadomo, wartości własne to miejsca zerowe wielomianu charakterystycznego macierzy $P(\lambda) = \det(A - \lambda I)$. Zachodzi także fakt odwrotny, to znaczy miejsca zerowe wielomianu są wartościami pewnej macierzy, np. miejsca zerowe wielomianu
$$p(\lambda) = p_1 \lambda^N + \ldots + p_N \lambda + p_{N+1}$$
są wartościami własnymi m.in. macierzy stowarzyszonej
$$A = \begin{pmatrix}   -p_2/p_1 	& -p_3/p_1 	& \cdots 	& -p_{N+1}/p_1\\ 1 		& 		& 		& 	\\ 		& 1		& 		&	\\ 		& 		& \ddots	&	\\ 		& 		& 		& 1 \end{pmatrix}$$

## Wyznaczanie wartości własnych metodą QR
Metoda wywodzi się z metody $LR$, przy czym macierz $L$ zastąpiono macierzą ortogonalną $Q$ przez co metoda jest stabilna numerycznie.
$$A_1=A$$
$$A_i=Q_iR_i,\quad Q^HQ=I$$
$$A_{i+1}=R_i Q_i$$
gdzie: $R_i$ jest macierzą trójkątna górną, a $Q_i$ jest macierzą ortogonalną.
W metodzie QR otrzymujemy ciąg macierzy
$$A=A_1\rightarrow A_2 \rightarrow ... \rightarrow A_m.$$
Macierze te są do siebie podobne więc mają te same wartości własne. Jeśli $m$ jest duże wówczas
spodziewamy się że na diagonali $A_m$ będą znajdować się wartości własne $A$.

# Zastosowania
## Analiza głównych składowych
W skrócie nazywana PCA (od ang. Principle Component Analysis)
* Polega na wybraniu $k$ ortogonalnych $n$-wymiarowych wektorów, które najlepiej reprezentują dane, $k \leq n$.
* Oryginalne dane są rzutowane na przestrzen rozpiętą przez $k$ wybranych wektorów (składowe główne), co prowadzi do redukcji wymiaru wektorów cech (z $n$ do $k$).

PCA w kilku krokach:
* Unormowanie cech
* Obliczenie składowych głównych (wylicza się $k$ ortonormalnych wektorów, które tworzą bazę dla unormowanych danych wejsciowych. Wektory te są to wektory jednostkowe, wskazujące w kierunku prostopadłym do pozostałych wektorów z utworzonej bazy)
* Sortowanie składowych głównych od najmocniejszych do najsłabszych (Uporządkowujemy wartości własne macierzy kowariancji S w kolejnosci malejąacej )
* Wybranie k znaczących składowych głównych i usunięcie pozostałych

## Spectral Clustering
Podział zbioru punktów w przestrzeni na klastry.
* $A$ - macierz grafu (krawędzie pomiędzy np. punktami odległymi od siebie o mniej niż $1$)
* $D$ - macierz diagonalna ze stopniami wierzchołków
* $L = D-A$

W przypadku podziału na dwa klastry patrzymy na przedostatnią (od największej) wartość własną i związany z nią wektor własny $v$. Jeżeli $v_i<0$ to punkt $i$ jest w jednym klastrze, jak $v_i>0$, to w drugim. W przypadki większej liczby klas rozpatrujemy macierz złożoną z $k$ wektorów i wykorzystujemy inny algorytm na np. k-means. Wówczas $i$ temu punktowi odpowiada wiersz w utworzonej macierzy.

## Wyznaczanie zer wielomianu
Tak jak w **zera wielomianu charakterystycznego**.

## Rozwiązywanie układów równań liniowych jednorodnych
Dany jest układ równań:
$$\begin{cases}x'(t)=-3x+4y-2z\\y'(t)=x+z\\z'(t)=6x-6y+5z\end{cases}$$

W zapisie macierzowym $\mathbb {X} '=\mathbb {A} \cdot \mathbb {X}$ powyższy układ wygląda następująco:

$\begin{bmatrix}x'\\y'\\z'\end{bmatrix}=\begin{bmatrix}-3&4&-2\\1&0&1\\6&-6&5\end{bmatrix}\cdot \begin{bmatrix}x\\y\\z\end{bmatrix}$

Jest to układ równań liniowych jednorodny z trzema niewiadomymi funkcjami ${ x(t)}$, ${ y(t)}$ oraz ${z(t)}$, zależnymi od jednej zmiennej niezależnej ${\displaystyle t}$.

Rozwiązanie tego układu zaczniemy od znalezienia wartości własnych $\lambda$ macierzy współczynników $\mathbb {A}$:
$$det\left[\mathbb {A} -\lambda I\right]=0$$

Zatem rozwiązaniem równania:
$-\lambda ^{3}+2\lambda ^{2}+\lambda -2=0$

są liczby $\lambda _{1}=1$, $\lambda _{2}=-1$, oraz $\lambda _{3}=2$.

Szukamy wektora własnego $\mathbb {C}$ odpowiadającego rzeczywistej 1-krotnej wartości własnej $\lambda _{1}=1$.

$$\left[\mathbb {A} -\lambda _{1}I\right]\cdot \mathbb {C} =0$$

zatem:

$$\begin{bmatrix}-3-\lambda &4&-2\\1&-\lambda &1\\6&-6&5-\lambda \end{bmatrix}\cdot \begin{bmatrix}u_{1}\\u_{2}\\u_{3}\end{bmatrix}=\begin{bmatrix}0\\0\\0\end{bmatrix}$$

następnie:

$${\begin{bmatrix}-4&4&-2\\1&-1&1\\6&-6&4\end{bmatrix}}\cdot {\begin{bmatrix}u_{1}\\u_{2}\\u_{3}\end{bmatrix}}={\begin{bmatrix}0\\0\\0\end{bmatrix}}$$

co ostatecznie daje układ równań:

$$\begin{cases}-4u_{1}+4u_{2}-2u_{3}=0\\u_{1}-u_{2}+u_{3}=0\\6u_{1}-6u_{2}+4u_{3}=0\end{cases}$$

Do pierwszego równania dodamy 4 razy drugie równanie. Otrzymamy wówczas $u_{3}=0$. Podstawiając tę wartość do równania drugiego, otrzymamy, że $u_{1}=u_{2}=s$, gdzie $s$ jest dowolnym parametrem. Podsumowując, otrzymujemy:

$$\begin{cases}u_{1}=s\\u_{2}=s\\u_{3}=0\end{cases}$$

co w zapisie wektorowym wygląda następująco:

$$U_{\lambda _{1}=1}={\begin{bmatrix}s\\s\\0\end{bmatrix}} =s{\begin{bmatrix}1\\1\\0\end{bmatrix}}$$

Analogicznie 
$$ U_{\lambda _{2}=-1}={\begin{bmatrix}s\\0\\-s\end{bmatrix}} =s{\begin{bmatrix}1\\0\\-1\end{bmatrix}},$$

$$U_{\lambda _{3}=2}={\begin{bmatrix}0\\s\\2s\end{bmatrix}} =s{\begin{bmatrix}0\\1\\2\end{bmatrix}}.$$

Ostatecznie rozwiązanie ogólne układu jednorodnego ma postać:

$$\mathbb {X} _{OJ}={\begin{bmatrix}x(t)\\y(t)\\z(t)\end{bmatrix}}_{OJ}=C_{1}{\begin{bmatrix}1\\1\\0\end{bmatrix}}e^{t}+C_{2}{\begin{bmatrix}1\\0\\-1\end{bmatrix}}e^{-t}+C_{3}{\begin{bmatrix}0\\1\\2\end{bmatrix}}e^{2t}={\begin{bmatrix}e^{t}&e^{-t}&0\\e^{t}&0&e^{2t}\\0&-e^{-t}&2e^{2t}\end{bmatrix}}\cdot {\begin{bmatrix}C_{1}\\C_{2}\\C_{3}\end{bmatrix}}.$$
