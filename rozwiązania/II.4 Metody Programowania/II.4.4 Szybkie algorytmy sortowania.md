Szybkie algorytmy sortowania, ich złożoności, wady, zalety.

---

# Szybkie algorytmy sortowania
Dla algorytmów sortujących przez porównania elementów dolne ograniczenie złożoności wynosi $\Omega(n \log n)$. Za szybkie algorytmy sortowania uważamy zatem takie, które osiągają oczekiwany czas działania rzędu $\Theta(n \log n)$.

## Algorytmy
### 1. Mergesort
Kod algorytmu - patrz [II.4.3](II.4.3 Metoda dziel i zwyciężaj.md)

#### Zalety
* Złożoność w każdym przypadku $T(n) = \Theta(n\, \log n)$. 
* Mergesort jest stabilny (po posortowaniu zachowuje początkową kolejność jednakowych elementów).
* Drzewo wywołań rekurencyjnych będzie miało zawsze maksymalną głębokość rzędu $\log n$.

#### Wady
* Wymaga pamięci roboczej wielkości $\Theta(n)$ - gorzej w stosunku do, na przykład, sortowania przez kopcowanie, które potrzebuje tylko stałej pamięci roboczej.

### 2. Quicksort
**Uwaga.** Przedsatwiona poniżej wersja quicksorta jest wersją Lomuto z podziałem tablicy na 3 części - elementy mniejsze niż $pivot$, równe i większe. Ta wersja działa szczególnie dobrze, gdy w ciągu do posortowania jest dużo powtarzających się elementów, w szczególności dla ciągu stałego.

W poniższej implementacji używamy rekurencji. Jeżeli kompilator naszego języka wspiera ogonową rekurencję to pamięć potrzebna na stos zostanie ograniczona do $O(\log n)$ (w każdym wywołaniu wykonujemy najpierw podzadanie mniejsze niż $\frac{1}{2}n$).

Pivot wybierany jest losowo spośród wszystkich elementów do posortowania w danej iteracji. Pozwala to uodpornić się na złośliwe dane - nie jest na nie odporna np. wersja podstawowa Hoare'a, w której pivotem jest pierwszy element z lewej. Dla ciągu już posortowanego osiąga ona złożoność $\Theta(n^2)$.
#### Pseudokod
````
partition (A[1...n] as array)
  pivot = random element of A
  lower_size = 0
  even_size = 0
  greater_size = 0

  while lower_size + even_size + greater_size < n
    k = lower_size + even_size + greater_size + 1

    if A[k] < pivot
      swap A[lower_size + 1], A[k]
      lower_size = lower_size + 1
      even_size = even_size - 1
    if A[k] == pivot
      swap A[even_size + 1], A[k]
      even_size = even_size + 1
      greater_size = greater_size - 1
    if A[k] > pivot
      greater_size = greater_size + 1

  return A[1...lower_size], A[lower_size + even_size + 1...greater_size]


quicksort(A[1...n] as array)
  if |A| <= 1
    return

  L, R = partition(A)

  if |L| < |R|
    quicksort(L)
    quicksort(R)
  else
    quicksort(R)
    quicksort(L)
````

#### Zalety
* Złożoność oczekiwana $T(n) = \Theta(n\, \log n)$. 
* W praktyce często szybszy od innych algorytmów.
* Nie wymaga pamięci roboczej poza stosem rekurencji w wersji rekurencyjnej lub stosem explicite w wersji iteracyjnej - lepiej w stosunku do mergesorta, który wymaga $\Theta(n)$ dodatkowo.
* Odchylenie standardowe od średniej złożonosci jest bardzo małe, około $0.27n$ więc niewiele przypadków ma kiepską złożoność.
* Drzewo wywołań rekurencyjnych o głębokości $\leq \log n$ jeśli dbamy o to aby wykonywać zawsze najpierw podzadanie mniejszego rozmiaru - jeśli piszemy nie zwracając uwagi na wielkość stosu, jego wielkość może dojść nawet do $\Theta(n)$.

#### Wady
* Pesymistyczna złożoność $O(n^2)$ - mergesort i heapsort mają $\Theta(n \log n)$.

### 3. Heapsort
Kopce w pełni opisane zostały w [II.4.8 Kopce i kolejki priorytetowe](II.4.8 Kopce i kolejki priorytetowe.md)

#### Idea algorytmu
* Skonstruuj max-kopiec z elementów wejściowej tablicy (kopiec, który ma maksimum w korzeniu). **Uwaga.** Konstrukcja kopca realizowalna w $\Theta(n)$.
* Dopóki kopiec nie jest pusty, usuwaj korzeń z kopca. Następnie usunięty element wstaw na koniec wynikowej tablicy. Elementy w tej tablicy będą posortowane malejąco więc trzeba ją na koniec odwrócić.
* Można zmniejszyć zużycie pamięci do stałej pamięci roboczej, robiąc wszystko w oryginalnej tablicy - pierwszą część *(początkowo całą tablicę)* przeznaczamy na kopiec, pozostałą część *(na końcu algorytmu będzie to cała tablica)* przeznaczamy na przechowywanie wyniku. Kiedy zdejmujemy coś z kopca jego rozmiar się zmniejsza a wyjęty element wkładamy w powstałą "dziurę". W tym podejściu nie trzeba odwracać tablicy.

