HTTP. Omów zawartość strumienia TCP podczas prostej komunikacji HTTP
zwracając szczególną uwagę na sposób wykorzystania nagłówków. Skomentuj różnice w wykorzystaniu połączenia TCP w różnych wersjach protokołu HTTP. Jakie są powody i konsekwencje tych różnic?

---

# Wstęp

HTTP (Hypertext Transfer Protocol) - to protokół warstwy aplikacji będący fundamentem WWW (World Wide Web). Za pomocą HTTP przesyła się żądania udostępnienia dokumentów, informacje o kliknięciu w odnośniki, przesyła się formularze, uaktualnia i usuwa dokumenty itp.

Każdy dokument WWW reprezentowany jest jednoznacznie przez adres URL w którym zapisane jest na jakim serwerze znajduje się dany dokument, jaka jest ścieżka tego dokumentu na tym serwerze oraz mogą być zawarte dodatkowe parametry. Dodatkowo adres URL zawiera w sobie protokół jakim udostępniany jest dany zasób i najczęściej jest to właśnie HTTP.s

# Budowa

Protokół HTTP jest tekstowym protokołem typu klient-serwer. Klient wykonuje zapytania i dostaje odpowiedzi od serwera.

## Zapytanie

HTTP pozwala na wykonywanie różnych metod na dokumencie, niektóre z nich to:

 - **GET** - pobranie zasobu
 - **HEAD** - pobranie informacji o zasobie
 - **PUT** - wysłanie danych od klienta do serwera, np. nowej wersji całego dokumentu
 - **POST** - wysłanie danych od klienta do serwera, np. zawartości formularza
 - **DELETE** - zażądanie usunięcia zasobu

Każde zapytanie zawiera oprócz metody, ścieżki i danych, dodatkowe nagłówki, które mogą na przykład informować serwer o tym, że zapytanie jest do konkretnego hosta (jeden serwer HTTP na jednym adresie IP może obsługiwać wiele domen), serwer nie powinien zamykać połączenia TCP po zwróceniu wyniki, klient akceptuje skompresowaną odpowiedź na przykład za pomocą gzip itp.

## Odpowiedź

Odpowiedź od serwera zawiera zawsze specjalny kod odpowiedzi i opis słowny, np.

 - 200 OK - zapytanie zakończyło się poprawnie
 - 404 Not Found - zasób nie istnieje
oraz ewentualnie dane o które prosił klient.

## Przykład
Klient wysyła żądanie do serwera w formie wiadomości. Wiadomość ta ma dokładnie zdefiniowany format:

linia określająca czasownik HTTP, zasób i wersję protokołu,
linie zawierające nagłówki,
pustą linię określającą koniec nagłówków,
ciało wiadomości (jeśli istnieje).

```http
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.63 Safari/537.36
Accept-Encoding: gzip, deflate

```

Serwer odpowiada na żądanie klienta wysyłając odpowiedź. Podobnie jak w przypadku zapytania format jest dokładnie określony:

linijka z wersją protokołu i statusem odpowiedzi,
linie zawierające nagłówki,
pustą linię określającą koniec nagłówków,
ciało wiadomości (jeśli istnieje).

```http
HTTP/1.1 200 OK
Server: nginx/1.6.2
Date: Tue, 31 May 2016 16:51:36 GMT
Content-Type: text/html; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: 157
Last-Modified: Wed, 08 Jan 2016 23:11:55 GMT
ETag: "5749770c-1a"
Accept-Ranges: bytes
Connection: close

<!DOCTYPE html>
<html>
  <head>
    <title>An Example Page</title>
  </head>
  <body>
    Hello World, this is a very simple HTML document.
  </body>
</html>
```

Notka: Wszystkie końce linii w nagłówku zapytania i odpowiedzi HTTP to `\r\n`.

# Jak przebiega cały proces obsługi żądania?
DNS Lookup:
* Klient wysyła żądanie DNS Query do serwera DNS (np. dostawcy internetu lub ogólnodostępnego DNS-a jak 8.8.8.8 od Google),
* DNS zwraca adres IP dla hosta widocznego w DNS Query (np. dla adresu www.x-coding.pl dostajemy IP 136.243.73.152).

Ustanowienie połączenia TCP:

* Klient wysyła pakiet SYN,
* Serwer wysyła pakiet SYN-ACK,
* Klient odpowiada pakietem ACK.

Wysłanie żądania HTTP.

Oczekiwanie na odpowiedź serwera.

Odebranie pierwszego pakietu z serwera.

Odebranie drugiego segmentu TCP z flagą PSH (push — informacja w protokole, że dane należy przesłać dalej do aplikacji, zamiast buforować).

Klient odpowiada pakietem ACK co drugi segment z serwera

Po odebraniu danych klient wysyła pakiet FIN do zakończenia połączenia TCP.

## Nagłówki żądania
Cookie – przesyłane są ciasteczka, które zostały ustawione w przeglądarce. Ciasteczka są najczęściej wykorzystywane jako identyfikator (np. podczas logowania), dzięki czemu użytkownik nie jest zmuszony do udzielania tych samych informacji podczas kolejnych wizyt

User-Agent – nagłówki wykorzystywane podczas budowania statystyk odwiedzin naszej witryny, identyfikują rodzaj przeglądarki i roboty

