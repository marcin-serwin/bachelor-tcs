Adresacja w Internecie.

---

# Wstęp
W przypadku sieci komputerowych, podobnie jak w przypadku tradycyjnych sposobów komunikacji, istnieje potrzeba określenia miejsca przeznaczenia, do którego powinna zostać wysłana porcja danych. Można to przyrównać do wysyłania listu do znanej nam (lub nieznanej) osoby. W obu przypadkach należy określić adres miejsca przeznaczenia. W przypadku tradycyjnego systemu pocztowego na kopercie wpisywane są dane adresata. Zwykle też podawane są dane nadawcy, w celu komunikacji zwrotnej. Oba adresy powinny być unikalne, w innym przypadku korespondencja mogłaby nie trafiać do adresatów.

Również analogicznie jak w tradycyjnej poczcie pakiety transportowane są do określonej sieci, w której router jest odpowiednikiem urzędu pocztowego. Router decyduje również, do którego hosta adresuje ramkę z danym pakietem, podobnie jak listonosz, który przynosi przesyłki do konkretnego adresata.

# Rodzaje adresów
W zależności od rozpatrywanej warstwy modelu można wyróżnić adresację fizyczną **(MAC)** oraz logiczną **(IP)**. Pierwsza z nich dotyczy warstwy łącza danych, druga zaś warstwy sieci. Adres MAC jest przypisywany do konkretnego interfejsu sieciowego i jest nadawany przez producenta, zaś adres IP zależy od sieci, do której urządzenie jest podłączone.

# Przydzielanie adresów
Adresy IP ze względu na bardzo ograniczoną pulę są przyznawane przez konkretne organizacje. Dawniej była to **InterNIC (Internet Network Information Center)**, obecnie zaś **IANA (Internet Assigned Numbers Authority)**.

# Struktura adresów IPv4
Adres IP składa się z dwóch części. Pewna część bitów odpowiada za adres sieci, do której należy dany host oraz adresu hosta w tej konkretnej sieci z pozostałych bitów. O tym, które bity odpowiadają za adres sieci, mówi maska sieci (standardowo jest to pewien prefiks jedynek). Dawniej pula adresów była podzielona na kilka sztywno ustalonych klas, w wyniku czego maski sieci były mocno ograniczone. Obecnie nie stosuje się już tego podziału.
