TCP. Opisz technikę Sliding Window. Opisz w jaki sposób algorytmy TCP
sterują prędkością transmisji. Opisz API do obsługi połączeń TCP w bibliotece standardowej (moduł socket) w języku Python.

---

# Sliding Window
Technika Sliding Window jest stosowana w protokołach transmisji danych opartych na pakietach. Protokoły przesuwnych okien są stosowane tam, gdzie wymagane jest niezawodne dostarczanie pakietów w kolejności, na przykład w warstwie łącza danych (warstwa 2 OSI), a także w protokole kontroli transmisji (TCP).

Technika przesuwającego się okna wykorzystuje przepustowość sieci. Umożliwia wysyłanie wielu pakietów przed otrzymaniem potwierdzenia. W rozwiązaniu tym umieszcza się na ciągu pakietów ustalonego rozmiaru okna i przesłanie wszystkich pakietów, które znajdują się w jego obrębie. Mówimy, że pakiet jest niepotwierdzony, jeżeli został wysłany, a nie nadeszło dla niego potwierdzenie. Liczba pakietów niepotwierdzonych w danej chwili jest wyznaczona przez rozmiar okna.
Dla protokołu z przesuwającym się oknem , którego rozmiar jest np. równy 8, nadawca ma możliwość wysłania przed otrzymaniem potwierdzenia do 8 pakietów. Gdy nadawca odbierze potwierdzenie dla pierwszego pakietu, okno przesuwa się i zostaje wysłany następny pakiet. Okno przesuwa się dalej gdy przychodzą kolejne potwierdzenia.

# Prędkość TCP
* Rozmiar okna odbiorcy i nadawcy, czyli ilość danych, które komputer może zaakceptować bez potwierdzenia nadawcy. Jeśli nadawca nie otrzyma potwierdzenia dla pierwszego wysłanego pakietu, zatrzyma się i zaczeka, a jeśli czas oczekiwania przekroczy określony limit, może nawet ponownie wysłać. W ten sposób TCP osiąga niezawodną transmisję danych.
* Przechowywanie pakietów z wyższymi numerami niż oczekiwany
* Nie wysyłanie potwierdzeń w każdym pakiecie (np. co drugi)

# Socket
Użycie Socket jest sposobem na połączenie dwóch węzłów w sieci w celu komunikowania się ze sobą. Jeden socket (węzeł) nasłuchuje na określonym porcie pod adresem IP, podczas gdy inny socket kontaktuje się z drugim, aby utworzyć połączenie. Serwer tworzy socket nasłuchiwania, podczas gdy klient kontaktuje się z serwerem.

Importowanie biblioteki i utworzenia prostego socketa.
````
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
````

Tutaj stworzyliśmy instancję gniazda i przekazaliśmy jej dwa parametry. AF_INET odnosi się do rodziny adresów ipv4. SOCK_STREAM oznacza protokół TCP.

Teraz możemy połączyć się z serwerem za pomocą tego socketa.

Łączenie z serwerem:

Zauważ, że jeśli podczas tworzenia gniazda wystąpi jakikolwiek błąd, generowany jest błąd socket.error i możemy połączyć się z serwerem tylko, wiedząc, że jest to ip. Możesz znaleźć adres IP serwera, używając:
````
ip = socket.gethostbyname('www.google.com')
````
Skrypt, który łączy socket z google
````
er_none
edit
play_arrow

brightness_4
# An example script to connect to Google using socket 
# programming in Python 
import socket # for socket 
import sys  
  
try: 
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
    print "Socket successfully created"
except socket.error as err: 
    print "socket creation failed with error %s" %(err) 
  
# default port for socket 
port = 80
  
try: 
    host_ip = socket.gethostbyname('www.google.com') 
except socket.gaierror: 
  
    # this means could not resolve the host 
    print "there was an error resolving the host"
    sys.exit() 
  
# connecting to the server 
s.connect((host_ip, port)) 
  
