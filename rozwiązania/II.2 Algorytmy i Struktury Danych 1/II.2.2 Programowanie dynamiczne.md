Programowanie dynamiczne jako metoda konstrukcji algorytmu, przykład zastosowania, technika spamiętywania.

---

# Programowanie Dynamiczne
* Metoda najczęściej stosowana dla problemów optymalizacyjnych - celem jest znalezienie rozwiązania maksymalizującego lub minimalizującego pewną wartość.
* Stosowana gdy podzadania posiadają wspólne (pod)podzadania - metoda *dziel i zwyciężaj* rozwiązywałaby te same podzadania wielokrotnie.
* Aby uniknąć wielkorotnego rozwiązywania tych samych podzadań, stosujemy technikę spamiętywania.

**Uwaga**. Aby dany problem dało się rozwiązać metodą programowania dynamicznego, musi zachodzić **własność optymalnej podstruktury** - zawarte w optymalnym rozwiązaniu problemu rozwiązania podproblemów też są optymalne. Czyli jeśli znajdziemy optymane rozwiązania dla podzadań, da się z nich złożyć rozwiązanie optymalne dla całego zadania.

Przed skonstruowaniem algorytmu dynamicznego dla problemu należy wykazać, że taka własność zachodzi. Często jest to dowód nie wprost.

## Przykład
Znajdujemy się na planszy rozmiaru $n \times m$.  Na niektórych polach planszy są diamenty.  Wyruszamy z pola $(n, m)$ i chcemy dojść na pole $(1, 1)$ zbierając po drodze jak najwięcej diamentów.  Możemy się poruszać tylko o wektor $[-1, 0]$ (w lewo) oraz $[0, -1]$ (do góry).

### Własność optymalnej podstruktury
Jeśli optymalne rozwiązanie dla panszy $n \times m$ polega na pójściu w lewo w pierwszym kroku, to rozwiązanie dla mapy rozmiaru $(n-1) \times m$ też jest optymalne. Załózmy nie wprost, że rozwiązanie podzadanie nie jest optymalne. Weźmy zatem rozwiązanie optymalne - łącząc je z pierwszym krokiem dla planszy $n \times m$ dostajemy lepsze rozwiązanie dla całego problemu - sprzeczność, bo rozwiązanie całości było optymalne. Analogicznie dla planszy $n \times (m-1)$, jeśli w pierwszym kroku idziemy w górę.

### Rozwiązanie naiwne
Rozważamy wszystkie mniejsze plansze rozmiaru $i \times j$ zaczynające się w polu $(1, 1)$.  Możemy dla każdej takiej planszy znaleźć (rekurencyjnie) maksymalną liczbę diamentów, którą zbierzemy idąc z pola $(i, j)$. 

Zauważmy jednak, że to rozwiązanie (metodą dziel i zwyciężaj) wielokrotnie wykonuje te same podzadania. Plansza $(i \times j)$ jest badana rekurencyjnie jako podzadanie dla planszy $(i+1) \times j$ oraz $i \times (j+1)$.

### Metoda spamiętywania
Polega na zapamiętywaniu wyników już obliczonych podzadań. Zanim wejdziemy rekurencyjnie w podzadanie, sprawdzamy, czy nie mamy już zapamiętanego jego wyniku. Jeśli tak to go odczytujemy, jeśli nie - wchodzimy rekurencyjnie i otrzymany wynik zapamiętujemy.

### Pseudokod dla przykładu
````
cache[1...n][1...m] // tablica do spamiętywania wyników podzadań
// początkowo cała wypełniona wartością -INFINITY 

diax (map[1...i][1...j] as array) // map[i][j] == 1 jeśli w plu (i, j) jest diament, 0 jeśli nie ma
  result = 0
  if i > 1
    if cache[i-1][j] != -INFINITY
      result = cache[i-1][j]
    else
      cache[i-1][j] = diax(map[1...i-1][1...j])
      result = cache[i-1][j]

  if j > 1
    if cache[i][j-1] != -INFINITY
      result = max(result, cache[i][j-1]
    else
      cache[i][j-1] = diax(map[1...i][1...j-1]
      result = max(result, cache[i][j-1])

  result = result + map[i][j]
  return result
````
Ten prosty trik pozwala zbić złożoność z wykładniczej do $O(nm)$.

**Uwaga**. Powyższe rozwiązanie jest metodą *top-down* - zaczynamy od problemu większego i rekurencyjnie rozwiązujemy mniejsze. Można także napisać rozwiązanie *bottom-up*, czyli najpierw rozwiązujemy problemy mniejsze a potem składamy z nich większe.

## Przykłady innych problemów rozwiązywalnych dynamicznie
* Problem optymalnego mnożenia ciągu macierzy - chcemy zminimalizować łączną liczbę operacji mnożenia.
* Znajdowanie najdłuższego wspólnego podciągu dla dwóch łańcuchów znakowych (LCS).
* Problem plecakowy. Algorytm dynamiczny nie daje jednak czasu wielomianowego, ale **pseudowielomianowy** - $O(nW)$, gdzie $n$ to liczba elementów, które możemy zapakować, a $W$ to łączna pojemność plecaka.