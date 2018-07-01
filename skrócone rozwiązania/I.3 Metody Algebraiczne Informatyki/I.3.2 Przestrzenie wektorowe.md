Przestrzenie wektorowe, baza (czy zawsze istnieje), wymiar. Podaj przykłady.

---

# Przestrzeń wektorowa
Zbiór wektorów, które można **skalować** i **dodawać**. Formalnie, $\mathbb{V}$ z dodawaniem wektorów $\mathbb{V} \times \mathbb{V} \rightarrow \mathbb{V}$ i mnożeniem przez elementy ustalonego ciała $(K,+, \cdot )$  $\mathbb{V} \times K \rightarrow \mathbb{V}$.

Zwana również przestrzenią liniową.

## Aksjomaty
Zwyczajowo: $a,b \in K$ i $u,v,w \in \mathbb{V}$.

1. **Łączność dodawania**: $u + (v + w) = (u + v) + w$
2. **Przemieność dodawania**: $u + v = v + u$
3. **Element neutralny dodawania**: $v + \vec 0 = v$
4. **Element przeciwny dodawania**: $v + (-v) = \vec 0$
5. **Łączność skalowania**: $a(bv) = (ab)v$
6. **Element neutralny skalowania**: $1v = v$
7. **Rozdzielność skalowania względem dodawania wektorów**: $a(v + w) = av + aw$
8. **Rozdzielność skalowania względem dodawania skalarów**: $(a + b)v = av + bv$

*Pierwsze 4 aksjomaty czynią ze zbioru wektorów z dodawaniem grupę przemienną (abelową).*

# Kombinacja liniowa
Kombinacją liniową wektorów $\mathbf{v_1, v_2, \dots, v_n}$ o współczynnikach $a_1, a_2, \dots a_n$ z ciała nazywa się wektor

$$a_1\mathbf{v_1} + a_2\mathbf{v_2} + \dots + a_n\mathbf{v_n}$$

# Liniowa niezależność
Zbiór wektorów $\mathbf{v_1, v_2, ...,  v_n}$ jest liniowo niezależny, gdy równanie $$a_1 v_1 + a_2 v_2 + \ldots + a_n v_n = \vec 0$$ może być spełnione jedynie gdy wszystkie $a_i$ są zerami. Czyli żaden z tych wektorów nie może być zapisany jako kombinacja liniowa pozostałych wektorów w zbiorze.

Innymi słowy, zbiór wektorów jest liniowo niezależny jeśli jedyną reprezentacją $\vec 0$ (jako liniowa kombinacja jego wektorów) jest trywialna reprezentacja, gdy wszystkie skalary są zerami.

# Baza przestrzeni wektorowej
Następujące warunki są równoważne:
* $v_1, \ldots, v_n$ to **baza** przestrzeni $\mathbb{V}$,
* $v_1, \ldots, v_n$ to minimalny układ wektorów generujących $\mathbb{V}$,
* $v_1, \ldots, v_n$ to maksymalny układ liniowo niezależny.
* każdy wektor w przestrzeni ma *jednoznaczne* przedstawienie jako liniowa kombinacja $v_1, \ldots, v_n$.

Mówimy, że **baza generuje przestrzeń** $\mathbb{V}$, jeśli dowolny wektor $v \in \mathbb{V}$ można przedstawić jako liniową kombinację elementów z bazy.

## Istnienie bazy
**Każda przestrzeń liniowa ma bazę**. Dowód tego twierdzenia przebiega różnie w zależności od tego, czy w danej przestrzeni istnieje skończony zbiór generujący tę przestrzeń, czy nie. W tym drugim przypadku należy odwołać się do lematu Kuratowskiego-Zorna. Dowód istnienia bazy nie jest konstruktywny, tzn. nie daje żadnego algorytmu na otrzymanie wektorów tworzących bazę.

Powyższe twierdzenie jest równoważne z **aksjomatem wyboru**.

# Wymiar
Wszystkie bazy są równoliczne. Dzięki temu można określić wymiar $dim(\mathbb{V})$ przestrzeni liniowej $\mathbb{V}$ jako moc jej dowolnej bazy.

Jak skończona baza, to przestrzeń jest skończeniewymiarowa. Jak nie to nieskończeniewymiarowa. Te drugie mają wymiar co najwyżej continuum.

# Przykłady

## Zerowa przestrzeń liniowa
Sam wektor zerowy: $\{\mathbf{ \vec 0}\}$. Bazą jest zbiór pusty, tak więc $\{\mathbf{ \vec 0}\}$ jest $0$-wymiarową przestrzenią liniową.

## Ciało
Samo ciało $K$. Operacje są takie same jak w ciele. Jedynka $K$ służy jako baza, tak więc $K$ jest $1$-wymiarową przestrzenią liniową nad sobą.

Dodatkowo $K$ ma tylko dwie podprzestrzenie: $\{\mathbf 0\}$ oraz samo $K$.

## Przestrzeń współrzędnych
$n$-wymiarowa przestrzeń $K^n$ nazywaną *przestrzenią współrzędnych*. Każdy wektor $\mathbf x$ ma postać:
$$\mathbf x = (x_1, x_2, \dots, x_n)$$

Działania są zdefiniowane na składowych $x_i$:
* $\mathbf{x + y} = (x_1 + y_1,\ x_2 + y_2,\ \dots,\ x_n + y_n)$
* $c \mathbf x = (cx_1,\ cx_2,\ \dots,\ cx_n)$

Wektor zerowy:
$$\mathbf 0 = (0, 0, \dots, 0)$$

Wektor przeciwny do $\mathbf{x}$:
$$\mathbf{-x} = (-x_1, -x_2, \dots, -x_n)$$

### Wybór bazy
Rodzina indeksowana ciągów postaci

$$\mathbf e_i = (0, \dots, 0, 1, 0, \dots, 0)$$

z $1$ na każdym miejscu (reszta $0$). Miejsc jest $n$, więc dlatego mamy **n-wymiarową** przestrzeń liniową nad ciałem $K$.
