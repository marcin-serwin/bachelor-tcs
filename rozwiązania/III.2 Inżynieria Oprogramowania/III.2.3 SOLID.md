Co oznacza mnemonik SOLID? Omów krótko trzy wybrane zasady.

---

# SOLID
Mnemonik opisujący pięć podstawowych założeń programowania obiektowego.

## S - Single responsibility principle
Zobacz [zasada pojedynczej odpowiedzialności](III.2.2 Zasada pojedynczej odpowiedzialności.md).

## O - Open/closed principle
Klasy, moduły, funkcje, itd. powinny być otwarte na rozszerzanie i zamknięte na modyfikacje. Kiedy zmienią się wymagania co do *działania*, powinien być *dodawany nowy kod*. A nie modyfikowany stary, który działa.

Jest to szczególnie ważne w środowisku produkcyjnym, gdzie zmiany kodu źródłowego powodują ryzyko wprowadzenia błędu. Program, który trzyma się tej zasady, nie wymaga zmian w kodzie, więc nie jest narażony na powyższe ryzyko.

Inny przykład: gdy kod jest jedynie rozszerzany, zmiany w publicznym API biblioteki nie spowodują błędów kompilacji lub nieprawidłowrgo działania w aplikacji klienckiej.

### Przykład
W poniższym kodzie metoda `Area` oblicza sumę pól dla przekazanych w kolekcji figur. Nie ma jednak znaczenia jakie konkretnie są to figury - wystarczy, że dziedziczą po klasie `Shape`. Taka architektura sprawia, że z czasem można dopisać np. klasę `Triangle`, która również będzie dziedziczyć po `Shape`. Metoda `Area` nie będzie wymagała modyfikacji i obsłuży również trójkąt :wink:.

```csharp
public abstract class Shape
{
    public abstract double Area();
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    public override double Area() => Width * Height;
}

public class Circle : Shape
{
    public double Radius { get; set; }
    public override double Area() => Radius * Radius * Math.PI;
}

public double Area(Shape[] shapes)
{
    double area = 0;
    foreach (var shape in shapes)
    {
        area += shape.Area();
    }

    return area;
}

```

## L - Liskov substitution principle
Zachowanie klasy pochodnej musi być zgodne z zachowaniem klasy bazowej.

Czyli zawsze powinno by tak, że używając instancji pewnej klasy `A`, możesz ją traktować jako instancję typów klas wyższych w hierarchii niż `A` - ponieważ *kontrakt jest zachowany*. Słowo **kontrakt** ma tutaj ogromne znaczenie, ponieważ w zależności od decyzji w kwestii ustalenia kontraktu dane rozwiązanie może albo być zgodne z tą zasadą albo ją łamać.

### Przykład
Bardzo często podawanym przykładem jest dziedziczenie przez `Square` po `Rectangle`.

W matematyce, *kwadrat __jest__ prostokątem* - jego szczególnym przypadkiem. Możnaby zatem przypuszczać, że tę relację można przedstawić za pomocą dziedziczenia. Jeżeli w kodzie `Square` będzie dziedziczył po `Rectangle`, to dla wszystkich kwadratów będziemy oczekiwali takiego samego zachowania jak dla prostokątów (zgodnie z zasadą). To może jednak prowadzić do dziwnego zachowania.

Załóżmy, że w klasie bazowej `Rectangle` mamy metody `SetWidth` i `SetHeight`. Brzmi logicznie. Jednak jeśli Twoja referencja `Rectangle` wskazuje tak naprawdę na instancję klasy `Square`, to użycie `SetWidth` i `SetHeight` nie bardzo będzie miało sens, ponieważ zmiana np. `width` wymaga zmiany `height`, żeby zachować własnosć kwadratu. W tym przypadku zasada podstawienia Liskov jest złamana.

Przykład zwykle jest niedopowiedziany i kończy się w tym miejscu, ze stwierdzeniem, że `Square` nie powinien dziedziczyć po `Rectangle`. Nie jest to jednak prawda. Wszystko jest kwestią ***kontraktu***.

Gdybyśmy patrzyli na prostokąt jako obiekt `immutable` (raz stworzony, którego nie można modyfikować), problem znika. Kontrakt jest już inny - podawanie parametrów do stworzenia obiektu odbywa się w konstruktorze, a klasa `Rectangle` dostarcza jedynie metody `GetWidth` i `GetHeight`. W takim przypadku jak najbardziej `Square` może dziedziczyć po `Rectangle`, zachowując kontrakt, i tym samym pozwalając na traktowanie kwadratów jako prostokąty.

## I - Interface segregation principle
Klienci nie powinni zależeć od interfejsów, których nie używają. Czyli nie implementuj interfejsów, których metod nie używasz - rozbij duży interfejs na mniejsze, odpowiadające kontraktom, z których korzystasz.

Taka architektura nie tylko wymusza lepszą hermetyzację, ale też sprawia, że kod jest bardziej zrozumiały i przejrzysty.

## D - Dependency inversion principle
Wysokopoziomowy moduł nie powinien zależeć od implementacji modułu niskopoziomowego. Ta zależność powinna wynikać z abstrakcji i wspólnie ustalonego konraktu. Dzięki temu fragmenty kodu są mniej związane ze sobą i łatwiej jest modyfikować poszczególne moduły - jedyne o czym musisz pamiętać to aby zachować wcześniej ustalony kontrakt.

Priorytetem w pisaniu kodu powinny być interfejsy i kontrakty. Abstrakcje nie powinny zależeć od szczegółów implementacyjnych. To są *abstrakcje* - kontrakty na działanie. Jak to jest realizowane nie powinno mieć znaczenia, bo wtedy zaczynamy *zależeć od rozwiązań implementacyjnych*.

### Przykład
Zwróć uwagę jak w poniższym przykładzie obiekty typu `Page` zależą jedynie od abstrakcji `ICustomerHandler`. Nie ma dla nich znaczenia czy mają do czynienia z `HandlerA` lub `HandlerB` (a może nawet jakimś innym obiektem) - ważne, że ten obiekt implementuje interfejs `ICustomerHandler` i realizuje oczekiwany kontrakt.

```csharp
// UI
class Page
{
    public ICustomerHandler CustomerHandler { get; set; }
}

// Controllers
interface ICustomerHandler
{
    string GetDemographics();
}

// Application layer
class HandlerA : ICustomerHandler
{
    public string GetDemographics() => "Female, Age 18-24";
}

class HandlerB : ICustomerHandler
{
    public string GetDemographics() => "Male, Age 25-34";
}
```
