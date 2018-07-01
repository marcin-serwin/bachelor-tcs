Wybierz język obiektowy z rozwiniętą kontrolą dostępu do pól i metod obiektów. Opisz występujące w nim mechanizmy kontroli.

---

# Kontrola dostępu

Wiele obiektowych języków programowania daje możliwość regulowania poziomu dostępu do poszczególnych elementów klasy. Pozwla to na oddzielenie publicznego interfejsu od szczegółów implementacyjnych klasy. Służą do tego celu odpowiednie modyfikatory.

# Kontrola dostępu w Javie
W Javie mamy możliwość kontrolowania dostępu zarówno do składowych klasy jak i do samych klas i interfejsów. Używamy w tym celu czterech modyfikatorów:
- *domyślny, brak modyfikatora* - klasa, pole lub metoda w klasie oznaczone modyfikatorem domyślnym (czyli tak naprawdę nieoznaczone żadnym słowem kluczowym) są widoczne dla wszystkich klas i metod znajdujących się w tym samym pakiecie. Natomiast brak modyfikatora przy polu lub metodzie w interfejsie jest traktowane jako *public*.
- *private* - pola, metody oraz klasy oznaczone tym modyfikatorem są widoczne wyłącznie w klasie w której zostały zadeklarowane.
- *public* - ten modyfikator umożliwia nieograniczony dostęp do elementów nim oznaczonych, niezależnie od tego w jakim pakiecie są używane.
- *protected* - pozwala na dostęp do danego elementu tylko dla klas dziedziczących oraz klas z tego samego pakietu.

## Przykład
````java
package A;

class B { // klasa o dostępie pakietowym (widoczna tylko w pakiecie A)
    public int a = 0; // zmienna publiczna

    private class C {} // prywatna klasa (widoczna tylko w B)

    protected void d() {} // metoda widoczna w pakiecie A oraz
                          // wszystkich klasach dziedziczących po A
}
````
