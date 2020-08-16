Błędy transmisji. Podaj przykłady technologii sieciowych wykrywających /
korygujących błędy komunikacji. Z jakich algorytmów korzystają? W jaki sposób protokół TCP wykrywa błędy transmisji i jak na nie reaguje?

---

# Wprowadzenie
W teorii informacji i kodowania teorię z aplikacji w informatyce i telekomunikacji , detekcji i korekcji błędów lub kontroli błędów są techniki, które umożliwiają niezawodne dostarczanie danych cyfrowych przez niepewne kanały komunikacji . Wiele kanałów komunikacyjnych podlegają szumu kanału, a więc błędy mogą zostać wprowadzone podczas transmisji od źródła do odbiornika. Techniki wykrywania błędów umożliwiają wykrywanie takich błędów, podczas korekcji błędów umożliwia rekonstrukcję oryginalnych danych w wielu przypadkach.

# Przykłady
* ALOHAnet - wysylanie, jeżeli nie ma potwierdzenia, to wyślij jeszcze raz
* Carrier Sense (wykrywanie nośnej) określa fakt, iż nadajnik nasłuchuje ruchu w medium, zanim będzie próbował przesłać nim sygnał. Takie podejście pozwala na wykrycie obecności sygnału wysłanego z innego nadajnika i pozwala na bezkolizyjne przesłanie własnego sygnału. Jeśli medium jest zajęte, wszystkie nadajniki na nim pracujące muszą czekać na zwolnienie, czyli do momentu, gdy sygnał dotrze do celu.
* Każda ramka Ethernet wykorzystuje wykrywanie błędów CRC-32. Ramki z wykrytymi błędami są odrzucane przez sprzęt odbiornika (n-bitowy cykliczny kod nadmiarowy (n-bitowy CRC) definiuje się jako resztę z dzielenia ciągu danych przez (n+1)-bitowy dzielnik CRC, zwany również wielomianem CRC).
* Nagłówek IPv4 zawiera sumę kontrolną chroniącą zawartość nagłówka. Pakiety z nieprawidłowymi sumami kontrolnymi są upuszczane w sieci lub w odbiorniku.
Suma kontrolna została pominięta w nagłówku IPv6, aby zminimalizować koszty przetwarzania w routingu sieciowym i ponieważ zakłada się, że obecna technologia warstwy łącza zapewnia wystarczające wykrywanie błędów.
* UDP ma opcjonalną sumę kontrolną chroniącą przesyłane dane i informacje adresowe w nagłówkach UDP i IP. Pakiety z niepoprawnymi sumami kontrolnymi są odrzucane przez stos sieciowy. Suma kontrolna jest opcjonalna w przypadku IPv4 i wymagana w przypadku IPv6. W przypadku pominięcia przyjmuje się, że warstwa łącza danych zapewnia pożądany poziom ochrony przed błędami.
* TCP zapewnia sumę kontrolną do ochrony przesyłanych danych i informacji adresowych w nagłówkach TCP i IP. Pakiety z niepoprawnymi sumami kontrolnymi są odrzucane przez stos sieciowy i ostatecznie zostają ponownie przesłane za pomocą ARQ, jawnie (np. Poprzez potrójne potwierdzenie) lub pośrednio z powodu przekroczenia limitu czasu.

# TCP
W celu weryfikacji wysyłki i odbioru TCP używa sum kontrolnych i sekwencyjnych numerów pakietów. Odbiorca potwierdza otrzymanie pakietów o określonych numerach sekwencyjnych ustawiając flagę ACK. Brakujące pakiety są retransmitowane. Host odbierający pakiety TCP defragmentuje je i porządkuje je według numerów sekwencyjnych tak, by przekazać wyższym warstwom modelu OSI pełen złożony segment.


