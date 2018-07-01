Zbiór $P_n$ wszystkich wielomianów stopnia nie większego niż $n$ jako przestrzeń wektorowa. Podaj wymiar i kilka przykładowych baz.

---

# Wielomian
Wielomian nad ciałem $\mathbb{K}$ to ciąg $p = (a_0, a_1, ...)$, w którym $a_i \in \mathbb{K}$ i tylko skończona liczba elementów jest niezerowa. Jego stopień $\operatorname{deg}(p)$ jest równy $n$ jeśli $a_n \neq 0$ oraz

$$\forall_{i > n}\ a_i = 0$$

Zbiorem wszystkich wielomianów nad ciałem $\mathbb{K}$ jest $\mathbb{K}[X]$. Natomiast ograniczając go tylko do wielomianów stopnia co najwyżej $n$ mamy $\mathbb{K}[X]_{n}$.

# Przestrzeń wektorowa wielomianów
Zbiór $\mathbb{K}[X]_{n}$ spełnia warunki przestrzeni wektorowej, ponieważ:
* Suma wielomianów stopnia nie większego niż $n$ jest wielomianiem stopnia nie większego niż $n$.
* Wielomian przemnożony przez skalar jest wielomianem.

Wymiar takiej przestrzeni jest równy $n + 1$.

## Przykładowe bazy
* $(1, x, x^2, \ldots, x^n)$
* $(1, 1+x, 1 + x + x^2, \ldots, \sum_{i=0}^{n}x^i)$
