Determinizm i niedeterminizm dla maszyn Turinga: omów oba modele i związek
między nimi.

---

# Deterministyczna maszyna Turinga

### Definicja:

Deterministyczną maszyną Turinga nazywamy krotkę:

$M = (Q, \Sigma, \Gamma, \vdash, \sqcup, \delta, s, t, r)$

gdzie:
- $Q$ - skończony zbiór stanów
- $\Sigma$ - alfabet wejścia (skończony zbiór)
- $\Gamma$ - alfabet taśmy (skończony zbiór), $\Sigma \subseteq \Gamma$
- $\vdash \in \Gamma \setminus \Sigma$ - lewy marker
- $\sqcup \in \Gamma \setminus \Sigma$ - blank, pusty
- $\delta: Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$ - funkcja przejścia
- $s \in Q$ - stan startowy
- $t \in Q$ - stan akceptujący
- $r \in Q$ - stan odrzucający

$\delta(p, \vdash) = (q, \vdash, R)$    dla $p,q \in Q$<br>
$\delta(t, x) = (t, y, d)$    dla $x,y \in \Gamma, d \in \{L,R\}$<br>
$\delta(r, x) = (r, y, d)$    dla $x,y \in \Gamma, d \in \{L,R\}$

### Interpretacja:

Maszyna Turinga to abstrakcyjny model komputera składający się z:
- nieograniczonej z prawej strony taśmy (z lewej ograniczonej lewym markerem $\vdash$) podzielonej na komórki, w których zapisywane są symbole (elementy zbioru $\Gamma$);
- głowicy, która może się przesuwać po taśmie oraz odczytywać i zapisywać na niej symbole;
- mechanizmu sterującego, który może być w różnych stanach (ale skończenie wielu), który decyduje o działaniu maszyny.
Na podstawie bieżącego stanu i symbolu znajdującego się pod głowicą podejmuje decyzje o:
  - zmianie zawartości komórki taśmy znajdującej się pod głowicą;
  - przesunięciu głowicy w lewo lub w prawo. Ponieważ taśma jest nieograniczona (czyli potencjalnie nieskończona), zawsze można wykonać przesunięcie;
  - zmianie stanu mechanizmu sterującego.

### Konfiguracja:

Kofiguracja maszyny Turinga opisuje dokładnie stan całej maszyny w danym momencie.
Jest to trójka $(x_1, q, x_2) \in \Gamma^* \times Q \times \Gamma^*$, gdzie $q$ to stan, w którym znajduje się maszyna, $x_1, x_2$ to skończone ciągi znaków, takie że $x_1x_2\sqcup^*$ to obraz taśmy, natomiast głowica znajduje się nad pierwszym elementem $x_2$, czyli pozycja głowicy to $|x_1|$.
Konfiguracja początkowa maszyny Turinga to: $(\epsilon, s, {\vdash}x)$, gdzie $x \in \Sigma$ to input, a $\epsilon$ to słowo puste.

### Akceptacja:

Relacja $\xrightarrow[M]{1}$ zmienia konfigurację o 1 krok, a $\xrightarrow[M]{*}$ o dowolną liczbę kroków.

$M$ **akceptuje** $x \in \Sigma^* \Longleftrightarrow (\epsilon, s, {\vdash}x) \xrightarrow[M]{*} (y_1, t, y_2)$, dla pewnych $y_1, y_2 \in \Gamma^*$

$M$ **odrzuca** $x \in \Sigma^* \Longleftrightarrow (\epsilon, s, {\vdash}x) \xrightarrow[M]{*} (y_1, r, y_2)$, dla pewnych $y_1, y_2 \in \Gamma^*$



# Niedeterministyczna maszyna Turinga

Jak deterministyczna z wyjątkiem:
- $\delta \subseteq (Q \times \Gamma) \times (Q \times \Gamma \times \{L,R\})$ - relacja, a nie funkcja.


### Konfiguracja:

Jak w deterministycznej.

### Akceptacja:

Jak w deterministycznej z tym, że relacja $\xrightarrow[M]{i}$ jest zdefiniowana względem delty będącej relacją a nie funkcją.

# Równoważność obu modeli

### Twierdzenie:

Dla dowolnej niedeterministycznej maszyny Turinga $N$ istnieje deterministyczna maszyna Turinga $D$, która akceptuje taki sam język.
