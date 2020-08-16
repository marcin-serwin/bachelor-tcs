Porządki częściowe, Twierdzenia Dilwortha i Spernera.

---

# Definicje

* **Relacja zwrotna** - $x \sim x$.
* **Relacja przechodnia** - $(x \sim y) \land (y \sim z) \implies (x \sim z)$.
* **Relacja antysymetryczna** - jeżeli dwa elementy $x$ i $y$ w zbiorze są w relacjach $(x \sim y)$ i $(y \sim x)$ to są identyczne. Czyli nie ma w zbiorze różnych elementów w symetrycznej relacji.

* **Częściowy porządek** (poset) - relacja zwrotna, przechodnia i antysymetryczna.
* **Porządek liniowy** - częściowy porządek, w którym każde dwa elementy zbioru są porównywalne. Przykładem jest np. porządek leksykograficzny w słowniku lub relacje *niewiększości* na zbiorze liczb całkowitych, wymiernych, czy rzeczywistych.

* **Łańcuch** - zbiór, w którym da się porównać każde dwa jego elementy. Czyli posiada porządek liniowy.
* **Antyłańcuch** - zbiór, w którym nie da się porównać **żadnych** dwóch różnych jego elementów.

* **Pokrycie zbioru $K$** - dowolna rodzina $\mathcal A$ zbiorów taka, że zbiór $K$ jest zawarty w sumie elementów tej rodziny (czyli $K \subseteq \bigcup \mathcal A$).

# Twierdzenie Dilwortha
Minimalna liczba **łańcuchów** potrzebna do pokrycia zbioru częściowo uporządkowanego jest równa długości jego największego **antyłańcucha**.

### Twierdzenie dualne
Minimalna liczba **antyłańcuchów** potrzebna do pokrycia zbioru częściowo uporządkowanego jest równa długości jego największego **łańcucha**.

# Twierdzenie Spernera
Jeśli $P$ jest rodziną wszystkich podzbiorów pewnego $n$ elementowego zbioru $X$, a porządek $\sqsubseteq$ jest zawieraniem, to każdy antyłańcuch zawarty w $P$ ma co najwyżej $n \choose \lfloor {n/2}\rfloor$ elementów.
