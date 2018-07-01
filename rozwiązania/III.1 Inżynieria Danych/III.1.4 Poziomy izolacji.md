Jakie są podstawowe poziomy izolacji w bazach danych, w jakim celu się je stosuje?

---

# Izolacja transakcji
Jeżeli dwie transakcje wykonują się współbieżnie, to zazwyczaj (zależnie od poziomu izolacji) nie widzą zmian przez siebie wprowadzanych.

## Cel
W bazie danych, która umożliwia współbieżne wykonywanie transakcji, transakcje dokonują **odczytów i/lub zapisów danych współdzielonych**, co prowadzi oczywiście do **konfliktów**. Izolowanie transakcji ma na celu zmniejszenie (całkowite wyeliminowanie) liczby konfliktów.

# Rodzaje anomalii w transakcji
  * **Niezatwierdzony odczyt** (dirty reads) - transakcje mają dostęp do modyfikacji wprowadzonych przez inne, nawet jeszcze niezatwierdzone transakcje. Odczytywane są niezatwierdzone dane.

  * **Niepowtarzalny odczyt** (nonrepeatable (fuzzy) reads) - każdy kolejny odczyt danych przez jedną transakcję może zwrócić inne wyniki. Dane zostały w międzyczasie zmodyfikowane (`UPDATE`) lub skasowane (`DELETE`) przez równoległą, zatwierdzoną transakcję.

  * **Fantomy** (phantom reads) - każdy kolejny odczyt danych przez jedną transakcję, może zwrócić inne wyniki. Dane zostały w międzyczasie dodane (`INSERT`) przez równoległą, zatwierdzoną transakcję.

# Poziomy izolacji transakcji
Poziom izolacji w bazach danych jest zazwyczaj konfigurowalny i określa, jakich anomalii możemy się spodziewać przy wykonywaniu transakcji. Stopień wzajemnej separacji, czyli w jakim stopniu efekty działania jednej transakcji są widoczne i wpływają na inne transakcje.

## Podsumowanie
Poziomy izolacji zdefiniowane w standardzie ANSI/ISO SQL:

|  Poziom izolacji | Niezatwierdzony odczyt | Niepowtarzalny odczyt | Fantomy | Możliwość zapisu |
|:----------------:|:----------------------:|:---------------------:|:-------:|:----------------:|
| Read uncommitted |           TAK          |          TAK          |   TAK   |        TAK       |
|  Read committed  |            -           |          TAK          |   TAK   |        TAK       |
| Repeatable reads |            -           |           -           |   TAK   |        TAK       |
|   Serializable   |            -           |           -           |    -    |        TAK       |
|     Read only    |            -           |           -           |    -    |         -        |


## Opisy

### Read uncommitted
Najmniej restrykcyjny. Transakcja może widzieć jeszcze niezatwierdzone zmiany wprowadzne przez inne transakcje.

### Read committed
Gwarantuje, że czytane dane są zatwierdzone. Nie pozwala, żeby zapytanie czytało pośrednie, niezatwierdzone dane. Nie gwarantuje jednak, że po ponownym odczycie znalezione zostaną te same dane. Izolacja jest na poziomie zapytania, a nie transakcji.

Ten poziom pozwala na wysoką wydajność i jest wskazany w środowiskach, w których jest niewiele potencjalnych konfliktów między transakcjami.

### Repeatable reads
W ramach pojedynczej transakcji wielokrotny odczyt danych zwróci te same wyniki. Czyli tym razem izolacja jest już na poziomie transakcji.

### Serializable
Pełna izolacja, wyniki współbieżnie realizowanych zapytań są identyczne z wynikami w sytuacji gdyby zapytania były realizowane w pełni sekwencyjnie.

### Read only
Takie same cechy jak w przypadu `serializable`, natomiast nie są możliwe żadne operacje modyfikujące dane (`INSERT`, `UPDATE`, `DELETE`).
