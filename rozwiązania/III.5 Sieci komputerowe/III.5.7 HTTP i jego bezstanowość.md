Opisz i scharakteryzuj protokół HTTP. Wyjaśnij co oznacza (i jakie wynikają z tego trudności), że HTTP jest protokołem bezstanowym.

---

# Wstęp

HTTP (Hypertext Transfer Protocol) - to protokół warstwy aplikacji będący fundamentem WWW (World Wide Web). Za pomocą HTTP przesyła się żądania udostępnienia dokumentów, informacje o kliknięciu w odnośniki, przesyła się formularze, uaktualnia i usuwa dokumenty itp.

Każdy dokument WWW reprezentowany jest jednoznacznie przez adres URL w którym zapisane jest na jakim serwerze znajduje się dany dokument, jaka jest ścieżka tego dokumentu na tym serwerze oraz mogą być zawarte dodatkowe parametry. Dodatkowo adres URL zawiera w sobie protokół jakim udostępniany jest dany zasób i najczęściej jest to właśnie HTTP.

Obecnie jest najczęstszym wyborem do budowania API pomiędzy najróżniejszymi usługami w internecie (najczęściej w architekturze REST). Na przykład Facebook, wystawia HTTP API, dzięki któremu użytkownik może w programowy sposób np. pobrać wszystkie swoje posty. Przesyłane dane są najczęściej serializowane do obiektów JSON, a w starszych API głównie XML.

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

### `If-Modified-Since`

Jednym z ciekawych przykładowych nagłówków jakie może przesłać klient, jest `If-Modified-Since`. Jeśli klient odwiedził dany zasób już kiedyś w historii, może zawrzeć datę odwiedzin w tym nagłówku. Serwer natomiast, odpowiadając na zapytanie, może porównać wartość tego nagłówka, z ostatnim czasem modyfikacji zasobu (jeśli posiada taką informację) i jeśli jest ona nie młodsza, niż ta w przesłana przez klienta, może poinformować po prostu klienta, by wczytał zasób ze swojego lokalnego cache, zamiast przesyłać go jeszcze raz z serwera.

## Odpowiedź

Odpowiedź od serwera zawiera zawsze specjalny kod odpowiedzi i opis słowny, np.

 - 200 OK - zapytanie zakończyło się poprawnie
 - 301 Moved Permamantly - w przypadku kiedy zasób zmienił adres URL
 - 304 Not Modified - może być odpowiedzią serwera, jeśli klient wysłał nagłówek `If-Modified-Since`
 - 403 Forbidden - klient nie ma dostępu do zasobu
 - 404 Not Found - zasób nie istnieje
 - 418 I'm a teapot - tak naprawdę jestem czajniczkiem
 - 500 Internal Server Error - wewnętrzny błąd serwera

oraz ewentualnie dane o które prosił klient.

## Przykład

Poniżej znajduje się przykładowe zapytanie klienta i odpowiedź serwera WWW.

```http
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.63 Safari/537.36
Accept-Encoding: gzip, deflate

```

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

## Uwagi

Protokół HTTP jest protokołem bezstanowym.

HTTP najczęściej działa na porcie 80. Jeśli protokół HTTP jest udostępniany za pośrednictwem połączenia TLS to mówimy o HTTPS który działa najczęściej na porcie 443.

Cały opis protokołu HTTP odnosi się do wersji HTTP/1. Nowa wersja HTTP/2 z 2015 roku zachowuje kody, metody itp. ale jest to protokół już całkowicie binarny, ma komponenty przez które nie jest już bezstanowy, wbudowaną kompresję, multipleksowanie i wiele innych dodatków.

# Bezstanowość

Bezstanowość protokołu oznacza, że serwer przetwarzając zapytanie od klienta nie musi w ogóle pamiętać wcześniejszych zapytań i odpowiedzi, nie musi trzymać w pamięci żadnych informacji o kliencie, nie musi pamiętać żadnego stanu.

HTTP w oczywisty sposób jest protokołem bezstanowym co bardzo upraszcza jego konstrukcję, implementację i działanie. Każdy serwer w dowolnym momencie możemy zrestartować, przeładować konfigurację, klient w przypadku braku odpowiedzi od serwera może spróbować wysłać zapytanie jeszcze raz i efekt będzie taki sam. Bezstanowość bardzo ułatwia projektowanie i analizowanie zachowania protokołu.

Bezstanowość protokołu ma jednak spore konsekwencje, przede wszystkim, mimo, że każde zapytanie może zawierać jakąś niezmienna dla klienta informację jak na przykład wartość pola `User-Agent` to ta informacja musi być, za *każdym* razem, przesłana do serwera. Jeśli na przykład używamy do autoryzacji dostępu do zasobu `HTTP basic access authentication`, to wysyłamy do serwera swój login i hasło z każdym jednym zapytaniem, tak samo wysyłamy za każdym razem nasze wszystkie ciasteczka &#127850;&#127850;&#127850;. Daje to spory narzut na rozmiar wysyłanych danych, zwłaszcza, że HTTP/1 nie wspiera kompresji nagłówka, i tym samym spada wydajność protokołu.
