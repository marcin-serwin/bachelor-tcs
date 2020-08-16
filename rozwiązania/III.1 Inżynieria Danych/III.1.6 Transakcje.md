Omów pojęcie transakcji, przedstaw jej własności.

---

# Transakcja
Zbiór operacji na bazie danych, które stanowią całość i jako takie powinny być wykonane wszystkie lub żadna z nich.

### Przykład
Przykładem transakcji może być transakcja bankowa jaką jest przelew. Muszą tu zostać dokonane 2 operacje – zabranie pieniędzy z jednego konta oraz dopisanie ich do drugiego. W przypadku niepowodzenia żadna z tych operacji nie powinna być zatwierdzona, gdyż zajście tylko jednej powodowałoby nieprawidłowości w bazie danych (pojawienie się lub zniknięcie pieniędzy).

## ACID
Zbiór właściwości, które gwarantują poprawne przetwarzanie transakcji w bazach danych.

  * **Atomowość (A - atomicity)** - zbiór operacji wchodzących w skład transakcji jest niepodzielny: albo zostaną wykonane wszystkie albo żadna.

  * **Spójność (C - consistency)** - przeprowadza bazę danych z jednego stanu spójnego do innego stanu spójnego. W trakcie wykonywania transakcji baza danych może być przejściowo niespójna (mogą być naruszone zasady integralności).

  * **Izolacja (I - isolation)** - jeżeli dwie transakcje wykonują się współbieżnie, to zazwyczaj (zależnie od poziomu izolacji) nie widzą zmian przez siebie wprowadzanych. Zobacz [poziomy izolacji](III.1.4 Poziomy izolacji.md).

  * **Trwałość (D - durability)** - system potrafi uruchomić się i udostępnić spójne, nienaruszone i aktualne dane zapisane w ramach zatwierdzonych transakcji, na przykład po nagłej awarii zasilania.