print "the socket has successfully connected to google \ 
on port == %s" %(host_ip) 
````
Output:
````
Socket successfully created
the socket has successfully connected to google 
on port == 173.194.40.19
````

* Najpierw utworzyliśmy socket.
* Następnie znaleźliśmy adres IP google i wreszcie połączyliśmy się z google.

Teraz musimy wiedzieć, jak możemy wysłać niektóre dane.
Do wysyłania danych biblioteka socket ma funkcję sendall. Ta funkcja umożliwia wysyłanie danych do serwera, do którego socket jest podłączone, a serwer może również wysyłać dane do klienta za pomocą tej funkcji.

Prosty program serwer-klient:

Serwer :
Serwer ma metodę bind (), która wiąże go z konkretnym adresem ip i portem, dzięki czemu może nasłuchiwać przychodzących żądań na tym ip i porcie. Serwer ma metodę listen (), która przełącza serwer w tryb nasłuchiwania. Dzięki temu serwer nasłuchuje połączeń przychodzących. I wreszcie serwer ma metodę accept () i close (). Metoda accept inicjuje połączenie z klientem, a metoda close zamyka połączenie z klientem.
````
# first of all import the socket library 
import socket                
  
# next create a socket object 
s = socket.socket()          
print "Socket successfully created"
  
# reserve a port on your computer in our 
# case it is 12345 but it can be anything 
port = 12345                
  
# Next bind to the port 
# we have not typed any ip in the ip field 
# instead we have inputted an empty string 
# this makes the server listen to requests  
# coming from other computers on the network 
s.bind(('', port))         
print "socket binded to %s" %(port) 
  
# put the socket into listening mode 
s.listen(5)      
print "socket is listening"            
  
# a forever loop until we interrupt it or  
# an error occurs 
while True: 
  
   # Establish connection with client. 
   c, addr = s.accept()      
   print 'Got connection from', addr 
  
   # send a thank you message to the client.  
   c.send('Thank you for connecting') 
  
   # Close the connection with the client 
   c.close() 
````
* Najpierw importujemy socket.
* Następnie stworzyliśmy obiekt gniazda i zarezerwowaliśmy port na naszym komputerze.
* Następnie powiązaliśmy nasz serwer z określonym portem. Przekazanie pustego ciągu oznacza, że serwer może również odbierać połączenia przychodzące z innych komputerów. Gdybyśmy przeszli 127.0.0.1, wówczas wysłuchałoby tylko tych połączeń wykonanych na komputerze lokalnym.
* Następnie przełączamy serwer w tryb nasłuchiwania. 5 oznacza tutaj, że 5 połączeń będzie czekało, jeśli serwer będzie zajęty, a jeśli szóste gniazdo spróbuje się połączyć, połączenie zostanie odrzucone.
* W końcu wykonujemy pętlę while i zaczynamy akceptować wszystkie połączenia przychodzące i zamykamy te połączenia po wiadomości z podziękowaniem dla wszystkich podłączonych gniazd.

Klient:

Teraz potrzebujemy czegoś, z czym serwer może współpracować. Wpisz następujące polecenia w terminalu:

````
# start the server
$ python server.py
````
trzymaj powyższy terminal otwarty

Teraz po stronie klienta:
````

# Import socket module 
import socket
  
# Create a socket object 
s = socket.socket()
  
# Define the port on which you want to connect 
port = 12345
  
# connect to the server on local computer 
s.connect(('127.0.0.1', port)) 
  
# receive data from the server 
print s.recv(1024) 
# close the connection 
s.close()
````

Przede wszystkim tworzymy obiekt gniazdowy.
Następnie łączymy się z hostem lokalnym na porcie 12345 (port, na którym działa nasz serwer), a na koniec otrzymujemy dane z serwera i zamykamy połączenie.
Teraz zapisz ten plik jako client.py i uruchom go z terminala po uruchomieniu skryptu serwera.
````
# start the server:
$ python server.py
Socket successfully created
socket binded to 12345
socket is listening
Got connection from ('127.0.0.1', 52617)
# start the client:
$ python client.py
Thank you for connecting
````
