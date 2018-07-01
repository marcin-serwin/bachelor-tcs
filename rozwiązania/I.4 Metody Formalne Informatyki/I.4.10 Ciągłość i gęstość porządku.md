Ciągłość i gęstość porządku. Zbiór liczb wymiernych a zbiór liczb rzeczywistych.

---

# Gęstość porządku
Porządek $(A,\leqslant)$ jest **porządkiem gęstym** jeśli $A$ ma przynajmniej dwa elementy oraz między dowolnymi dwoma elementami $A$ znajduje się trzeci element, tzn.

$$\forall_{a \in A}\forall_{b \in A}((a \leqslant b \wedge a \ne b) \Rightarrow\ \exists_{c\in A}(a \leqslant c \wedge c \leqslant b \wedge a \ne c \wedge b \ne c))$$

Niektóre definicje przyjmują, że porządek nie musi mieć przynajmniej dwóch elementów, aby być gęstym, wtedy definicja wygląda tak:

$$\forall_{a, b \in A} a < b \Rightarrow \exists_{c \in A} a < c < b$$

# Ciągłość porządku
Porządek $(A,\leqslant)$ jest **ciągły** jeśli jest to porządek gęsty oraz każdy podzbiór ograniczony (z góry i z dołu) ma zarówno **kres górny**, jak i **dolny**.

### Ograniczoność
Podzbiór $B\subseteq A$ porządku $(A,\leqslant)$ jest **ograniczony z góry** jeśli można znaleźć element $a\in A$ większy niż wszystkie elementy zbioru $B$, tzn. taki, że

$$\forall_{b\in B}(b\leqslant a)$$

Analogicznie podzbiór $B\subseteq A$ jest **ograniczony z dołu** jeśli można znaleźć element $a\in A$ taki że

$$\forall_{b\in B}(a \leqslant b)$$

### Kresy dolny i górny
Największe z ograniczeń dolnych oraz najmniejsze z ograniczeń górnych danego zbioru, o ile takie istnieją.

# Zbiór liczb wymiernych a zbiór liczb rzeczywistych
Jeśli skonstruujemy liczby rzeczywiste jako granice ciągów Cauchy'ego liczb wymiernych (jak w punkcie [I.4.4 Liczby rzeczywiste](I.4.4 Liczby rzeczywiste.md)), to możemy udowodnić, że **każdy niepusty i ograniczony z góry podzbiór zbioru liczb rzeczywistych ma kres górny**. Alternatywnie: każdy niepusty i ograniczony z dołu podzbiór zbioru liczb rzeczywistych ma kres dolny.

Intuicyjnie, oznacza to, że oś liczbowa jest ciągła, nie istnieją w niej luki między kolejnymi liczbami – **każdemu miejscu na osi odpowiada konkretna liczba rzeczywista**.

**W zbiorze liczb wymiernych tak nie jest**: na przykład zbiór tych liczb wymiernych, których kwadraty są mniejsze od 2:
* jest niepusty (należy do niego np. 1),
* ograniczony z góry (każda liczba tego zbioru jest na przykład mniejsza od 2),
* ale nie ma kresu górnego — nie ma liczby wymiernej, która byłaby najmniejszym ograniczeniem górnym tego zbioru.

W zbiorze liczb rzeczywistych sytuacja taka nie występuje - tzn. **zawsze istnieje liczba rzeczywista, która jest najmniejszym ograniczeniem górnym**.