#### Zalety
* Złożoność w każdym przypadku $\Theta(n\, \log n)$.
* Nie wykorzystuje pamięci roboczej.
* Prosty w implementacji.
* Sortuje w miejscu (potrzebuje tylko stałej pamięci roboczej poza pamięcią na elementy sortowane).

#### Wady
* Stała przy $\Theta$ większa niż w quicksorcie więc różnica czasowa dla dużych danych jest odczuwalna.
* Niestabilny.

## Inne  metody sortowania
W poniższych rozwiązaniach musimy posiadać dodatkową wiedzę o danych do posortowania (żeby wiedzieć jak je podzielić na grupy). Może to być na przykład zakres wszystkich wartości lub alfabet przy ustalaniu porządku leksykograficznego.

### 1. Countsort
Sortowanie przez zliczanie. 

Dla każdego klucza liczy ile jest kluczy mniejszych od niego. Na podstawie tej wiedzy ustawia klucze w ciąg posortowany.

Bardzo przydatny np. do sortowania liczb całkowitych z pewnego zakresu $[0 \ldots k]$.

#### Zalety:
* Stabilny.
* Złożoność. Jeśli mamy $n$ kluczy i $m$ możliwych wartości to złożoność jest rzędu $\Theta(n+m)$.

#### Wady:
* Wymagana pamięć robocza wielkości $\Theta(n+m)$.
* Musi dać się wyróżnić pozycje (segmnenty) w kluczach i muszą one być ograniczonej wielkości. na przykład w łańcuchach znakowych da się podzielić na pojedyncze znaki i sortować od końca do początku.

Uwaga. Jeśli założymy, że liczba kluczy $n$ jest większa od liczby $m$ możliwych wartości kluczy, to można powiedzieć, że Countsort ma złożoność **liniową**. Jest to niezgodne z tym, co zostało powiedziane na początku - że nie da się sortować szybciej niż w $\Theta(n \log n)$. Ale zauważmy, że Countsort oprócz porównań kluczy wykorzystuje dodatkową wiedzę - klucze są liczbami całkowitymi, na dodatek z ustalonego zakresu. Powoduje to, że Countsort nie mieści się w klasycznym modelu sortwania przez porównania, więc ograniczenie czasu działania $\Omega(n \log n)$ go nie dotyczy.

### 2. Radixsort
Rozszerzenie algorytmu countsort. 

Przydatny dla dużych kluczy, tzn. kiedy ich zakres (liczba $m$) zbyt duży do zastosowania metody countsort, albo klucze złożone z kilku składowych - na przykład przy sortowaniu łańcuchów znakowych.

Radixsort polega na wykonaniu wielu iteracji algorytmu countsort kolejno od najmniej znaczących do najbardziej znaczących pozycji w kluczach - np. od ostatniego znaku w łańcuchach znakowych do pierwszego.

#### Zalety:
* Stabilny (ważna jest kolejność - od pozycji najmniej znaczących do najbardziej znaczących).
* Złożoność. Jeśli mamy $n$ kluczy o maksymalnej długości $d$ i $m$ możliwych wartości to złożoność jest rzędu $\Theta(d(n+m))$.

#### Wady:
* Wymagana pamięć robocza wielkości $\Theta(n+m)$.
* Klucze muszą być ograniczonej wielkości.
* Konieczna znajomość zakresu danych przed sortowaniem.

Uwaga. Jeśli założymy, że liczba kluczy $n$ jest większa od liczby $m$ możliwych wartości kluczy oraz liczba iteracji $d$ jest stała , to można powiedzieć, że Radixsort ma złożoność **liniową**. Jest to niezgodne z tym, co zostało powiedziane na początku - że nie da się sortować szybciej niż w $\Theta(n \log n)$ - wyjaśnienie analogiczne do tego przy algorytmie Countsort.

### 3. Sortowanie kubełkowe
#### Idea algorytmu
* Podziel zadany przedział liczb na k podprzedziałów (kubełków).
* Przypisz liczby z sortowanej tablicy do odpowiednich kubełków.
* Posortuj liczby w kubełkach (zwykłym algorytmem, np. sortowaniem przez wstawianiem albo mergesortem). Można także sortować rekurencyjnie sortowaniem kubełkowym, podając w parametrach rekurencji jak dzielimy na kubełki.
* Wypisz po kolei zawartość kubełków.

Uwaga. Jest to pewne uogólnienie algorytmu Countsort, w którym mieliśmy $m$ kubełków, gdzie $m$ to rozpiętość wartości kluczy.
