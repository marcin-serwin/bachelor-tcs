Protokoły TCP i UDP - charakterystyka, porównanie.

---

# Wstęp
TCP i UDP są głównymi protokołami warstwy transportowej. Odpowiadają za logiczne połączenie nadawcy z odbiorcą. Nakładają pewną abstrakcję na niższe warstwy sieci, przez co można założyć, że zachowują się one tak, jakby te dwie maszyny były połączone bezpośrednio. Konwertują wiadomości z warstwy aplikacji do segmentów. Dodają do każdego z nich odpowiedni nagłówek, a następnie całość przekazywana jest do warstwy sieci. Analogicznie wygląda odbieranie, z tym że segmenty są rozpakowywane tak, aby mogły być przekazane do warstwy wyżej.

Jednocześnie może działać wiele procesów korzystających z warstwy transportowej. Jednym z nagłówków segmentów jest port źródłowy i docelowy - przez to identyfikowane są sockety.

# TCP (Transmission Control Protocol)
Protokół ten zapewnia niezawodny transfer danych w porządku, z gwarancją, że zostaną one odebrane w takiej kolejności, w jakiej zostały wysłane. Zapewnia retransmisje uszkodzonych i utraconych pakietów. Zorientowany jest na połączenie, w wyniku czego wymiana danych może być dwustronna. W celu ustanowienia połączenia wykonywany jest tzw. handshaking. Ma również funkcję kontroli przeciążenia sieci __(congestion control)__ w celu jak najmniejszego niezbędnego obciążenia łączy. Wprowadza sumę kontrolną, która pomaga wykrywać uszkodzone dane.

# UDP (User Datagram Protocol)
Jest najmniejszą możliwą nadbudową na protokole IP. Jest jednak zawodny, nie zapewnia retransmisji i kolejności pakietów. Stosowany głównie przez aplikacje, dla których najważniejsza jest niskie opóźnienie przesyłu danych, a nie gwarancja otrzymania całości danych. Jest to protokół bezpołączeniowy, często dane wysyłane są tylko w jednym kierunku. Również posiada sumę kontrolną, jednak w przypadku wykrycia błędu dane nie są retransmitowane. Jeśli aplikacja wymaga pewnego stopnia niezawodności, a korzysta z UDP, to musi sama zapewnić konkretną funkcjonalność.

# Porównanie

| | TCP | UDP |
| --- | --- | --- |
| **Połączenie** | Tak | Nie |
| **Stosowanie** | Aplikacje, które wymagają wysokiej niezawodności, a czas transmisji nie jest aż tak ważny. | Aplikacje, które wymagają niskiego opóźnienia (latencja) przy transmisji danych (np. gry), a kolejność pakietów lub utrata części danych nie ma znaczenia. Stosowane również przy implementacji serwerów, które odpowiadają na niewielkie zapytania od ogromnej liczby klientów. |
| **Używane przez** | HTTP, HTTPs, FTP, SMTP, SSH | DNS, DHCP, VoIP, RIP |
| **Zachowanie kolejności pakietów** | Tak | Nie |
| **Niezawodność** | Tak | Nie |
| **Latencja** | Większa | Mniejsza |
| **Sprawdzanie błędu** | Suma kontrolna, następuje retransmisja uszkodzonych danych | Suma kontrolna, ale brak retransmisji |
| **Kontrola przepływu danych** | Dba o nieobciążanie sieci | Brak |
| **Potwierdzenie otrzymania informacji (ACK)** | Tak | Nie |

Ponadto nagłówek TCP jest znacznie bardziej skomplikowany. Trzyma dodatkowe informacje w celu zapewnienia kolejności, retransmisji. Odbiór pakietów jest potwierdzany, w wyniku czego jest to znacznie cięższy protokół.