Algorytmy znajdowania wypukłej otoczki.

---

# Otoczka wypukła

## Definicja

**Otoczka wypukła** (*convex hull*) $\mathit{CH}(Q)$ zbioru $n$ punktów $Q$ to najmniejszy wielokąt wypukły $P$, taki że każdy punkt ze zbioru $Q$ leży albo na brzegu $P$, albo w jego wnętrzu.

## Algorytm Grahama
W skrócie, algorytm Grahama startuje od dolnego lewego punktu, a następnie wkłada kolejne punkty posortowane kątowo na stos w taki sposób, żeby idąc po punktach ze stosu przeciwnie do ruchu wskazówek zegara zawsze skręcać w lewo. Jeżeli algorytm wykryje skręt w prawo, to zdejmuje wszystkie punkty, które tę zasadę łamią.

````c
GRAHAM(Q) // Q jest dowolnym kontenerem (array, set, list)
  p_0 := punkt w Q o minimalnej współrzędnej y lub,
        w przypadku remisu, pierwszym takim punktem z lewej
  (p_1, p_2, ..., p_m) := pozostałe punkty z Q posortowane kątowo
                          względem p0 w kierunku przeciwnym do ruchu
                          wskazówek zegara (jeżeli więcej niż jeden
                          punkt ma taką samą współrzędną kątową, usuń
                          wszystkie oprócz położonego najdalej od p_0)

  if m < 2
      return empty stack
  else
      S := empty stack
      S.push(p_0)
      S.push(p_1)
      S.push(p_2)
      for i = 3 to m:
        while kąt utworzony przez 2 punkty z góry stosu oraz p_i
                     nie stanowią skrętu w lewo
          S.pop()
        S.push(p_i)
      return S
````

Główna pętla algorytmu wykonuje się w amortyzowanym czasie liniowym (każdy punkt jest wrzucany na stos dokładnie raz, a część jest z niego usuwana), niestety na początku musimy posortować punkty i właśnie sortowanie decyduje o złożoności całego algorytmu.
Zatem sumaryczny czas działania wynosi $O(n \lg n)$.

## Algorytm Jarvisa
W algorytmie Jarvisa otoczka wypukła jest obliczana metodą znaną jako **owijanie** (pakowanie prezentu).
Zaczynamy od dolnego lewego punktu $p_0$ podobnie jak w algorytmie Grahama po czym dodajemy go do otoczki $\mathit{CH}$.
Następnie w pętli: bierzemy ostatnio dodany wierzchołek $p$ (na początku będzie to $p_0$) i iterujemy się po wszystkich punktach z $Q$ różnych od $p$, wybierając z nich ten, który ma najmniejszą współrzędną kątową względem $p$ (w przypadku remisów bierzemy najdalszy).
Wybrany punkt dodajemy do otoczki.

````c
JARVIS(Q) // Q jest dowolnym kontenerem (array, set, list)
  p_0 := punkt w Q o minimalnej współrzędnej y lub,
         w przypadku remisu, pierwszy taki punkt z lewej
  S := empty stack

  S.push(p_0)
  while true
      p := punkt z Q\{S.top()} o największej współrzędnej kątowej względem S.top()
      if p != p_0:
          S.push(p)
      else
          break

  return S
````

Algorytm Jarvisa po każdym dodaniu kolejnego punktu do otoczki wypukłej wyszukuje kolejny wierzchołek spośród $n-1$ punktów (w wersji bez optymalizacji).
Każde sprawdzenie punktu zajmuje czas stały, czyli algorytm wykonuje $h$ przeszukiwań, każde zajmujące czas $O(n)$, gdzie $h$ jest liczbą wierzchołków otoczki $\mathit{CH}(Q)$.
Zatem czas działania całego algorytmu Jarvisa wynosi $O(nh)$.
Jeśli $h$ wynosi $o(\lg n)$, algorytm Jarvisa jest asymptotycznie szybszy od algorytmu Grahama.

## Pozostałe metody

### Metoda przyrostowa
W metodzie przyrostowej punkty sortuje się od lewej do prawej, otrzymując ciąg $(p_1, ..., p_n)$.
W $i$-tej fazie otoczkę wypukłą $\mathit{CH}(\{p_1, ..., p_{i-1}\})$ zbioru $i-1$ pierwszech punktów z lewej strony modyfikuje się tak, by uwzględniała $i$-ty punkt z lewej, tworząc w ten sposób $\mathit{CH}(\{p_1, ..., p_i\})$.
Algorytm można zaimplementować w czasie $O(n \lg n)$.

### Metoda "dziel i zwyciężaj"
W metodzie "dziel i zwyciężaj" w czasie $\Theta(n)$ dzieli się zbiór $n$ punktów na 2 podzbiory:
jeden złożony z pierwszych $\lceil n/2 \rceil$ punktów z lewej, a drugi z pozostałych $\lfloor n/2 \rfloor$ punktów z prawej.
Otoczki podzbiorów oblicza się rekurencyjnie, a następnie łączy się je w czasie $O(n)$.
Czas działania: $O(n \lg n)$

### Metoda szukania z obcinaniem
Metoda szukania z obcinaniem jest podobna do liniowego algorytmu znajdowania mediany (algorytm "mediana median"). Znajdujemy górną część (“górny łańcuch”) otoczki wypukłej, wielokrotnie odrzucając stały procent elementów ze zbioru rozważanych punktów, dopóki nie zostanie w nim sam górny łańcuch otoczki. Następnie robimy to samo dla dolnego łańcucha. Ta metoda jest asymptotycznie najszybsza: jeśli otoczka wypukła składa się z $h$ wierzchołków, działa ona w czasie $O(n \lg h)$.
