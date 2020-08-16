Proces Poissona. Definicja i potrzebne własności aby wykazać co następuje. Niech $(N(t), t ­ 0)$ będzie procesem Poissona o parametrze $\lambda$. Wykazać, że jeśli w przedziale czasowym $(0, t]$ zaszło dokładnie jedno zdarzenie, czyli $N(t) = 1$ to czas zajścia tego zdarzenia $(X_1)$ ma rozkład jednostajny na przedziale $(0, t]$ (w szczególności nie zależy od $\lambda$).

---

# Proces Poissona
Rodzina (będąca procesem stochastycznym – procesem Markowa) $(N_{t},t \geq 0)$ zdefiniowana w następujący sposób:
$$N_{t}={\begin{cases}0,&X_{1}>t\\\sup\{n:X_{1}+\dots +X_{n}\leq t\},&X_{1}\leq t\end{cases}}.$$
Gdzie ciąg  $(X_{i})_{i=1,2,3...}$ jest ciągiem niezależnych zmiennych losowych o rozkładzie wykładniczym z jednakowym dla każdej ze zmiennych parametrem $\lambda$.

Zmienna $X_{i}$ oznacza czas pomiędzy ($i-1$)-szym a $i$-tym zdarzeniem (tradycyjnie nazywanym zgłoszeniem), a  $N_{t}$ to liczba zgłoszeń, które wystąpiły do chwili $t$.

# Definicja równoważna
Proces stochastyczny jest procesem Poissona o intensywności $\lambda$ wtedy i tylko wtedy, gdy
* $N_0=0$ - w czasie startowym przyjmuje $0$.
* $(N_t,t\geq 0 )$ ma przyrosty niezależne.
* $N_b-N_a \sim Poiss(\lambda (b-a)$ dla $b>a$ - różnice między stanami mają rozkład Poissona o podanym parametrze.

# Rozkład Poissona
$$f(k,\lambda )=\frac{\lambda^k e^{-\lambda}}{k!}$$

# Dowód
$$P(X_1\leq s |N(t)=1)=\frac{P(X_1\leq s, N(t)=1)}{P(N(t)=1)}=\frac{P(\text{zdarzenie zaszło w }(0,s] \text{ i nie zaszło w }(s,t] )}{P(N(t)=1)}=\frac{(\lambda se^{-\lambda s})(e^{-\lambda (t-s)})}{\lambda te^{-\lambda t}}=\frac{s}{t}, \quad s<t.$$


