Metody badania poprawności algorytmów (problem stopu, weryfikacja częściowej poprawności - niezmienniki). Podaj przykłady.

---

# Specyfikacja programu
To formalne określenie tego, co program ma robić.

Na specyfikację programu składają się:
* Warunek początkowy $\alpha$ - założenie. Jest to warunek dotyczący danych wejściowych. Musi być spełniony na początku programu. Jeżeli dane nie spełniają tego warunku, to nie ma gwarancji, że program będzie działał poprawnie i się zatrzyma.
* Warunek końcowy $\beta$ - teza. Warunek określa co oblicza program przy założeniu że się zatrzyma. Warunek końcowy jest zawsze prawdziwy, jeżeli zachodzi warunek początkowy i program się zatrzymuje.

# Częściowa  poprawność programu $P$
Trójka $(\{\alpha\}, P, \{\beta\})$ (*zwana też trójką Hoare'a*) - formuła logiczna prawdziwa wtedy i tylko wtedy, gdy dla każdego stanu spełniającego $\alpha$, jeżeli program $P$ zakończy swoje działanie to stan końcowy będzie spełniał formułę $\beta$.

Jeżeli formuła $(\{\alpha\}, P, \{\beta\})$ jest pełniona, mówimy, że program jest **częściowo poprawny**.

# Poprawność programu $P$
Program $P$ jest **poprawny**, jeśli spełnione są trzy warunki:
* **Częściowa poprawność.** Dla każdego zestawu danych spełniających warunek początkowy $\alpha$, jeśli obliczenie dojdzie do końca będzie spełniony warunek końcowy $\beta$.
* **Określoność operacji.** Dla każdego zestawu danych spełniających warunek początkowy $\alpha$, działanie algorytmu nie zostanie przerwane błędem, tzn. wszystkie działania są poprawnie wykonywalne (nie nastąpi dzielenie przez zero, przekroczenie zakresu liczb, nie zabraknie pamięci itp.). 
* **Własność stopu**. Dla każdego zestawu danych spełniających warunek początkowy $\alpha$, działanie algorytmu się zakończy. 

## Dowodzenie własności stopu
### Własność stopu dla pętli
#### Metoda licznika iteracji

W każdym obiegu pętli wartość licznika rośnie o $1$. Własność stopu jest spełniona, jeśli umiemy wskazać górne ograniczenie na wartość licznika.

#### Metoda wielkości malejącej/rosnącej
Definiujemy jakieś wyrażenie. Następnie pokazujemy, że jego wartość maleje/rośnie o co najmniej wartość pewnej stałej $c$. Równocześnie wskazujemy ograniczenie dolne/górne na wartość wyrażenia.

**Przykład:**

Założenie: $x \in \mathbb{N}, x > 0$

````
while x != 1
  if x % 2 == 0
    x = x / 2
  else
    x++
}
````

* Dla $x = 1$ - stop od razu.
* Dla $x = 2$ - stop po jednym obiegu pętli.
* Dla $x \geq 3$ - analizujemy dwa przebiegi pętli:
  * $2 \nmid x$ - w pierwszym obiegu pętli $x$ rośnie o $1$, w drugim maleje o połowę. \
  $\frac{x + 1}{2} < x$.
  * $2 \mid x$ - w pierwszym obiegu $x$ maleje o połowę, a w drugim albo znów maleje o połowę, albo rośnie o $1$. \
  $\frac{x}{4} < x$ lub $\frac{x}{2} + 1 < x$.

  W obydwu przypadkach $x$ maleje przynajmniej o $1$ oraz $x \geq 1$, zatem w pewnym obiegu pętli $x$ osiągnie wartość $1$.

## Dowodzenie częściowej poprawności
Aby pokazać, że algorytm jest częściowo poprawny, należy podzielić go na mniejsze fragmenty i wyznaczyć ich warunki początkowe i końcowe.

Fragmentami programu mogą być:
1. Bloki instrukcji wykonywane sekwencyjnie
2. Instrukcje wyboru
3. Pętle
4. Wywołania funkcji

### Blok instrukcji

Warunek końcowy jednej instrukcji bloku staje się warunkiem początkowym dla instrukcji kolejnej.

**Przykład:**

$\alpha: i,j,x \in \mathbb{N}, i > 0, j \geq 5, x < 100$

````
i = i + j
````

$\alpha': i,j,x \in \mathbb{N}, i \geq 6, j \geq 5, x < 100$

