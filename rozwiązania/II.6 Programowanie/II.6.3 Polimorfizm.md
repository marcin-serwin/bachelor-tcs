Co to jest polimorfizm jako obiektowa technika programowania? Podaj przykłady zastosowania polimorfizmu w dwóch obiektowych językach programowania.

---

# Polimorfizm
Polimorfizm to mechanizmy umożliwiające udostępnienie jednego interfejsu dla różnych typów danych. Wyróżniamy następujące rodzaje polimorfizmu:

 * **Ad hoc** - wybieranie funkcji na podstawie typów i liczby argumentów.
 * **Parametric** - klasa lub metoda jest parametryzowana generycznym typem `T`.
 * **Subtyping** - kiedy typ klasy jest wysoko w hierarchii (lub jest interfejsem) może odnosić się do klas niżej w hierarchii (lub implementacji tych interfejsów).

Polimorfizm pozwala na traktowanie różnych danych w jednolity sposób. Może się to wiązać z różnym kodem wykonywanym pod spodem (różne implementacje metod wirtualnych), ale niekoniecznie - przykładowo dla stosu nie musi być istotne co jest na niego wrzucane. Mechanizmy umożliwiające takie udogodnienia nazywane są właśnie polimorfizmem.


## Metoda wirtualna
Metoda, której wywołanie jest polimorficzne. Pozwala na rozszerzanie kodu również wtedy, gdy dostępna jest jedynie skompilowana wersja klasy bazowej.

  * Programista nie musi przejmować się tym, którą z klas pochodnych aktualnie obsługuje, a jedynie tym, jakie operacje chce na tej klasie wykonać.

  * Programista myśli *co* ma wykonać a nie *jak* to coś wykonać - nie musi się przejmować szczegółami implementacyjnymi.

## Klasa abstrakcyjna
Klasa, która nie może mieć swoich reprezentantów pod postacią obiektów.[1] Zależnie od użytego języka programowania klasy abstrakcyjne tworzy się na różne sposoby.

## Interfejs
Pełni rolę umowy, która służy ograniczeniu kontaktów pomiędzy klasami do niezbędnego minimum:

  * Program na wysokim poziomie abstrakcji odwołuje się do interfejsu, a nie do konkretnych klas implementujących interfejs

  * Każda klasa implementująca dany interfejs może być poprawiana i usprawniania bez konsekwencji dla klas korzystających z niej poprzez interfejs, tak długo jak realizuje ona wymagania interfejsu.
  
  * Ustalenie konkretnego interfejsu jest trudnym problemem, ponieważ z jednej strony powinien on być jak najbardziej zwięzły (tak aby implementacja nie była kłopotliwa), a z drugiej strony zbyt ubogi interfejs mógłby być problemem przy dodawniu nowych funkcji do API. Inaczej mówiąc - to jest motywacja dla takich rzeczy jak Extension Methods (C#) albo domyślna implementacja w interfejsach (Java) .


# Java
  * W Javie wszystkie metody są domyślnie wirtualne, a metody w klasach pochodnych nadpisują metody z klasy bazowej. W C++ trzeba dodać `virtual`.

  * W Javie ciało metody `final` może być wstawione bezpośrednio do generowanego kodu w miejsce wywołania podprogramu (na podobnej zasadzie jak funkcje `inline` w C++). W C# nie powoduje to różnicy - w kodzie IL (Intermediate Language) nie zostanie użyta operacja `calls` zamiast `calvirts` (potrzeba wykonać sprawdzenie czy referencja do funkcji nie jest nullem).
````
public class Car<T> {
    // T stands for "Type"
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
}
````

# C++
* Ponieważ C++ jest językiem hybrydowym, nie mamy konieczności korzystania z polimorfizmu. Zostanie on automatycznie włączony podczas zadeklarowania przynajmniej jednej metody wirtualnej w danej klasie.
* Dzięki dodaniu do naszego kodu metod wirtualnych, uruchomimy mechanizm polimorfizmu. Wczesne wiązanie statyczne nie będzie miało wtedy żadnego znaczenia, ponieważ to która funkcja zostanie wywołana będzie zależało od późnego wiązania dynamicznego.
````
template <class myType>
myType GetMax (myType a, myType b) {
 return (a>b?a:b);
}

class Bazowa {
public:
    virtual void fun() { cout << "Bazowa \n"; }
};

class Pochodna : public Bazowa {
public:
    void fun() { cout << "Pochodna \n"; }
};

int main(){
    Bazowa *bazowa = new Pochodna();
    Pochodna *pochodna = new Pochodna();

    bazowa->fun();  //wyswietli: pochodna
    pochodna->fun();//wyswietli: pochodna

    system("pause");
    return 0;
}
````