Host – nagłówek służący do stawiania wielu witryn na jednym serwerze

X-Requested-With – jest to definicja wszystkich dodatkowych elementów wysłanych wraz z zapytaniem. Najczęściej stosuje się ją do przekazywania cookiesów pomiędzy serwerem a klientem, np. do realizacji autoryzacji użytkownika lub reklam kierowanych.

Accept-Language – określa język przeglądarki i wyświetla treść adekwatną do zapytania

## Nagłówki odpowiedzi
Allow – nagłówek określający jakie rodzaje żądań obsługuje serwer (GET/.POST/DELETE/PUT)

Content-Type – dzięki temu nagłówkowi zostajemy poinformowani o formacie i stronie kodowej wysłanej odpowiedzi

Content-Length – określa w bitach długość zapytania. Służy do to tego, aby odbiorca zapytania mógł sprawdzić czy otrzymał całe zapytanie i czy zostało wysłane poprawnie.

Expires – nagłówek określający deadline, datę po której wskazany dokument nie będzie aktualny

Location – nagłówek wymuszający przekierowanie na dany adres

Set-Cookie – nagłówek przekazujący przeglądarce ustawienia określonych plików Cookie

Transfer-Encoding – określa przekazanie zawartości dokumentu. Metody przekazywania dzielimy na:
* chunked — przesyłanie zawartości kawałkami
* identity — tekst nieskompresowany
* gzip — dane skompresowane algorytmem DEFLATE
* compress — dane skompresowane algorytmem LZW

## HTTP 1.1 vs HTTP 2 ogólnie
Protokół HTTP 1.1 pojawił się jako draft w październiku 1997 roku, a w czerwcu 1999 był już w wersji RFC 2616, czyli obowiązującym do dzisiaj standardzie. Prawie 20 lat, jakie upłynęło od tego czasu, dało o sobie znać i obecnie największymi ograniczeniami, jakie wiążą się z używaniem HTTP 1.1, są:

* jedno żądanie na jedno połączenie TCP — przeglądarki radzą sobie z tym, ustanawiając kilka jednoczesnych połączeń (ich maksymalna liczba zależy od przeglądarki),
* konieczność powtarzania wielu nagłówków HTTP przez każde żądanie, co przy wielu żądaniach wprowadza spory narzut komunikacyjny.

W protokole HTTP 2 mamy natomiast kilka ciekawych elementów znacząco poprawiających wrażenie użytkownika:

* kilka równoległych żądań na jednym połączeniu TCP,
* skompresowane nagłówki,
* możliwość wysyłania przez serwer do klienta danego zasobu od razu (push), zamiast czekać na jego żądanie (np. na plik CSS czy JS).

## Lepsze porównanie protokołów

### HTTP2 jest binarny a HTTP1.x tekstowy.
Binary protocols are more efficient to parse, more compact “on the wire”, and most importantly, they are much less error-prone, compared to textual protocols like HTTP/1.x, because they often have a number of affordances to “help” with things like whitespace handling, capitalization, line endings, blank lines and so on.

For example, HTTP/1.1 defines four different ways to parse a message; in HTTP/2, there’s just one code path.

### HTTP2 jest multipleksowany

HTTP/1.x has a problem called “head-of-line blocking,” where effectively only one request can be outstanding on a connection at a time.

HTTP/1.1 tried to fix this with pipelining, but it didn’t completely address the problem (a large or slow response can still block others behind it). Additionally, pipelining has been found very difficult to deploy, because many intermediaries and servers don’t process it correctly.

This forces clients to use a number of heuristics (often guessing) to determine what requests to put on which connection to the origin when; since it’s common for a page to load 10 times (or more) the number of available connections, this can severely impact performance, often resulting in a “waterfall” of blocked requests.

Multiplexing addresses these problems by allowing multiple request and response messages to be in flight at the same time; it’s even possible to intermingle parts of one message with another on the wire.

This, in turn, allows a client to use just one connection per origin to load a page

HTTP persistent connection, also called HTTP keep-alive, or HTTP connection reuse, is the idea of using a single TCP connection to send and receive multiple HTTP requests/responses, as opposed to opening a new connection for every single request/response pair. The newer HTTP/2 protocol uses the same idea and takes it further to allow multiple concurrent requests/responses to be multiplexed over a single connection.

In HTTP 1.1, all connections are considered persistent unless declared otherwise.
Keepalive makes it difficult for the client to determine where one response ends and the next response begins, particularly during pipelined HTTP operation. This is a serious problem when Content-Length cannot be used due to streaming. To solve this problem, HTTP 1.1 introduced a chunked transfer coding that defines a last-chunk bit.[10] The last-chunk bit is set at the end of each response so that the client knows where the next response begins.

In HTTP 1.1, keep-alive is the default behavior, unless the client explicitly asks the server to close the connection by including a Connection: close header in its request, or the server decides to includes a Connection: close header in its response.

Advantages:
* Reduced latency in subsequent requests (no handshaking).
* Reduced CPU usage and round-trips because of fewer new connections and TLS handshakes.
* Enables HTTP pipelining of requests and responses.
* Reduced network congestion (fewer TCP connections).
* Errors can be reported without the penalty of closing the TCP connection.


