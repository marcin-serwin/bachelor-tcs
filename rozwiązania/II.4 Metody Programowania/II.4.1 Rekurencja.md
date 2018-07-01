Rekurencja i jej realizacja za pomocą stosu.

---

# Rekurencja
Metoda rozwiązywania problemów, w której rozwiązanie problemu polega na rozwiązaniach mniejszych instancji tego samego problemu.
## Reguły konstrukcji procedur rekurencyjnych:

* Musi istnieć przypadek graniczny *(baza rekurencji)* rozwiązywalny bez rekurencji.
* Rekurencyjne wywołania muszą dążyć do przypadku granicznego.
* Poprawności procedury rekurencyjnej dowodzimy zwykle przez indukcję - zakładamy poprawność wywołania na mniejszych argumentach.
* Należy unikać ponownych wywołań rekurencyjnych wykonujących te same obliczenia.

## Przykłady problemów rozwiązywalnych rekurencyjnie
* Rekurencyjne obliczanie wysokości drzewa binarnego.
* Algorytm Euklidesa.
* Binsearch.
* Mergesort.
* Quicksort.
* Przeglądanie drzew.

**Uwaga**: Jako przykład złego użycia rekurencji można podać obliczanie $n$-tego wyrazu ciągu Fibonacciego. Rozwiązanie to wykonuje bardzo wiele wywołań rekurencyjnych, które powielają wykonaną już pracę.

### Pseudokod rekurencyjnej procedury obliczania wysokości drzewa binarnego
````
getSubtreeHeight(node)
  if node is null
    return -1
  else
    leftHeight = subtreeHeight(left child of node)
    rightHeight = subtreeHeight(right child of node)
    return max(leftHeight, rightHeight) + 1
````

## Realizacja rekurencji w programowaniu
* Wywołanie funkcji oznacza dla komputera wykonanie przejścia w inne miejsce kodu. Dla funkcji rekurencyjnej jest to przejście do początku kodu tejże funkcji.
* Zanim komputer je wykona, musi zapamiętać między innymi adres powrotu, wartości rejestrów oraz zmiennych. Wykorzystuje do tego celu stos, w którym przechowywane są informacje o wszystkich aktualnie wykonywanych funkcjach zgodnie z kolejnością ich zagnieżdżenia, przy czym każde wywołanie funkcji zajmuje pojedynczą ramkę stosu.
* Każdy program rezerwuje na potrzeby stosu ściśle określoną ilość pamięci, co narzuca ograniczenie na maksymalną ilość zagnieżdżonych wywołań funkcji (maksymalną głębokość rekurencji).
* Przekroczenie maksymalnej liczby zagnieżdżonych wywołań skutkuje błędem przepełnienia stosu *(stack overflow)*.

## Realizacja rekurencji za pomocą stosu
Opis i przykład algorytmu w [Sortowanie](II.4.4 Szybkie algorytmy sortowania.md).

## Rekurencja ogonowa
Jeśli wywołanie rekurencyjne jest ostatnią wykonywaną instrukcją procedury, nie ma potrzeby pamiętania kontekstu na stosie, bo nie jest konieczny powrót do miejsca wywołania, skoro procedura jest już zakończona. 
Niektóre kompilatory stosują tę optymalizację, np. automatycznie zamieniając ten rodzaj rekurencji na iterację.
