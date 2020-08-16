 Wyjaśnij czym jest normalizacja baz danych i w jakim celu się ją stosuje.

---

# Normalizacja
Normalizacja jest to proces mający na celu **eliminację powtarzających się danych** w relacyjnej bazie danych.


## Idea
Idea polega na trzymaniu danych w jednym miejscu, a w razie potrzeby linkowania do danych. Taki sposób tworzenia bazy danych zwiększa bezpieczeństwo danych i zmniejsza ryzyko powstania niespójności (w szczególności [anomalii](III.1.7 Anomalie.md)).

Normalizacja nie usuwa danych, tylko zmienia schemat bazy danych. Przeprowadza bazę danych z jednego stanu spójnego (przed normalizacją) w inny stan spójny (po normalizacji). Jedyna różnica polega na innym układzie danych i relacji pomiędzy nimi, ale bez utraty danych (ewentualnie dodawane są nowe klucze główne).

## Własności

  1. **Zachowania atrybutów** - żaden atrybut relacji nie zostanie zagubiony w trakcie procesu normalizacji.

  2. **Zachowania zależności** - wszystkie zależności funkcyjne (definicja poniżej) są reprezentowane w pojedynczych schematach relacji.

  3. Normalizacja **nie powoduje utraty informacji**.

# Zależność funkcyjna
  * Niech będzie dana relacja $R$.
  * $X$, $Y$ - podzbiory atrybutów $R$.
  * Mówimy, że w relacji $R$ zbiór $X$ wyznacza funkcyjnie $Y$ (lub $Y$ jest funkcyjnie zależny od X), co zapisujemy $X \to Y$, wtedy i tylko wtedy, jeżeli dla dwóch dowolnych krotek $t_1$, $t_2$ takich, że $t_1[X] = t_2[X]$ zachodzi $t_1[Y] = t_2[Y]$.

## Przykład
Mamy daną relację `Dostawy`. Załóżmy że `Nazwisko` jednoznacznie identyfikuje dostawcę.

| Nazwisko | Adres               | Produkt | Cena |
|--------------|--------------------|-------------|--------|
| Kowalski  | ul. Krucza 10   | chipsy    | 1,50  |
| Kowalski  | ul. Krucza 10   | orzeszki | 3,50  |
| Kowalski  | ul. Krucza 10   | gruszki   | 2,00  |
| Nowak     | ul. Malwowa 4 | chipsy    | 2,00  |
| Nowak     | ul. Malwowa 4 | orzeszki | 1,50  |
| ...             | ...                      | ...           | ...      |

W tej relacji mamy np. zależność funkcyjną $\{ Nazwisko \} \to \{ Adres \}$, czy też $\{ Nazwisko, Produkt \} \to \{ Cena \}$.
