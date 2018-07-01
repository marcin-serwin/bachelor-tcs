Przestrzenie wektorowe, baza (czy zawsze istnieje), wymiar. Podaj przykłady.

---

# Przestrzeń wektorowa
Zbiór obiektów (nazywanych *wektorami*), które mogą być **skalowane** i **dodawane**. Przestrzeń wektorowa jest zwana również **przestrzenią liniową**.

Formalnie, jest to zbiór $\mathbb{V}$ z określonymi dwoma działaniami: dodawaniem elementów tej przestrzeni (wektorów) $\mathbb{V} \times \mathbb{V} \rightarrow \mathbb{V}$ i mnożeniem przez elementy ustalonego ciała $(K,+, \cdot )$ (np. liczb rzeczywistych) $\mathbb{V} \times K \rightarrow \mathbb{V}$. Działania te związane są ze sobą poniższymi aksjomatami.

## Aksjomaty
Zwyczajowo: $a,b \in K$ i $u,v,w \in \mathbb{V}$.

1. **Łączność dodawania**: $u + (v + w) = (u + v) + w$
2. **Przemieność dodawania**: $u + v = v + u$
3. **Istnienie elementu neutralnego dodawania**: $v + \vec 0 = v$
4. **Istnienie elementu przeciwnego dodawania**: $v + (-v) = \vec 0$
5. **Łączność skalowania**: $a(bv) = (ab)v$
6. **Element neutralny skalowania**: $1v = v$
7. **Rozdzielność skalowania względem dodawania wektorów**: $a(v + w) = av + aw$
8. **Rozdzielność skalowania względem dodawania skalarów**: $(a + b)v = av + bv$

*Pierwsze 4 aksjomaty czynią ze zbioru wektorów z dodawaniem grupę przemienną (abelową).*

# Kombinacja liniowa
Niech $\mathbf{v_1, v_2, \dots, v_n}$ będą elementami przestrzeni wektorowej $\mathbb{V}$ nad pewnym ciałem, a $a_1, a_2, \dots a_n$ będą elementami tego ciała.

Kombinacją liniową wektorów $\mathbf{v_1, v_2, \dots, v_n}$ o współczynnikach $a_1, a_2, \dots a_n$ nazywa się wektor

$$a_1\mathbf{v_1} + a_2\mathbf{v_2} + \dots + a_n\mathbf{v_n}$$

# Liniowa niezależność
Zbiór wektorów $\mathbf{v_1, v_2, ...,  v_n}$ jest liniowo niezależny, gdy równanie $$a_1 v_1 + a_2 v_2 + \ldots + a_n v_n = \vec 0$$ może być spełnione jedynie gdy wszystkie $a_i$ są zerami. To implikuje, że żaden z tych wektorów nie może być zapisany jako kombinacja liniowa pozostałych wektorów w zbiorze.

Innymi słowy, zbiór wektorów jest liniowo niezależny jeśli jedyną reprezentacją $\vec 0$ (jako liniowa kombinacja jego wektorów) jest trywialna reprezentacja, gdy wszystkie skalary są zerami.

# Baza przestrzeni wektorowej
Niech $\mathbb{V}$ będzie przestrzenią wektorową. Niech wektory $v_1, v_2, \ldots, v_n$ należą do tej przestrzeni.

Następujące warunki są równoważne:
* $v_1, \ldots, v_n$ to **baza** przestrzeni $\mathbb{V}$,
* $v_1, \ldots, v_n$ to minimalny układ wektorów generujących $\mathbb{V}$,
* $v_1, \ldots, v_n$ to maksymalny układ liniowo niezależny.
* każdy wektor w przestrzeni ma *jednoznaczne* przedstawienie jako liniowa kombinacja $v_1, \ldots, v_n$.

Mówimy, że **baza generuje przestrzeń** $\mathbb{V}$, jeśli dowolny wektor $v \in \mathbb{V}$ można przedstawić jako liniową kombinację elementów z bazy.

