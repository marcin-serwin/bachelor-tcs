Przepływy w sieciach. Twierdzenie o maksymalnym przepływie i minimalnym przekroju.

---

# Sieci przepływowe
Siecią przepływową, bądź krótko siecią, nazywamy skierowany graf $G = (V,E)$, w którym z każdą krawędzią $(u,v) \in E$ wiążemy jej nieujemną przepustowość $c(u,v) \ge 0$. W sieci przepływowej wyróżniamy dwa wierzchołki: źródło oznaczane jako $s$ oraz ujście oznaczane jako $t$.

Niech $G$ będzie siecią oraz niech $c:E \to \mathcal{R}_+$ będzie dla niej funkcją przypisującą przepustowości. Przepływem w $G$ nazwiemy funkcję $f:V \times V \to \mathcal{R}$ spełniającą następujące właściwości:

Dla wszystkich $u,v \in V$ zachodzi $f(u,v) \le c(u,v)$ - warunek ten nazywamy warunkiem ograniczenia przepustowości.
Dla wszystkich $u,v \in V$ zachodzi $f(u,v) = -f(v,u)$ - jest to warunek skośnej symetrii.
Dla wszystkich $u \in V -\{s,t\}$ żądamy aby zachodził warunek zachowania przepływu:
$$\sum_{v\in V} f(u,v) = \sum_{v\in V} f(v,u).$$
O wartości $f(u,v)$ mówimy, że jest to wielkość przepływu z $u$ do $v$. Wartość przepływu $f$, oznaczamy $|f|$ i definiujemy jako sumaryczną wielkość przepływu wypływającego z $s$ wszystkimi krawędziami, tzn.:

$$|f| = \sum_{u \in V} f(s,u).$$

# Przekrój w sieci
Przekrój sieci to para podzbiorów $(S,T)$ zbioru wierzchołków $V$, taka że:
* $S,T$ tworzą podział $V$, tzn. są rozłączne i $S\cup T =V$,
* źródło $s$ należy do $S$, a ujście $t$ należy do zbioru $T$.

Przepustowość przekroju $(S,T)$ to suma
$$c(S,T)=\sum_{v\in S}\sum_{w\in T}c(vw).$$


# Twierdzenie o maksymalnym przepływie i minimalnym przekroju

W dowolnej sieci wartość maksymalnego przepływu jest równa przepustowości minimalnego przekroju.
