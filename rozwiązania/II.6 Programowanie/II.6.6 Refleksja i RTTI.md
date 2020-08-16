Na czym polega reflection, RTTI? Zaprezentuj zastosowania tych mechanizmów w obiektowym języku programowania.

---

# RTTI
***RTTI*** (Run Time Type Identification) to termin wywodzący się ze świata C++. Nawiązuje do funkcjonalności języka, która pozwala programowi na stwierdzenie (w trakcie wykonania) jakiego typu są dane obiekty.

Można wyróżnić dwie formy RTTI:
  * **Relatywna**: czy obiekt `x` może być uznany za obiekt typu `T`? (dopuszczamy odpowiedź pozytywną
również wtedy gdy typ obiektu `x` jest typem pochodnym typu `T`).

  * **Bezwzględna**: jakiego dokładnie typu jest obiekt `x`? (oczekujemy dokładnego określenia typu, to znaczy podania najniższego w hierarchii dziedziczenia typu, do którego `x` należy).

## C++
W standardowym C++ każdej klasie towarzyszy struktura przechowująca nazwę klasy. Dostęp do niej uzyskuje się poprzez typeid.

Wyrażenie typeid (e).name() zwraca nazwę klasy, do której należy obiekt e. Standard C++ nie określa co ma zawierać zwrócony napis.

Wyrażenie dynamic_cast<Samochod*>( x ) dla wskaźnika obiektu x zwraca jego wskaźnik jeśli typ ten należy do klasy Samochod lub jej potomka, przeciwnie zwraca wskaźnik pusty. Operator dynamic_cast jest użytecznym mechanizmem. Jeżeli przykładowo pojemnik obiektów (np. lista) zawiera obiekty typu Pojazd, a pewna operacja ma być wykonana tylko dla pojazdów będących samochodami, do wyselekcjonowania pojazdów będącymi samochodami (lub ich potomkami) można użyć wyżej opisanej konstrukcji. Instrukcja dynamic_cast wspomaga polimorfizm ułatwiając operowanie na różnych typach obiektów.
````
#include<iostream> 
using namespace std; 
class B { }; 
class D: public B {}; 
  
int main() 
{ 
    B *b = new D; 
    D *d = dynamic_cast<D*>(b); 
    if(d != NULL) 
        cout<<"works"; 
    else
        cout<<"cannot cast B* to D*"; 
    getchar(); 
    return 0; 
} 
````

# Refleksja
Z kolei ***refleksja*** to pojęcie używane w odniesieniu do różnych języków programowania. Oznacza proces, dzięki któremu program może być modyfikowany w trakcie działania w sposób zależny od własnego kodu. Paradygmat programowania ściśle związany z mechanizmem refleksji to *programowanie refleksyjne*. Mechanizm ten jest częściej spotykany w językach wysokiego poziomu, zwykle opartych na maszynie wirtualnej.

## Zastosowania
Refleksja pozwala w łatwy sposób zarządzać kodem tak, jakby był danymi. Pozwala na przykład zmienić zachowanie zdefiniowanych już metod czy uzyskać dostęp do informacji na temat obiektów (np. czy dane pole jest publiczne).

## Wady
Choć refleksja jest w pewnych sytuacjach niezbędna, nie powinna być nadużywana:

  * Kod jest mniej czytelny.
  * Kod nie pozwala na sprawdzenie poprawności składniowej i semantycznej w trakcie kompilacji (niewygodne śledzenie błędów).

Jeśli refleksja jest nam potrzebna jedynie po to, by podjąć decyzję jaką akcję wykonać w zależności od napotkanego typu, to najczęściej można go zastąpić stosownym użyciem funkcji wirtualnych.


## Java
W przykładzie pokażemy jak za pomocą refleksji napisać kod równoważny poniższemu:

````
import java.lang.reflect.Method; 
import java.lang.reflect.Field; 
import java.lang.reflect.Constructor; 
  
// class whose object is to be created 
class Test 
{ 
    // creating a private field 
    private String s; 
  
    // creating a public constructor 
    public Test()  {  s = "GeeksforGeeks"; } 
  
    // Creating a public method with no arguments 
    public void method1()  { 
        System.out.println("The string is " + s); 
    } 
  
    // Creating a public method with int as argument 
    public void method2(int n)  { 
        System.out.println("The number is " + n); 
    } 
  
    // creating a private method 
    private void method3() { 
        System.out.println("Private method invoked"); 
    } 
} 
  
class Demo 
{ 
    public static void main(String args[]) throws Exception 
    { 
        // Creating object whose property is to be checked 
        Test obj = new Test(); 
  
        // Creating class object from the object using 
        // getclass method 
        Class cls = obj.getClass(); 
        System.out.println("The name of class is " + 
                            cls.getName()); 
  
        // Getting the constructor of the class through the 
        // object of the class 
        Constructor constructor = cls.getConstructor(); 
        System.out.println("The name of constructor is " + 
                            constructor.getName()); 
  
        System.out.println("The public methods of class are : "); 
  
        // Getting methods of the class through the object 
        // of the class by using getMethods 
        Method[] methods = cls.getMethods(); 
  
        // Printing method names 
        for (Method method:methods) 
            System.out.println(method.getName()); 
  
        // creates object of desired method by providing the 
        // method name and parameter class as arguments to 
        // the getDeclaredMethod 
        Method methodcall1 = cls.getDeclaredMethod("method2", 
                                                 int.class); 
  
        // invokes the method at runtime 
        methodcall1.invoke(obj, 19); 
  
        // creates object of the desired field by providing 
        // the name of field as argument to the  
        // getDeclaredField method 
        Field field = cls.getDeclaredField("s"); 
  
        // allows the object to access the field irrespective 
        // of the access specifier used with the field 
        field.setAccessible(true); 
  
        // takes object and the new value to be assigned 
        // to the field as arguments 
        field.set(obj, "JAVA"); 
  
        // Creates object of desired method by providing the 
        // method name as argument to the getDeclaredMethod 
        Method methodcall2 = cls.getDeclaredMethod("method1"); 
  
        // invokes the method at runtime 
        methodcall2.invoke(obj); 
  
        // Creates object of the desired method by providing 
        // the name of method as argument to the  
        // getDeclaredMethod method 
        Method methodcall3 = cls.getDeclaredMethod("method3"); 
  
        // allows the object to access the method irrespective  
        // of the access specifier used with the method 
        methodcall3.setAccessible(true); 
  
        // invokes the method at runtime 
        methodcall3.invoke(obj); 
    } 
} 
````
