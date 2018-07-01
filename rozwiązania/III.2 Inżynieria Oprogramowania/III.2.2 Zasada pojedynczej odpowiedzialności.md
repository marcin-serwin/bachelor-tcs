Co to jest zasada pojedynczej odpowiedzialności? Podaj przykład zgodny z tą zasadą i przykład, który ją łamie.

---

# Zasada pojedynczej odpowiedzialności
Założenie programowania obiektowego, mówiące że klasa powinna mieć tylko jedno zadanie. Nie powinien istnieć więcej niż jeden powód do jej modyfikacji. Dzięki temu architektura jest spójna i hermetyczna.

## Przykład
Naszym zadaniem jest napisanie programu, który generuje i drukuje raport.

### Niepoprawne rozwiązanie
Tworzymy klasę, która robi jedno i drugie. Czyli powstaje moduł odpowiadający za dwa procesy. Tym samym mogą wystąpić dwa powody do jego modyfikacji. Po pierwsze, może zmienić się treść generowanego raportu, po drugie – format, w jakim jest on drukowany.

Aby złamać zasadę wystarczy w klasie `Report`:
  * Dodać metodę `Print()`, która drukuje raport.
  * Dodać statyczną metodę `Report.Generate(Data data)`, która tworzy obiekt typu `Report` z jakichś danych programu.

### Poprawne rozwiązanie
Zasada pojedynczej odpowiedzialności mówi, że oba te procesy powinny być niezależne i zaimplementowane w postaci dwóch oddzielnych klas lub modułów, które komunikują się ze sobą przy pomocy publicznych interfejsów. Czyli:

  * `Report` - reprezentuje raport.
  * `ReportGenerator` - reprezentuje obiekt, który wie jak generować obiekt typu `Report` z danych programu.
  * `ReportPrinter` - reprezentuje obiekt, który wie jak wydrukować obiekt typu `Report`.
