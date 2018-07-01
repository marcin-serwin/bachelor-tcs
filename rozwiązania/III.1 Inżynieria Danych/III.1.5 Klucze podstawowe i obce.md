Omów pojęcie kluczy (podstawowych, obcych) w teorii relacyjnych baz danych.

---

### Wprowadzenie
* **Baza danych jest zbiorem relacji (tabel).**
* **Schemat danej relacji $R$**, oznaczony przez $R(A_1, A_2, \ldots, A_n)$, składa się z nazwy relacji $R$ oraz listy atrybutów (kolumn) $A_1,
A_2, \ldots, A_n$
* Każdy atrybut $A_i$ schematu relacji $R$ posiada **domenę (zbiór możliwych wartości)**, oznaczoną jako $dom(A_i)$.
* **Relacją** $r$ o schemacie $R(A_1, A_2, \ldots,  A_n)$, oznaczoną $r(R)$, nazywamy zbiór krotek (rekordów) postaci $\{t_1, t_2, \ldots, t_m\}$.  

Formalnie relacja $r(R)$ jest relacją matematyczną -  $r(R) \subseteq dom(A_1) \times dom(A_2) \times \ldots \times dom(A_n)$

# Klucze w relacyjnych bazach danych
Klucze to zbiory atrybutów mających określoną właściwość. Dzięki nim, możemy jednoznacznie identyfikować każdy pojedynczy wiersz. Znajomość pojęć kluczy podstawowych i obcych jest niezbędna do tworzenia zapytań, odwołujących się do wielu tabel.

## Klucze proste i złożone
W zależności od liczby atrybutów wchodzących w skład klucza można wyróżnić:

* klucze proste (jednoelementowe),
* klucze złożone (wieloelementowe).

| nr_indeksu |  nazwisko  |  imię  | grupa |
|:----------:|:----------:|:------:|:-----:|
|    12345   |  Iksiński  |   Jan  |   34  |
|    12346   | Igrekowski | Bogdan |   34  |

Kluczem prostym jest tu atrybut `nr_indeksu`, klucz złożony składa się z atrybutów `nazwisko`, `imię` i `grupa`.

## Superklucz
Dowolny podzbiór atrybutów, który jednoznacznie identyfikuje każdy wiersz, jest nazywany **superkluczem**. Każda relacja (tabela) może zawierać wiele takich kluczy (teoretycznie $2^n$, gdzie $n$ to liczba atrybutów).

| Monarch Name | Monarch Number | Royal House |
|:------------:|:--------------:|:-----------:|
|    Edward    |       II       | Plantagenet |
|    Edward    |       III      | Plantagenet |
|    Richard   |       III      | Plantagenet |
|     Henry    |       IV       |  Lancaster  |

Spośród wszystkich podzbiorów atrybutów tylko te dwa są superkluczami:

* {`Monarch Name`, `Monarch Number`},
* {`Monarch Name`, `Monarch Number`, `Royal House`}.

## Klucz potencjalny
Klucz potencjalny (albo kandydujący) – **minimalny zestaw atrybutów** relacji, jednoznacznie identyfikujący każdą krotkę tej relacji. Czyli dowolny superklucz, który może zostać kluczem podstawowym.

W relacji może znajdować się wiele kluczy potencjalnych. Spośród nich wybiera się zazwyczaj jeden klucz, zwany kluczem głównym (lub podstawowym). W powyższym przykładzie jest tylko jeden minimalny superklucz: {`Monarch Name`, `Monarch Number`}.

## Klucz podstawowy
Minimalny zestaw atrybutów relacji, jednoznacznie identyfikujący każdą krotkę. Każda tabela może mieć tylko jeden taki klucz. Jest to pierwszy z wymienionych do tej pory kluczy, któy ma faktyczne, fizyczne odwzorowania w implementacji bazy danych.

## Klucz obcy
Jest atrybutem lub zbiorem atrybutów, który **wskazuje na klucz podstawowy w innej relacji**. Klucz obcy służy do
**reprezentowania powiązań między danymi** (łączenia relacji).
