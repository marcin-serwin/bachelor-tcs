Twierdzenie o rekurencji uniwersalnej, trzy przykłady zastosowania w analizie
algorytmów.

---

# Twierdzenie o rekurencji uniwersalnej
> Dla funkcji $T(n)$ zadanej przez 
>
>$T(n)= \left \{\begin{array} {ll} 
\Theta(1),& \textrm{dla}\quad n\in \{0,1\}\\  
a\cdot T\left( \left\lfloor\frac{n}{b}\right\rfloor \right)+f(n),& \textrm{dla}\quad n>1 
\end{array}  \right.$
>
>zachodzi:
>
> * jeśli $f(n)=O(n^{\log_b{a}-\epsilon})$ dla pewnego $\epsilon > 0$, to $T(n)=\Theta(n^{\log_b{a}})$,
> * jeśli $f(n)=\Theta(n^{\log_b{a}})$, to $T(n)=\Theta(n^{\log_b{a}} \log{n})$,
> * jeśli $f(n)=\Omega(n^{\log_b{a}+\epsilon})$ dla pewnego $\epsilon > 0$ oraz $a \cdot f(\frac{n}{b}) \leq c \cdot f(n)$ dla pewnego $c < 1$ i prawie wszystkich $n$, to $T(n) = \Theta(f(n))$.

## Zastosowania
1. $T(n)=3T(\frac{n}{2}) + \Theta(n)$.  <br>
Mamy $a=3$, $b=2$, $log_b a = log_2 3 \approx 1.58.$  <br>
Widzimy że $f(n) = O(n^{log_b a - \epsilon})$ np. dla $\epsilon = 0.5$ - zachodzi przypadek 1. <br>
Zatem $T(n) = \Theta(n^{log_2 3})$

2. $T(n)=16T(\frac{n}{4})+ \Theta(n^2)$. <br>
Mamy $a=16$, $b=4$, $log_b a = 2.$ <br>
Widzimy że $f(n) = \Theta(n^{log_b a})$ - zachodzi przypadek 2.  <br>
Zatem $T(n) = \Theta(n^2 \log n)$ 

3. $T(n)=2T(\frac{n}{3}) + n \log{n}$. <br>
Mamy $a=2$, $b=3$, $log_b a = log_3 2 \approx 0.631.$  <br>
$n^{log_3 2} \approx n^{0.631}$ zatem $f(n) \in \Omega(n^{\log_3{2} + \epsilon})$ np. dla $\epsilon = 0.3$. <br>
$a \cdot f(\frac{n}{b}) = 2\cdot \frac{n}{3}\log{\frac{n}{3}} \leq \frac{2}{3}n\log{n}=\frac{2}{3}f(n)$ <br>
Zatem zachodzi punkt 3 $\Longrightarrow T(n) = \Theta(n \log n)$

4. $T(n)=2T(\frac{n}{2}) + n \log{n}$. <br>
Mamy $a=2$, $b=2$, $log_b a = 1$.  <br>
Jednak wiemy, że $n \log n \notin O(n)$, $n \log n \notin \Theta(n)$, ale też $\forall_{\epsilon > 0}\,\, \log n \notin \Omega(n^{\epsilon}) \Longrightarrow \forall_{\epsilon > 0}\,\, n \log n \notin \Omega(n^{1 + \epsilon})$
 <br>
Zatem dla tego przypadku nie da się zastosować Twierdzenia o rekurencji uniwersalnej.
