Transport Layer Security. Opisz jak TLS (SSL) używa kryptografii klucza
publicznego i kryptografii klucza symetrycznego. Opisz schemat certyfikacji kluczy stosowany w TLS. Opisz API do obsługi TLS w bibliotece standardowej (moduł ssl) w języku Python.

---
# Wstęp
Here is a very simplified explanation:

Your web browser downloads the web server's certificate, which contains the public key of the web server. This certificate is signed with the private key of a trusted certificate authority.

Your web browser comes installed with the public keys of all of the major certificate authorities. It uses this public key to verify that the web server's certificate was indeed signed by the trusted certificate authority.

The certificate contains the domain name and/or ip address of the web server. Your web browser confirms with the certificate authority that the address listed in the certificate is the one to which it has an open connection.

Your web browser generates a shared symmetric key which will be used to encrypt the HTTP traffic on this connection; this is much more efficient than using public/private key encryption for everything. Your browser encrypts the symmetric key with the public key of the web server then sends it back, thus ensuring that only the web server can decrypt it, since only the web server has its private key.

Note that the certificate authority (CA) is essential to preventing man-in-the-middle attacks. However, even an unsigned certificate will prevent someone from passively listening in on your encrypted traffic, since they have no way to gain access to your shared symmetric key.

# Kryptografia klucza publicznego (kryptografia asymetryczna) 
Rodzaj kryptografii, w którym jeden z używanych kluczy jest udostępniony publicznie. Każdy użytkownik może użyć tego klucza do zaszyfrowania wiadomości, ale tylko posiadacz drugiego, tajnego klucza może odszyfrować taką wiadomość. Istnieją również bardziej zaawansowane algorytmy wykorzystujące więcej kluczy i inne zależności między kluczami.

Szyfrowanie kluczem publicznym polega na tym, że każda strona zaangażowana w transakcje przesyłania danych posiada dwa klucze: publiczny oraz prywatny. Klucz publiczny, jak sama nazwa wskazuje, jest powszechnie dostępny, natomiast klucz prywatny przechowywany jest lokalnie w ścisłej tajemnicy. Informacje zaszyfrowane kluczem publicznym mogą zostać odszyfrowane tylko kluczem prywatnym (dzięki temu mamy pewność że informacje odczyta tylko i wyłącznie adresat), natomiast informacje zaszyfrowane kluczem prywatnym mogą zostać odszyfrowane za pomocą klucza publicznego (informacje będzie mógł odczytać każdy posiadacz klucza publicznego i będzie mógł stwierdzić, że dane informacje pochodzą od określonej osoby, ponieważ nikt inny nie dysponuje takim kluczem prywatnym i nie mógłby ich wygenerować).

# Kryptografia klucza symetrycznego
W algorytmach symetrycznych klucz służy do szyfrowania i deszyfrowania wiadomości.

Do obu tych czynności używa się tego samego klucza, dlatego powinien być znany tylko uczestnikom. Taki klucz jest przypisany do danej komunikacji, nie do posiadacza, dlatego zwykle do każdego połączenia jest generowany nowy klucz.

# Certyfikat
Cyfrowe certyfikaty to nic innego, jak klucz publiczny jakiejś firmy czy też osoby, zaszyfrowany za pomocą klucza prywatnego zaufanej organizacji, zajmującej się wydawaniem owych certyfikatów, w protokole SSL zwanej CA (ang. Certificate Authority). Jest to centralna, godna zaufania instytucja, powołana specjalnie do tworzenia i rozprowadzania cyfrowych certyfikatów (Lemay, 2001, s. 850).

Klient nie musi mieć certyfikatów, ale dobrą praktyką jest sprawdzenie, kim jest serwer, co oznacza, że klient potrzebuje certyfikatów CA do weryfikacji łańcucha certyfikatów przedstawionego przez serwer. Możliwe jest skonfigurowanie serwera tak, aby żądał certyfikatu uwierzytelnienia klienta.

