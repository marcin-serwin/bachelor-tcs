Omów lemat o pompowaniu dla języków bezkontekstowych. Podaj przykład języka bezkontekstowego. Podaj przykład języka, który nie jest bezkontekstowy.

---

# Lemat o pompowaniu

## Języki regularne
Dla przypomnienia, lemat o pompowaniu dla języków regularnych mówił, że dostatecznie długie słowo w języku regularnym może być pompowane, tj. jego środkowa część może zostać powtórzona dowolną ilość razy a powstałe słowo nadal będzie należeć do tego języka. Powodem tego był cykl w DFA, który sprawiał, że akceptowany język jest nieskończony.

## Języki bezkontekstowe
W przypadku języków bezkontekstowych możemy znaleźć **dwa** kawałki wystarczająco długiego słowa, żeby je pompować jednocześnie. Czyli duplikując każdą z takich dwóch fragmentów dowolną, ale taką samą, liczbę razy, otrzymamy słowo z tego języka.

### Lemat
Dla każdego języka bezkontekstowego $L$ istnieje taka stała $n$, że dla każdego słowa $z \in L$ o długości co najmniej $n$ możemy podzielić to słowo na $uvwxy$ w taki sposób, że:

* długość $vwx$ wynosi co najwyżej $n$,
* przynajmniej jedno ze słów $v, x$ jest niepuste,
* dla dowolnego $i \in \Bbb N$ słowo postaci $uv^iwx^iy$, w szczególności $uwy$, należy do tego języka.

Formalnie:

$$(\exists n \in \mathbb{N}) ((\forall z \in L, |z| \geq n) ((\exists u, v, w, x, y \in \Sigma^{\ast}, z = uvwxy, |vx| \geq 1, |vwx| \leq n) ((\forall i \geq 0) (uv^iwx^iy \in L))))$$

### Technika dowodzenia
Lemat o pompowaniu jest wykorzystywany do dowodzenia nie wprost, że dany język nie jest bezkontekstowy.

Dla języka $L$, o którym chcemy dowieść, że nie jest bezkontekstowy, musimy dla dowolnego $n$ pokazać, że istnieje takie słowo $z \in L$ (o długości przynajmniej $n$), że dla dowolnego podziału tego słowa możemy je napompować tak, że otrzymamy słowo nienależące do języka $L$.

Formalnie:

$$(\forall n \in \mathbb{N}) ((\exists z \in L, |z| \geq n) ((\forall u, v, w, x, y \in \Sigma^{\ast}, z = uvwxy, |vx| \geq 1, |vwx| \leq n) ((\exists i \geq 0) (uv^iwx^iy \notin L))))$$

# Przykłady języków

## Język bezkontekstowy
Język słów postaci $a^nb^n$ nad alfabetem $\{a, b\}$ jest językiem bezkontekstowym, generowanym przez gramatykę bezkontekstową o regułach:

* $S \rightarrow \epsilon$
* $S \rightarrow aSb$

## Język, który nie jest bezkontekstowy
Standardowym przykładem języka, który nie jest bezkontekstowy, jest $L = \{a^nb^nc^n\}$ nad alfabetem $\{a, b, c\}$. Udowodnimy to z lematu o pompowaniu:

1. Dla danego $n \in \mathbb{N}$ wybierzmy słowo $z = a^nb^nc^n$, spełniające warunki $|z| \geq n$ oraz $z \in L$.

2. Niezależnie od rodzaju podziału $z = uvwxy$, zawsze musi zachodzić $|vwx| \leq n$. Nie jest możliwe, aby w słowie $vwx$ (a zatem także w $vx$) znajdował się jednocześnie znak $a$ oraz $c$, gdyż są od siebie oddzielone w słowie co najmniej $n$ znakami $b$. Słowo $vx$ będzie się zatem składało albo z jednego rodzaju znaków ($a$ lub $b$ lub $c$), albo z dwóch rodzajów ($a, b$ lub $b, c$) - nigdy ze wszystich trzech.

3. Wybierzmy $i = 0$ (zadziała też dowolne inne $i \neq 1$). Aby nowe słowo należało do języka, liczba wystąpień znaków $\{a, b, c\}$ w $vx$ musiałaby być równa (oraz większa niż 0, gdyż słowo to nie może być puste).
4. Utworzone w ten sposób słowo nie należy do języka $L$, więc nie jest on bezkontekstowy.