````
x = x - i
````

$\beta: i,j,x \in \mathbb{N}, i \geq 6, j \geq 5, x < 94$

### Instrukcje wyboru

Warunek poczkątkowy $\alpha$
````
if (A) B else C
````
Warunek końcowy $\beta$

$\beta$ jest prawdziwe jeśli $(\{ \alpha \wedge A \}, B, \{ \beta \}) \wedge (\{ \alpha \wedge \neg A \}, C, \{ \beta \})$.

**Przykład:**

$\alpha: a \in \mathbb{N}, a \geq 1$

````
if a % 2 == 1
  a = a * 6
else
  a = a * 3
````

$\beta: \exists k \in \mathbb{N} : a = 6k \wedge a \geq 3 \wedge a \in \mathbb{N}$

1. Zachodzi warunek A - $a$ nieparzyste

$(\{ \alpha \wedge A \}, B, \{ \beta \})$

$a \geq 1 \wedge a_{new} = 6a \Rightarrow a_{new} \geq 6 \Rightarrow a_{new} \geq 3$ \
$a_{new} = 6a \wedge a \in \mathbb{N} \Rightarrow \exists k \in \mathbb{N}: \ a_{new} = 6k$.

2. Nie zachodzi A - $a$ parzyste

$(\{ \alpha \wedge \neg A \}, C, \{ \beta \})$

$a \geq 1 \wedge a_{new} \geq 3 \Rightarrow a_{new} \geq 3$ \
$a_{new} = 3a \wedge (a \, mod \, 2 = 0) \Rightarrow \exists k \in \mathbb{N} a_{new} = 6k$.

### Funkcje

Funkcje są niezależnymi fragmentami kodu, posiadają własne specyfikacje (warunki $\alpha_f$ i $\beta_f$) dowodzone niezależnie od całego programu.

````
// Warunek początkowy - alpha
f(x);
// Warunek końcowy - beta
````

Warunek: $(\alpha \Rightarrow \alpha_f) \wedge (\beta_f \Rightarrow \beta)$

### Pętle
#### Niezmiennik pętli
To formuła logiczna $\gamma$ zawierająca zmienne używane w pętli, spełniona przed i po każdej iteracji pętli. Może być chwilowo fałszywa w trakcie wykonywania instrukcji wewnątrz pętli.

````
// Warunek początkowy - alpha
while (A) 
  // Niezminnik - gamma
  W
  // Niezmiennik - gamma

// Warunek końcowy - beta
````

* $\gamma$ jest spełnione przed wykonaniem $W$.
* Jeśli $A$ i $\gamma$ są spełnione przed wykonaniem W to $\gamma$ jest spełnione po wykonaniu $W$.

$\beta$ jest spełnione jeśli:

* $\alpha \Rightarrow \gamma$
* $(\gamma \wedge \neg A) \Rightarrow \beta$
* $(\{ \gamma \wedge A \}, W, \{ \gamma \})$

**Przykład**

Mnożenie liczb naturalnych $x, y$

````
w = 0, i = y
while i > 0
  w = w + x
  i = i - 1
````

$\alpha: x, y > 0$

$\beta: w = x \cdot y$

$\gamma: w = x \cdot y - x \cdot i$

**Dowód niezmiennika - indukcja:**

* Przed pętlą: \
$i = w \wedge w = 0$ \
$\gamma: w = x \cdot y - x \cdot i = x \cdot y - x \cdot y = 0$

* Założenie indukcyjne: \
$w = x \cdot y - x \cdot i$ - $w, i$ - wartości po $k$-tym obiegu pętli
* Teza:
$w_{new} = x \cdot y - x \cdot i_{new}, i_{new} = i - 1$ - $w_{new}, i_{new}$ - wartości po $k+1$-szym obiegu pętli


**Dowód:** \
$w_{new} = w + x = x \cdot y – x \cdot i + x = x \cdot y – x \cdot (i - 1) = x \cdot y - x \cdot i_{new}$

* Po pętli: \
$i \in \mathbb{N} \wedge i > 0 \wedge i_{new} \leq 0 \wedge i_{new} = i - 1 \Rightarrow i = 0$\

* Sprawdzamy warunek $\{ \gamma \wedge (i = 0) \} \Rightarrow \{ \beta \}$: \
$\gamma \wedge (i = 0) \Rightarrow (w = x \cdot y - x \cdot i) \wedge i = 0 \Rightarrow w = x \cdot y \Rightarrow \beta$.

