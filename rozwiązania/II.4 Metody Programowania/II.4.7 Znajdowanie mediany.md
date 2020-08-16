Znajdowanie mediany zbioru w czasie liniowym - prezentacja algorytmu, złożoność.

---

# Algorytm magicznych piątek (znany też jako „mediana median”) 
Algorytm rozwiązujący problem selekcji, czyli znalezienia $k$-tej co do wielkości spośród $n$ liczb.

## Idea
Załóżmy, że dany jest zbiór $n$ liczb $A$, szukamy w nim $k$-tej liczby co do wielkości. Pomysł polega na ulepszeniu algorytmu Hoare’a, mianowicie na dokonaniu podziału względem sensownego elementu i to tym razem na trzy zbiory, mniejszych, równych oraz większych od wybranej liczby. Idea algorytmu magicznych piątek polega na tym, żeby znaleźć w zbiorze $A$ taki element, który zapewni podział na stosunkowo równe zbiory elementów mniejszych $A_{<}$ i większych $A_{>}$.

## Algorytm
Algorytm jest rekurencyjny. Dzielimy zbiór $A$ na piątki liczb (ewentualnie ostatnia piątka jest niepełna) i spośród każdej piątki wybieramy medianę. Oznaczmy zbiór tych median przez $A_{5}$. Następnie wywołujemy rekurencyjnie algorytm magicznych piątek dla pary $\langle A_{5},\lfloor {\frac {|A_{5}|}{2}}\rfloor \rangle$, czyli innymi słowy szukamy w zbiorze $A_5$ mediany, niech wynikiem będzie liczba $m_5$.

Liczba $m_5$ jest dobrym elementem do wykonania podziału. Zauważmy, że w zbiorze $A$, w każdej z piątek, której reprezentant okazał się mniejszy lub równy od $m_5$ przynajmniej połowa (a w większości przypadków trzy piąte) elementów jest nie większa od $m_5$. Zatem przynajmniej jedna czwarta liczb ze zbioru $A$ jest nie większa od $m_5$, analogicznie można uzasadnić, że przynajmniej jedna czwarta jest nie mniejsza.

Dokonujemy zatem podziału zbioru $A$ na liczby mniejsze od $m_{5}$ (zbiór $A_{<}$, równe $m_{5}$ (zbiór $A_=$) oraz większe od niej (zbiór $A_{>}$). Jeśli $k\leqslant |A_{<}|$ to wywołujemy rekurencyjnie algorytm magicznych piątek dla pary $\langle A_{<},k\rangle |$. W przeciwnym wypadku jeśli $k\leqslant |A_{<}|+|A_{=}|$ to zwracamy $m_{5}$ jako $k$-tą liczbę, a jeśli nie, to wywołujemy rekurencyjnie algorytm dla pary $\langle A_{>},k-|A_{<}|-|A_{=}|\rangle$.

## Analiza złożoności
Niech $T(n)$ oznacza złożoność czasową algorytmu. Zauważmy, że wykonanie algorytmu składa się z trzech kroków

znajdowania median piątek, wykonywanego w czasie $\Theta (n)$,
wybierania (rekurencyjnie) mediany zbioru $A_{5}$, wykonywanego w czasie $T\left({\frac {n}{5}}\right)$, wykonania wywołania rekurencyjnego, wykonywanego co najwyżej w czasie $T(\max(|A_{<}|,|A_{>}|))$.
Jak wcześniej zauważyliśmy $\max(|A_{<}|,|A_{>}|)\leqslant {\frac {3n}{4}}$, zatem szacując czas wykonania całego algorytmu przez sumę maksymalnych czasów wykonań kroków, dostajemy nierówność

$$T(n)\leqslant \Theta (n)+T\left({\frac {n}{5}}\right)+T\left({\frac {3n}{4}}\right).$$
Stosując standardowe metody rozwiązywania nierówności asymptotycznych (kluczowe jest, że ${\frac {1}{5}}+{\frac {3}{4}}={\frac {19}{20}}<1$
dostajemy, że algorytm magicznych piątek nawet pesymistycznie jest liniowy.

