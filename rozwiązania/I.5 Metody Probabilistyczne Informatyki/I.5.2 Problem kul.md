Problem kul i urn ze wzmocnionym feedbackiem (jako ilustracja zastosowania
rozkładu wykładniczego).

---

# Wprowadzenie

Na postawie [8.3.2](https://ki.pwr.edu.pl/lemiesz/info/mitz.pdf)

Jako zastosowanie rozkładu wykładniczego uważamy interesującą odmianę naszego standardowego modelu kul i urn. W tym problemie mamy tylko dwie urny i kule przybywają jedna po drugiej. Początkowo obie urny mają co najmniej jedną kule.

Załużmy, że jeśli urna $1$ ma $x$ kul i urna $2$ ma $y$ kul, wówczas prawdopodobieństwo, że urna $1$ uzyska następną kulę, wynosi $x / (x + y)$, podczas gdy prawdopodobieństwo, że urna $2$ uzyska następną kulę to $y / (x + y)$. Ten system ma informację zwrotną: im więcej kuli ma urna, tym więcej kul może uzyskać w przyszłość. 

Można sprawdzić (przez indukcję), że jeżeli oba pojemniki zaczynają się od jednej kuli i wszystkich  kul jest $n$, to liczba kul w urnie 1 jest ma rozkład jednostajny na zakresie $[1, n-1]$.

Załóżmy zamiast tego, że wzmacniamy informacje zwrotne w następujący sposób. Jeśli urna $1$ ma
$x$ kul i urna $2$ ma $y$ kul, wówczas prawdopodobieństwo, że urna $1$ uzyska następną kule, wynosi $x^p / (x^p + y^p)$, a prawdopodobieństwo, że urna 2 uzyska następną kulę to $y^p/(x^p+y^p)$ dla
jakiegoś $p> 1$. Ustawienie $p> 1$ wzmacnia przewagę kosza z większą ilością kulek.

Ten model został zaproponowany do opisania sytuacji ekonomicznych, które prowadzą do monopolu. Załóżmy na przykład, że istnieją dwa systemy operacyjne: Lindows i Winux.
Użytkownicy będą kupować maszyny z tym samym systemem operacyjnym, co inni użytkownicy, aby zachować zgodność. Ten efekt może być nieliniowy w liczbie użytkowników każdego systemu; jest to modelowane przez parametr $p$.

Teraz pokazujemy niezwykły wynik: jeżeli $p> 1$, to istnieje moment, w którym jeden pojemnik otrzyma całą resztę kul. W kontekście ekonomicznym jest to bardzo silna forma monopolu; drugi konkurent po prostu przestaje pozyskiwać nowych klientów.

## Twierdzenie
Bez wzgędu na stan początkowy, jeżeli $p>1$, to z prawdopodobieństwem $1$ istnieje liczba $c$, taka że jedna z urn nie otrzyma więcej niż $c$ kul.

**Dowód** Załóżmy, że obie urny zaczynają od $1$ kuli. Nie ma to wpływu na wynik. 

Zaczniemy od omówienia podobnego procesu. Rozważmy dwie urny, które w czasie $0$ mają po jednej kuli. Kule "przychodzą" do każdej z urn. Jeżeli urna otrzyma swoją $z$-tą kulę w czasie $t$, to jego kolejną kulą będzie ta, która przyjdzie w czasie $t+T_z$, gdzie $T_z$ to zmienna losowa o rozkładzie wykładniczym z parametrem $z^p$. Podobnie druga urna ze zmienną losową $U_z$ z takim samym rozkładem. $T_z$ oraz $U_z$ są niezależne. Każda urna może być rozważana oddzielnie.

Mimo iż ten proces może wydawać się niezwiązany z problemem początkowym, teraz dowiedziemy że go naśladuje. Rozważmy punkt, w którym przychodzi kula i mamy $x$ kul w urnie 1 i $y$ kul w urnie 2. Wiemy, że rozkłąd wykładniczy nie ma pamięci. 

$$P(T\geq t+\tau |T >t)=\frac{e^{-\lambda(t+\tau)}}{e^{-\lambda t}}=R(\tau),$$
czyli prawdopodobieństwo to zależy jedynie od długości przedziału $\tau$ a nie jego położenia na osi czasu.

Nie ma znaczenia, w której urnie wylądowala nowa kula, czas w którym kolejna kula wyląduje w urnie $1$ ma rozkład wykładniczy ze średnią $x^{-p}$ i analogicznie czas w którym kolejna kula wyląduje w urnie $2$ ma rozkłąd wykładniczy ze średnia $y^{-p}$. Poza tym, kolejna kula ląduje w urnie $1$ z prawdopodobieństwem $x^p/(x^p+y^p)$ i w urnie $2$ z prawdopodobieństwem $y^p/(x^p+y^p)$, gdyż

**Lemat**: Jeżeli $X_1,X_2$ są niezależnymi zmiennymi losowymi o rozkładzie wykładniczym z parametrami $p_1,p_2$, to $min(X_1,X_2)$ też ma rozkład wykładniczy z parametrem $p_1+p_2$ oraz
$P(min(X_1,X_2)=X_i)=\frac{p_i}{p_1+p_2}$.

**Dowód**: 
$$P(min(X_1,X_2)>x)=P(X_1>x)P(X_2>x)=e^{-p_1x}e^{-p_2x}=e^{-(p_1+p_2)x}$$
Niech $f(x_1,x_2)=p_1e^{-p_1x_1}p_2e^{-p_2x_2}$.
$$P(X_1<X_2)=\int\limits_{x_2=0}^\infty {\int\limits_{x_1=0}^{x_2} f(x_1,x_2) dx_1}dx_2=\frac{p_1}{p_1+p_2}$$
$$f(x,\lambda)=\lambda  e^{-\lambda x}.$$

Zdefiniujmy teraz (czas nasycenia) $F_1=\sum_{j=1}^\infty T_j$ oraz $F_2=\sum_{j=1}^\infty U_j$. Te zmienne określają pierwszy moment, w którym liczba kul w urnie jest nieograniczona. Niekoniecznie są one dobrze określone. Co jeżeli suma szeregu nie jest zbieżna? 
$$E[F_1]=E[\sum_{j=1}^\infty T_j]=\sum_{j=1}^\infty E[T_j]=\sum_{j=1}^\infty \frac{1}{j^p}$$
Wystarczy więc wykazać, że jest to zbieżne dla $p>1$.
$$\sum_{j=1}^\infty \frac{1}{j^p} \leq 1+ \int_{u=1}^\infty \frac{1}{u^p}du=1+\frac{1}{p-1}$$
Zatem $F_1$ i $F_2$ są zbieżne z prawdopodobieństwem $1$. Ponadto, są one różne z prawdopodobieństem $1$. Załóżmy, że dane są wszystkie zmienne $T_z,U_z$ poza $T_1$. Wówczas 
$$T_1=\sum_{j=1}^\infty U_j - \sum_{j=2}^\infty T_j,$$
ale prawdopodobieństwo, że $T_1$ przyjmuje jakąkolwiek konkretną wartość wynosi $0$, zatem $F_1\ne F_2$ z prawdopodobieństwem $1$.

Załóżmy, że $F_1<F_2$. Wówczas istnieje $n$:
$$\sum_{j=1}^n U_j < F_1 < \sum_{j=1}^{n+1} U_j,$$
co implikuje, że dla każdego wystarczająco dużego $m$:
$$\sum_{j=1}^n U_j < \sum_{j=1}^m T_j < \sum_{j=1}^{n+1} U_j,$$
co oznacza, że urna 1 otrzymała $m$ kul zanim urna $2$ otrzymała swoją $(n+1)$-szą kulę. Ponieważ nasz proces odpowiada oryginalnemu procesowi, dzieje się to również w nim. Zatem kiedy urna $2$ ma $n$ kul, nie otrzyma żadnych kolejnych. Ten sam argument działa dla $F_2<F_1$. Zatem z prawdopodobieństwem $1$ istnieje $n$, takie że jedna z urn nie otrzyma więcej niż $n$ kul.
