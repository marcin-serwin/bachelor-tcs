Urządzenia sieciowe - switche, routery, huby, hosty...

---

# Switch (przełącznik)
Urządzenie łączące segmenty sieci komputerowej pracujące zazwyczaj w warstwie łącza danych. Jego zadaniem jest przekazywanie ramek przychodzących na wejście na odpowiedni port wyjścia. W zależności od tego, czy działa w sieci lokalnej, czy globalnej, decyzję o wyjściowym porcie podejmuj na podstawie odpowiednio adresu MAC lub IP.

# Router
Urządzenie sieciowe pracujące w warstwie sieci. Służy do łączenia różnych sieci komputerowych (różnych w sensie informatycznym, czyli np. o różnych klasach, maskach itd.), pełni więc rolę węzła komunikacyjnego. Na podstawie informacji zawartych w pakietach TCP/IP jest w stanie przekazać pakiety z dołączonej do siebie sieci źródłowej do docelowej, rozróżniając ją spośród wielu dołączonych do siebie sieci.
Zobacz [routowanie](III.5.3 Trasowanie.md).


Proces kierowania ruchem nosi nazwę trasowania, routingu lub rutowania. Trasowanie jest najczęściej kojarzone z protokołem IP, choć procesowi trasowania można poddać pakiet dowolnego protokołu trasowanego np. protokołu IPX w sieciach obsługiwanych przez NetWare (sieci Novell).

# Hub
Koncentrator sieciowy jest urządzeniem, które łączy wiele urządzeń sieciowych w sieci komputerowej o topologii gwiazdy. Koncentrator pracuje w warstwie pierwszej modelu ISO/OSI (warstwie fizycznej), przesyłając sygnał z jednego portu na wszystkie pozostałe. Nie analizuje ramki pod kątem adresu MAC oraz IP. Ponieważ koncentrator powtarza każdy sygnał elektroniczny, tworzy jedną domenę kolizyjną.

Koncentrator najczęściej podłączany jest do routera jako rozgałęziacz, do niego zaś dopiero podłączane są pozostałe urządzenia sieciowe: komputery pełniące funkcję stacji roboczych, serwerów, drukarki sieciowe i inne.

Obecnie urządzenia te, wyparte przez przełączniki działające w drugiej warstwie modelu ISO/OSI (warstwie łącza danych, wykorzystując adresy MAC podłączonych urządzeń), stosowane są coraz rzadziej. Jednakże koncentrator przenosi sygnał z portu wejściowego na wszystkie porty wyjściowe bit po bicie, przełącznik natomiast ramka po ramce, o jest powodem wprowadzania dużych opóźnień (także dodatkowych, zmiennych, w zależności od długości ramki). Jeżeli przesyłane mają być dane, dla których wspomniane zmienne opóźnienie jest niepożądane (np. strumień wideo przez Internet), koncentrator okaże się lepszym rozwiązaniem od przełącznika.

# Host
Host jest ogólnym pojęciem, które oznacza urządzenie podłączone do sieci, między innymi:
* Komputer podłączony do sieci komputerowej używającej protokołu komunikacyjnego TCP/IP, posiadający adres IP. Jeżeli użytkownik komputera łączy się z siecią komputerową, to karta sieciowa lub modem jego komputera otrzymuje adres IP, i wtedy staje się hostem. W tym znaczeniu host jest dowolną maszyną, uczestniczącą w wymianie danych poprzez sieć komputerową, np. poprzez Internet.
* Komputer podłączony do sieci komputerowej łączem stałym, posiadający stały adres IP, udostępniający usługi sieciowe użytkownikom łączącym się z nim za pomocą swoich komputerów i umożliwiający im między innnymi pracę w trybie terminalowym. Komputer użytkownika nazywany jest wtedy zdalnym terminalem, (ang.) remote terminal. Powszechną praktyką jest współistnienie na jednym hoście wielu usług, tj. obok usług umożliwiających pracę terminalową, np. telnet i SSH, także usług typu klient-serwer, najczęściej WWW i FTP. W tym znaczeniu, pojęcie host oznacza to samo co serwer, tym bardziej że obecnie na większości tak rozumianych hostów, poza wewnętrznymi sieciami większych instytucji, usługi terminalowe, ze względów bezpieczeństwa, nie są dostępne.
* W publikacjach anglojęzycznych, termin host używany jest w określeniu "to host", czyli dostarczać infrastrukturę dla usług sieciowych. Przykładowo, wyrażenia: "to host Web server" lub "hosted by", mogą odnosić się do firmy zapewniającej sprzęt komputerowy, oprogramowanie oraz miejsce dla stron internetowych klienta.

# Inne
  * **Karta sieciowa** - zapewnia interfejs, dzięki któremu możliwe jest podłączenie urządzenia do sieci za pomocą kabla lub odbioru fal radiowych. Każda karta posiada swój unikalny adres __MAC__.

  * **Access point** - urządzenie, które zapewnia bezprzewodowy dostęp do zasobów sieci za pomocą WiFi.

  * **Bridge** - posiada jeden port wejścia i jeden wyjścia. Używane są do odseparowania sieci, które mają być połączone, ale niekoniecznie cały ruch z jednej ma być kierowany do drugiej.

  * **Expander** - wzmacnia sygnał WiFi, który jest tłumiony przez np. ściany działowe, czy stropy budynków. Tworzona jest bliźniacza sieć o tej samej nazwie, ustawieniach i zabezpieczeniach.

  * **Modem** - urządzenie elektroniczne, które moduluje sygnał w celu zakodowania informacji cyfrowych, tak by mogły być przesyłane w wybranym medium transmisyjnym, a także demoduluje tak zakodowany sygnał w celu dekodowania odbieranych danych.