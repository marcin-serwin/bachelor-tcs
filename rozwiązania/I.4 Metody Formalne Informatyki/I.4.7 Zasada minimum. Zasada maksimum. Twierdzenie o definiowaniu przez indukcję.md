Zasada minimum. Zasada maksimum. Twierdzenie o definiowaniu przez indukcję.
---

# Zasada minimum

> Każdy niepusty zbiór liczb naturalnych zawiera element najmniejszy, to znaczy taki, że wszystkie elementy w tym zbiorze są od niego większe lub równe.

To twierdzenie mówi, że każdy zbiór liczb naturalnych zawiera liczbę najmniejszą w porządku $\leq$.

Pozwala ono dowody przez indukcję zamieniać na dowody niewprost. Zamiast przeprowadzać dowód indukcyjny dla zbioru $P$, rozważyć możemy zbiór $\mathbb{N} \setminus P$. Na mocy poniższego twierdzenia zbiór taki posiada element minimalny, który jest albo zerem, albo następnikiem pewnej liczby naturalnej, co pozwala na uzyskanie sprzeczności.

# Zasada maksimum
> Jeśli $x$ jest niepustym zbiorem liczb naturalnych ograniczonym z góry, tzn.:
>
>$\exists y\; y\in\mathbb{N} \land \forall z\; z\in x \implies z \leq y$,
>
> to $x$ posiada element największy, tzn.:
>
> $\exists y\; y\in x \land \forall z\; z\in x \implies z\leq y$.

Oczywistym faktem jest, że nie istnieje największa liczba naturalna. Aksjomatyczny dowód tego faktu przebiega niewprost. Jeśli $n$ jest liczbą naturalną, to $n'$ jest również liczbą naturalną i $n' > n$, więc $n$ nie mogła być większa od wszystkich liczb. Niemniej jednak, jeśli pewien podzbiór liczb naturalnych jest ograniczony z góry, to posiada element największy.

# Twierdzenie o definiowaniu przez indukcję.

> Niech $A$ i $B$ będą zbiorami, a $f: A \rightarrow B$ i $g:B\times \mathbb{N}\times A\rightarrow B$ funkcjami. Istnieje unikalna funkcja $h:\mathbb{N}\times A\rightarrow B$ taka, że:
>
> $\forall a \in A\ \ h(0, a) = f(a),$ 
> 
> $\forall a \in A, n \in \mathbb{N}\ \ h(n', a) = g(h(n, a), n, a).$

Powyższe twierdzenie pozwala nam zdefiniować dodawanie, mnożenie i wiele ważnych operacji na liczbach naturalnych. Twierdzenie to mówi, że jeśli wiemy, jak zdefiniować pewną operację dla zera oraz jak zdefiniować ją dla następnika danej liczby, to możemy zdefiniować ją dla wszystkich liczb naturalnych .
