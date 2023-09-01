# Budowanie HTML i PDF

Budowane za pomocą node v7.10.1 (npm v4.2.0)

Za budowanie z plików Markdown ładnego HTML z wyrenderowanymi wzorami itd.
odpowiedzialny jest program w Node.js w katalogu `book-builder/`. Równania są
renderowane do SVG przy użyciu [MathJax](https://www.mathjax.org/),
a Markdown parsowany jest przez [markdown-it](https://github.com/markdown-it/markdown-it).

### Używanie

Do używania book-buildera potrzebny jest zainstalowany i obecny w `$PATH` Node.js
oraz npm. Jeśli mamy je już zainstalowane wystarczy, że odpalimy skrypt bashowy
`build-book`

    $ ./build-book

i otrzymamy w wyniku katalog HTML w którym znajduje się wygenerowane wyjście.

Jeśli pracujemy nad jakimś pytaniem niekoniecznie chcemy renderować za każdym
razem cały dokument ponieważ zabiera to dużo czasu. book-builder przyjmuje jako
argument listę pytań które mają być wyrenderowane np

    $ ./build-book III.3.1 III.1.4

utworzy dokument zawierający tylko pytania III.3.1 i III.1.4.

### Uwagi

* Book-builder wspiera linkowanie pytań.

  By linkowanie zadziałało, pytanie które się linkuje musi być w wynikowym HTML'u. Czyli jeśli np. z pytania X linkujemy pytanie Y i wywołuje book buildera:

      ./build-book X

  To link do Y sie nie wyrenderuje, natomiast wyrenderuje się gdy zawrę pytanie Y w wynikowym HTML'u:

      ./build-bool X Y

  Oczywiście w przypadku gdy buduje sie całą książkę:

      ./build-book

  Wszystkie linki powinny zawsze działać jeśli tylko nie ma w nich literówek.

* Można dawać anchory do innych plików. Miejsce gdzie chcemy się odnieść tagujemy za pomocą: `<a id="Diagram_Klas"></a>`. Następnie odnosimy się do niego: `[__III.2.6 UML: Diagramy Klas__](#Diagram_Klas)`

* Linków do obrazków hostowanych gdzieś w necie nie wstawiamy. Obrazek ściągamy i zapisujemy w folderze `resources`. Nazwa obrazka: `<NumerPytania>-<NazwaObrazka>.<format>`. Na przykład: `III.2.6-UML-UseCase2.gif`. Obrazki wyświetlamy za pomocą ścieżki `../../resources/NazwaObrazka.gif`. Przykładowo: `![Rozbudowany Diagram Przypadków Użycia](../../resources/III.2.6-UML-UseCase2.gif)`. Wtedy działa za równo na stronie gita jak i po skompilowaniu za pomocą skryptu (`build_book`).


### Problemy

1. "Mój piękny Markdown nie jest poprawnie parsowany!"

    markdown-it parsuje markdown według specyfikacji [CommonMark](http://commonmark.org/)
    i dodaje od siebie kilka rozszerzeń, w razie problemów z parsowaniem proszę
    zaglądnąć do specyfikacji CommonMark.

2. "Mam Windowsa i nie mogę używać skryptu `build-book`!"

    Polecam spojrzeć do wnętrza tego [skryptu](../build-book) i odpalić wszystko
    z palca. Instalować zależności book-buildera trzeba tylko przed jego
    pierwszym uruchomieniem.

3. "Gdy próbuję wydrukować HTML wzory wyglądają bardzo brzydko!"

    Niestety, ale w wielu przeglądarkach SVG wygląda bardzo brzydko po wydrukowaniu.
    By wydruk wyglądał ładnie wygeneruj dokument book-builderem jeszcze raz,
    dodając argument `--mathjax-online` przy wywołaniu skryptu

        $ ./build-book --mathjax-online

    dzięki temu będzie użyty inny silnik renderowania równań i powinny one
    wyglądać bardzo dobrze po wydrukowaniu.

4. "Zmieniłem zawartość pliku w resources i nie widzę zmian po wyrenderowaniu!"

    Dodaj opcję `--clobber` jako argument book-buildera. Domyślnie kopiuje on
    tylko pliki których nie było do tej pory i nie nadpisuje starych jako
    optymalizacja.

5. "Chciałbym by book-builder potrafił [wymarzony feature]!"

    Jeśli chciałbyś dodać jakiś feature do book-buildera albo zmienić coś w nim
    napisz do Marka lub po prostu stwórz nowe issue przyporządkowany
    do niego. Jeśli masz już gotową zmianę, nie aplikuj jej też
    tak po prostu, zaimplementuj ją na osobnym branchu i wyślij pull requesta.
