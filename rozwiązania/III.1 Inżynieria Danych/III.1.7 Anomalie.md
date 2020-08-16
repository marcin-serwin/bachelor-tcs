Czym są tzw. anomalie w bazach danych? W jaki sposób zwalcza się anomalie?

---

# Anomalie
Anomalia w bazie danych to jakieś jej niepożądane zachowanie. Są trzy rodzaje anomalii:

  * **Wprowdzania danych** — wprowadzenie pewnej informacji jest możliwe tylko wtedy, gdy jednocześnie wprowadzamy jakąś inną informację, która może być obecnie niedostępna.

  * **Modyfikacji danych** — informacja zostanie zmodyfikowana w pewnych krotkach, a w innych nie. Rozsypuje się spójność bazy, nie wiadomo która informacja jest prawdziwa.

  * **Usuwania danych** — usuwanie częsci informacji powoduje utratę innej informacji, której nie chcielibyśmy stracić.

Dodatkowo należy również wspomnieć o **redundancji** - zjawisku gdy ta sama informacja jest przechowywana wielokrotnie. Procesem usuwania redundancji i innych anomalii jest [normalizacja](III.1.1 Normalizacja.md).


## Przykład

### Relacja
Mamy daną relację `Dostawy`. Załóżmy że `Nazwisko` jednoznacznie identyfikuje dostawcę.

| Nazwisko | Adres               | Produkt | Cena |
|--------------|--------------------|-------------|--------|
| Kowalski  | ul. Krucza 10   | chipsy    | 1,50  |
| Kowalski  | ul. Krucza 10   | orzeszki | 3,50  |
| Kowalski  | ul. Krucza 10   | gruszki   | 2,00  |
| Nowak     | ul. Malwowa 4 | chipsy    | 2,00  |
| Nowak     | ul. Malwowa 4 | orzeszki | 1,50  |
| ...             | ...                      | ...           | ...      |

### Problemy
1. **Redundancja danych** - powtarzają się dane o adresie dostawcy.

2. **Anomalia wprowadzania danych** - załóżmy, że chcemy wprowadzić informację o nowym dostawcy, tj. jego nazwisko i adres. Niestety, informacji tej nie można wprowadzić do relacji `Dostawcy` tak długo, jak długo dostawca nie dostarcza żadnych produktów.

3. **Anomalia modyfikacji danych** - aktualizując adres dostawcy aktualizację tę musimy wprowadzić do wszystkich krotek zawierających adres dostawcy. Może to prowadzić do potencjalnej niespójności danych, gdy którąś krotkę przeoczymy.

4. **Anomalia usuwania danych** -  załóżmy, że rezygnujemy z usług dostawcy Nowak. Usuwając informację o dostawach Nowaka mimo woli usuwamy informacje o samym dostawcy, które być może chcielibyśmy zachować.


### Rozwiązanie
Oczywistym rozwiązaniem tutaj jest dekompzycja tabeli `Dostawy` na dwie - `Dostawy` i `Dostawcy`. W jednej trzymamy dane o dostawach a w drugiej o dostawcach i wiążemy je po `Nazwisku` dostawcy (po kluczu podstawowym relacji `Dostawcy`).
