Odwzorowania liniowe i wieloliniowe

---

# Odwzorowania liniowe.

Niech $V$, $W$ będą przestrzeniami wektorowymi nad ciałem $\mathbb K$ i niech $f: V\longrightarrow W$ będzie odwzorowaniem. Mówimy, że $f$ jest liniowe, jeśli spełnione są następujące warunki

1) dla każdych wektorów $u,v\in V$ zachodzi $f(u+v)=f(u)+f(v)$,

2) dla każdych $\lambda \in \mathbb K$ i $v\in V$ zachodzi $f(\lambda v)=\lambda f(v)$.

Własność pierwszą nazywamy addytywnością odwzorowania $f$, drugą - jednorodnością $f$.

Warunki te można zastąpić jednym:

Dla każdych $\lambda ,\mu \in \mathbb K$ i dla każdych $u,v\in V$ zachodzi równość $f(\lambda u+\mu v)=\lambda f(u) +\mu f(v)$.

# Odwzorowania wieloliniowe

Niech $V_1, ..., V_n$, $W$ będą przestrzeniami wektorowymi nad ciałem $\mathbb K$ i niech $f: V_1\times ... \times V_n \longrightarrow W$ będzie odwzorowaniem wieloliniowym. Spełnia ono takie same warunki jak odwzorowanie liniowe tylko, że dla każdego argumentu z osobna. Formalnie znaczy to, że dla dowolnego $i$ zachodzi:

1) $f(v_1, ... , v_i + u_i, v_{i+1}, ... v_{n}) = f(v_1, ... , v_i, v_{i+1}, ... v_n) + f(v_1, ... , u_i, v_{i+1}, ... v_{n})$

2) $f(v_1, ... , \lambda v_i, v_{i+1}, ... v_{n}) = \lambda f(v_1, ... , v_n)$

Analogicznie jak wcześniej można je uprościć do jednego:

$f(v_1, ... , \lambda v_i + \mu u_i, v_{i+1}, ... v_{n}) = \lambda f(v_1, ... , v_i, v_{i+1}, ... v_n) + \mu f(v_1, ... , u_i, v_{i+1}, ... v_{n})$