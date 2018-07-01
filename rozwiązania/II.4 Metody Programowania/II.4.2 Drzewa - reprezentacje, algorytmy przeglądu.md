Drzewa binarne i niebinarne, ich reprezentacje, algorytmy przeglądu.

---

# Drzewa
## Definicje równoważne
* Drzewo - graf nieskierowany spójny, bez cykli.
* Drzewo - graf nieskierowany spójny o $n$ wierzchołkach i $n - 1$ krawędziach.
* Drzewo - graf nieskierowany acykliczny o $n$ wierzchołkach i $n - 1$ krawędziach.

## Definicja rekurencyjna drzewa ukorzenionego
Drzewo to niepusty skończony zbiór węzłów (wierzchołków) $T$, w którym:
* Istnieje wyróżniony wierzchołek $r \in T$ zwany korzeniem,
* Pozostałe wierzchołki są podzielone na $k \geq 0$ rozłącznych podzbiorów $T_1, \ldots, T_k$, będących drzewami, i nazywanych poddrzewami (korzenia) drzewa $T$.

## Drzewa binarne
### Definicja
**Drzewo binarne** to drzewo, w którym każdy węzeł ma co najwyżej dwoje dzieci.

### Reprezentacja drzewa binarnego w pamięci
* Dostęp do drzewa przez wskaźnik na korzeń *($NULL$ gdy drzewo puste)*, każdy węzeł przechowuje dwa wskaźniki na lewe i prawe dziecko.
* Implemenetacja kursorowa - elementy w tablicy, zamiast wskaźników na dzieci przechowujemy ich indeksy.
* Listy sąsiedztwa.
* W tablicy, tak jak kopiec.

### Procedury przeglądu drzew binarnych
**Uwaga.** Drzewo reprezentujemy przez wskaźnik na korzeń oraz wskaźniki *left* i *right* na dzieci węzła.
#### Pre-order
Porządek prefiksowy. Wierzchołek jest odwiedzony przed jego poddrzewami.
````
preorder (root)
  if root is null
    return
  print root
  preorder (left child of root)
  preorder (right child of root)
````
#### In-order
Porządek infiksowy. Dla każdego wierzchołka najpierw badane jest jego lewe poddrzewo, następnie ten wierzchołek i na końcu jego prawe poddrzewo.
````
inorder (root)
  if root is null
    return
  inorder (left child of root)
  print root
  inorder (right child of root)
````
#### Post-order
Porządek postfiksowy. Dla każdego wierzchołka najpierw badane jest jego lewe poddrzewo, następnie prawe, a na końcu sam wierzchołek.
````
postorder (root)
  if root is null
    return
  postorder (left child of root)
  postorder (right child of root)
  print root
````

## Drzewa niebinarne
### Definicja
Drzewo niebinarne to dowolne drzewo niebędące drzewem binarnym.

### Problemy implementacyjne
* Potencjalnie różne liczby następników w zależności od wierzchołka.

### Algorytmy przeglądu
Oznaczmy poddrzewa mające korzenie w kolejnych dzieciach korzenia drzewa przez: $T_1, \ldots, T_k$.

* Preorder. 
	1. Zbadaj korzeń.
	2. Dla każdego poddrzewa $T_1, \ldots, T_k$ zbadaj je w preorder. 


* Postorder. 
	1. Dla każdego poddrzewa $T_1, \ldots, T_k$ zbadaj je w postorder. 
	2. Zbadaj korzeń.

### Reprezentacje w pamięci komputera
#### Reprezentacja za pomocą tablic (list) następników
Węzeł zawiera tablicę (lub listę wiązaną) wskaźników na swoje następniki (wielkość tablicy może być równa stopniowi węzła albo ustalonej wielkości, z ewentualnym nadmiarem).

#### Reprezentacja w tablicy
Każdy węzeł ma unikalny indeks w tablicy oraz listę indeksów swoich dzieci, ewentualnie indeks ojca.

#### Reprezentacja za pomocą listy wskaźników na krawędzie
Każda krawędź jest reprezentowana przez obiekt a wierzchołki posiadają wskaźniki na krawędzie do których są incydentne. 

#### Reprezentacja za pomocą drzewa binarnego
Drzewo $T$ reprezentujemy za pomocą drzewa binarnego $B(T)$ o takim samym zbiorze węzłów. Dla danego węzła $v$: 

* Lewy wskaźnik w drzewie $B$ wskazuje na pierwszy z następników węzła $v$ w drzewie $T$.
* Prawy wskaźnik w drzewie $B$ wskazuje na brata z prawej strony węzła $v$ w drzewie $T$.

Dla reprezentacji drzewa niebinarnego $T$ za pomocą drzewa binarnego $B(T)$ zachodzą następujące zależności:
* $Preorder (T) = Preorder (B(T))$.
* $Postorder (T) = Inorder (B(T))$.
