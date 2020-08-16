Problem sumowania zbiorów rozłącznych, rozwiązanie drzewowe z kompresją
ścieżek, szkic analizy i uzasadnienie wystąpienia logarytmu iterowanego.

---

# Sumowanie zbiorów rozłącznych
## Wprowadzenie
Dany jest pewien zbiór elementów *(uniwersum)* $U$ - o mocy $n$.

Problemem jest zaprojektowanie struktury danych do efektywnej realizacji operacji na rodzinie parami rozłącznych podzbiorów zbioru $U$.

Chcemy efektywnie wykonać następujące operacje:
* $MakeSet(x)$ - utwórz jednoelementowy zbiór $\{ x \}$.
* $Union(S_i, S_j)$ - złącz *(suma mnogościowa)* zbiory $S_i$ i $S_j$ - są one usuwane z rodziny zbiorów, a w ich miejsce wstawiana jest ich suma.
* $Find(x)$ - zwróć zbiór, którego elementem jest $x$.

## Implementacja drzewowa z kompresją ścieżek
* Każdy element jest węzłem drzewa.
* Każdy zbiór z rodziny jest drzewem (drzewa są parami rozłączne).
* Drzewo reprezentujemy przez wskaźniki do ojca $parent$, nie pamiętamy wskaźników na dzieci.
*  Węzeł $x$ zawiera pole $rank$ o wartości równej wysokości poddrzewa o korzeniu $x$ (*ranga* poddrzewa o korzeniu $x$) .
* W czasie wykonywania operacji $Find(x)$ dokonujemy kompresji ścieżki - wszystkie węzły na ścieżce od $x$ do korzenia stają się dziećmi korzenia (węzeł $x$) też.
* Operacja $Union(x, y)$ powoduje, że drzewo o mniejszej randze staje się poddrzewem większego (gdy rangi obu drzew są równe, sztucznie podnosimy o 1 rangę jednego z drzew.

**Uwaga.** Pole `rank` w węźle nie ma znaczenia dla działania algorytmu. Pierwsza z brzegu operacja 'Find' może zepsuć tę wartość i nigdy później nikt jej nie naprawi. Wartości `rank` są istotne jedynie z punktu widzenia analizy złożoności. 

````
MakeSet(x)
  rank[x] = 0
  parent[x] = x;

Find(x)
  if parent[x] != x
    parent[x] = Find(parent[x]) // kompresja ścieżki
  return parent[x]

Union(x, y) // x, y - korzenie drzew
  if rank[x] > rank[y]
    parent[y] = x
  else
    parent[x] = y

  if rank[x] == rank[y] 
    rank[y] += 1
````

### Fakt 
Koszt wykonania ciągu operacji, w którym jest $m \geq n$ operacji $Find$ oraz nie więcej niż $n-1$ operacji $Union$ na $n$-elementowym zbiorze, wynosi $O((m+n) lg^*\, n)$, gdzie $lg^*\, n = min \{k:\, lg^{(k)}\, n \leq 1 \}$.

$(lg^{(k)}\, n$ oznacza logarytm iterowany $k$ razy$)$. Jest to funkcja odwrotna, w pewnym sensie, do
uproszczonej 1-argumentowej funkcji Ackermanna. W praktycznych zastosowaniach wartość $\log^*(n)$ nie przekracza $5$. Teoretycznie ta funkcja rośnie w nieskończoność.

## Dowód złożoności
**Lemat**: Na ścieżce do korzenia w funkcji *find* rangi wierzchołków zwiększają się.

**Dowód**: Pokażemy, że ten warunek jest zachowany podczas *find* i *union*. Na początku każdy wierzchołek jest korzeniem, więc warunek jest spełniony trywialnie. Ranga może być zmieniona wyłącznie podczas operacji *union* (łączenie według rangi). W tym przypadku drzewo o mniejszej randze zostanie dołączone do tego o większej. Podczas *find* wszystkie węzły odwiedzane wzdłuż ścieżki zostaną dołączone do korzenia, który ma większą rangę niż jego dzieci. Zatem ta operacja też nie zmienia warunku.

**Lemat**: Poddrzewo wierzchoła $u$ o randze $r$ ma co najmniej $2^r$ wierzchołków
.
**Dowód**: Na początku, kiedy każdy wierzchołek jest swoim drzewem, warunek spełniony jest trywialnie. Założmy, że $u$ jest wierzchołkiem o randzie $r$ i ma co najwyżej $2^r$ wierzchołków w swoim poddrzewie. Jeżeli dwa drzewa się łączą i tworzą drzewo o radze $r+1$, nowe drzewo ma co najwyżej $2^r+2^r=2^{r+1}$.

**Lemat**: Maksymalna liczba wierzchołków o randze $r$ to co najwyżej $n/2^r$.

**Dowód**: Wiemy, że wierzchołek $u$, który jest korzeniem drzewa i ma rangę $r$ ma w swoim drzewie co najmniej $2^r$. Otrzymamy największą liczbę wierzchołków o randze $r$, gdy każdy z wierzchołków o randze $r$ będzie korzeniem poddrzewa rozmiaru $2^r$. Wówczas liczba wierzchołków z rangą wynosi $n/2^r$.

**Dowód złożoności**: 
Niech $m$ będzie liczbą operacji a $n$ liczbą elementów, na których są aplikowane.

Zdefiniujmy kosz. Wierzchołki o tej samej randze będą w tym samym koszu. W pierwszym te o randze $0$, w drugim $1$ w trzeciem $2$ i $3$. Jeżeli $B$-ty kosz zawiera wierzchołki z przedziału $[r,2^r-1]=[r,R-1]$, to $(B+1)$-szy zawiera rangi z przedziału $[R,2^R-1]$.

Możemy zauważyć, że
* Ilość koszy to co najwyżej $log^*n$ (bo $(B+1)$-szy zawiera $[2^B,2^{2^B}-1]$).
* Maksymalna liczba elementów w koszu $[B,2^B-1]$ to $2n/2^B$ ($n/2^B+n/2^{B+1}+...+n/2^{2^B-1}\leq 2n/2^B$).

Niech $F$ reprezentuję listę operacji *find* oraz
$$T_1=\sum_F (\text{linki z korzeniem})$$
$$T_2 = \sum_F (\text{liczba linków na trawersowanych, gdzie kosze są różne})$$
$$T_3 = \sum_F (\text{liczba linków tranwersowanych, gdzie kosze są takie same})$$

Wówczas koszt całkowity to $T_1+T_2+T_3$. Ponieważ każdy **find** trawersuje jeden link związany z korzeniem, to $T_1=O(m)$.

Z ograniczenia z lematów mamy też $T_2=O(mlog^*n)$ (bo rząd się zwiększa).

Załóżmy, że trawersujemy krawędź $(u,v)$, które mają rangi z przedziału $[B,2^B-1]$ oraz $v$ nie jest korzeniem (w momecie tranwersowania, inaczej by się liczyło to do $T_1$). Ustalmy $u$ i rozważmy ścieżkę $v_1,v_2,...,v_k$, które pełnią role $v$ w różnych operacjach *find*. 

Ze względu na kompresję ścieżek i nie uwzględnianie krawędzi do korzenia, ten ciąg zawiera różne wierzchołki a z pierwszego lematu wiemy, że rangi tych wierzchołków są silnie rosnące. Z faktu, że oba wierzchołki są w tym samym koszu wnioskujemy, że długość $k$ ścieżki (liczba razy, w których $u$ jest połączone z innym korzeniem w tym samym koszu) jest równa liczbie rang w jednym koszu, czyli $2^B-1-B<2^B$ Zatem
$$T_3\leq \sum_{[B,2^B-1]}\sum_u 2^B$$.
Z obserwacji wnioskujemy, że $$T_3\leq \sum_B 2^B\frac{2n}{2^B}\leq 2nlog^*n.$$
Zatem $T=T_1+T_2+T_3=O(mlog^*n)$.
