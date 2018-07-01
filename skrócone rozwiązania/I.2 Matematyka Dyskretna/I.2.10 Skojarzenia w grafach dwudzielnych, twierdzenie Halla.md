Skojarzenia w grafach dwudzielnych, twierdzenie Halla.

---

# Skojarzenia w grafach dwudzielnych

* **Skojarzenie** w grafie $G$ to taki zbiór krawędzi $M \subseteq E$, w którym żadne dwie nie są incydentne z tym samym wierzchołkiem.
* **Skojarzenie maksymalne** to skojarzenie o maksymalnej liczności. Liczność maksymalnego skojarzenia w grafie $G$ oznaczamy przez $\nu(G)$.
* **Skojarzenie doskonałe** to skojarzenie wykorzystujące wszystkie wierzchołki grafu.

##  Twierdzenie Halla

### Bajka
Tak zwane twierdzenie o kojarzeniu małżeństw. Jest ono często ilustrowane poprzez przedstawienie następującego problemu:

> Mamy dwie grupy – dziewcząt i chłopców – oraz pewną sieć znajomości, to znaczy wiemy, których chłopców z tej grupy zna każda z dziewczyn. Kiedy zachodzi sytuacja, w której każdej dziewczynie można przyporządkować jednego kandydata na męża? Tacy kandydaci nie mogą się powtarzać.

Okazuje się, że warunkiem koniecznym i wystarczającym, aby istniało takie skojarzenie par, jest to, by każda podgrupa dziewcząt licząca $k$ osób znała co najmniej $k$ chłopców.

### Treść
Niech graf $G = (V_1 \cup V_2, E)$ będzie grafem dwudzielnym.

W tym grafie istnieje skojarzenie, w którym wszystkie wierzchołki z $V_1$ są skojarzone $\iff$ dla każdego podzbioru $V_1' \subseteq V_1$ zachodzi:

$$|V_2'| \geqslant |V_1'|,$$

gdzie $V_2'$ to podzbiór wierzchołków z $V_2$, z którymi połączone krawędziami są wierzchołki $V_1'$.

Jeśli $|V_1| = |V_2|$, to takie skojarzenie jest doskonałe.
