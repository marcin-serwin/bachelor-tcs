Omów złożoność obliczeniową problemu stopu oraz jego dopełnienia.

--------------------------------------------------------------------------------

# Problem Stopu
Zagadnienie algorytmiczne odpowiadające, dla danego algorytmu, na pytanie, czy realizujący go program zatrzyma się (w skończonym czasie); pytanie może dotyczyć konkretnych danych wejściowych albo wszystkich możliwych. O programie, który zatrzymuje się dla wszystkich możliwych danych mówi się, że ma własność stopu.

# Nierozstrzygalność
Nie istnieje uniwersalny algorytm (dla standardowej maszyny Turinga) rozstrzygający problem stopu dla wszystkich algorytmów. Jest to więc problem nierozstrzygalny. Otóż jeżeli istniałby taki program stop, to mógłby on działać zgodnie z poniższym pseudokodem:
````
procedura stop(program, dane): 
	 jeżli program(dane) zatrzymuje się, to
		 zwróć tak,
	  w przeciwnym przypadku
		  zwróć nie.
````
I rozpatrujemy jako program program 
````
procedura test(program): 
 	jeżeli stop(program, program) = tak, to
	  zapętl się.
````
Czy program test zatrzymuje się po otrzymaniu swojego własnego kodu jako danych wejściowych (wywołanie test(test))?

Obie odpowiedzi prowadzą do sprzeczności.

# Problem stopu jest NP-hard i nie jest NP
Redukujemy problem $3SAT$ ($NP$-complete) do $HALT$. Parujemy input z opisem niedeterministycznej maszyny Turinga dla $3SAT$ (sprawdza wartościowania, zatrzyma się jeżeli znajdzie dobre wartościowanie). Zatem jeżeli odpowiedź do problemu $3SAT$ to "tak", to program się zatrzyma. Nie zatrzyma się w przeciwnym wypadku.

HALT nie jest rozstrzygalny, więc nie jest $NP$. Jest w $NP-hard \backslash NP$.

# Dopełnienie problemu stopu jest NP-hard i nie jest NP
Dopełnienie $HALT$ nie jest rozstrzygalne, bo $HALT$ nie jest rozstrzygalny. Weźmy problem $coNP$-complete $TAUTOLOGY$ i maszyne Turinga. Analogicznie jak dla HALT symulujemy zachowanie tej maszyny. Zwracamy nie lub wchodzimy w pętlę.
TAUTOLOGY jest $coNP-complete$ bo jeżeli coś nie jest tautologią to oznacza, że istnieje wartościowanie niespelniające, co można sprawdzic niedeterministyczną maszyną turinga sprawdzając wszystkie opcje.
