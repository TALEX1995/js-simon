# Traccia

Descrizione:

Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Bonus:
Mostriamo il countdown dei 30 secondi in pagina
Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt.

<br>
<br>
<br>

## Steps

1. Recupero tutti gli elementi dal DOM
2. Creo un evento al click del button
   - Setto una timing function che mi vada a fare un countdown da 30 a 0
   - Creo un Array con 5 numeri casuali tramite un ciclo
   - Creo un ciclo inserendo la length dell'Array con i numeri casuali per andare a creare 5 elementi li da inserire nel DOM
   - Allo scadere dei 30 secondi faccio scomparire i numeri dalla pagina
   - Allo scadere dei 30 secondi faccio comparire gli input con i numeri da inserire
3. Creo un evento al click sul bottone per inviare i numeri scritti dall'utente
   - Prendo i value degli input
   - Creo una variabile
   - Creo un ciclo per controllare se sono presenti all'interno dell'array in caso aumento di 1 la variabile al punto prima
   - Scrivo in pagina il punteggio finale del giocatore
