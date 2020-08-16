Omów mechanizmy zapobiegające utracie danych w przypadku wystąpienia awarii.

---

# Zapobieganie utracie danych

### Wirtualne
  * **Autoryzacja** - ograniczenie praw dostępu, by tylko zaufane jednostki miały dostęp do danych. Dodatkowo, można wprowadzić różne poziomy uprawnień.
  * **System antywirusowy**.
  * **Izolacja transakcji** - każdy etap transakcji jest logowany, dzięki czemu w razie awarii systemu (dzięki zawartości logów), można odtworzyć stan bazy danych sprzed transakcji, która nie została zatwierdzona.
  * **Sprawdzony software** - znane, dobrze przetestowane, i sprawdzone oprogramowanie.

### Fizyczne
  * **Sprawdzone nośniki danych** - niezawodne, solidne.
  * **Strzeżone centra danych** - mniejsze ryzyko zniszczenia fizycznych nośników lub nieautoryzowanego dostępu.
  * **Kopie zapasowe** - w przypadku błędów krytycznych pozwolą odtworzyć stan bazy.
  * **Replikacja** - powódź, pożar, trzęsienie ziemi nie straszne, gdy dane są zreplikowane na różnych kontynentach.
  * **Zasilacze UPS, bezpieczniki**.
