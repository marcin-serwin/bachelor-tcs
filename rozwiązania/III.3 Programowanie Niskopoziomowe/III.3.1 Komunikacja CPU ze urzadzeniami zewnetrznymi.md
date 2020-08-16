Opisz mechanizmy komunikacji CPU z urządzeniami zewnętrznymi.
---

# Mechanizmy komunikacji CPU z urządzeniami zewnętrznymi
Najprostsza forma kontaktu z urządzeniami peryferyjnymi odbywa się za pomocą specjalnych instrukcji I/O: `in` i `out`
(odczyt/zapis wartości z/do jakiegoś portu).
Komenda `in 0x80` (specjalny adres klawiatury) odczytuje jeden bajt z kontrolera klawiatury do rejestru AL.
Przy takim podejściu procesor jest zajęty przez cały czas trwania transferu danych i nie może wykonywać innych obliczeń.

Obecnie dostęp do zewnętrznych systemów (RAM, dysk, karta sieciowa...) odbywa się przez **magistralę systemową**.
Jest to system komunikacyjny przenoszący sygnały między podłączonymi komponentami. Zwykle składa się z trzech
podstawowych szyn: **sterująca** (gdzie wysyłany jest sygnał określający rodzaj operacji), **adresowa** (określa gdzie sygnał
ma zostać zapisany/odczytany) i **danych** (gdzie przesyłane są właściwe dane, np. z odczytu/do zapisu).
Magistrala systemowa obsługuje mapowane adresy. Oznacza to, że pewien przedział adresów fizycznych będzie odpowiadał
pamięci RAM, inny karcie graficznej etc. Kontroler magistrali (PCI, nowszy PCI Express lub inny) wie do czego
należy jaki przedział adresów.

Urządzenia mają też możliwość wysyłania sygnałów do procesora - tzw. **przerwań**. Przerwania zatrzymują
aktualnie wykonywany proces, zapamiętują stan procesora (instruction pointer, flagi procesora i niektóre rejestry),
po czym zaczynają wykonywać "interrupt handler". Po wykonaniu interrupt handlera stan procesora jest przywracany i następuje
skok do poprzednio zapisanego instruction pointera.
Przykładowo wciśnięcie klawisza na klawiaturze sprawia, że procesor przerywa aktualne zadanie, rejestruje jaki
klawisz został naciśnięty i wraca do poprzedniego zadania.

Oba te systemy pozwalają na **transfer danych bez zbędnego zajmowania czasu procesora**. Direct memory access (DMA) to
technika gdzie urządzenie (procesor lub inny system) inicjuje transfer z/do pamięci RAM poprzez odpowiednie polecenie do magistrali systemowej.
Gdy dane są już dostępne (odczyt z dysku czy z karty sieciowej może być bardzo wolny w stosunku do prędkości procesora),
procesor otrzymuje przerwanie mówiące, że operacja się zakończyła i można skorzystać z jej wyniku. Między inicjalizacją
transferu a faktyczną dostępnością danych **procesor może wykonywać zupełnie inne operacje**.

Do wydawania poleceń dla magistrali systemowej wciąż używa się instrukcji `out`. Ustawia ona odpowiednie kody komend
i interesujące adresy fizyczne na portach procesora.
