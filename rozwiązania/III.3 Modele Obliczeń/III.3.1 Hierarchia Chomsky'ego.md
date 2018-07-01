Omów hierarchię Chomsky’ego jezyków, ilustrując klasy i zależnosci między nimi odpowiednimi przykładami.

---

# Hierarchia Chomsky'ego
Hierarchia Chomsky'ego to hierarchia klas języków formalnych, składająca się z czterech klas:

* języki typu 3 – regularne
* języki typu 2 – bezkontekstowe
* języki typu 1 – kontekstowe
* języki typu 0 – rekurencyjnie przeliczalne

# Gramatyka
Gramatyka to sposób opisu języka. Dla gramatyki definiujemy (wszystkie zbiory są skończone):

* zbiór terminali $\Sigma$
* zbiór nieterminali $N$
* symbol startowy $S$ (będący nieterminalem)
* zbiór reguł przepisywania, postaci $\alpha \rightarrow \beta$ (formalnie jest to para), gdzie $\alpha$ jest **niepusta**

Na początku nasza forma zdaniowa składać się będzie tylko z symbolu startowego. W każdym kroku niedeterministycznie możemy przekształcić jego formę zdaniową $\alpha$ na formę zdaniową $\beta$, jeśli $\alpha \rightarrow \beta$ jest jedną z reguł przepisywania. Do języka wygenerowanego tą gramatyką należą wszystkie słowa nad alfabetem $\Sigma$, które da się w ten sposób uzyskać z symbolu startowego w skończonej liczbie kroków.

# Omówienie klas hierarchii Chomsky'ego

## Język regularny
Język, który można wygenerować za pomocą gramatyki liniowej, czyli takiej, która przekształca jeden nieterminal w słowo zawierające ciąg terminali i **co najwyżej** jeden nieterminal. Jeśli ten nieterminal znajduje się na końcu każdej produkcji, to jest to gramatyka prawostronnie liniowa, tj. posiadająca tylko reguły postaci np.:

$$\begin{align}
& A \rightarrow \epsilon \\
& A \rightarrow a \\
& A \rightarrow abc \\
& A \rightarrow B \\
& A \rightarrow aB \\
& A \rightarrow abcB \\
\end{align}$$

Jeśli natomiast nieterminale występują tylko po lewej stronie, jest to gramatyka lewostronnie liniowa.

Gramatyki liniowe są równoważne automatom skończonym.

## Język bezkontekstowy
Język, który można wygenerować za pomocą gramatyki bezkontekstowej, czyli posiadającej tylko reguły postaci:

$$A \rightarrow \gamma$$

gdzie:

* $A$ - nieterminal
* $\gamma$ - dowolne słowo

Gramatyki bezkontekstowe są równoważne niedeterministycznym automatom ze stosem.

## Języki kontekstowe
Języki kontekstowe to takie, które da się wygenerować za pomocą gramatyki kontekstowej, czyli posiadającej tylko reguły postaci:

$$\alpha A\beta \rightarrow \alpha\gamma\beta$$

gdzie:

* $A$ - nieterminal
* $\alpha$, $\beta$ - dowolne słowa
* $\gamma$ - dowolne niepuste słowo

Dodatkowo zezwala się na regułę

$$S \rightarrow \epsilon$$

pod warunkiem, że $S$ jest symbolem startowym i nie znajduje się po prawej stronie żadnej produkcji.

Gramatyki kontekstowe są równoważne automatom ograniczonym liniowo.

## Języki rekurencyjnie przeliczalne
Języki rekurencyjnie przeliczalne to takie, które da się wygenerować za pomocą gramatyki typu 0, czyli posiadającej reguły postaci:

$$\alpha \rightarrow \beta$$

gdzie:

* $\alpha$, $\beta$ - dowolne słowa

Gramatyki typu 0 są równoważne maszynom Turinga.

## Zależności między klasami
Każda gramatyka dopuszcza wszystkie reguły gramatyk o wyższym numerze. Klasy języków kolejnych typów się w sobie zawierają, przy czym jest to zawieranie ostre.

### Języki regularne $\subsetneq$ języki bezkontekstowe
#### $\subseteq$
Każda gramatyka regularna jest gramatyką bezkontekstową.

#### $\subsetneq$
Język słów postaci $a^nb^n$ nad alfabetem $\{a, b\}$ jest językiem bezkontekstowym, generowanym przez gramatykę bezkontekstową o regułach:

$$\begin{align}
& S \rightarrow \epsilon \\
& S \rightarrow aSb
\end{align}$$

Za pomocą lematu o pompowaniu dla języków regularnych można łatwo pokazać, że nie jest on regularny.

### Języki bezkontekstowe $\subsetneq$ języki kontekstowe
#### $\subseteq$
Gramatyki bezkontekstowe mogą posiadać reguły $A \rightarrow \epsilon$ (gdy $A$ nie jest symbolem startowym) niedopuszczalne w gramatykach kontekstowych. Jeśli jednak dla każdej reguły, gdzie występuje $A$ (czyli $B \rightarrow \alpha A\beta$) utworzymy dodatkowe produkcje bez $A$ (czyli $B \rightarrow \alpha\beta$), to otrzymamy równoważną gramatykę bezkontekstową, która jest już kontekstowa.

Innym uzasadnieniem może być przekształcenie gramatyki bezkontekstowej do postaci normalnej Chomsky'ego, która już jest kontekstowa.

Wiemy już, że każda gramatyka bezkontekstowa jest gramatyką kontekstową.

#### $\subsetneq$
Język słów postaci $a^nb^nc^n$ nad alfabetem $\{a, b, c\}$ jest językiem kontekstowym, dla którego da się skonstruować prosty automat liniowo ograniczony.

Jednocześnie za pomocą lematu o pompowaniu dla języków bezkontekstowych można łatwo dowieść, że nie jest on bezkontekstowy.

### Języki kontekstowe $\subsetneq$ języki rekurencyjnie przeliczalne
#### $\subseteq$
Każda gramatyka kontekstowa jest gramatyką typu 0.

#### $\subsetneq$
Rozważmy języki rekurencyjne - są szczególnym przypadkiem języków rekurencyjnie przeliczalych, gdy maszyna Turinga zawsze się zatrzymuje. Każdy język rekurencyjny jest więc rekurencyjnie przeliczalny oraz każdy język kontekstowy jest rekurencyjny.

Potrzebujemy zatem jedynie pokazać, że języki kontekstowe są właściwym podzbiorem języków rekurencyjnych. Argument jest bardzo prosty - maszyna Turinga z własnością stopu potrafi symulować automat ograniczony liniowo, ale nie w drugą stronę - automat ograniczony liniowo dysponuje tylko skończoną pamięcią, więc nie może symulować nieskończonej taśmy.

Jeśli istnieje język rekurencyjnie przeliczalny, który nie jest rekurencyjny, to nie jest on również kontekstowy (bo każdy rekurencyjny jest kontekstowym).

Przykładem takiego języka jest **język uniwersalny**:

$$L_u = \{\ M_w \in \Sigma^{\ast} : M \text{ jest programem i } w \in L(M)\ \}$$
