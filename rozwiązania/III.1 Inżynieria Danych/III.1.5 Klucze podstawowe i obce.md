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

## Klucz podstawowy
Minimalny zestaw atrybutów relacji, jednoznacznie identyfikujący każdą krotkę. Każda tabela może mieć tylko jeden taki klucz. Jest to pierwszy z wymienionych do tej pory kluczy, któy ma faktyczne, fizyczne odwzorowania w implementacji bazy danych.

## Klucz obcy
Jest atrybutem lub zbiorem atrybutów, który **wskazuje na klucz podstawowy w innej relacji**. Klucz obcy służy do
**reprezentowania powiązań między danymi** (łączenia relacji).
