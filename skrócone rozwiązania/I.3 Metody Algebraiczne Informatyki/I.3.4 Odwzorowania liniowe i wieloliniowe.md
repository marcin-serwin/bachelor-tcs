Odwzorowania liniowe i wieloliniowe.

---

# Odwzorowania liniowe
Mamy przestrzenie wektorowe $V$ i $W$ nad ciałem $\mathbb K$ i odwzorowanie $f: V\longrightarrow W$. Odwzorowanie $f$ jest liniowe, jeśli spełnione są następujące warunki:

1. **Addytywność**: $f(u+v)=f(u)+f(v)$
2. **Jednorodność**: $f(av)= af(v)$

Można w skrócie, że dla  $a,b \in \mathbb K$ i $u,v\in V$:

$$f(au + bv) = af(u) + bf(v)$$

# Odwzorowania wieloliniowe
Podobnie jak wcześniej, wszystkie przestrzenie są nad ciałem $\mathbb K$, ale jest ich już więcej i odwzorowanie to $f: V_1\times ... \times V_n \longrightarrow W$. Jest wieloliniowe kiedy spełnia takie same warunki jak poprzednio, ale dla każdego argumentu z osobna. Czyli, dla każdego $i$ zachodzi:

1. $f(v_1, ... , \mathbf{v_i + u_i}, v_{i+1}, ... v_{n}) = f(v_1, ... , \mathbf{v_i}, v_{i+1}, ... v_n) + f(v_1, ... , \mathbf{u_i}, v_{i+1}, ... v_{n})$

2. $f(v_1, ... , \mathbf{a} v_i, v_{i+1}, ... v_{n}) = \mathbf{a}f(v_1, ... , v_n)$

Znowu można skrócić:

$f(v_1, ... , \mathbf{a} \mathbf{v_i} + \mathbf{b} \mathbf{u_i}, v_{i+1}, ... v_{n}) = \mathbf{a} f(v_1, ... , \mathbf{v_i}, v_{i+1}, ... v_n) + \mathbf{b} f(v_1, ... , \mathbf{u_i}, v_{i+1}, ... v_{n})$
