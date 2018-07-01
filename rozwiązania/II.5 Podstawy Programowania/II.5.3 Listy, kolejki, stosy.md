Abstrakcyjne struktury danych: listy, kolejki, stosy. Implementacja komputerowa.

---

# Listy

## Lista dwukierunkowa
Lista dwukierunkowa to struktura danych składająca się z ciągu elementów. Oprócz samych danych, każdy element listy przechowuje dwa wskaźniki:

  * `prev` - do poprzedniego elementu,
  * `next` - do następnego elementu.

Czyli dostęp do elementów jest sekwencyjny - możemy przejść do następnika lub poprzednika danego elementu.

Tworząc listę w pamięci zwykle dodatkowo rezerwuje się trzy zmienne dla jej obsługi:
  * Wskaźnik `head` – wskazuje pierwszy element listy.
  * Wskaźnik `tail` – wskazuje ostatni element listy.
  * Licznik `size` – zlicza elementy na liście.

## Lista jednokierunkowa
W niektórych zastosowaniach nie potrzebujemy przechodzić listy w obu kierunkach. W takim przypadku w każdym elemencie wystarczy jeden wskaźnik, np. `next`.

## Lista cykliczna
Jeśli za następnik ostatniego elementu listy jednokierunkowej przyjmiemy pierwszy element na liście, to otrzymamy *jednokierunkową listę cykliczną*. Jeśli dodatkowo poprzednikiem pierwszego elementu listy dwukierunkowej zrobimy ostatni element, to otrzymamy *dwukierunkową listę cykliczną*.

## Cechy
W przeciwieństwie do tablicy, elementy listy nie muszą leżeć obok siebie w pamięci. Lista nie wymaga ciągłego obszaru pamięci i może być rozłożona w różnych jej segmentach (w typowej implementacji, np. `LinkedList` w Javie lub w C#).

Z drugiej strony, aby uzyskać dostęp do danego elementu, musimy przechodzić kolejno od jednego elementu do drugiego wzdłuż ścieżki wyznaczonej przez ich pola `next` lub `prev`. Taka operacja ma liniową złożoność i pesymistycznie wymaga przeglądnięcia wszystkich elementów.


# Kolejki
Kolejka jest sekwencyjną strukturą danych z własnością FIFO - element zapisany jako pierwszy jest również odczytywany jako pierwszy.

## Operacje
  * `isEmpty()` - sprawdzenie czy kolejka jest pusta.
  * `front()` - odczyt elementu z początku kolejki.
  * `push(x)` - dopisanie elementu na koniec kolejki.
  * `pop()` - usunięcie z kolejki pierwszego elementu.

## Kolejka jako lista
Użyjemy listy jednokierunkowej. Nowe elementy dodajemy na koniec listy – dzięki wskaźnikowi `tail` szybko będziemy mogli znaleźć ostatni element i dołączyć za nim element wstawiany. Pobieranie elementów będzie się odbywało z początku listy.

## Kolejka jako tablica
Naturalną strukturą danych dla kolejek jest lista, ale kolejkę da się również zrealizować za pomocą dynamicznej, "cyklicznej" tablicy. Gdy brakuje miejsca na końcu tablicy można wykorzystać jej początek (miejsca skąd zostały `dequeue()` elementy). Żeby wiedzieć gdzie jest początek a gdzie koniec po prostu przechowujemy indeksy. Kiedy już fizycznie nie ma miejsca na nowe elementy, alokujemy nową tablicę i przepisujemy całość.

## Kolejka cykliczna
Jeśli do implementacji kolejki zastosujemy listę cykliczną, to otrzymamy tzw. *kolejkę cykliczną*. W porównaniu ze zwykłą kolejką, kolejka cykliczna wymaga tylko jednego wskaźnika `tail`, który wskazuje koniec kolejki. Początek kolejki jest następnikiem jej ostatniego elementu.


# Stosy
Stos jest sekwencyjną strukturą danych z własnością LIFO - element zapisany jako ostatni jest odczytywany jako pierwszy.

## Operacje
  * `isEmpty()` - sprawdzenie, czy stos jest pusty.
  * `top()` - odczyt szczytu stosu.
  * `push(x)` - umieszczenie `x` na szczycie stosu.
  * `pop()` - usunięcie ze szczytu stosu znajdującego się tam elementu.

## Stos jako tablica
Realizacja tablicowa jest bardzo prosta i szybka. Podobnie jak w przypadku kolejek używamy tablicy dynamicznej.

## Stos jako lista
Realizacja za pomocą listy jednokierunkowej jest przydatna wtedy, gdy nie znamy dokładnego rozmiaru stosu – listy dostosowują się dobrze do obszarów wolnej pamięci.
