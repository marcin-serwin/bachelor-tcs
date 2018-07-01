Zasada indukcji pozaskończonej a dobry porządek.

---

# Dobry porządek
Zbiór jest **dobrze uporządkowany** jeśli każdy jego niepusty podzbiór ma element najmniejszy.

Pojęcie dobrego porządku ma ścisły związek z pojęciem indukcji matematycznej - pojęcie indukcji można stosować we wszystkich zbiorach dobrze uporządkowanych.

## Przykłady
Przykładem porządku liniowego, który nie jest dobrym porządkiem, jest standardowo uporządkowany $\mathbb{Z}$ (podobnie $\mathbb{R}$), gdyż w zbiorze tym nie ma najmniejszego elementu.

Dobrym porządkiem jest natomiast $\mathbb{N}$.

# Zasada indukcji pozaskończonej
Rozszerzenie indukcji matematycznej na zbiory dobrze uporządkowane, czy też nawet na klasę liczb porządkowych.

## Definicja
Dla ustalonego porządku $(X, \leq)$ oraz $Z \subset X$ i $Z \neq \emptyset$ spełniającego warunek, że jeżeli $Z$ zawiera wszystkie elementy mniejsze od pewnego $x$, to zawiera również $x$, z zasady indukcji pozaskończonej wynika, że $Z=X$.

## Twierdzenia
* W dobrym porządku obowiązuje zasada indukcji.

* Jeśli w liniowym porządku istnieje element najmniejszy oraz obowiązuje zasada indukcji, to jest on dobrym porządkiem.

## Bajka
Zarówno definicje indukcyjne jak i twierdzenie o indukcji matematycznej można porównać do rozumowań *krok po kroku*, gdzie *kroki* są ponumerowane **liczbami naturalnymi**. Np sedno dowodów indukcyjnych leży zawsze w podaniu uzasadnienia, że dla każdego $n\in {\mathbb N}$,

> jeśli do kroku $n$ (wyłącznie) wszystko było dobrze, to stąd można wywnioskować, że na kroku $n$ też wszystko jest dobrze.

Możemy jednak sobie wyobrazić, że wykonaliśmy wszystkie *kroki* ponumerowane liczbami naturalnymi i chcemy kontynuować nasz proces. Ponieważ jedyną własnością liczb naturalnych potrzebną do rozumowań indukcyjnych jest, że każdy niepusty podzbiór ${\mathbb N}$ ma element najmniejszy, naturalnym sposobem na kontynuację naszego procesu, jest deklaracja, że nasze *kroki* są numerowane przez kolejne elementy pewnego zbioru dobrze uporządkowanego. Ale przecież każdy zbiór dobrze uporządkowany jest porządkowo izomorficzny z pewną liczbą porządkową (której elementy to liczby porządkowe od niej mniejsze). Zatem możemy myśleć, że nasze *kroki* w procesie indukcyjnym są ponumerowane liczbami porządkowymi. Wówczas sedno **rozszerzonych dowodów indukcyjnych** (czyli *dowodów przez indukcję pozaskończoną*) leży w podaniu uzasadnienia, że dla każdej liczby porządkowej $\alpha$,

> jeśli do kroku $\alpha$ (wyłącznie) wszystko było dobrze, to stąd można wywnioskować, że na kroku $\alpha$ też wszystko jest dobrze.
