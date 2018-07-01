Gramatyki nieskracajace (monotoniczne) i kontekstowe: definicje i równowaznosc.

--------------------------------------------------------------------------------

# Gramatyka

Definicja w: [Hierarchia Chomsky'ego](III.3.1 Hierarchia Chomsky'ego.md).

# Gramatyka kontekstowa

Definicja w: [Hierarchia Chomsky'ego](III.3.1 Hierarchia Chomsky'ego.md).

# Gramatyka nieskracająca (monotoniczna)

Gramatyka nieskracająca to taka, dla której wszystkich reguł $\alpha \rightarrow \beta$ zachodzi własność $|\alpha| \leq |\beta|$. Dodatkowo, podobnie jak przy gramatyce kontekstowej, zezwala się na dodanie produkcji $S \rightarrow \epsilon$, gdzie $S$ jest symbolem startowym, niewystępującym po prawej stronie żadnej produkcji.

# Równoważność gramatyk nieskracających i kontekstowych

Gramatyki kontekstowe oraz nieskracające są sobie równoważne. Łatwo widać z definicji, że każda gramatyka kontekstowa jest równocześnie gramatyką niezwężającą. Da się także pokazać, że każdą gramatykę niezwężającą da się przekształcić do równoważnej jej gramatyki kontekstowej.

Język kontekstowy można zatem opisać równoważnie za pomocą gramatyki kontekstowej, gramatyki niezwężającej lub automatu liniowo ograniczonego.

## Przekształcenie dowolnej gramatyki niezwężającej do równoważnej jej gramatyki kontekstowej

Mamy gramatykę niezwężającą $G = (N, \Sigma, P, S)$, której wszystkie reguły muszą być postaci $\alpha \rightarrow \beta$, gdzie $|\alpha| \leq |\beta|$.

Skonstruujmy nową gramatykę $G ' = (N', \Sigma, P ', S)$. Na początek utwórzmy kopię $\Sigma '$ zbioru terminali $\Sigma$ oraz dodajmy ją do zbioru nieterminali, tj. $\Sigma '\subset N'$. Skonstruujemy zbiór reguł $P '$ w następujący sposób:

- $a' \rightarrow a$ gdzie $a'$ jest odpowiednikiem elementu $a \in \Sigma$ w zbiorze $\Sigma '$
- w każdej regule z $P$ zamieńmy każdy terminal $a$ na odpowiadający mu nieterminal $a'$ - w ten sposób otrzymamy produkcje typu: $X_1X_2...X_m \rightarrow Y_1Y_2...Y_n$, gdzie $X_i$ oraz $Y_i$ to nieterminale oraz $m \leq n$
- każdą taką produkcję $X_1X_2...X_m \rightarrow Y_1Y_2...Y_n$ zamieńmy teraz na ciąg produkcji:

  - $X_1 X_2 ... X_m \rightarrow$ $Z_1 X_2 ... X_m$
  - $Z_1 X_2 ... X_m \rightarrow Z_1 Z_2 ... X_m$
  - ...
  - $Z_1 ... Z_{m-1}  X_m \rightarrow Z_1 ... Z_{m-1} Z_m$
  - $Z_1 ... Z_{m-1} Z_m \rightarrow Y_1 ... Z_{m}$
  - $Y_1 Z_2 ... Z_{m} \rightarrow Y_1 Y_2 ... Z_{m}$
  - $Y_1 Y_2 ... Z_{m-1} Z_m \rightarrow Y_1 Y_2 ... Y_{m-1} Z_m$
  - ...
  - $Y_1 Y_2 ... Y_{m-1} Z_m \rightarrow Y_1 Y_2 ... Y_{m-1} Y_m ... Y_n$

Zauważmy, że:

- każda reguła z $G$ może być zasymulowana w ten sposób w gramatyce kontekstowej $G'$ przez skończoną liczbę reguł
- możemy utworzyć nieterminale $Z_i$ różne dla każdej z przekształcanych w ten sposób produkcji - dzięki temu powstaje tylko jedna ścieżka poprowadzenia produkcji z $X_1X_2...X_m$ do $Y_1Y_2...Y_n$
- każda z powstałych w ten sposób reguł spełnia warunek gramatyki kontekstowej (przekształcany jest tylko jeden nieterminal, pozostałe symbole są jedynie _kontekstem_ i pozostają bez zmian)
