Twierdzenie Cantora-Bernsteina. Twierdzenie Cantora. Czy istnieje zbiór
wszystkich zbiorów. Odpowiedź uzasadnij

---

# Twierdzenie Cantora-Bernsteina
Jeśli zbiór $A$ jest równoliczny z pewnym podzbiorem zbioru $B$ oraz zbiór $B$ jest równoliczny z pewnym podzbiorem zbioru $A$, to zbiory $A$ i $B$ są równoliczne.

$$A \leq_{m} B\ \wedge\ B \leq_{m} A \implies A \sim_{m} B$$

Symbolicznie:

$$|A| \leq |B|\ \wedge\ |B| \leq |A| \implies |A| = |B|$$

# Twierdzenie Cantora
Moc zbioru $A$ jest **mniejsza** niż jego zbioru potęgowego:
$$|A| < |\mathcal{P}(A)|$$

# Zbiór uniwersalny
Nie istnieje zbiór wszystkich zbiorów. Załóżmy, że jednak istnieje zbiór wszystkich zbiorów $A$.

1. Zgodnie z twierdzeniem Cantora, $|A| < |\mathcal{P}(A)|$.
2. Jednocześnie $A$ zawiera wszystkie zbiory, więc w szczególności zawiera wszystkie elementy zbioru $\mathcal{P}(A)$. W takim razie $\mathcal{P}(A) \subseteq A$.
3. Z tego wynika, że $|\mathcal{P}(A)| \leq |A|$.

Sprzeczność. $\Box$
