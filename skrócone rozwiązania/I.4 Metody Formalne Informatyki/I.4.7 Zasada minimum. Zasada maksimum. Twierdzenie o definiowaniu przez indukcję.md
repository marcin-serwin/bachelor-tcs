Zasada minimum. Zasada maksimum. Twierdzenie o definiowaniu przez indukcję.

---

# Zasada minimum
Dowolny niepusty podzbiór $\mathbb{N}$ ma element najmniejszy.

# Zasada maksimum
Dowolny niepusty i ograniczony od góry podzbiór $\mathbb{N}$ ma element największy.

# Twierdzenie o definiowaniu przez indukcję
Mamy funkcje:
* $f \colon A \to B$
* $g \colon B \times \mathbb{N} \times A \to B$

Istnieje unikalna funkcja $h \colon \mathbb{N} \times A \to B$ taka, że:

$h(0,a)=f(a)$, dla każdego $a \in A$,  
$h(n^{\prime},a)=g(h(n,a),n,a)$, dla każdego $a \in A$ i $n \in \mathbb{N}$.

Powyższe twierdzenie pozwala nam zdefiniować dodawanie, mnożenie, i inne operacje na liczbach naturalnych.

Twierdzenie to mówi, że jeśli wiemy, jak zdefiniować pewną operację dla zera oraz jak zdefiniować ją dla następnika danej liczby, to możemy zdefiniować ją dla wszystkich liczb naturalnych .
