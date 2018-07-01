Grafy planarne i twierdzenie Kuratowskiego.

---

# Grafy planarne

## Graf płaski
Graf płaski to para $G=(V, E)$ , gdzie:
* $V$ jest zbiorem punktów płaszczyzny $\mathbb{R}^2$
* $E$ jest zbiorem nieprzecinających się odcinków lub łuków między wierzchołkami ze zbioru $V$.

## Graf planarny
Graf planarny to graf prezentowalny jako graf płaski.

**Ściana** w grafie płaskim $G$ to zbiór punktów płaszczyzny, które da się połączyć krzywą nieprzecinającą żadnej krawędzi.

Graf $\mathbf{G}_1$ jest homeomorficzny z grafem $\mathbf{G}_2$, jeśli jeden otrzymamy z drugiego poprzez wykonanie skończenie wielu poniższych operacji:

* Dodawanie wierzchołków stopnia dwa na krawędzi.
Jeśli $uw\in{\sf E}\!\left(\mathbf{G}_1\right)$ oraz $x\not\in{\sf V}\!\left(\mathbf{G}_1\right)$, to operacja ta zastępuje graf $\left( {\sf V}\!\left(\mathbf{G}_1\right),{\sf E}\!\left(\mathbf{G}_1\right) \right)$ grafem $\left( {\sf V}\!\left(\mathbf{G}_1\right)\cup\left\lbrace x \right\rbrace,{\sf E}\!\left(\mathbf{G}_1\right)\cup\left\lbrace ux,xw \right\rbrace-\left\lbrace uw \right\rbrace \right)$.
* Usuwanie wierzchołków stopnia dwa.
Jeśli $x\in{\sf V}\!\left(\mathbf{G}_1\right)$ ma jedynie dwóch sąsiadów $u$, $w$, to operacja ta zastępuje graf $\left( {\sf V}\!\left(\mathbf{G}_1\right),{\sf E}\!\left(\mathbf{G}_1\right) \right)$ grafem $\left( {\sf V}\!\left(\mathbf{G}_1\right)-\left\lbrace x \right\rbrace,{\sf E}\!\left(\mathbf{G}_1\right)\cup\left\lbrace uw \right\rbrace-\left\lbrace ux,xw \right\rbrace \right)$.

Oznaczamy przez $\mathcal{K}_{5}$ klikę na 5 wierzchołkach, a przez $\mathcal{K}_{3,3}$ graf pełny dwudzielny $G=(V_1 \cup V_2, E)$, w którym $|V_1| = |V_2| = 3$.

## Twierdzenie Kuratowskiego
> Graf jest planarny wtedy i tylko wtedy, gdy żaden jego podgraf nie jest homeomorficzny z $\mathcal{K}_{5}$ ani z $\mathcal{K}_{3,3}$.

## Twierdzenie Eulera
> W grafie płaskim $G=(V,E)$ o $f$ ścianach i $k \geq 1$ składowych spójnych zachodzi $|V| - |E|  + f = k+1$.

## Spójne grafy planarne
> Jeśli $G=(V,E)$ jest spójnym grafem planarnym o co najmniej $3$ wierzchołkach, to $|E| \leq 3|V| - 6$.

## Kolorowanie grafów planarnych
> Każdy graf planarny jest 4-kolorowalny.
