Zasada włączeń i wyłączeń. Przykłady zastosowań.

---

# Zasada włączeń i wyłączeń
Reguła kombinatoryczna, pozwalająca na określenie liczby elementów skończonej sumy mnogościowej skończonych zbiorów. A

# Twierdzenie
Niech $A_1,A_2,...,A_n$ będą dowolnymi skończonymi zbiorami zaś $i,j,k\in \{1,...,n\}$. Wówczas
$$|\bigcup_{i=1}^n A_i| = \sum_{i=1}^n |A_i| - \sum_{i,j;i<j}|A_i \cap A_j| + \sum_{i,j,k;i<j<k} |A_i \cap A_j \cap A_k|-...+(-1)^{n-1}|A_1\cap ... \cap A_n|,$$
gdzie $|A_k|$ oznacza moc zbioru $A_k$.

# Przykłady zastosowań
## Ile liczb całkowitych $\{1,...,100\}$ nie jest podzielne przez $2,3$ lub $5$?

Niech $S=\{1,..,\}$ i niech $P_1$ to liczby całkowite podzielne przez $2$, $P_2$ - liczby całkowita podzielne przez $3$ i $P_3$ - liczby podzielne przez $5$. $|P_1| = 50$, $|P_2| = 33$ i $|P_3| = 20$. Dodatkowo $P_1\cap P_2 = 16$, $|P_1 \cap P_3 | = 10$, $|P_2\cap P_3|=6$ oraz $|P_1\cap P_2 \cap P_3| = 3$. Zatem $|P_1 \cup P_2 \cup P_3| = 100-(50+33+20)+(16+10+6)-3=26$.

## Niech $A,B$ będą skończonymi zbiorami. Ile istnieje surjekcji $A\to B$?

BSO $A=\{1,...,m\},B=\{1,...,n\}$. Definiujemy $A_j = (A\backslash \{ j\})^B$. Ze wzoru włączeń i wyłączeń otrzymujemy
$$|A_1\cup...,\cup A_m| = \sum_{k=1}^m (-1)^{k+1} \sum_{T\in P_k(m)}|\bigcap_{j\in T} A_j|$$
Niech zatem $T\in P_k(m)$. Wtedy
$$\bigcap_{j\in T}A_j = \bigcap_{j\in T}(A\backslash\{j\})^B=(A\backslash T)^B,$$
skąd otrzymujemy 
$$|\bigcap_{j\in T} A_j| = |(A\backslash T)^B|=(m-k)^n.$$
Zatem
$$|A_1\cup...,\cup A_m| = \sum_{k=1}^m(-1)^{k+1}\sum_{T\in P_k(m)}(m-k)^n=\sum_{k=1}^m (-1)^{k+1}\binom{m}{k}(m-k)^n.$$
Suma zbiorów $A_1\cup...,\cup A_m$ składa się z tych funkcji $f:A\to B$, które nie są surjekcjami. Zatem
$$|f\in A^B: f \text{ jest surjekcją} \}| = m^n-\sum_{k=1}^m (-1)^{k+1}\binom{m}{k}(m-k)^n.$$

## Liczba permutacji bez punktów stałych zbioru $A$
Niech $n=|A|$. Niech $D(A)$ będzie zbiorem permutacji $A$ bez punktów stałych.
Definiujemy $A_j=\{ \pi\in S(A): \pi(j)=j\}$. Mamy 
$$|A_1\cup...,\cup A_m| = \sum_{k=1}^m (-1)^{k+1} \sum_{T\in P_k(m)}|\bigcap_{j\in T} A_j|.$$
Jeżeli $T\in P_k(n)$, to
$$|\bigcap_{j\in T} A_j| = (n-k)!,$$
zatem
$$ |A_1\cup...,\cup A_m| = \sum_{k=1}^n \sum_{T\in P_k(n)}(n-k)! = \sum_{k=1}^n (-1)^{k+1} \binom{n}{k}(n-k)!=\sum_{k=1}^n(-1)^{k+1} \frac{n!}{k!(n-k)!}(n-k)! = \sum_{k=1}^n(-1)^{k+1}\frac{n!}{k!}.$$
Zauważamy, że $|D(A)|=n!-|A_1\cup...,\cup A_m|$, czyli
$$D(A)=\sum_{k=0}^n(-1)^k\frac{n!}{k!} = n!\sum_{k=0}^n\frac{(-1)^k}{k!}.$$
