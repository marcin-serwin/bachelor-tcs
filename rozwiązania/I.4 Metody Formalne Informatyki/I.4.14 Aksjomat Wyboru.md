 Aksjomatyczne ujęcie teorii mnogości. Aksjomat wyboru.

---
# Aksjomatyczne ujęcie teorii mnogości.

Aksjomaty są zdaniami wyodrębnionymi spośród wszystkich twierdzeń danej teorii, wybranymi tak, aby wynikały z nich wszystkie pozostałe twierdzenia tej teorii. Taki układ aksjomatów nazywany jest aksjomatyką.  

Standardowym zestawem aksjomatów teorii mnogości przyjmowanym dzisiaj w matematyce jest system Zermelo-Fraenkla z aksjomatem wyboru(__AC__), czyli __ZFC__. Aksjomaty __ZF__ *(treść aksjomatów w mojej opinii opcjonalna)*:

1. __Aksjomat ekstensjonalności__: Jeżeli zbiory $a$  i $b$  mają te same elementy, to są identyczne.
2. __Aksjomat zbioru pustego__: Istnieje zbiór, który nie ma żadnego elementu.
3. __Aksjomat pary__: Dla dowolnych zbiorów $a$  i $b$  istnieje zbiór $c$ , którego elementami są dokładnie zbiory $a$ oraz $b$.
4. __Aksjomat sumy__: Dla dowolnej rodziny zbiorów $r$  istnieje zbiór $u$ , do którego należą dokładnie te elementy $x$ , które należą do co najmniej jednego spośród zbiorów, które są elementami rodziny $r$.
5. __Aksjomat zbioru potęgowego__: Dla każdego zbioru $x$ istnieje zbiór $p$ , którego elementami są dokładnie podzbiory zbioru $x$.
6. __Aksjomat nieskończoności__: Istnieje zbiór induktywny, czyli taki, że:  
    - $\emptyset \in x$
    - jeżeli $z \in x,$ to $z \cup \{z\} \in x.$
7. __Aksjomat regularności__: Każdy niepusty zbiór $x$  ma element rozłączny z $x$ (żaden zbiór nie jest swoim własnym elementem.).  


# Aksjomat wyboru

## Definicja
__Aksjomat wyboru, pewnik wyboru, AC__ (ang. axiom of choice) – aksjomat teorii mnogości gwarantujący istnienie zbioru (nazywanego selektorem) zawierającego dokładnie po jednym elemencie z każdego zbioru należącego do danej rodziny niepustych zbiorów rozłącznych.  

Aksjomat wyboru mówi, że jeśli $X$ jest zbiorem niezawierającym zbioru pustego oraz takim, że każde dwa jego elementy są rozłączne, to istnieje zbiór $W$, który z każdym z elementów $X$ ma dokładnie jeden element wspólny. Intuicyjnie znaczy to, że mając rodzinę rozłącznych zbiorów, możemy stworzyć zbiór, wybierając po jednym elemencie z każdego zbioru.
