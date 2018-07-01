Wyjaśnij pojęcie deadlock. Opisz metody wykrywania i zapobiegania powstawaniu deadlocku w kontekście współdzielonych zasobów.

---

# Deadlock
Sytuacja, w której każdy z procesów (wątków, coroutines itp.) z danego zbioru czeka na wydarzenie, którego sprawcą może być tylko inny proces z tego samego zbioru. W wyniku żaden z procesów nie może kontynuować pracy.

Duża część deadlocków związana jest z zasobami (wyłączne prawo dla procesu do pisania po danym pliku, zbiorze rekordów bazy, dostępu do urządzenia, prawo dostępu do zmiennej strzężonej przez mutex itp.). Zasoby dzieli się na dwa rodzaje:
  * **preemptable** (wywłaszczane) - mogą być odebrane danemu procesowi bez negatywnych skutków
  * **nonpreemptable** (niewywłaszczalne) - takie, które nie mogą być odebrane procesowi bez spowodowania jakiegoś błędu.

### Warunki konieczne na zaistnienie deadlocku związanego z zasobami:
  * mutual exclusion - każdy zasób może być przypisany do dokładnie jednego procesu lub dostępny do zarezerwowania
  * no preemption - niewywłaszczalność zasobów
  * circular wait - musi pojawić się cykl procesów, z których każdy czeka na zasób posiadany przez inny proces

# Sposoby zwalczania deadlocków

## Algorytm strusia (The Ostrich Algorithm)
Udawaj, że problemu nie ma.

## Wykrycie deadlocka i usunięcie (recovery)
Wykrycie polega na stworzeniu grafu procesów i przydziałów zasobów. Jeśli w grafie istnieje cykl, należy zabić któryś z procesów (być może potem go zrestartować). **UWAGA:** algorytm ten może mieć negatywne skutki w wyniku terminacji działającego procesu.

## Unikanie deadlocków - algorytm bankiera (Dijkstra)
W tym przypadku dany zasób może istnieć w liczbie większej niż $1$. Założenia algorytmu wymagają, że wiemy, ile danego zasobu konkretny proces będzie potrzebował. Poza tym zakładamy, iż każdy proces się zakończy i zwolni wszystkie posiadane zasoby.

W skrócie algorytm polega na kontroli, jakie zasoby są obecnie przydzielone do procesów, a jakie jeszcze są dostępne. W celu przydzielenia kolejnych zasobów szukany jest taki proces, o którym wiemy, że po przyznaniu dostępnych zasobów się zakończy. Jeśli taki nie istnieje, to oznacza to, że nie jesteśmy w stanie zapobiec deadlockowi w obecnej sytuacji. Opcjonalnie o algorytmie można przeczytać tutaj https://en.wikipedia.org/wiki/Banker%27s_algorithm

Niestety algorytm ten jest całkowicie niepraktyczny i nieimplementowalny.

# Zapobieganie deadlockom
Zapobieganie polega na sprawieniu, aby przynajmniej jeden ze zdefiniowanych wyżej warunków nie był spełniony.

### Mutual exclusion
Pomysł polega na zlecaniu zadań dla danego zasobu specjalnemu, oddelegowanemu procesowi. Przykładowo, proces drukarki nigdy nie będzie wymagał dostępu do pozostałych zasobów, więc w tym przypadku deadlock nie wystąpi. Problemem jest tzw. spooling. W skrócie polega na tym, że dany proces będzie czekał, aż cały bufor (spooling space) będzie wypełniony danymi, które następnie mają być przekazane do zasobu. Jeśli konkurencyjne procesy zaczną wypełniać bufor swoimi danymi, to może braknąć miejsca, w wyniku czego uzyskujemy deadlock. 
Zobacz [spooling](III.6.4 Spooling.md).

Innym sposobem na uniknięcie tego problemu jest zastosowanie tam gdzie to jest możliwe lock-free algorytmów. Są to algorytmy, które gwarantują współbieżny dostęp i bezpieczne operacje na zasobie w taki sposób, że wykonanie żadnego z procesów nigdy nie jest zablokowane przez inny proces i zagwarantowany jest sumaryczny progres. Wadą tego podejścia jest duże skomplikowanie tych algorytmów i niestety dalece nie wszystkie zasoby możemy w ten sposób obsługiwać.

Ciekawy artykuł na ten temat dla zainteresowanych:
http://preshing.com/20120612/an-introduction-to-lock-free-programming/

### Hold and wait
Sposobem na radzenie sobie z tym warunkiem jest zagwarantowanie jednego z dwóch warunków:
  * proces może zażądać zasobów tylko **przed** rozpoczęciem działania. Wtedy system może w inteligentny sposób zdecydować, jak przydzielać zasoby, mamy pewność, iż nic nieoczekiwanego w czasie wykonania się nie wydarzy.
  * proces może zażądać **zbioru zasobów**, ale musi jednocześnie **zwolnić** wszystkie pozostałe

Rozwiązanie to generuje jednak wiele problemów: trudno ocenić, jakie zasoby będą potrzebne przed rozpoczęciem działania, niektóre zasoby są niewywłaszczalne przed zakończeniem działania, dodatkowo taka polityka zarządzania zasobami jest bardzo niewydajna.

### No preemption
Niektóre zasoby mogą być wirtualizowane (np. drukarka poprzez spooling file i działający demon w tle), jednak nie wszystkie.

### Circular wait
Sposobem na radzenie sobie z tym warunkiem jest zagwarantowanie jednego z dwóch warunków:
  * proces może używać tylko **jednego** zasobu
  * zasoby są uporządkowane liniowo, proces może zażądać jedynie zasobu większego od obecnie posiadanych

Zapewnienie tych wymagań może być problematyczne. Po pierwsze jeden zasób dla procesu to za mało (np. drukowanie dużego pliku z dysku). Poza tym może być ciężko dobrać odpowiedni porządek zasobów, gospodarka nimi również mogłaby być niewydajna.

# Inne rodzaje deadlocków
Poza deadlockami związanymi z uzyskaniem zasobów występują też inne:
  * Two-phase locking - problem związany z bazami danych, kiedy najpierw wymagane jest zablokowanie zbioru rekordów, a następnie ich zaktualizowanie.
  * Communication deadlock - problem występujący w komunikacji, kiedy dwa procesy czekają równocześnie na wysłanie lub odebranie od siebie wiadomości (np. w synchronicznym MPI).
  * Livelock - problem związany z tzw. aktywnym czekaniem (busy waiting), kiedy procesy czekają na dane zasoby, ale ulegają zablokowaniu (np. spin lock).
  * Starvation - zagłodzenie procesu. Przykład, gdy dostęp do drukarki przyznawany jest procesom z najmniejszymi plikami, to te z większymi mogą bardzo długo nie doczekać się swojej kolejki.