## Istnienie bazy
**Każda przestrzeń liniowa ma bazę**. Dowód tego twierdzenia przebiega różnie w zależności od tego, czy w danej przestrzeni istnieje skończony zbiór generujący tę przestrzeń, czy nie. W tym drugim przypadku należy odwołać się do lematu Kuratowskiego-Zorna. Dowód istnienia bazy nie jest konstruktywny, tzn. nie daje żadnego algorytmu na otrzymanie wektorów tworzących bazę.

Powyższe twierdzenie jest równoważne z **aksjomatem wyboru**.

# Wymiar przestrzeni wektorowej
Wszystkie bazy danej przestrzeni liniowej są równoliczne. Fakt ten pozwala określić wymiar przestrzeni liniowej $\mathbb{V}$ jako moc jej dowolnej bazy. Oznaczamy go jako $dim(\mathbb{V})$.

Przestrzeń, która ma skończoną bazę, nazywana jest **przestrzenią skończeniewymiarową**, w przeciwnym wypadku mówimy o **przestrzeni nieskończeniewymiarowej**. Nieskończeniewymiarowe przestrzenie mają wymiar co najmniej continuum.

# Przykłady przestrzeni wektorowych

## Zerowa przestrzeń liniowa
Najprostszy przykład przestrzeni liniowej jest trywialny: $\{\mathbf{ \vec 0}\}$. Zawiera ona tylko wektor zerowy. Dodawanie wektorów i mnożenie przez skalar są trywialne. Bazą tej przestrzeni liniowej jest zbiór pusty, tak więc $\{\mathbf{ \vec 0}\}$ jest $0$-wymiarową przestrzenią liniową nad $K$.

## Ciało
Kolejnym prostym przykładem jest samo ciało $K$. Dodawanie wektorów jest po prostu dodawaniem w ciele, a mnożenie przez skalar – mnożeniem z ciała. Jedynka $K$ służy jako baza, tak więc $K$ jest $1$-wymiarową przestrzenią liniową nad sobą.

Dodatkowo $K$ ma tylko dwie podprzestrzenie: $\{\mathbf 0\}$ oraz samo $K$.

## Przestrzeń współrzędnych
Niech $K$ będzie ustalonym ciałem. Zbiór ciągów $n$ elementów z ciała $K$ tworzy nad nim $n$-wymiarową przestrzeń liniową $K^n$ nazywaną *przestrzenią współrzędnych*.

Każdy wektor $\mathbf x$ ma postać:
$$\mathbf x = (x_1, x_2, \dots, x_n)$$

Działania są zdefiniowane na składowych $x_i$:
* $\mathbf{x + y} = (x_1 + y_1,\ x_2 + y_2,\ \dots,\ x_n + y_n)$
* $c \mathbf x = (cx_1,\ cx_2,\ \dots,\ cx_n)$

Wektor zerowy:
$$\mathbf 0 = (0, 0, \dots, 0)$$

Wektor przeciwny do $\mathbf{x}$:
$$\mathbf{-x} = (-x_1, -x_2, \dots, -x_n)$$

### Wybór bazy
W przestrzeni współrzędnych wyróżniona jest rodzina indeksowana ciągów postaci
$$\mathbf e_i = (0, \dots, 0, 1, 0, \dots, 0)$$
gdzie $1$ (oznaczająca element neutralny mnożenia w $K$) jest $i$-tym elementem ciągu, a pozostałe są równe $0$ (czyli elementowi neutralnemu dodawania w $K$). Ponieważ każdy wektor $\mathbf x$ przestrzeni można jednoznacznie wyrazić za pomocą powyższej rodziny,
$$\mathbf x = \sum_{i = 1}^n x_i \mathbf e_i$$
to wspomniane wektory tworzą bazę $K^n$.

Dlatego też $K^n$ nazywa się *przestrzenią współrzędnych* **n-wymiarowej** przestrzeni liniowej nad ciałem $K$.
