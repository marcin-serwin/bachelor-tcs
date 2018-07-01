Przykłady zbiorów nieprzeliczalnych.

---

# Zbiory nieprzeliczalne
Zbiór, który nie jest [przeliczalny](I.4.3 Zbiory przeliczalne.md). Zbiór nieskończony, który nie jest równoliczny ze zbiorem liczb naturalnych (zatem ma większą moc).

## Własności
* Suma dwóch (i dowolnej ilości) zbiorów nieprzeliczalnych jest zbiorem nieprzeliczalnym.
* Różnica zbioru nieprzeliczalnego i przeliczalnego jest zbiorem nieprzeliczalnym.
* Iloczyn kartezjański dowolnej ilości zbiorów nieprzeliczalnych jest zbiorem nieprzeliczalnym.

## $[0, 1]$
Pokażemy szkic dowodu na to, że moc zbioru liczb rzeczywistych z przedziału $[0, 1]$ jest większa od mocy zbioru liczb naturalnych. Natychmiastowy wniosek z tego faktu: liczb rzeczywistych jest więcej niż liczb naturalnych.

Dowód korzysta z **metody przekątniowej**. Opiera się na założeniu możliwości ponumerowania liczb rzeczywistych z przedziału $[0, 1]$, aby dojść do sprzeczności. Dla przypomnienia - możliwość ponumerowania elementów zbioru jest równoważna założeniu, że zbiór liczb w tym przedziale jest przeliczalny.

### Rozumowanie
Każda liczba rzeczywista $0 \le x \le 1$ ma swoje rozwinięcie dziesiętne - skończone lub nie. Jeśli jest ono skończone, dopiszemy na jego końcu zera w taki sposób, aby otrzymać rozwinięcie formalnie nieskończone.

Spróbujmy ponumerować **wszystkie** liczby z tego przedziału np. w taki sposób:


1. 0,**2**67888928717743...
2. 0,2**7**1673820983098...
3. 0,21**9**212212222222...
4. 0,342**1**11334423422...
5. 0,2134**2**1113344234...
6. 0,95411**2**122893457...
7. 0,739208**3**96716263...
8. ...

Pamiętajmy – założyliśmy, że powyższy ciąg zawiera **wszystkie** liczby rzeczywiste z przedziału $0\le x\le 1$.

Skonstruujemy teraz liczbę rzeczywistą, która jednak w powyższym ciągu na pewno nie wystąpi. Mianowicie, kolejne cyfry naszej liczby tworzymy tak, że nasza liczba ma na $k$-tym miejscu po przecinku cyfrę o $1$ większą niż ma na $k$-tym miejscu liczba stojąca w powyższym ciągu na miejscu $k$-tym, lub $0$, jeżeli tą cyfrą była $9$.

W naszym przykładzie wyglądałaby ona tak:

$$0,3802334...$$

Ponieważ założyliśmy, że zbiór zawiera **wszystkie** liczby rzeczywiste z przedziału $0\le x\le 1$ to znaczy, że nowo skonstruowana liczba musi być równa którejś z liczb już tam występujących. Załóżmy, że jest równa $n$-tej liczbie – wtedy, w szczególności, powinna mieć na $n$-tym miejscu po przecinku taką samą cyfrę – dochodzimy więc do sprzeczności, ponieważ skonstruowaliśmy liczbę, która na $n$-tym miejscu ma inną cyfrę. Otrzymana sprzeczność pokazuje, że zbiory liczb naturalnych i rzeczywistych z przedziału $[0,1]$ nie są równoliczne.


## Przykłady
Wszystkie poniższe zbiory są mocy continuum $\mathfrak c = 2^{\aleph_0}$.

* $[0,1]$,
* $\mathbb{R}$,
* $2^{\mathbb{N}}$ - zbiór funkcji $\mathbb{N} \to \{0, 1\}$,
* $\mathcal{P} (\mathbb{N})$ - zbiór podzbiorów zbioru $\mathbb{N}$,
* $\mathbb{N}^{\mathbb{N}}$ - zbiór funkcji $\mathbb{N} \to \mathbb{N}$.

Natomiast zbiory $2^{\mathbb{R}}$ i $\mathbb{R}^{\mathbb{R}}$ są jeszcze większej mocy - $2^{\mathfrak c}$.
