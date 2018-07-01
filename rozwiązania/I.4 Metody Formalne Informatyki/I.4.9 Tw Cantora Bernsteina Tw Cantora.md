Twierdzenie Cantora-Bernsteina. Twierdzenie Cantora. Czy istnieje zbiór wszystkich zbiorów. Odpowiedź uzasadnij.

---

# Twierdzenie Cantora-Bernsteina
Jeśli zbiór $A$ jest równoliczny z pewnym podzbiorem zbioru $B$ oraz zbiór $B$ jest równoliczny z pewnym podzbiorem zbioru $A$, to zbiory $A$ i $B$ są równoliczne.

$$A \leq_{m} B\ \wedge\ B \leq_{m} A \implies A \sim_{m} B$$

Symbolicznie:

$$|A| \leq |B|\ \wedge\ |B| \leq |A| \implies |A| = |B|$$

# Twierdzenie Cantora
Moc zbioru $A$ jest **mniejsza** niż jego zbioru potęgowego:
$$|A| < |\mathcal{P}(A)|$$

### Idea dowodu
Zauważmy, że każdy podzbiór zbioru $A$ możemy zakodować jako krotkę należącą do zbioru $\{0, 1\}^{|A|}$ w taki sposób, że jeśli $i$-ty element zbioru $A$ należy do podzbioru to na $i$-tym miejscu wpisujemy $1$ a w przeciwnym przypadku $0$. Załóżmy teraz, że istnieje surjekcja $f: A \to \mathcal{P}(A)$. Taką surjekcje możemy przedstawić wypisując odpowiednie krotki w tabeli. Możemy jednak skonstruować krotkę, która nie należy do obrazu funckji a jest podzbiorem $A$ - jest to krotka która ma $1$ tam przekątna tabeli ma $0$ i $0$ tam gdzie na przekątnej jest $1$ - z tego wynika, że nie istnieje surjekcja $f$, czyli $|A| < |\mathcal{P}(A)|$.

# Zbiór uniwersalny
Nie istnieje zbiór wszystkich zbiorów. Załóżmy, że jednak istnieje zbiór wszystkich zbiorów $A$.

1. Zgodnie z twierdzeniem Cantora, $|A| < |\mathcal{P}(A)|$.
2. Jednocześnie $A$ zawiera wszystkie zbiory, więc w szczególności zawiera wszystkie elementy zbioru $\mathcal{P}(A)$. W takim razie $\mathcal{P}(A) \subseteq A$.
3. Z tego wynika, że $|\mathcal{P}(A)| \leq |A|$.

Sprzeczność. $\Box$
