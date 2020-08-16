Przedstaw szczegółowo sekwencję wydarzeń następujących przy odczycie
przez program obszaru pamięci związanego przez mmap z plikiem dyskowym.

---

# Wstęp

Wywołanie systemowe **mmap** nakazuje systemowi operacyjnemu odwzorowanie danej części pliku w wirtualnej przestrzeni adresowej procesu. Plik nie jest od razu wczytywany do pamięci - odczyty wykonywane są *leniwie*, wtedy gdy są potrzebne. Całym *clue* jest zauważenie, że odczyty z pliku mogą odbywać się leniwie ponieważ używany jest **mechanizm stronicowania**.

# Sekwencja wydarzeń

Sekwencję tę opisuję zakładając, że używamy architektury amd64 i systemu operacyjnego Linux. Opisana sekwencja jest jedną z wielu jakie mogłyby się wydarzyć. Jednocześnie nie jest to najbardziej pesymistyczny scenariusz. Kroki i wydarzenia opisuję dokładnie tylko wtedy gdy występują po raz pierwszy.

* Program próbuje wczytać do rejestru wartość z konkretnego adresu pamięci.
* Zapytanie jest o konkretny **adres wirtualny**, więc trzeba go zamienić na **adres fizyczny** (odwołuję do pytania o [stronicowaniu](../III.5 Systemy operacyjne/III.5.5 Segmentacja i stronicowanie.md)).
* MMU (Memory Management Unit) przeszukuje **tablicę stron**.
  * Niestety okazuje się, że potrzebna strona nie jest w pamięci i rzucany jest wyjątek (przerwanie sprzętowe) `page fault`.
  * CPU przechodzi w **tryb jądra**.
    * Kernel zauważa, że poszukiwany adres zawiera się w zakresie należącym do **zmmapowanego pliku z dysku**.
    * Kernel wysyła informację do urządzenia dyskowego, aby ten zapisał w zaalokowane miejsce w pamięci fizycznej dane z potrzebnych bloków, w których znajduje się plik.
      * Dysk twardy (a dokładniej jego sterownik) odczytuje potrzebne dane i zapisuje je w pamięci fizycznej (za pomocą **Direct Memory Access**).
      * Dysk twardy wysyła przerwanie sprzętowe do kernela by powiadomić go, że operacja odczytu zakończyła się.
    * Kernel aktualizuje odpowiednio tablicę stron i przesuwa IP procesu o jedną instrukcję wstecz, by ponowić próbę odczytu z pamięci. Następnie przekazuje go do schedulera, by ten umieścił go w kolejce procesów do wznowienia.
  * Po wznowieniu proces jeszcze raz próbuje odczytać wartość z adresu pamięci.
* MMU dokonuje translacji z adresu wirtualnego na adres fizyczny, tym razem bez problemów.
* Następuje cache miss w L1, L2 i L3 więc wartość ładowana jest bezpośrednio z RAMu.
* Zwracana jest cała odpowiednia linia cache, ustawiane są wartości w kolejnych poziomach cache i odpowiednia wartość ładowana jest do rejestru.
