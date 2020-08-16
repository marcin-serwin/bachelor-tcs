Co to jest wzorzec projektowy? Przedstaw (np. za pomocą diagramów UML)
dwa przykłady wzorców służących do eliminacji/odwrócenia zależności.

---

# Wzorzec projektowy
Uniwersalne, sprawdzone w praktyce rozwiązanie często pojawiających się, powtarzalnych problemów projektowych. Pokazuje powiązania i zależności pomiędzy klasami oraz obiektami i ułatwia tworzenie, modyfikację oraz pielęgnację kodu źródłowego. Jest opisem rozwiązania, a nie jego implementacją. Wzorce projektowe stosowane są w projektach wykorzystujących programowanie obiektowe.

## Podstawowe wzorce
Jednym z najpopularniejszych sposobów klasyfikacji wzorców jest ten zaproponowany przez *Gang of Four*.

  * **Kreacyjne** - opisujące proces tworzenia nowych obiektów; ich zadaniem jest tworzenie, inicjalizacja oraz konfiguracja obiektów, klas oraz innych typów danych.    

  * **Strukturalne** - opisujące struktury powiązanych ze sobą obiektów.

  * **Behawioralne** - opisujące zachowanie i odpowiedzialność współpracujących ze sobą obiektów.

## Przykłady

### Mediator
Wzorzec mediatora – wzorzec projektowy należący do grupy wzorców czynnościowych. Mediator zapewnia jednolity interfejs do różnych elementów danego podsystemu.

Wzorzec mediatora umożliwia zmniejszenie liczby powiązań między różnymi klasami, poprzez utworzenie mediatora będącego jedyną klasą, która dokładnie zna metody wszystkich innych klas, którymi zarządza. Nie muszą one nic o sobie wiedzieć, jedynie przekazują polecenia mediatorowi, a ten rozsyła je do odpowiednich obiektów.

Istotą Wzorca Mediatora jest „zdefiniowanie obiektu, który opisuje sposób interakcji zestawu obiektów”. Promuje luźne sprzężenie, uniemożliwiając bezpośrednie odwoływanie się do obiektów i umożliwia niezależne zmienianie ich interakcji. Klasy klientów mogą używać mediatora do wysyłania wiadomości do innych klientów i mogą odbierać wiadomości od innych klientów za pośrednictwem zdarzenia w klasie mediatora.

![](../../resources/W3sDesign_Mediator_Design_Pattern_UML.jpg)


### Wstrzykiwanie zależności
Zobacz [Wstrzykiwanie zależności](III.2.2 Wstrzykiwanie zależności.md).
