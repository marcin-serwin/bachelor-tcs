Opisz sprzętowe mechanizmy zarządzania i ochrony pamięci.

---

# Zarządzanie i ochrona pamięci
Podstawą do zarządzania i ochrony pamięci jest segmentacja i stronicowanie. Opisane są one w pytaniu [III.6.5](../III.6 Systemy operacyjne/III.6.5 Segmentacja i stronicowanie.md), więc tutaj znajdują się tylko uwagi.

Podstawową jednostką, która zajmuje się tym w procesorze, jest **MMU**.

## Pamięć wirtualna
Bardzo ważną koncepcją w zarządzaniu pamięcią jest pojęcie pamięci wirtualnej. Polega to na tym, że proces nie używa prawdziwych **adresów fizycznych**, tylko **adresów wirtualnych**. Przy każdym odczycie i zapisie adresy wirtualne są tłumaczone przez MMU na adresy fizyczne. Dwa adresy wirtualne mogą nawet wskazywać na ten sam adres fizyczny.

## Tryby CPU
Segmentacja i stronicowania mają sens jako mechanizm ochrony pamięci dzięki dwóm trybom, w jakich pracować może CPU:

 - **Tryb jądra** - każdy kod, który wykonuje się w trybie jądra, może robić dosłownie cokolwiek. Może zmieniać i edytować tablice stron, kontrolować rejestry segmentowe, wysyłać i odbierać przerwania sprzętowe.

   W tym trybie działa zawsze jądro systemu operacyjnego.

 - **Tryb użytkownika** - nie może modyfikować tablicy stron itp.

   W tym trybie działają wszystkie procesy użytkownika.