Certyfikat CA to cyfrowy certyfikat wydany przez urząd certyfikacji (CA), więc klienci SSL (np. Przeglądarki internetowe) mogą go używać do weryfikacji podpisania certyfikatów SSL przez ten urząd certyfikacji.

# TLS
TLS handshake wykorzystuje kryptografię klucza publicznego do uwierzytelnienia tożsamości serwera źródłowego i do wymiany danych używanych do generowania kluczy sesji. Algorytm wymiany kluczy, taki jak RSA lub Diffie-Hellman, wykorzystuje parę kluczy publiczny-prywatny do uzgodnienia kluczy sesji, które są używane do szyfrowania symetrycznego po zakończeniu uzgadniania. Klienci i serwery są w stanie uzgodnić nowe klucze sesji dla każdej sesji komunikacyjnej, tak że inni nie będą w stanie odszyfrować komunikacji, nawet jeśli zidentyfikują lub ukradną jeden z kluczy sesji.

## Zasada działania

### Schemat działania protokołu 
__K → S ClientHello__
Klient wysyła do serwera zgłoszenie zawierające m.in. obsługiwaną wersję protokołu SSL, dozwolone sposoby szyfrowania i kompresji danych oraz identyfikator sesji. Komunikat ten zawiera również liczbę losową używaną potem przy generowaniu kluczy.

__K ← S ServerHello__
Serwer odpowiada podobnym komunikatem, w którym zwraca klientowi wybrane parametry połączenia: wersję protokołu SSL, rodzaj szyfrowania i kompresji, oraz podobną liczbę losową.

__K ← S Certificate__
Serwer wysyła swój certyfikat pozwalając klientowi na sprawdzenie swojej tożsamości (ten etap jest opcjonalny, ale w większości przypadków występuje)

__K ← S ServerKeyExchange__
Serwer wysyła informację o swoim kluczu publicznym. Rodzaj i długość tego klucza jest określony przez typ algorytmu przesłany w poprzednim komunikacie.

__K ← S ServerHelloDone__
Serwer zawiadamia, że klient może przejść do następnej fazy zestawiania połączenia.

__K → S ClientKeyExchange__
Klient wysyła serwerowi wstępny klucz sesji, zaszyfrowany za pomocą klucza publicznego serwera. Na podstawie ustalonych w poprzednich komunikatach dwóch liczb losowych (klienta i serwera) oraz ustalonego przez klienta wstępnego klucza sesji obie strony generują klucz sesji używany do faktycznej wymiany danych. *Uwaga*: wygenerowany klucz jest kluczem algorytmu symetrycznego (typowo DES)! Jest on jednak ustalony w sposób bezpieczny i znany jest tylko komunikującym się stronom.

__K → S ChangeCipherSpec__
Klient zawiadamia, że serwer może przełączyć się na komunikację szyfrowaną.

__K → S Finished__
... oraz że jest gotowy do odbierania danych zaszyfrowanych

__K ← S ChangeCipherSpec__
Serwer zawiadamia, że wykonał polecenie – od tej pory wysyłał będzie tylko zaszyfrowane informacje...

__K ← S Finished__
...i od razu wypróbowuje mechanizm – ten komunikat jest już wysyłany bezpiecznym kanałem


### Uwierzytelnianie klienta
Jak widać na schemacie z poprzedniego punktu, w protokole SSL domyślna sytuacja zakłada tylko uwierzytelnianie serwera. Istnieją jednak metody pozwalające na uwierzytelnienie klienta. W tym celu korzysta się z trzech dodatkowych komunikatów:

__K ← S CertificateRequest__
Po przesłaniu swojego certyfikatu serwer zawiadamia, że chciałby otrzymać certyfikat klienta

__K → S Certificate__
Po otrzymaniu komunikatu ServerHelloDone klient odsyła swój certyfikat

__K → S CertificateVerify__
Klient musi potwierdzić, że faktycznie posiada klucz prywatny odpowiadający wysłanemu certyfikatowi. W tym celu klient podpisuje swoim kluczem prywatnym skrót wszystkich dotychczas ustalonych danych o połączeniu i wysyła go korzystając z tego komunikatu.

