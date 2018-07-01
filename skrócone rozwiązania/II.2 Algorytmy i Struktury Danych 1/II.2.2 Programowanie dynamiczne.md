Programowanie dynamiczne jako metoda konstrukcji algorytmu, przykład zastosowania, technika spamiętywania.

---

# Programowanie Dynamiczne
Metoda najczęściej stosowana dla problemów optymalizacyjnych - gdy podzadania posiadają wspólne podpodzadania. Użycie napałowego *dziel i zwyciężaj* liczyłoby te same rzeczy wielokrotnie. Tutaj natomiast spamiętujemy sobie wyniki.

Aby jednak dało się dany problem rozwiazać metodą programowania dynamicznego, musi zachodzić **własność optymalnej podstruktury**. To znaczy, że rozwiązania podproblemów w optymalnym rozwiazaniu też są optymalne.

Czyli - jeśli znajdziemy optymalne rozwiązania dla podzadań, to złożymy z nich rozwiązanie optymalne dla całości. Należy oczywiście wykazać, że taka własnosć zachodzi (zwykle dowód nie wprost).

## Przykład
Mamy planszę $n \times m$. Na niektórych polach są diamenty. Wyruszamy z pola $(n, m)$ i chcemy dojść na pole $(1, 1)$. Poruszać się możemy tylko w górę oraz w lewo. Oczywiście, po drodze chcemy zebrać jak najwięcej diamentów.

### Własność optymalnej podstruktury
Jeśli w rozwiązaniu optymalnym dla planszy $n \times m$ w pierwszym kroku powinniśmy pójść w lewo, to rozwiązanie dla mapy rozmiaru $(n-1) \times m$ też jest optymalne.

Załóżmy nie wprost, że jednak rozwiązanie podzadania nie jest optymalne. Weźmy zatem rozwiązanie optymalne. W połączeniu z pierwszym krokiem dla $n \times m$ dostalibyśmy lepsze rozwiązanie dla całego problemu. Sprzeczność, bo rozwiązanie całości było optymalne.

Analogicznie dla $n \times (m-1)$, jeśli w pierwszym kroku idziemy w górę.

### Rozwiązanie naiwne
Rozważamy wszystkie mniejsze plansze rozmiaru $i \times j$ zaczynające się w polu $(1, 1)$.  Możemy dla każdej takiej planszy znaleźć (rekurencyjnie) maksymalną liczbę diamentów, którą zbierzemy idąc z pola $(i, j)$.

Zauważmy jednak, że to rozwiązanie (metodą *dziel i zwyciężaj*) wielokrotnie wykonuje te same podzadania. Plansza $(i \times j)$ jest badana rekurencyjnie jako podzadanie dla planszy $(i+1) \times j$ oraz $i \times (j+1)$.

Wszystkich ścieżek jest ${m+n \choose m}$.

### Metoda spamiętywania
Zanim odpalimy się rekurencyjnie to sprawdzamy czy może już tego nie policzyliśmy. Jeśli tak to odczytujemy wynik, jak nie - no to liczymy i wynik zapisujemy.

Ten prosty trik pozwala zbić złożoność z wykładniczej do $O(n \cdot m)$.

### Top-down vs bottom-up
Powyższe rozwiazanie jest *top-down* - problem większy rozbijamy na mniejsze i je rozwiązujemy. Można jeszcze jechać *bottom-up*, czyli rozwiązać najpierw mniejsze problemy, a potem je poskładać.

## Zastosowanie
* Optymalne mnożenie ciągu macierzy (zrobić jak najmniej operacji mnożenia).
* Najdłuższy wspólny podciąg dwóch stringów.
* Plecak. Algorytm dynamiczny nie daje jednak czasu wielomianowego, ale **pseudowielomianowy** - $O(nW)$, gdzie $n$ to liczba elementów, które możemy zapakować, a $W$ to łączna pojemność plecaka.
