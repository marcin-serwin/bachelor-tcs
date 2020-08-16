Przedstaw bibliotekę kontenerów dostępnych w Java lub C++ z opisem
zastosowań poszczególnych klas.

---

# Kolekcje w Javie
Kolekcja (zwana *kontenerem*) jest obiektem reprezentującym grupę obiektów. W Javie, standardowym zbiorem interfejsów i klas implementujących powszechnie stosowane struktury danych jest tzw. *Java Collections Framework*.

## Klasa `Collections`
Zawiera jedynie statyczne metody, które operują na kolekcjach lub zwracają nowe, opakowujące je kolekcje. Te wrappery dodają różnego rodzaju ficzery.

### `synchronized`
Jednym z takich ficzerów jest synchroniczność. Metody np. `synchronizedList(List<T> list)` lub `synchronizedMap(Map<K,V> m)` opakowują podane kolekcje i zwracają ich thread-safe wrappery (oparte na synchroniczności). Synchronizowana jest jednak **cała kolekcja** przy **wszystkich operacjach** (również nie update'ujących stanu jak np. `get`).

Istnieje ponadto pakiet `java.util.concurrent` zapewniający kilka klas przydatnych w wielowątkowości. Znajdują się w nim interfejsy takich thread-safe kolekcji, jak:
  * `BlockingDeque<E>` - `Deque` dodatkowo wspierająca blokujące operacje.
  * `ConcurrentMap<K,V>` - `Map` zapewniająca dodatkowo atomiczne metody: `putIfAbsent()`, `remove()` i `replace()`.

  W przypadku zastosowania tego rozwiązania, lock jest zakładany na **poszczególnych segmentach** oraz tylko w przypadku **operacji update'ujących stan**, co jest istotną przewagą performance'ową nad użyciem metod wytwórczych.


### `unmodifiable`
Dodatkowym ficzerem, który posiadają wrappery zwracane przez niektóre z metod klasy `Collections`, jest zapewnienie dostępu jedynie do odczytu. Przykładami są `unmodifiableList(List<? extends T> list)` lub `unmodifiableSortedSet(SortedSet<T> s)`.

## Zestawienie najważniejszych kolekcji

| Interface | Hash Table 	| Resizable array | Balanced Tree | Linked list | Hash table + linked list |
|:---------:|:-----------:|:---------------:|:-------------:|:-----------:|:------------------------:|
|    Set    |   HashSet  	|                 |    TreeSet    |             |       LinkedHashSet      |
|    List 	|            	|    ArrayList    |               |  LinkedList |                          |
|  Deque  	|            	|   ArrayDeque    |               |  LinkedList |                          |
|    Map    |   HashMap  	|                 |    TreeMap    |             |       LinkedHashMap      |

### `List`
Sekwencja ogólnego zastosowania. Listę implementują np. Stack, Vector, LinkedList. Podklasą LinkedList jest

#### Implementacje
  * `LinkedList` - pozwala na wstawianie i usuwanie elementów w $O(1)$ przez iteratory, jednak dostęp do elementu przez index ma pesymistyczną złożoność $O(n)$.

  * `ArrayList` - gwarantuje dostęp do elementów w $O(1)$ za pomocą indeksu. Dodawanie i usuwanie elementów może być w pesymistycznym przypadku $O(n)$.

### `Set`
Kolekcja zawierająca elementy bez duplikacji.

### `Map`
Kolekcja zawierająca zbiór par klucz-wartość, gdzie klucze są unikalne.

### `TreeSet` i `TreeMap`
Obie implementacje, oparte o drzewo czerwono-czarne, zapewniają podstawowe operacje w czasie $O(log(n))$. Elementy są posortowane zgodnie z naturalnym porządkiem elementów (kluczy).

## `HashSet` i `HashMap`
Obie implementacje przy użyciu tablicy hashującej. Nie gwarantują żadnego porządku dla iteracji po elementach (w szczególności może być zmienna w czasie). Implementacje zapewniają podstawowe operacje (`add`, `remove`, `contains`, `size`) w $O(1)$. Iteracja wymaga czasu proporcjonalnego do sumy liczby elementów i pozostałej (nieużywanej) pojemności (liczby kubełków). Wymagają własciwie zaimplementowanego `hashCode` (do wyboru kubełka) i `equals` (do porównywania elementów w kubełku).

## `LinkedHashSet` i `LinkedHashMap`
Implementacje przy użyciu tablicy hashującej i `LinkedListy`. Zapewniają przewidywalny porządek iterowania po elementach zdefiniowany przez dwustronną listę (po momencie dodania do setu/mapy). Zapewniają podstawowe operacja na zbiorze w czasie $O(1)$.

## Dwustronne kolejki
Liniowe kolekcje zapewniające usuwanie, dodawanie i "podglądanie" elementu wyłącznie na obu końcach.
  * `ArrayDeque` - implementacja przez tablice o zmiennym rozmiarze. Nie pozwala na wstawianie `null` (leci `NullPointerException`).
  * `LinkedList` - implementacja przez listę. Pozwala na `null`.
