Wykorzystaj liniowość wartości oczekiwanej i oblicz oczekiwaną liczbę wykonanych porównań w algorytmie sortowania Quicksort. Możesz przyjąć, że sortujemy tablicę parami różnych elementów

---

# Wartość oczekiwana porównań w sortowaniu Quicksort

Załóżmy, że pivot wybierany jest z rozkładu jednostajnego wszystkich możliwych opcji oraz że elementy list są różne.

> Dla dowolnego inputu liczba porównań w sortowaniu Quicksort wynosi $(2n+2)H_n -4n$.

Niech $y_1,...,y_n$ będą posortowanymi $x_1,...,x_n$ (rosnąco). Dla $i<j$ niech $X_{ij}$ będzie zmienną losową, która przyjmuje wartość $1$, gdy $y_i$ i $y_j$ są porównywane w jakimkolwiek momencie. $0$ w przeciwnym przypadku. 

Ponieważ żadne dwie liczby nie będą porównane dwukrotnie ze sobą, suma porównań wynosi
$$X=\sum_{i=1}^{n-1}\sum_{j=i+1}^n X_{ij}.$$
Z liniowości wartości oczekiwanej $E[X]=\sum_{i=1}^{n-1}\sum_{j=i+1}^n E[X_{ij}]$. 

$E[X_{ij}]$ jest równa prawdopodobieństwu, że $X_{ij}=1$.Zatem musimy obliczyć prawdopodobieństwo, że $y_i$ i $y_j$ zostaną porównane. $y_i$ i $y_j$ są porównane, gdy któreś z nich jest pivotem wybranym jako pierwszym ze zbioru $Y^{ij}=\{y_i,...,y_j\}$. Jest tak, gdyż jeżeli $y_i$ ($y_j$) jest pivotem wybranym z tego zbioru, to znaczy że oba są w tej samej podtablicy, więc będą porównane. Gdyby żaden nie został wybrany z tej listy jako pierwszy, to zostaną one rozdzielone (trafią do innych podtablic), bo wybierzemy pivot, który jest $>y_i$ ale $<y_j$.

Skoro wybieramy pivot z rozkładu jednostajnego, prawdopodobieństwo, że wybranym jako pierwszy pivot ze zbioru $Y^{ij}$ elementem będzie $y_i$ lub $y_j$ wynosi $\frac{2}{j-i+1}$. Otrzymujemy
$$E[X]=\sum_{i=1}^{n-1}\sum_{j=i+1}^n \frac{2}{j-i+1} = \sum_{i=1}^{n-1}\sum_{k=2}^{n-i+1}\frac{2}{k} = \sum_{k=2}^n\sum_{i=1}^{n+1-k}\frac{2}{k} = \sum_{k=2}^n (n+1-k)\frac{2}{k} = 2(n+1)\sum_{k=2}^n \frac{1}{k}-2(n-1) =(2n+2)\sum_{k=1}^n \frac{1}{k} -4n.$$
