Wirtualne Sieci Prywatne - VPN.

---

## Definicja

Wirtualna Sieć Prywatna (Virtual Private Network - VPN) jest siecią, która pozwala komunikować się komputerom, które mogą być od siebie w jakiś sposób oddzielone, tak, jak by były w tej samej sieci prywatnej, bez potrzeby posiadania fizycznego łącza prywatnego.

To, że sieć jest wirtualna, oznacza, że jest tylko pewnym bytem logicznym i nie ma żadnych składników fizycznych jak routery, switche i kable. VPN jest nadbudowana na istniejących protokołach sieciowych i obsługiwana całkowicie przez dedykowane oprogramowanie.

## Właściwości i zastosowania

VPNy:

 - są całkowicie przeźroczyste dla użytkownika i programów komunikujących się przez sieć.
 - implementują drugą (łącza danych), albo trzecią (sieci) warstwę modelu OSI.
 - często implementują szyfrowanie całego ruchu pomiędzy wszystkimi urządzeniami w sieci. 

   Z tego powodu, często używane są jako dodatkowe zabezpieczenie ruchu, pomiędzy serwerami znajdującymi się w różnych serwerowniach. Innym zastosowaniem, jest udostępnienie pracownikom, poprzez VPN, dostępu do sieci wewnętrznej danej firmy, by mogli oni mieć bezpieczny dostęp do wszystkich jej zasobów. Często też, całe sieci w oddziałach firm, są ze sobą łączone za pomącą VPNów.

 - często implementują trawersowanie NAT, dzięki czemu dwa komputery będące w innych sieciach lokalnych za NAT, mogą swobodnie nawiązać bezpośrednią komunikację.
 - mogą też kompresować cały ruch sieci, w celu zwiększenia przepustowości.

## Implementacja

By dane urządzenie, było w stanie dołączyć do konkretnej sieci VPN, musi połączyć się używając rzeczywistego adresu IP, do jakiegoś innego urządzenia, które znajduje się już w tej sieci. Często też, urządzenia do których można się połączyć, są w jakiś sposób wyszczególnione i zajmują się także autentykacją i autoryzacją nowych urządzeń.

Cała wymiana pakietów, pomiędzy urządzeniami w sieci VPN, zależy od jej architektury

 - pełna centralizacja - wyodrębniony jest zbiór serwerów i cały ruch sieci przez nie przechodzi
 - częściowa centralizacja - serwery potrzebne są tylko po to, by dwa inne urządzenia mogły zacząć komunikować się ze sobą bezpośrednio
 - całkowita decentralizacja - każde urządzenie, może bezpośrednio zacząć komunikować się z każdym innym
 - jakaś mieszanka wszystkich powyższych

W przypadku całkowitej decentralizacji i dużych sieci, problemem staje się autoryzacja dostępu do sieci, odpada na przykład możliwość logowania się za pomocą loginu i hasła. Rozwiązaniem jest zastosowanie kryptografii asymetrycznej i podpisów cyfrowych.
