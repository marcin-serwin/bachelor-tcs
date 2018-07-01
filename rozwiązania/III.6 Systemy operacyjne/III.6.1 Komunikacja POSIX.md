Opisz mechanizmy komunikacji międzyprocesowej standardu POSIX.

---

# IPC - InterProcess Communication

## Pipe (FIFO)
Pipe jest skierowanym strumieniem (kanałem) danych. Dane pisane do jednego końca pipe'a są buforowane przez system operacyjny aż do momentu odczytania ich z drugiej strony. Dostęp do pipe'a zapewniony jest przez syscalle `read/write` na odpowiednich deskryptorach plików. Pipe istnieje tak długo, jak procesy, które go utworzyły.

### Named pipe
Rodzaj pipe'a, który jest widoczny w systemie plików. Dany pipe identyfikowany jest przez ścieżkę, a nie numer deskryptora, jak to się dzieje w przypadku unnamed pipe'a. Dodatkowo żywotność takiego pipe'a nie zależy od procesu, który go utworzył.

## Signal
Wiadomość systemowa przesyłana z jednego procesu do drugiego. Nie jest używany do przesyłania danych - jego zastosowanie ogranicza się do wywołania konkretnej komendy na docelowym procesie (np. polecenie zakończenia procesu lub wykonanie koniecznych kroków po zakończonym dziecku).

## Semafor
Prosta struktura służąca synchronizacji procesów. Można na niej wywoływać operacje `up` oraz `down`. Niezerowa wartość oznacza dostępność danego zasobu. W przypadku próby dekrementacji semafora z wartością 0 następuje uśpienie procesu. Inkrementacja z zera na dodatnią wartość powoduje wybudzenie uśpionych wcześniej procesów.

## Współdzielona pamięć
Wiele procesów ma równocześnie dostęp do tego samego bloku pamięci.

### Memory-mapped file
Mechanizm mapujący fragment pliku do pamięci wirtualnej. Umożliwia to wielu procesom jednoczesne modyfikowanie zawartości pliku bezpośrednio w pamięci. Patrz pytanie [III.4.2](../III.4 Programowanie Niskopoziomowe/III.4.2 Sekwencja wydarzeń gdy program odczytuje zmmapowany plik z dysku.md).

### Anonymous
Mapowanie tego samego obszaru pamięci w wielu różnych procesach bez istnienia pliku na dysku. Najbardziej popularne współdzielenie pamięci.

## File locking
Dwa procesy mogą otworzyć ten sam plik, a następnie nakładać locki na zakresy bajtów w tym pliku oraz sprawdzać czy inne procesy nie mają założonych locków na zakresy bajtów.

## Socket
Służy do dwukierunkowej (w przeciwieństwie do jednokierunkowej FIFO) komunikacji poprzez wysyłanie i odbieranie strumienia danych. Istnieje kilka rodzajów socketów, dwa przykładowe to:
  * UNIX - służy do komunikacji procesów na tej samej maszynie, identyfikowany jako plik na dysku.
  * TCP/IP - służy do komunikacji między procesami na tej samej maszynie lub w tej samej sieci poprzez interfejs sieciowy.

## POSIX Threads
W systemie posixowym, każdy proces może składać się z wielu podprocesów - wątków. Wątki domyślnie współdzielą całą pamięć procesu. Do komunikacji między nimi można używać tych samych mechanizmów co do komunikacji pomiędzy procesami, ale jest też dostępne kilka innych.

### Mutex
Binarna wersja semafora, która przynależy do **konkretnego zadania**. Jeśli zadanie `A` obniżyło wartość mutexu `M` z 1 na 0, to **tylko zadanie A** może zwolnić mutex `M`.

### Conditional variable
Mechanizm używany w połączeniu z mutexami. CV udostępniają trzy metody: 
 * `wait` - zawieszenie się na danej CV,
 * `signal` - wybudzenie jednego czekającego procesu,
 * `broadcast` - wybudzenie wszystkich procesów.
