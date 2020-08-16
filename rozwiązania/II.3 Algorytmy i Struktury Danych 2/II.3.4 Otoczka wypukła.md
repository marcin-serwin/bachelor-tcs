Algorytmy Jarvisa i Grahama znajdowania wypukłej otoczki.

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
1.  Znajdź punkt $p0$ o najmniejszej rzędnej (jeśli jest więcej niż jeden, to spośród nich ten o największej odciętej).
Fakt: $p0$ należy do otoczki wypukłej. Wstaw $p0$ do $L$.
2. Spośród wszystkich punktów zbioru $S$ wybierz taki punkt $p1$, że kąt $\alpha (p0,p1)$ jest najmniejszy z możliwych. Jeśli jest więcej takich punktów to najbardziej odległy od $p0$.
3. W kolejnych krokach wybieraj $p(i+1)$ taki, że kąt
$\alpha (pi,p(i+1))$ jest najmniejszy, ale większy niż kąt $\alpha (p(i-1),pi)$
(jeśli jest więcej takich punktów to najbardziej odległy
od $pi$).
4. Zakończ gdy kolejny wybrany punkt to $p0$.


Algorytm Jarvisa po każdym dodaniu kolejnego punktu do otoczki wypukłej wyszukuje kolejny wierzchołek spośród $n-1$ punktów (w wersji bez optymalizacji).
Każde sprawdzenie punktu zajmuje czas stały, czyli algorytm wykonuje $h$ przeszukiwań, każde zajmujące czas $O(n)$, gdzie $h$ jest liczbą wierzchołków otoczki $\mathit{CH}(Q)$.
Zatem czas działania całego algorytmu Jarvisa wynosi $O(nh)$.
Jeśli $h$ wynosi $o(\lg n)$, algorytm Jarvisa jest asymptotycznie szybszy od algorytmu Grahama.
