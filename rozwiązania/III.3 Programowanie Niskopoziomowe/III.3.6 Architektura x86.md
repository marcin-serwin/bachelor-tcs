Omów architekturę nowych procesorów rodziny x86 na podstawie stosowanych do nich określeń: deeply pipelined, speculative, out-of-order, superscalar, complex instruction set computer.

---

# Architektura x86

### x86

Rodzina architektur (modeli programowych) procesorów firmy Intel, należących do kategorii CISC (Complex instruction set computing). Nowe procesory z rodziny x86 to procesory 64 bitowe. Używa się nazwy x86_64 lub zamiennie amd64.

### Piplining

Po polsku przetwarzanie potokowe. Jest to technika budowy procesorów polegająca na podziale logiki procesora odpowiedzialnej za proces wykonywania programu (instrukcji procesora) na specjalizowane grupy w taki sposób, aby każda z grup wykonywała część pracy związanej z wykonaniem rozkazu. Grupy te są połączone sekwencyjnie – pipe – i wykonują pracę równocześnie, pobierając dane od poprzedniego elementu w sekwencji. W każdej z tych grup rozkaz jest na innym stadium wykonania. Podstawowe fazy wykonywania instrukcji to: fetch(ściągnięcie z pamięci), decode(rozpoznanie typu instrukcji i argumentów), prepare(przygotowanie argumentów), execute(wykonanie), store/commit/retirement (zapisanie wyniku).

Powiedzmy że mamy kolejne 4 instrukcje w assemblerze. Piplining działa wówczas w taki sposób, że jednocześnie procesor pobiera z pamięci instrukcję czwartą, rozpoznaje typ instrukcji i argumentów instrukcji trzeciej, przygotowuje argumenty instrukcji drugiej i wykonuje aktualną instrukcję. _Deeply pipelined_ procesor stosuje piplining. 

### speculative execution

Jest to zdolność do wykonywania instrukcji znajdujących się za skokiem warunkowym, co do którego jeszcze nie wiadomo, czy nastąpi, a więc czy (formalnie) kolejne instrukcje zostaną wykonane. Ostatecznie wyniki wyliczone z wyprzedzeniem zostaną albo uwzględnione, albo odrzucone, zależnie od tego, czy skok się wykona.
W połączeniu z pipliningiem działa to mniej więcej tak, że gdy procesor jest gotowy do pobierania następnej instrukcji po skoku warunkowym, nie wie jeszcze, którą ścieżkę obierze logika kodu ale może próbować zgadywać(branch prediction) i pobierać bardziej prawdopodobną instrukcję i zacząć ją przetwarzać.

### out-of-order execution

Procesory które używają wielu jednostek wykonawczych (execution unit - część procesora która wykonuje obliczenia) mają zdolność do zmiany wykonywania kolejności instrukcji, tak aby jak najpełniej wykorzystać dostępne jednostki wykonawcze (moc obliczeniową procesora) - a więc by równolegle wykonywać jak najwięcej instrukcji, minimalizując tym samym czas wykonywania programów. Ta cecha powoduje jednak, że mikroprocesor musi pamiętać rzeczywistą kolejność (zwykle posiada wiele kopii rejestrów, niewidocznych dla programisty) i uaktualniać stan w oryginalnym porządku, ale także anulować (wycofywać) zmiany, w przypadku gdy wystąpił jakiś błąd podczas wykonywania wcześniejszej instrukcji.

#### Fajny przykład:
````
1: MULTIPLY reg1 := reg2 * reg3
2: ADD reg4 := reg1 + 5
3: ADD reg6 := reg2 + 1
````
Ponieważ MULTIPLY ukradnie około 5 cykli procesora to instrukcja 3 może zostać wykonana przed instrukcją 2, która oczekuje na instrukcję 1. Tego typu procesory przeważnie są również superscalar, poniżej opisane.

### Superscalar

Możliwość jednoczesnego wykonywania kilku instrukcji w jednym cyklu zegarowym, realizowana poprzez zwielokrotnienie skalarnych jednostek wykonawczych. Innymi słowy Superscalar processors w ciągu jednego cyklu zegara równolegle wprowadza wiele instrukcji do różnych jednostek wykonawczych.
Pełne wykorzystanie wszystkich jednostek wykonawczych zależy od tego, czy w programie nie występują zależności między kolejnymi instrukcjami - tj. czy kolejna instrukcja jako argumentu nie potrzebuje wyników poprzedniego rozkazu.

#### Na przykład instrukcje:
````
a = b + 5
c = a + 10
````
nie będą mogły zostać wykonane równolegle, ponieważ wartość c zależy od wyliczanego wcześniej a. Jeśliby jednak usunąć zależność i napisać równoważnie
````
a = b + 5
c = b + 10
````
wykonywanie superskalarne będzie możliwe. Superscalar procesor będzie mógł jednocześnie do dwóch jednostek wprowadzić operacje $b + 5$ oraz $b + 10$.
Zwróćmy uwagę na przykład z Out-of-order execution. Mechanizm ten w połączeniu z zdolnością superscalar może wykonać trzy instrukcje w sumarycznym czasie wykonywania instrukcji 1 i 2, ponieważ 3-cia wykona się równolegle na drugiej jednostce wykonawczej.

### Complex instruction set computing (CISC)

Jest architekturą procesora, którego podstawowe cechy to: występowanie złożonych, specjalistycznych rozkazów (instrukcji), które do wykonania wymagają od kilku do kilkunastu cykli zegara, szeroka gama trybów adresowania (czy dane czy adres, czy podlega modyfikacji czy nie), rozkazy mogą operować bezpośrednio na pamięci (zamiast przesłania wartości do rejestrów i operowania na nich). Istotą architektury CISC jest to, iż pojedynczy rozkaz mikroprocesora wykonuje kilka operacji niskiego poziomu, jak na przykład pobranie z pamięci, operację arytmetyczną i zapisanie do pamięci. Czyli posiada piplining.

Powyższe cechy posiada architektura x86.
