Wartość oczekiwana - własności, metody liczenia i praktyczne zastosowania.

---

# Zmienna losowa
Umożliwia interpretowanie zdarzeń elementarnych, przypisując każdemu z nich pewną cechę, która jest liczbą. Wbrew swojej nazwie, zmienne losowe nie są wcale zmiennymi, nie są też w żadnym sensie losowe.

Dyskretna zmienna losowa $X$ to **funkcja** przypisująca zdarzeniom elementarnym liczby. Formalnie $X: \Omega \mapsto \mathbb{K}$, gdzie $\mathbb{K}$ jest zbiorem liczbowym (na przykład $\mathbb{N}$ lub $\mathbb{R}$). Zbiór wartości zmiennej losowej $X$ jest **co najwyżej przeliczalny**.

Przykładowe zmienne losowe:
* Liczba orłów w $n$-krotnym rzucie monetą.
* Suma liczb oczek wyrzuconych w dwukrotnym rzucie kostką.
* Liczba rzutów monetą wykonanych aż do uzyskania po raz pierwszy reszki.

Prawdopodobieństwo, z jakim zmienna losowa $X$ przyjmuje wartość $x$, oznaczamy jako $P(X = x)$.

# Wartość oczekiwana
Intuicyjnie, jeśli rzucimy monetą $100$ razy, teoretycznie orzeł powinien wypaść $50$ razy. Oczywiście, w praktyce możemy wyrzucić kolejno $48$, $61$, $53$ orłów. Jednakże, kontynuując takie losowania wielokrotnie, nasze wyniki zbliżałyby się do **średniego wyniku** $50$ orłów na $100$ rzutów. Za każdym razem spodziewamy się, że wypadnie taka liczba (lub do niej zbliżona).

Wartość oczekiwana określa spodziewany (średni, teoretyczny) wynik doświadczenia losowego. Niech $X$ będzie dyskretną zmienną losową. Wartością oczekiwaną nazywa się sumę iloczynów wartości tej zmiennej losowej oraz prawdopodobieństw, z jakimi są one przyjmowane.

Jeżeli dyskretna zmienna losowa $X$ przyjmuje wartości $x_1, x_2, \ldots, x_n$ z prawdopodobieństwami wynoszącymi odpowiednio $p_1, p_2, \ldots, p_n$, to wartość oczekiwana $\mathbb{E}[X]$ wyraża się wzorem:
$$\mathbb{E}\lbrack X \rbrack = \sum_{i = 1}^np_ix_i$$

Jeżeli zmienna $X$ przyjmuje nieskończenie ale przeliczalnie wiele wartości, to we wzorze na jej wartość oczekiwaną występuje $\infty$ w miejsce $n\,$ (istnieje ona tylko wtedy, gdy szereg ten jest zbieżny bezwzględnie).

W interpretacji fizycznej liczba $\mathbb{E}[X]$ jest środkiem ciężkości układu mas.

## Własności

### Suma ze stałą
Jeśli zmienna losowa $X$ posiada wartość oczekiwaną $\mathbb{E}[X]$, $c$ zaś jest dowolną ustaloną liczbą rzeczywistą, to zmienna losowa $X+c$ także posiada wartość oczekiwaną:
$$\mathbb{E}[X + c] = \mathbb{E}[X] + c$$

### Liniowość
Jeżeli zmienna losowa $X$ posiada wartość oczekiwaną $\mathbb{E}[X]$, $a \in \mathbb{R}$ i $a \neq 0$, to zmienna losowa $a \cdot X$ także posiada wartość oczekiwaną i
$$\mathbb{E}\lbrack a \cdot X \rbrack = a \cdot \mathbb{E}\lbrack X \rbrack$$

### Suma wartości oczekiwanych
Jeśli zmienne losowe $X_1, X_2, \ldots, X_s$ są określone w tej samej przestrzeni probabilistycznej i każda posiada wartość oczekiwaną, to posiada ją również ich suma:

$$\mathbb{E}[X_1 + X_2 + \cdots + X_s]
= \mathbb{E}[X_1] +
\mathbb{E}[X_2] +
\cdots +
\mathbb{E}[X_s]$$

### Niezależność
Jeśli zmienne losowe $X$ oraz $Y$ są niezależne, to:
$$\mathbb{E} \lbrack X \cdot Y \rbrack = \mathbb{E} \lbrack X \rbrack \cdot \mathbb{E} \lbrack Y \rbrack$$

# Zastosowania
  * Policzyć, ile razy średnio należy rzucić monetą, aby otrzymać $3$ razy z rzędu orła.
  * Policzyć ile pól średnio pokonujemy w grze planszowej po każdym rzucie kostką.
  * Oszacować oczekiwany czas działa algorytmu dla danych ustalonego rozmiaru (np. quicksort, problem zatrudnienia sekretarki).
  * Obliczyć wariancję.
