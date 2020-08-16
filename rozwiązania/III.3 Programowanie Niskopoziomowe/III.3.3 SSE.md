Omów metody programowania z wykorzystaniem instrukcji wektorowych (SSE).

---

# SSE
SSE (*Streaming SIMD Extensions*) to dodatkowe rozkazy rozpoznawane przez mikroprocesory firmy Intel (i kompatybilne). Pozwalają **znacznie szybciej wykonywać obliczenia matematyczne**. Przekłada się to na zwiększenie efektywności gier komputerowych, programów graficznych, muzycznych, kodowania filmów...

# Wektory
SSE to dodatkowe operacje SIMD. SIMD to akronim od *Single Instruction, Multiple Data*. Instrukcja CPU jest SIMD wtedy, gdy ta sama operacja jest wykonana na różnych danych w tym samym czasie. SSE (z 1999 roku) dostarczyło zbiór instrukcji SIMD operujących na rejestrach 128-bitowych. W kolejnych wersjach dodane zostały również rozkazy dla 256- i 512-bitowych rejestrów. Skupmy się na tych pierwszych.

 * Do dyspozycji mamy 8 128-bitowych rejestrów - od `xmm0` do `xmm7` (dla 32-bit, natomiast dla 64-bit rejestrów jest 16).
 * Operacje mogą traktować dane w wektorze jako różne typy danych, przykładowo 32-bit `float`, 64-bit `double`, 32-bit `int`, itp.

## Przykład
Mamy zatem rejestr 128-bitowy. Niech to będzie np. wektor 4 liczb, każda po 32 bity. Operacje na tych czterech 32 bitach mogą być wykonywane jednocześnie. Zatem przykładowo, jeżeli celem jest napisanie programu dodającego dwie tablice `int`ów, można za pomocą SSE zoptymalizować ten proces wykonując każdorazowo 4 dodawania.

# Instrukcje wektorowe
Rozkazy SSE mogą wykonywać działania arytmetyczne na wektorach na dwa sposoby:

  * **packed** (równoległe) — wykonując równocześnie 4 niezależne działania na odpowiadających sobie elementach wektorów.

  * **scalar** (skalarne) — wykonując działanie tylko na pierwszych elementach wektorów.

## Packed
Mnożenie dwóch wektorów (rozkazem `MULPS xmm0, xmm1`):

```
+-------+-------+-------+-------+
|   x3  |   x2  |   x1  |   x0  | xmm0
+-------+-------+-------+-------+
    *       *       *       *
+-------+-------+-------+-------+
|   y3  |   y2  |   y1  |   y0  | xmm1
+-------+-------+-------+-------+
    =       =       =       =
+-------+-------+-------+-------+
| x3*y3 | x2*y2 | x1*y1 | x0*y0 | xmm0
+-------+-------+-------+-------+
```

## Scalar
Mnożenie pierwszych elementów wektorów (rozkazem `MULSS xmm0, xmm1`):

```
+-------+-------+-------+-------+
|   x3  |   x2  |   x1  |   x0  | xmm0
+-------+-------+-------+-------+
                            *
+-------+-------+-------+-------+
|   y3  |   y2  |   y1  |   y0  | xmm1
+-------+-------+-------+-------+
    =       =       =       =
+-------+-------+-------+-------+
|   x3  |   x2  |   x1  | x0*y0 | xmm0
+-------+-------+-------+-------+
```

## Mnemoniki rozkazów
Dla nazw instrukcji działających na liczbach nie wprowadzono żadnego prefiksu. Sufiks nazwy określa typ:

  * **PS** (packed single) – działanie na wektorach,
  * **SS** (scalar single) – działanie na skalarach.

Ponadto jeśli rozkazy działają na połówkach rejestrów XMM (tj. albo odnoszą się do bitów `0..63`, albo `64..127`), w mnemonikach rozkazu występuje litera – odpowiednio – **L** (low) albo **H** (high).

## Przykładowe operacje

### Działania arytmetyczne
  * dodawanie (`ADDPS`, `ADDSS`)
  * odejmowanie (`SUBPS`, `SUBSS`)
  * mnożenie (`MULPS`, `MULSS`)
  * dzielenie (`DIVPS`, `DIVSS`)

### Działania logiczne
  * suma (`ORPS`)
  * iloczyn (`ANDPS`)

### Porównania
Przykład testowania, czy liczby są różne (rozkaz `CMPNEQPS xmm0, xmm1`):

```
+---------+---------+---------+---------+
|   1.0   |  -5.3   |   16.5  |   17.2  | xmm0
+---------+---------+---------+---------+
     ≠         ≠         ≠         ≠
+---------+---------+---------+---------+
|   7.0   |  -5.3   |   16.5  |   17.3  | xmm1
+---------+---------+---------+---------+
     =         =         =         =
+---------+---------+---------+---------+
|111..1111|000..0000|000..0000|111..1111| xmm0
+---------+---------+---------+---------+
```

# Używanie SSE

SSE nadaje się idealnie do przyspieszania prostych sekwencyjnych obliczeń matematycznych które można trywialnie zrównoleglić. Przykład wyżej z dodawaniem dwóch wektorów jest jednym z najlepszych możliwych zastosowań.

Innym świetnym zastosowaniem instrukcji SSE jest na przykład szybkie kopiowanie pamięci. Jedną instrukcją kopiujemy zdecydowanie więcej bitów. Ograniczeniem w szybkości staje się tylko i wyłącznie przepustowość pamięci operacyjnej.

W sytuacji gdzie próbujemy zrównoleglić jakieś obliczenia które odbywają się w sposób warunkowy, na przykład chcemy dodać tylko kilka wybranych współrzędnych wektora, które spełniają jakieś warunki, używanie SSE staje się całkowicie niepraktyczne.

Dawniej za wszystkie obliczenia zmiennoprzecinkowe był odpowiedzialny specjalny koprocesor (FPU - Floating-Point Unit) w procesorze. Od czasu wprowadzenia instrukcji SSE, FPU jest coraz to mniej używany i kompilatory coraz rzadziej generują kod który go używa.
