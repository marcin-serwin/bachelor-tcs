Co to jest kompozycja jako obiektowa technika programowania? Podaj przykłady kompozycji w dwóch obiektowych językach programowania.

---

## Wstęp

Kompozycja jako technika programowania obiektowego jest sposobem na składanie mniejszych obiektów w większe, bardziej złożone.
Jest podstawą budowania niemalże wszystkich istotnych struktur danych jak np drzewo binarne czy graf.
Kompozycja reprezentuję relację "posiada", dla przykładu obiekt $dom$ posiada obiekt $kuchnia$.

Kompozycja oznacza, że dana część może należeć tylko do jednej całości. Oznacza również, że część nie może istnieć bez całości, a usunięcie całości powoduje automatyczne usunięcie wszystkich jej części, związanych z nią związkiem kompozycji.

Na diagramach UML kompozycję oznacza się wypełnionym rombem.

![](../../resources/II.6.1-uml.png)

*Design Patterns*: _"Favor **object composition** over **class inheritance**"_

## Przykłady

Poniższy przykład pozwalający rozróżnić kompozycję od agregacji.

* Dom jest **kompozycją** pomieszczenia, gdyż pomieszczenie może należeć tylko do jednego domu, nie może ponadto istnieć po usunięciu (wyburzeniu) czy niezależnie od domu.

* Dom jest **agregacją** ulicy, gdyż ulica może zarówno istnieć bez konkretnego domu, wyburzenie domu nie spowoduje jej usunięcia oraz jest jedna dla wielu domów przy niej usytuowanych.


### Java

Klasa **House**

```java
public class House {
  private Room room;
  private Street street;

  public House(Street street) {
    this.room = this.new Room(10, 20, 30);
    this.street = street;
  }

  public int getRoomArea() {
    return room.getLength() * room.getWidth();
  }

  public Street getStreet() {
    return street;
  }

  private class Room {
    private int length;
    private int width;
    private int height;

    public Room(int length, int width, int height) {
      this.length = length;
      this.width = width;
      this.height = height;
    }

    public int getLength() {
      return length;
    }

    public int getWidth() {
      return width;
    }
  }
}
```

**Klasa Street**

```java
public class Street {
  private String name;
  public Street(String name) {
    this.name = name;
  }
}
```

Oraz użycie:

```java
  Street baker = new Street("Baker street");
  House myHouse = new House(baker);
  House yourHouse = new House(baker);

  myHouse.getRoomArea(); // 200
  boolean sameRef = myHouse.getStreet() == yourHouse.getStreet(); //true
  boolean areEqual = Objects.equals(myHouse.getStreet(), yourHouse.getStreet()); //true
```

### C#

```csharp
public class Engine
{

}

public class Car
{
  Engine e = new Engine();
}
```

Diagram UML dla tego przykładu jest powyżej.
