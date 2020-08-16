Programowanie dynamiczne jako metoda konstrukcji algorytmu, technika spamiętywania, przykład: najdłuższy wspólny podciąg lub optymalne drzewo BST.
---

# Programowanie Dynamiczne
* Metoda najczęściej stosowana dla problemów optymalizacyjnych - celem jest znalezienie rozwiązania maksymalizującego lub minimalizującego pewną wartość.
* Stosowana gdy podzadania posiadają wspólne (pod)podzadania - metoda *dziel i zwyciężaj* rozwiązywałaby te same podzadania wielokrotnie.
* Aby uniknąć wielkorotnego rozwiązywania tych samych podzadań, stosujemy technikę spamiętywania.

**Uwaga**. Aby dany problem dało się rozwiązać metodą programowania dynamicznego, musi zachodzić **własność optymalnej podstruktury** - zawarte w optymalnym rozwiązaniu problemu rozwiązania podproblemów też są optymalne. Czyli jeśli znajdziemy optymane rozwiązania dla podzadań, da się z nich złożyć rozwiązanie optymalne dla całego zadania.

Przed skonstruowaniem algorytmu dynamicznego dla problemu należy wykazać, że taka własność zachodzi. Często jest to dowód nie wprost.

### Metoda spamiętywania
Polega na zapamiętywaniu wyników już obliczonych podzadań. Zanim wejdziemy rekurencyjnie w podzadanie, sprawdzamy, czy nie mamy już zapamiętanego jego wyniku. Jeśli tak to go odczytujemy, jeśli nie - wchodzimy rekurencyjnie i otrzymany wynik zapamiętujemy.

**Uwaga**. Rozwiązanie *top-down* - zaczynamy od problemu większego i rekurencyjnie rozwiązujemy mniejsze. Rozwiązanie *bottom-up* - najpierw rozwiązujemy problemy mniejsze a potem składamy z nich większe.

## Przykłady problemów rozwiązywalnych dynamicznie
* Problem optymalnego mnożenia ciągu macierzy - chcemy zminimalizować łączną liczbę operacji mnożenia.
* Znajdowanie najdłuższego wspólnego podciągu dla dwóch łańcuchów znakowych (LCS).
* Problem plecakowy. Algorytm dynamiczny nie daje jednak czasu wielomianowego, ale **pseudowielomianowy** - $O(nW)$, gdzie $n$ to liczba elementów, które możemy zapakować, a $W$ to łączna pojemność plecaka.

## LCS
````
 for i := 0 to n do   // wypełnienie stanów początkowych
        C[i][0] := 0;
    for j := 0 to m do
        C[0][j] := 0;

    for i := 1 to n do
        for j := 1 to m do
            if A[i] = B[j] then
                C[i][j] := C[i-1][j-1] + 1  // znaleziono kolejny element NWP
            else
                C[i][j] := max(C[i-1][j], C[i][j-1]);
````
