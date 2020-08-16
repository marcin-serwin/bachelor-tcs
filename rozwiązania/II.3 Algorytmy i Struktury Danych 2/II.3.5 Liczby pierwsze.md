Liczby pierwsze, algorytm Millera-Rabina, liczba świadków (bez dowodu), złożoność.

---

# Testowanie pierwszości
Test pierwszości ma na celu stwierdzenie, czy dana liczba jest pierwsza.

## Testy probabilistyczne
Dla liczb pierwszych zawsze odpowiadają poprawnie, jednak może zdarzyć się sytuacja, gdy liczba złożona zostanie uznana za pierwszą. Dzieje się tak w sytuacji, gdy liczba złożona posiada pewne własności liczb pierwszych - wówczas o takiej liczbie mówimy, że jest **pseudopierwsza**.

### Test Fermata
Przykładowo, istotną kategorią liczb pseudopierwszych są liczby złożone spełniające warunki **Małego Twierdzenia Fermata**. Twierdzenie to mówi, że jeśli $p$ jest liczbą pierwszą, to dla dowolnej liczby $a$ względnie pierwszej z $p$ zachodzi:

$$a^{p-1} \equiv 1 \mod p$$

Jeżeli równanie to jest spełnione przez pewną liczbę złożoną, to nazywamy ją **pseudopierwszą przy podstawie $a$**.

Aby stwierdzić, czy $p$ jest pierwsza, można wybrać kilka losowych wartości $a$ i sprawdzić, czy ta równość jest dla nich spełniona. Jeśli dla którejkolwiek z nich nie jest, to na pewno $p$ jest liczbą złożoną. Jeśli wszystkie ją spełniają, $p$ jest prawdopodobnie liczbą pierwszą albo pseudopierwszą. Ten proces nazywamy **testem pierwszości Fermata**.

#### Liczby Carmichaela
Nie sposób nie wspomnieć tutaj o **liczbach Carmichaela**. Są to takie liczby, które są pseudopierwsze przy każdej podstawie względnie pierwszej z nimi

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

### Złożoność
$O(klog^3n)$, gdzie $n$ to testowana liczba a $k$ - liczba testów.

### Dokładność testu i wersje deterministyczne
Można pokazać, że dla dowolnej złożonej nieparzystej liczby naturalnej $n$ co najmniej $3/4$ możliwych wartości $a$ jest dobrymi świadkami złożoności tej liczby. Jeśli zatem przeprowadzamy $k$ losowych prób, prawdopodobieństwo, że określimy liczbę złożoną jako pierwszą wynosi co najwyżej $(1/4)^{k}$.
