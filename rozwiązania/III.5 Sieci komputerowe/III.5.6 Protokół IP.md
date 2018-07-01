Opisz protokół IP.

---

# Wstęp
Warstwa sieci zapewnia komunikację między host-host. To właśnie ona udostępnia protokoły routownaia, opakowuje **segmenty** w **datagramy**, które następnie przekazywane są na interfejs sieciowy. Głównymi protokołami działającymi w tej warstwie jest **IPv4**. Jego następca **IPv6** został zaprojektowany, aby rozwiązać główny problem poprzednika, który wyniknął z bardzo dynamicznego rozwoju Internetu - zbyt mała pula adresów. Warto zaznaczyć, że protokół IP jest zawodny, nie gwarantuje, że wszystkie dane dotrą do odbiorcy, a błędne retransmitowane. Zadbać o to muszą wyższe warstwy.

# Datagram
Datagram jest podstawową jednostką danych, jaką operuje protokół IP. Do segmentów z warstwy transportowej dodawane są nagłówki zawierające między innymi takie informacje jak:
* wersja protokołu
* długość nagłówka
* rodzaj serwisu - określa, jakie jest przeznaczenie pakietów (np. system czasu rzeczywistego, multimedia, itp.). Może to być pomocne podczas routowania.
* długość całego datagramu w bajtach
* time-to-live (TTL) - określa jak długo datagram powinien _żyć_. Zapobiega to nieskończonemu krążeniu pakietu w pętli.
* protokół warstwy transportowej
* suma kontrolna
* adres IP źródłowej maszyny
* adres IP docelowej maszyny

Dodatkowo do nagłówka mogą być też dołączone opcjonalne wartości, przez co nagłówek może być zmiennej długości (argumentuje to dodanie do nagłówka informacji o jego długości). Z racji tego, że urządzenia w sieci są bardzo rożnorodne i spełniają niekoniecznie równoważne standardy, datagramy mogą ulec fragmentacji. Wobec tego, w nagłówku obecne są również identyfikatory i offsety, które pozwalają potem scalić odpowiednie dane.

# Adresowanie w IPv4
Adres IP składa się z dwóch części. Pewna część bitów odpowiada za adres sieci, do której należy dany host oraz adresu hosta w tej konkretnej sieci z pozostałych bitów. O tym, które bity odpowiadają za adres sieci, mówi maska sieci (standardowo jest to pewien prefiks jedynek). Maskę sieci zazwyczaj zapisuje się w następujący sposób: $223.1.2.3/24$. Oznacza to, że pierwsze $24$ bity adresu odpowiadają za adres sieci.

# IPv6
Protokół, który niejako miał stać się następcą obecnego IPv4, nie zyskał jeszcze przewidywanej popularności. Rozwiązuje problem ograniczonej puli adresów przez zwiększenie adresu z $32$ bitów do $128$.