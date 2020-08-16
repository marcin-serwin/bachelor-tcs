Tablice sufiksowe, tworzenie za pomocą algorytmu KMR, definicje funkcji LCP
i LCP2, zastosowanie LCP2 do wyszukiwania łańcucha w tekście.

---

# Tablice sufiksowef

## Definicja
Niech $T = c_1 c_2 \ldots c_n$ *(tekst)*. Oznaczmy przez $sufiks_i = c_i c_{i+1} \ldots c_n$ sufiks tekstu $T$ zaczynający się na pozycji $i$-tej. Niech $SA[k]$ będzie pozycją, od której zaczyna się $k$-ty leksykograficznie sufiks $T$. Sufiks zaczynający się na pozycji $n+1$-szej nie jest brany pod uwagę. Ciąg sufiksów posortowany leksykograficznie wygląda następująco: $sufiksSA[1]<sufiksSA[2]<sufiksSA[3]<…<sufiksSA[n]$. Tablicę $SA$ nazywamy **tablicą sufiksową**.

## Konstrukcja tablicy sufiksowej

### Wprowadzenie
Wynikiem działania algorytmu *KMR* jest tablica tablic, której sumaryczna długość to $O(|T|log|T|)$. Jest ona stworzona z $log|T|$ mniejszych tablic o długości $|T|$ - $k$-ta tablica *(numerujemy od zera)* w $i$-tej komórce zawiera pozycję podsłowa o długości $2^{k}$ zaczynającego się na $i$-tej pozycji w porządku leksykograficznym wśród unikalnych podsłów $T$ o długości $2^{k}$. Rozważane podsłowa mogą być w rzeczywistości krótsze, jeśli są sufiksem słowa. Mając tę tablicę, nazwijmy ją $DBF$ *(dictionary of basic factors)*, ostatnia z tablic w $DBF$ jest szukaną tablicą sufiksową

## Algorytm Karpa-Millera-Rosenberga
### Pseudokod
```
KMR(T as array):
  n = first power of 2 >= |T|
  T = T + (2n-|T|) * '#' // '#' < all letters, |T| now is 2n.
  M = log n + 1
  DBF = array of arrays
  DBF[-1] = [(T[0], T[0], 0), (T[1], T[1], 1)..., (T[n], T[n], n)]

  for k = 0 to M:
    len = k power of 2
    temp = []
    for i = 0 to n-1:
      append to temp (DBF[k-1][i], DBF[k-1][i+len/2], i)
    sort temp

    distinct = 0
    for each triple in temp as value1, value2, index:
      DBF[k][index] = distinct

      if (value1, value2) = (value1, value2) of previous element:
        distinct = distinct + 1

  return DBF
```
### Udogodnienia zastosowane w algorytmie
Oczywiście komentarza wymagają dwie pierwsze linie pseudokodu - chcemy zmienić słowo $T$ w $T\#\ldots\#$, tak aby, długość słowa była teraz równa pierwszej potęgi $2$ większej lub równej $|T|$ pomnożonej przez $2$. To zapewni nam wygodę - żadne z rozważanych przez nas podsłów nie wyjdzie teraz za długość $T$. Dodatkowo zakładamy, że $\#$ jest znakiem leksykograficznie mniejszym niż wszystkie znaki z oryginalnego $T$ - to nam zapewni, że sufiksy będące prefiksami innych sufiksów pojawią się w porządku przed nimi.

### Szkic dowodu poprawności
Algorytm *KMR* jest przykładem algorytmu dynamicznego - każdy kolejny porządek jest tworzony na podstawie poprzedniego. Zauważmy, że $T[i \ldots j] = T[i\ldots \frac{i+j}{2}] + T[\frac{i+j}{2} \ldots j]$. Możemy skorzystać z tej obserwacji i, w celach sortowania, reprezentować string jako parę liczb. Dlatego też wprowadzamy roboczą tablicę $temp$, która dla $k$-tej długości podłów będzie składała się z trójek liczb - $temp[i] = (DBF[k-1][i], DBF[k-1][i+2^k], i)$. Pierwsza wartość to pozycja podsłowa $T[i \ldots i+2^{k-1}]$ w porządku leksykograficznym wśród unikalnych podłów $T$ o długości $2^{k}$. Druga wartość jest analogiczna do pierwszej, ale dla $T[i+2^{k-1} \ldots i+2^{k}]$. Ostatnia wartość nie ma wpływu na sortowanie - przechowuje jedynie informacje o indeksie pod którym zaczyna się to podsłowo. Sortowanie takich trójek będzie równoważne z tym, co chcemy osiągnąć ponieważ, jeśli podsłowo $w_1$ jest w porządku leksykograficznym mniejsze od $w_2$ to oznacza, że albo pierwsza połowa $w_1$ jest mniejsza od pierwszej połowy $w_2$ lub, że pierwsze połowy tych słów są identyczne, ale druga jest mniejsza. Mając posortowaną tablicę $temp$ mamy więc posortowane leksykograficznie podsłowa o właśnie rozważanej długości. Jedyne co pozostaje zrobić to wpisać odpowiednią pozycję pod zachowany w trzeciej wartości indeks w $DBF[k]$. Poziom $DBF[-1]$ został ustalony dla łatwości implementacji - ideologicznie w pierwszym kroku sortujemy podsłowa długości $1$, nie ma więc potrzeby przedstawionej tu reprezentacji - wystarczy posortować litery.