# Biblioteka ssl

Moduł ten zapewnia dostęp do szyfrowania Transport Layer Security (często nazywanego „Secure Sockets Layer”) i uwierzytelniania równorzędnego dla gniazd sieciowych, zarówno po stronie klienta, jak i serwera. Ten moduł korzysta z biblioteki OpenSSL.

Klient musi połączyć się z serwerem za pośrednictwem protokołu SSL, pobrać swój certyfikat, sprawdzić, czy certyfikat jest ważny (poprawnie podpisany) i należy do tego serwera (nazwa serwera).
````
import socket
import ssl

HOST = "www.google.com"
PORT = 443

# replace HOST name with IP, this should fail connection attempt,
# but it doesn't in Python 2.x
HOST = socket.getaddrinfo(HOST, PORT)[0][4][0]
print(HOST)

# create socket and connect to server
# server address is specified later in connect() method
sock = socket.socket()
sock.connect((HOST, PORT))

# wrap socket to add SSL support
sock = ssl.wrap_socket(sock,
  # flag that certificate from the other side of connection is required
  # and should be validated when wrapping 
  cert_reqs=ssl.CERT_REQUIRED,
  # file with root certificates
  ca_certs="cacerts.txt"
)
````
Aby sprawdzić, czy certyfikat pasuje do żądanej witryny, należy sprawdzić pole commonName w temacie certyfikatu. Dostęp do tych informacji można uzyskać za pomocą metody getpeercert () zawiniętego gniazda.
````
# security hole here - there should be an error about mismatched host name
# manual check of hostname
cert = sock.getpeercert()
for field in cert['subject']:
  if field[0][0] == 'commonName':
    certhost = field[0][1]
    if certhost != HOST:
      raise ssl.SSLError("Host name '%s' doesn't match certificate host '%s'"
                         % (HOST, certhost))
````
Biblioteka ssl zapewnia obiektom ssl.SSLSocket(socket.socket) metody (ssl jest wraperem dla obiektów socket):
* accept()
* bind()
* close()
* connect()
* fileno()
* getpeername(), getsockname()
* getsockopt(), setsockopt()
* gettimeout(), settimeout(), setblocking()
* listen()
* makefile()
* recv(), recv_into() (but passing a non-zero flags argument is not allowed)
* send(), sendall() (with the same limitation)
* shutdown()

Ponadto mamy metody:
* SSLSocket.read(), SSLSocket.write()
* SSLSocket.do_handshake()
* SSLSocket.getpeercert(binary_form=False) itd.

Aby zweryfikować certyfikat konkretnego serweru, można użyć funkcji match_hostname(cert, hostname)

Ponadto biblioteka zapewnia funkcje generujące liczby losowe.

__SSLContext__ przechowuje różne dane, które żyły dłużej niż pojedyncze połączenia SSL, takie jak opcje konfiguracji SSL, certyfikaty i klucze prywatne. Zarządza także pamięcią podręczną sesji SSL dla socketów po stronie serwera, aby przyspieszyć powtarzające się połączenia od tych samych klientów.

```
import socket, ssl

context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
context.load_cert_chain(certfile="mycertfile", keyfile="mykeyfile")

bindsocket = socket.socket()
bindsocket.bind(('myaddr.mydomain.com', 10023))
bindsocket.listen(5)

def deal_with_client(connstream):
    data = connstream.recv(1024)
    # empty data means the client is finished with us
    while data:
        if not do_something(connstream, data):
            # we'll assume do_something returns False
            # when we're finished with client
            break
        data = connstream.recv(1024)
    # finished with client

while True:
    newsocket, fromaddr = bindsocket.accept()
    connstream = context.wrap_socket(newsocket, server_side=True)
    try:
        deal_with_client(connstream)
    finally:
        connstream.shutdown(socket.SHUT_RDWR)
        connstream.close()
````

