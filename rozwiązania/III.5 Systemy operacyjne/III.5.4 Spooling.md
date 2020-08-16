Wyjaśnij mechanizm spooling, podaj przykłady kiedy należy oraz kiedy nie
da się używać spoolingu jako mechanizmu racjonalizującego dostęp do zasobu.

---

# Spooling (simultaneous peripheral operations on-line)
Spooling jest mechanizmem obsługi specjalnie dedykowanych urządzeń I/O w wielozadaniowym systemie operacyjnym, które często są wolniejsze od reszty systemu. Sposób ten polega na tym, że urządzenie nie udostępnia biblioteki procedur, za pomocą których można komunikować się z urządzeniem, ale zamiast tego tworzony jest specjalny **proces działający w tle (demon)** oraz dedykowany folder _(nie musi to być folder w systemie pilków)_ - **spooling directory**. Procesy użytkownika umieszczają dane w tym folderze (w kolejności FIFO), a demon decyduje w jaki sposób zlecić je do "wykonania" na urządzeniu.

## Przykłady
Sztandarowym urządzeniem, które wykorzystuje mechanizm spoolingu, jest drukarka. Rywalizacja między procesami o drukarkę niosłaby niekorzystne efekty, jak blokowanie jej na długi czas poprzez wolne produkowanie pliku.

Innym rodzajem wykorzystania może być transfer danych poprzez sieć lub w komunikacji ze starymi, powolnymi urządzeniami (taśma magnetyczna, karta dziurkowana). Mechanizm wykorzystywany jest również w systemach wsadowych w celu utrzymywania kolejki gotowych zadań do uruchomienia.

## Kiedy nie używać?
Spooling jest złym rozwiązaniem, kiedy nie chcemy czekać na efekt po zakończeniu wprowadzania danych, tylko zaobserwować je od razu. Przykładem może być wprowadzanie liter na klawiaturze - oczekujemy, że pojawią się one na ekranie natychmiast, a nie po naciśnięciu "ENTER".