### Szkic analizy złożoności
Zewnętrzna pętla *for* wykona się oczywiście $O(logn)$ razy. Obliczanie długości aktualnie rozważanych podsłów umiemy zrealizować w czasie stałym - mnożąc poprzednią wartość przez $2$. Tworzenie tablicy $temp$ trwa $O(n)$. Posortowanie tablicy $temp$ zajmuje nam $O(nlogn)$. W końcu wypełnienie tablicy $DBF$ odbywa się w czasie $O(n)$. Zbierając te wszystkie fakty razem dostaniemy złożoność $O(nlog^2n) = O(|T|log^2|T|)$ - najbardziej kosztowna operacja to sortowanie, które zdarza się $O(log n)$ razy. Złożoność można zbić do $O(|T|log|T|)$ wykorzystując sortowanie pozycyjnego względem najpierw drugiego, a potem pierwszego elementu.

# SUF
* $y=x\#^{n-1}$, $y$ jest konkatenacją $x$ i $n-1$ znaków $\#$, $|y|=2n-1$ , znak $\#$ mniejszy niż każdy znak alfabetu.
* Oblicz $KMR_n[1..n]$ dla słowa $y$.
* "Odwróć tablicę KMR": $SUF[i]=j$ wtw. $KMR_n[j]=i$

Czas: $O(nlgn)$
Pamięć: $O(n)$, gdyż podczas obliczania $KMR_{2r}$ potrzebujemy tylko $KMR_r$, $r=2,4,8,...$.

# LCP
$LCP[i]=$długość najdłuższego wspólnego prefiksu słów $SUF[i]$ oraz $SUF[i+1]$. 

# LCP2
$LCP2[i,j]$ = długość najdłuższego wspólnego prefiksu wszystkich sufiksów od $i$-tego w kolejności
leksykograficznej do do $j$-tego włącznie, czyli najdłuższy wspólny prefiks słów $SUF[i], SUF[i+1], ... , SUF[j]$.

Funkcję $LPC2$ wykorzystujemy do efektywnego wyszukiwania połówkowego słów w tablicy sufiksowej.

Tablicujemy $LCP2[i,j]$ tylko dla $i<=j$ występujących jako końce przedziałów w wyszukiwaniu połówkowym. Załóżmy, że są to pary $(i,j)$, $1<=i<j<=n$ o końcach w potęgach dwójki i długościach równych potęgom dwójki, czyli postaci $i=(k-1)2^q+1, j=k2^q$, gdzie $q=1,...,lg n$, $k=1,...,n/2^q$, $n$ jest potęgą $2$.

Takich par jest $O(n)$, i tworzą drzewo binarne
* liście postaci $(i-1,i)$, dla $i+1$ nieparzystych
* poziom wyżej postaci $(i-3,i)$ dla $i$ będących wielokrotnościami $4$, itd.,
* korzeń postaci $(1,n)$.

Obliczanie rekurencyjne ze wzoru:
$$LCP2[v=(i,i+1)] = LCP(i)$$
$$LCP2[v=(i,j)] = min\{LCP2[v.left], LCP2[v.right], LCP[(j+i-1)/2]\}$$

Czas O(n).

## Wyszukiwanie w tablicy sufiksowej
Dane: Słowo $x$, jego tablica sufiksowa $SUF[n]$ wraz z funkcją $LCP2$, oraz słowo $y$ długości $m<n$.

Znajdź wystąpienie $y$ w słowie $x$.

Wyszukiwanie połówkowe:

$L, R$ – końce aktualnego przedziału, $M$ – środek

Niezmiennik: 
$$l = lcp(SUF[L], y), r = lcp(SUF[R], y)$$
$$lcp(w,z) := \text{ najdłuższy wspólny prefiks słów } w, z$$
Początkowo $L=1, R=n$, wartości $l, r$ oblicz zwyczajnie.
Kolejny krok: porównanie $y$ z $SUF[M]$.
Załóżmy, że $l > r$. Pozostałe sytuacje $(l=r, l<r)$ podobnie.

### Przypadek $LCP2(L,M)>l$
$y$ pasuje do $SUF[M]$ aż do pozycji $l$

$(l+1)$-znak w $SUF[M]$ jest ten sam co w $SUF[L]$, czyli mniejszy niż w słowie $y$ zatem idziemy w prawo: 
* $L := M$
* $l, r$ - bez zmian
* $y$ nie badany dalej w tym momencie

### Przypadek 2: $k=LCP2[L,M] < l$
* $(k+1)$ - znak w słowie $y$ ten sam co w $SUF[L]$, czyli mniejszy niż w $SUF[M]$ zatem idź w lewo: 
* $R := M$
* $r := LCP2[L,M]$
* $l$ – bez zmian
* $y$ nie badany dalej w tym momencie

### Przypadek 3: $LCP2[L,M] = l$
w słowie $y$ oraz $SUF[M]$ $l$ początkowych znaków pokrywa się, porównuj ich znaki od $(l+1)$-go do pierwszego miejsca $k$ gdzie są różne.

Jeśli $y < SUF[M]$, to idź w lewo:
* $R := M$
* $r := k-1$, $l$ bez zmian

wpp. idź w prawo:
* $L := M$
* $l := k-1$, $r$ bez zmian.

## Złożoność
Złożoność całości wyszukiwania:
* liczba iteracji (wyszukiwania połówkowego): $lg n$
* liczba porównań znaków słowa $y$:
* dopasowujących: $m$ (każdy znak $y$ dopasowany raz)
* pozostałych: co najwyżej jeden w każdej iteracji,
zatem nie więcej niż $log n$

Razem: $O(log n + m)$.
