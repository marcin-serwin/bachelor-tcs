Algorytmy zachłanne, wymagane własności problemu, przykład: kody Huffmana.

---

# Algorytmy zachłanne

W każdym kroku dokonują *zachłannego wyboru*, czyli decyzji lokalnie optymalnej. Opierają się na własności, że sekwencja lokalnie optymalnych wyborów daje w rezultacie rozwiązanie optymalne.

Dokonując wyboru redukujemy rozmiar zadania.

## Dowodzenie poprawności

1. **Zasada zachłannego wyboru** - dowodzimy, że wybór lokalnie optymalny jest dobry, czyli istnieje rozwiązanie optymalne, które go zawiera.

2. **Własność optymalnej podstruktury** - dowodzimy, że łącząc zachłanny wybór z optymalnym rozwiązaniem podproblemu otrzymamy rozwiazanie optymalne.

Brzmi jak indukcja.

# Kody Huffmana
Potrzebujemy skompresować tekst. Znamy alfabet znaków i ilość wystąpień w tekście $\operatorname{Freq}(a)$ każdego znaku. Naszym celem jest podanie takiego ciągu bitów dla każdego znaku, żeby zminimalizować długość tekstu.

$\operatorname{Freq}(a)$ - tak, to nie jest *frequency* tylko coś jak *count*. Ale trudno.

## Idea
Potrzebujemy kodu prefiksowego (żaden kod nie jest prefiksem innego). Użyjemy drzewa binarnego, gdzie liście są znakami, a krawędzie mają etykiety $0$ i $1$. Kodu znaku to ciąg etykiet do niego.

Na początku każdy znak jest pojedynczym drzewem, które trzymamy w kolejce priorytetowej (priorytetem drzewa jest suma wystąpień znaków w nim). Zachłanny wybór polega na wzięciu dwóch drzew o najmniejszym priorytecie, połączeniu ich w jedno drzewo (po prostu nowy korzeń z dwójką dzieci), i wrzuceniu z powrotem do kolejki (z priorytetem jako sumą).

### Koszt
Koszt kodowania $T$ - liczba bitów wymagana do zakodowania tekstu z zadanym rozkładem ilości wystąpień znaków.

$$B(T) = \sum_{a \in \Sigma} \operatorname{Freq}(a) \cdot d_T(a)$$

* $T$ - drzewo kodowania
* $d_T(a)$ - odległość liścia znaku $a$ od korzenia

### Złożoność
* Budowa kolejki (kopca) - $\Theta(n)$
* Operacje na kolejce przy każdej iteracji - $O(\log \, n)$
* Całkowita złożoność - $O(n \, \log \, n)$

### Poprawność

#### Własność zachłannego wyboru
Weźmy $a,b \in \Sigma$ o najmniejszej częstotliwości wystąpień. Istnieje optymalne kodowanie $T$, w którym $a$ i $b$ są liśćmi o wspólnym ojcu.

#### Dowód
Niech dowolne kodowanie $T'$ będzie optymalne. Na najdłuższej ścieżce zamieńmy liście, które tam znajdziemy, z $a$ i $b$. Powstanie nam drzewo $T$ o koszcie nie większym niż koszt dla $T'$. Czyli koszt $T$ jest optymalny.

#### Własność optymalnej podstruktury
Mamy znaki o najmniejszej ilości wystąpień $a,b \in \Sigma$ oraz optymalne kodowanie $T$ dla $\Sigma$, w którym $a$ i $b$ są liśćmi o wspólnym ojcu. Możemy stworzyć drzewo $T'$ poprzez zastąpienie $a$ i $b$ (wraz z ich ojcem) liściem $z$, dla którego $\operatorname{Freq}(z) = \operatorname{Freq}(a) + \operatorname{Freq}(b)$. Takie kodowanie $T'$ będzie optymalne dla alfabetu $\Sigma' = \Sigma \setminus \{a,b\} \cup \{z\}$.

#### Dowód (nie wprost)
Jeśli istniałoby lepsze kodowanie $T''$ dla $\Sigma'$, to zamieniając $T'$ w $T$ na $T''$ (pozostała część drzewa oprócz liści $a$ i $b$) otrzymalibyśmy lepsze kodowanie dla $\Sigma$ - sprzeczność.
