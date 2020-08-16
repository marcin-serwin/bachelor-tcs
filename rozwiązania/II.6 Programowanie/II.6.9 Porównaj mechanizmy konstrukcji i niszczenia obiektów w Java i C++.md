Porównaj mechanizmy konstrukcji i niszczenia obiektów w Java i C++. Wskaż
mocne i słabe punkty każdego z podejść.

---

# Podejście C++

## Alokacja na stosie

Każdy obiekt ma swój scope, może to być blok kodu, funkcja, czy też cały program (zmienne globalne).  Obiekt jest tworzony wewnątrz scope-u i odpalany jest konstruktor.  Gdy program wyjdzie ze scope-u, automatycznie odpalany jest destruktor, który przygotowuje pamięć do zwolnienia, kończy procesy.  Następnie obiekt zdejmowany jest ze stosu.

Zalety:

* Czytelność.

Wady:

* Mała elastyczność.  Czasami trzeba się nakombinować, żeby obiekt przeżył.

## Alokacja na stercie z użyciem raw pointerów

Oprócz tego używana jest ręczna alokacja pamięci na stercie.  To niestety powoduje, że zapomina się o dealokacji.  Operatory do tego to:

* `new` - alokującą obiekt, odpala konstruktor

* `new[]` - alokująca tablicę obiektów, odpala konstruktor dla każdego obiektu z osobna

* `delete` - usuwa obiekt z pamięci.  Gdy się użyje go na tablicy, destruktory się nie odpalą.

* `delete[]` - usuwa tablicę z pamięci.  Dla każdego obiektu z osobna odpala destruktor.

Zalety:

* Łatwo przekazywać obiekty pomiędzy fragmentami kodu.

Wady:

* Trzeba pamiętać o ręcznym odpalaniu destruktorów.

* Duże niebezpieczeństwo wycieków pamięci.

## Alokacja na stercie z użyciem smart pointerów

C++ Wspiera również shared pointery, przy czym one nie używają garbage collectora.  Po prostu liczą liczbę referencji do danego obiektu i gdy nie ma już żadnej, obiekt jest natychmiast usuwany.  Destruktor oczywiście odpala się sam.  Używane są:

* `std::unique_ptr` - "wskaźnik" do obiektu usuwający obiekt, gdy zostanie zniszczony.  Gdy pamięć jest wskazywana przez niego, oznacza to, że jest to jedyne miejsce, skąd się na nią wskazuje.  Może być przekazywany do innego scope-u za pomocą `std::move`.  Przekazuje tym samym ownership innemu unique pointerowi.

* `std::shared_ptr` - "wskaźnik" do współdzielonego obiektu.  Może istnieć kilka egzemplarzy tego wskaźnika w programie.  Gdy wszystkie zostaną zniszczone, pamięć jest zwalniana.

* `std::weak_ptr` - "wskaźnik" do współdzielonego obiektu, który nie jest liczony jako referencja.  Innymi słowy, gdy pozostałe shared pointery zostaną zniszczone, obiekt zostanie usunięty z pamięci, nie ważne ile weak pointerów na niego wskazywało.

Przy czym smart pointery powinny być używane tylko w miejscach, kontrolujących życie obiektów.  Mianowicie gdy przekazujemy obiekt tylko po to, żeby ktoś pobrał sobie z niego dane / uzupełnił go, powinniśmy używać raw pointerów.

Zalety:

* Czytelność kodu.

* Łatwo przekazywać obiekty pomiędzy fragmentami kodu.

* Nie trzeba pamiętać o odpalaniu destruktorów.

* Bezpieczeństwo przed niechcianym usunięciem obiektów.

Wady:

* Smart pointery nie są odporne na cykliczne referencje.  Gdy powstanie
  cykl, obiekt nigdy nie zostanie zdestruowany.

### Zastosowanie:

Projekty w których liczy się responsywność i pamięć.

# Podejście Javy (garbage collector GC)

Obiekty żyją sobie, dopóki garbage collector sobie o nich nie przypomni.  Od czasu do czasu zbierane są obiekty, które nie są używane (nie ma do nich twardych referencji), odpalana jest na nich metoda finalize i są usuwane z pamięci.

Garbage collector w Javie ma dodatkowe opcje sugerujące mu, żeby się odpalił, ale to są tylko sugestie, które nic nie wymuszają.

Są różne rodzaje referencji:

* Zwykła gwarantująca, że obiekt nie zostanie usunięty z pamięci.

* Weak, która trzyma wskaźnik, ale nie będzie się broniła, gdy garbage collector będzie chciał jej usunąć obiekt na który wskazuje.

* Soft, działająca jak weak, przy czym raczej będzie próbowała obronić obiekt,
  jeśli nie będzie istotnej potrzeby usunięcia go.

* Phantom, które są trochę z innego świata.  Gdy obiekt może być usunięty z pamięci (nie ma do niego żadnych referencji, odpalone zostały finalizatory), staje się on phantom reachable.  To oznacza, że jego phantom reference trafiła na kolejkę do usunięcia z pamięci.  Można dzięki temu wykonać bezpiecznie niektóre akcje czyszczące, które wykonane w finalizatorze mogłyby wskrzesić obiekt przez przypadek.

Zalety:

* Czytelność kodu.

* Łatwo przekazywać obiekty pomiędzy fragmentami kodu.

* Jest szybkie, sumarycznie bywa szybsze od usuwania obiektów pojedynczo, jak to jest robione w C++.

* Bezpieczeństwo przed niechcianym usunięciem obiektów.

* Rozwiązuje cykliczne zależności.

Wady:

* Nie powinno się używać finalizatorów, jako że tak na prawdę nie wiadomo kiedy i czy w ogóle się odpalą.
  
* Brak kontroli nad pamięcią.

* Brak kontroli nad czasem.  Garbage collector w dowolnym momencie może zatrzymać działanie programu, żeby posprzątać.

* Trzeba pamiętać o ręcznym finalizowaniu obiektów.

### Zastosowanie:

Duże projekty, w których liczy się głównie możliwość rozwijania projektu i niezawodność.
