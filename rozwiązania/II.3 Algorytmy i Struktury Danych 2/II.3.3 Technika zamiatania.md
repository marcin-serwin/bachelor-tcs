Technika zamiatania w geometrii obliczeniowej, zastosowanie do znajdowania
wszystkich przecięć odcinków.

---

# Idea zamiatania po płaszczyźnie

Podstawową ideą stojącą za zamiataniem jest potraktowanie punktów jako pewnych zdarzeń których czas jest reprezentowany przez położenie danego punktu względem pewnej osi (najczęsciej będzie to po prostu oś X). 

# Przecięcia odcinków (przykład)

## Problem

Rozważanym problemem jest odpowiedź na pytanie czy w zadanym zbiorze odcinków jakiekolwiek dwa się przecinają.
W celu zwiększenia czytelności założymy co nasŧepuje:

 * Żadne trzy odcinki nie przecinają się w jednym punkcie
 * Żaden odcinek nie jest równoległy do miotły (tzn. jego punkty nie mają tych zamy współrzędnych na osi X)

## Rozwiązanie

Początki jak i końce odcinków traktujemy jako zdarzenia. Sortujemy je po pierwszej współrzędnej. Przy każdym początku odcinka dodajemy go do posortowanego zbioru odcinków które aktualnie przecinają się z miotłą i sprawdzamy, czy odcinki które są ponad i pod nim się z nim przecinają. Przy każdym końcu odcinka wyrzucamy ten odcinek ze zbioru odcinków przecinających się z miotłą i sprawdzamy czy odcinki które były bezpośrednio nad nim oraz pod nim, w tym zbiorze, się przecinają. Oczywiście jeśli przy którymś sprawdzeniu przecinania odcinki będą się przecinać, to zwracamy $True$, jeżeli dotrwamy do końca bez żadnego przecięcia zwracamy $False$. Do implementacji tej metody potrzebujemy funkcji Insert, Delete, Below i Above, które, odpowiednio, dodają odcinek do porządku, usuwają odcinek, zwracają poprzedni i następny odcinek w danym porządku, a które możemy zaimplementować np. za pomocą drzewa AVL.

## Pseudokod

	int Any_Intersection (S – zbiór odcinków) :
		// zwraca True jeśli któreś odcinki się przecinają
		Q = zbiór końców odcinków;
		Sortuj Q rosnąco względem x ;

		for each p in Q // w kolejności rosnących x
			if p jest lewym końcem odcinka s then
				Insert(s) ;
				If Above(s) istnieje i przecina s then
					return True ;
				If Below(s) istnieje i przecina s then
					return True ;

			if p jest prawym końcem odcinka s then
				if Above(s) istnieje oraz Below(s) istnieje oraz przecinają się then
					return True ;
				Delete (s)

		return False ;
		end.
	

## Złożoność

Tworzenie zdarzeń jest w oczywisty sposób liniowe. Później potrzebujemy posortować wierzchołki, co daje czas $O(n \log n)$. Następnie przechodzimy pętlą po $O(n)$ wierzchołkach przy każdej wykonując stałą ilość operacji na zbiorze i stałą ilość porównań, co daje czas $O(\log n)$. W sumie otrzymujemy czas $O(n\log n)$.

## Wszystkie przecięcia
Dane: zbiór odcinków $S$ na płaszczyźnie

$?$ : Wypisz wszystkie przecięcia odcinków

Rozwiązanie – modyfikacja algorytmu:
* $Q$ jest kolejką priorytetową, początkowo zawiera końce odcinków
* wykrycie przecięcia odcinków (zawsze na prawo od miotły) powoduje zapisanie punktu przecięcia do kolejki $Q$
* obsługa zdarzenia "punkt przecięcia odcinków $s$, $t$" zawiera zmianę kolejności występowania odcinków $s$, $t$ w miotle na przeciwną (zamiana miejscami) oraz sprawdzenie czy nowe (dwie) pary odcinków sąsiednich w miotle generują przecięcia

Złożoność: $\theta ((n+p) log n)$, gdzie $p$ jest liczbą przecięć.

Pesymistyczna liczba przecięć wynosi $\theta (n^2)$, złożoność wtedy jest gorsza niż algorytmu naiwnego "każdy z każdym".

Pamięć:
* miotła: $\theta (n)$.
* kolejka: $\theta (n + p)$, pesymistycznie zatem jest kwadratowa.
