Liczby pierwsze, probabilistyczna metoda testowania pierwszości.

---

# Testowanie pierwszości
Test pierwszości ma na celu stwierdzenie, czy dana liczba jest pierwsza.

Wiele spośród znanych testów pierwszości szuka tak naprawdę świadka na złożoność liczby. Jeśli go nie znajdą - odpowiadają, że liczba jest pierwsza.

**Uwaga**: jest istotna różnica pomiędzy stwierdzeniem, że liczba jest złożona a wskazaniem jej rozkładu (faktoryzacją). W szczególności, istnieje wielomianowy algorytm testujący pierwszość. Dotychczas poznane algorytmy faktoryzujące są natomiast o wiele wolniejsze.

## Testy deterministyczne
Wydają certyfikat pierwszości. Odpowiadają, że podana na wejściu liczba jest pierwsza wtedy i tylko wtedy gdy naprawdę tak jest.

### Naiwny test pierwszości
Najprostszy deterministyczny test pierwszości.

Daną na wejściu liczbę $n$ dzielimy kolejno przez $2, 3, \ldots, \lfloor \sqrt n \rfloor$ i jeśli liczba $n$ jest złożona, na pewno znajdziemy jakiś jej nietrywialny (różny od $1$ i od niej samej) dzielnik.

Zaletą tego algorytmu jest to, że oprócz stwierdzenia o pierwszości możemy także łatwo dostać rozkład na czynniki pierwsze. Algorytm ten wymaga jednak pesymistycznie $\Theta(\sqrt n)$ operacji dzielenia, a zatem jest wykładniczy ze względu na długość (w bitach) liczby $n$.

## Testy probabilistyczne
Dla liczb pierwszych zawsze odpowiadają poprawnie, jednak może zdarzyć się sytuacja, gdy liczba złożona zostanie uznana za pierwszą. Dzieje się tak w sytuacji, gdy liczba złożona posiada pewne własności liczb pierwszych - wówczas o takiej liczbie mówimy, że jest **pseudopierwsza**.

### Test Fermata
Przykładowo, istotną kategorią liczb pseudopierwszych są liczby złożone spełniające warunki **Małego Twierdzenia Fermata**. Twierdzenie to mówi, że jeśli $p$ jest liczbą pierwszą, to dla dowolnej liczby $a$ względnie pierwszej z $p$ zachodzi:

$$a^{p-1} \equiv 1 \mod p$$

Jeżeli równanie to jest spełnione przez pewną liczbę złożoną, to nazywamy ją **pseudopierwszą przy podstawie $a$**.

Aby stwierdzić, czy $p$ jest pierwsza, można wybrać kilka losowych wartości $a$ i sprawdzić, czy ta równość jest dla nich spełniona. Jeśli dla którejkolwiek z nich nie jest, to na pewno $p$ jest liczbą złożoną. Jeśli wszystkie ją spełniają, $p$ jest prawdopodobnie liczbą pierwszą albo pseudopierwszą. Ten proces nazywamy **testem pierwszości Fermata**.

#### Liczby Carmichaela
Nie sposób nie wspomnieć tutaj o **liczbach Carmichaela**. Są to takie liczby, które są pseudopierwsze przy każdej podstawie względnie pierwszej z nimi.

Istnienie liczb Carmichaela wskazuje, że test pierwszości Fermata nie może być deterministycznym testem pierwszości. Na zasadzie Małego Twierdzenia Fermata można oprzeć jedynie test probabilistyczny, który będzie działał tym skuteczniej, im rzadziej w zbiorze liczb naturalnych pojawiają się liczby pseudopierwsze i liczby Carmichaela.

Liczb Carmichaela mniejszych niż milion jest jedynie $43$, a mniejszych niż bilion ($10^{12}$) jedynie $8238$.

Innymi kategoriami liczb pseudopierwszych są np. liczby **silnie pseudopierwsze**, dla których nie ma analogów liczb Carmichaela. Odpowiada im np. algorytm testowania **Millera-Rabina**.


## Test Millera-Rabina
Podobnie jak test Fermata jest testem probabilistycznym, wymagającym stosowania liczb losowych.

Jeżeli algorytm stwierdzi, że testowana liczba $n > 1$ jest złożona, to na pewno jest to prawdą. Jeżeli natomiast nie uda się wykonać testu, który by temu zaprzeczał, algorytm zakończy się stwierdzeniem, że liczba $n$ jest prawdopodobnie pierwsza. Dokładność testu określamy za pomocą parametru $k$.

### Idea algorytmu
Zanim rozpoczniemy test, znajdujemy maksymalną potęgę dwójki $s$ dzielącą $n-1$ i przedstawiamy:

$$n-1 = 2^s \cdot d$$

Czyli znajdujemy swego rodzaju resztę z "dzielenia przez $2$ ile się da". Następnie, $k$ razy powtarzamy:

1. Wybierz $a$ losowo ze zbioru $\{ 1,2,\dots, n - 1\}$.
2. Jeśli $a^d \not\equiv 1 \ (\operatorname{mod}\, n)$  i  $a^{{2^r}d} \not\equiv\ -1 \ (\operatorname{mod}\, n)$ dla wszystkich $r$ ze zbioru $\mathbb Z_s=\{ 0,1,2,\dots, s - 1\}$, zwróć wynik ***złożona***.

Jeśli w żadnej iteracji nie udało się znaleźć świadka złożoności liczby $n$, to zwracamy wynik ***prawdopodobnie pierwsza***.

### Dokładność testu i wersje deterministyczne
Można pokazać, że dla dowolnej złożonej nieparzystej liczby naturalnej $n$ co najmniej $3/4$ możliwych wartości $a$ jest dobrymi świadkami złożoności tej liczby. Jeśli zatem przeprowadzamy $k$ losowych prób, prawdopodobieństwo, że określimy liczbę złożoną jako pierwszą wynosi co najwyżej $(1/4)^{k}$.

Istnieją deterministyczne wersje tego testu, jednak w ogólności są one znacznie wolniejsze i głównie dlatego nie mają zastosowania praktycznego. Dla małych $n$ udowodniono, że można test przeprowadzić znacznie szybciej:

* Jeśli $n < 4,759,123,141$, wystarczy sprawdzić $a$ = $2$, $7$, i $61$.
* Jeśli $n < 341,550,071,728,321$, wystarczy sprawdzić $a$ = $2$, $3$, $5$, $7$, $11$, $13$, i $17$.

Daje to bardzo szybki **deterministyczny test pierwszości** dla liczb z tego zakresu, bez żadnych dodatkowych założeń. Udowodniono jednak, że żaden skończony zbiór $a$ nie wystarcza do testowania wszystkich liczb złożonych.
