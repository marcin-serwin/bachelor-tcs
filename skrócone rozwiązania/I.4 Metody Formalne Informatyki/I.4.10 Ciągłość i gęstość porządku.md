Ciągłość i gęstość porządku. Zbiór liczb wymiernych a zbiór liczb rzeczywistych.

---

# Gęstość porządku
Porządek $(A,\leqslant)$ jest **gęsty** jeśli $A$ ma przynajmniej dwa elementy oraz między dowolnymi dwoma elementami $A$ znajduje się trzeci element, tzn.

$$\forall_{a \in A}\forall_{b \in A}((a \leqslant b \wedge a \ne b) \implies\ \exists_{c\in A}(a \leqslant c \wedge c \leqslant b \wedge a \ne c \wedge b \ne c))$$

# Ciągłość porządku
Jeśli natomiast jest gęsty i w dodatku każdy jego pozdbiór ograniczony ma **kres górny** i **dolny** to jest **ciągły**.

### Ograniczoność
Podzbiór $B\subseteq A$ porządku $(A,\leqslant)$ jest:

* Ograniczony z góry jeśli $\exists_{a \in A} \forall_{b \in B}\ b\leqslant a$.
* Ograniczony z dołu jeśli $\exists_{a \in A} \forall_{b \in B}\ b\geqslant a$.

Największe z ograniczeń dolnych oraz najmniejsze z ograniczeń górnych danego zbioru, o ile takie istnieją, to kresy - górny i dolny.

# Zbiór liczb wymiernych a zbiór liczb rzeczywistych

## $\mathbb{R}$
* Każdy niepusty i ograniczony z **góry** podzbiór $\mathbb{R}$ ma kres **górny**.
* Każdy niepusty i ograniczony z **dołu** podzbiór $\mathbb{R}$ ma kres **dolny**.

Intuicyjnie, oznacza to, że **oś liczbowa jest ciągła**, nie istnieją w niej luki między kolejnymi liczbami – każdemu miejscu na osi odpowiada konkretna liczba rzeczywista.

Można to udowodnić jeśli skonstruujemy liczby rzeczywiste jako granice ciągów Cauchy'ego liczb wymiernych (jak w punkcie [I.4.4 Liczby rzeczywiste](I.4.4 Liczby rzeczywiste.md)).

## $\mathbb{Q}$
W $\mathbb{Q}$ tak nie jest: weźmy wymierne, których kwadraty są mniejsze niż $2$. Jest niepusty i ograniczony z góry (np. przez $2$), ale **nie ma kresu górnego**.

W $\mathbb{R}$ sytuacja taka nie występuje - tzn. zawsze istnieje liczba rzeczywista, która jest najmniejszym ograniczeniem górnym.
