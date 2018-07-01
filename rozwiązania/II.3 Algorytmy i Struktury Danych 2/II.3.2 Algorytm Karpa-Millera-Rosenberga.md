Tablice sufiksowe, wykorzystanie algorytmu KMR, zastosowania.
---
# Tablice sufiksowe

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

## Zastosowania tablicy $DBF$
- Możemy porównać dowolne dwa podsłowa z $T$ o równej długości - analogicznie jak w algorytmie *KMR* możemy reprezentować te słowa jako dwie liczby. Znajdujemy największą potęgę $2$ nie większą od długości słów, oznaczmy tę liczbę jako $k$, i tworzymy parę z liczb odpowiadających za podsłowa o długości $k$ będące odpowiednio prefiksem i sufiksem tego słowa.
- Możemy również porównać dowolne dwa podsłowa z $T$ - wystarczy przyciąć dłuższe podsłowo do długości mniejszego i porównać tak jak w poprzednim zastosowaniu. Jeśli okażą się równe to oczywiście krótsze słowo było mniejsze, w przeciwnym wypadku dostaniemy odpowiedź wprost.

## Zastosowanie tablicy sufiksowej
- Tablica sufiksowa może zostać użyta do obliczenia najdłuższego wspólnego prefiksu pomiędzy dowolną parą sufiksów w czasie $O(log|T|)$ z preprocessingiem w czasie $O(|T|log|T|)$. Będziemy chcieli stworzyć tablicę $LCP$ taką, że $LCP[i]$ oznacza długość najdłuższego wspólnego prefiksu pomiędzy $i$-tym i $i+1$-wszym sufiksem w tablicy sufiksowej. Taką tablicę tworzymy po prostu porównując po kolei litery tych sufiksów. Mając taką tablicę łatwo zauważyć, że jeśli chcemy znaleźć najdłuższy wspólny prefiks sufiksów na pozycjach $i$ i $j$ to wystarczy wziąć $min(LCP[i], LCP[i+1] \ldots LCP[j-1])$. Aby efektywnie znajdować to minimum w czasie $O(log|T|)$ możemy przebudować $LCP$ na drzewo przedziałowe - stąd preprocessing w czasie  $O(|T|log|T|)$.

## Inne przydatne fakty
- Tablicę sufiksową można stworzyć z drzewa sufiksowego przeglądając je w porządku in-order. Można również stworzyć drzewo sufiksowe z tablicy sufiksowej.
- Używając algorytmu Kärkkäinena-Sandersa możemy skonstruować drzewo sufiksowe w $O(|T|)$.
