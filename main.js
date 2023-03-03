// Esercizi Tipi di dato e Operatori:
// 1 -  Dichiarare una variabile contenente l’età di un utente. Fare in modo che venga stampata in console la frase: Hai x anni e te ne mancano ancora y per arrivare a 100. (servirà una seconda variabile che indichi quanti anni mancano per arrivare a 100)

// console.log("Esempio 1");
// // let age = prompt("Quanti anni hai?");
// let age2 = 56;
// console.log(`Hai ${age2}. Te ne mancano ${100 - age2} per arrivare a 100.`);

// 2 -  Scrivere un programma che dati:
//     a) Un numero totale di gatti (44)
//     b) Il  numero dei gatti presenti in ogni fila (6)
//   Restituisca in output:
//     - Il  numero di file risultanti
//     - indicare il numero di gatti mancanti per completare una nuova fila

//     Esempio:
// “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila, con un avanzo di 2”.

// console.log("Esempio 2");
// let cat = 44;
// let catInOgniFila = 6;
// console.log(
//     `Ci sono ${Math.floor(cat / catInOgniFila)} file di gatti e mancano ${
//         catInOgniFila - (cat % catInOgniFila)
//     } per una nuova fila, con un avanzo di ${cat % catInOgniFila}.`
// );

// 3 - Scrivere un programma che dati sette valori relativi alle temperature della settimana stabilisca la giornata più calda e quella più fredda.
//   Esempio:
//     Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
//     “La temperatura piu’ calda e’ 31 quella piu’ fredda -6”

// console.log("Esempio 3");
// let a = 10;
// let b = -2;
// let c = 31;
// let d = 22;
// let e = 15;
// let f = -6;
// let g = 7;

// console.log(
//     `La temperatura piu’ calda e’ ${Math.max(
//         a,
//         b,
//         c,
//         d,
//         e,
//         f,
//         g
//     )} quella piu’ fredda ${Math.min(a, b, c, d, e, f, g)}`
// );

// 4 - Utilizzando i seguenti operandi (false, 23, NaN, ‘Ciao’, null) scegliere i giusti operatori di confronto e logici per fare in modo che il risultato sia true. Utilizzare tutti gli operandi una sola volta ciascuno.

// console.log("Esempio 4");
// Falsy: false, NaN, null
// Truthy: ‘Ciao’, 23
// console.log(("Ciao" !== 23 && false !== NaN) || null);

// 5 - Scrivere il recap


// let choise_weeck= prompt('scegli un giorno 1 - lunedi 2 - martedi 3 - mercoledi - 4 - giovedi - 5 venerdi - 6 -sabato - 7 domenica');
// if(choise_weeck == 1){ console.log('lunedi')}
// else if(choise_weeck == 2){ console.log('martedi')}
// else if(choise_weeck == 3){ console.log('mercoledi')}
// else if(choise_weeck == 4){ console.log('giovedi')}
// else if(choise_weeck == 5){ console.log('venerdi')}
// else if(choise_weeck == 6){ console.log('sabato')}
// else if(choise_weeck == 7){ console.log('domenica')}
// else if(choise_weeck >=8){console.log('numero errato')};


// Scrivere un programma che dato un numero stampi la tabellina corrispondente.

// let number = prompt('inserisci un numero')

//     for( let i = 1; i<=10 ; i++) {
//         console.log( number * i)
//     }
    
// Scrivere un programma che stampi i numeri da 1 a 100 andando a capo ogni 10.

// let number= ''
// for(let i = 1 ; i<=100; i++){
//   if(i <= 10){
//     console.log(i);
//   }
// number += i

   
// }
// console.log(number )

// 4 - Scrivere un programma che stampi i numeri da 1 a 100 con una variazione. Al posto di ogni numero multiplo di 3 dovra' stampare la stringa 'Fizz', ad ogni multiplo di 5 la stringa 'Buzz' e ad ogni multiplo di 15 la stringa 'FizzBuzz'

// // 
//     for( let i = 1 ; i<= 100; i++){
//         if (i % 3 == 0) {
//             console.log('fiz');
//         }
        
//         else if  (i % 5 == 0) {
//             console.log('buzz');
//         }
//         else if (i % 15 == 0){
//             console.log(FizzBuzz)
//         }
//         else {
//             console.log(i)
//         }
        
    // }

    // - Scrivere un programma che simuli una sfida ai dadi tra due giocatori. Dichiarare una variabile che rappresenti un numero N, per ogni giocatore saranno effettuati N tiri di dato ed alla fine dovra' essere decretato il vincitore (oppure un pareggio)

    

//    
      

//  console.log(number)

    // Scrivere un programma che dato un numero N, se il numero e' pari lo divida per due, se e' dispari lo moltiplichi * 3 e sommi 1. Ripetere questa operazione finche' il risultato finale non sia 1

   //  let i = prompt ('inserisci un numero')

   //  if (i % 2 == 0) {console.log(i / 2)
      
   //  } else if (i % 2 !== 0){
   //    console.log(i * 3 + 1)
   //  }
     

//    Esercizi funzioni:
// 1 - Scrivere una funzione che prenda in ingresso 3 parametri:
//              - Una stringa che rappresenti un nome (es. Matteo)
//              - Un numero che rappresenti un'eta'  (es. 36)
//              - Una stringa che rappresenti un linguaggio di programmazione (es. JavaScript)
//        Questa funzione dovra' restituire la stringa Mi chiamo Matteo, ho 36 anni ed il mio linguaggio di programmazione preferito e' JavaScript

//  
    
//    function presentazione(nome, eta, linguaggio) {
//   return (`Mi chiamo ${i}, ho ${eta} anni ed il mio linguaggio di programmazione preferito e'${linguaggio}`)
//    }
  
//    let i = prompt ("inserisci il tuo nome")
 
//   console.log (presentazione("i", 31, "css"))
  

//   2 - Scrivere una funzione che prenda in input due parametri e restituisca true se sono identici, false altrimenti. 
// Esempi: Input: a = 2, b = 3 Output: false 
//                 Input: a = 2, b = "2" Output: false 
//                 Input: a = 2, b = 2 Output: true



// function uguaglianza(a, b){

// if (a === b){
//     return "true"
// }else{
//     return "false"
// } 
// } 
// console.log(uguaglianza(8, 8))



// Dato l' array  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10] utilizzare il giusto metodo degli array per rimuovere il primo 10 e sostituirlo con un 9

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10]

// numbers.splice(8, 1, 9)

// console.log(numbers)


// Dato un array vuoto names = []   utilizzare il metodo giusto per aggiungere all'interno i nomi degli studenti della vostra aula studio

// let names = []
// names.push("dario,angelo")
// console.log(names)

// Esercizi funzioni + array:
// 1 - Scrivere una funzione che prenda un array di 10 numeri interi ordinati in modo casuale in ingresso e li riordini in modo decrescente. 
// Esempio: Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4] Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4] 
// Variante: Provare ad ordinali in modo crescente.


// function ordinastringa(arr) {
//     return stringa.sort((a, b) => b - a);
// }
// function ordinastringa(arr) {
//     return stringa.sort((a, b) => a - b);
// }
// let stringa = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
// console.log(ordinastringa(stringa));



// function ordinastringa(arr) {
//     return stringa.sort((b, a) => a - b);
// }
// function ordinastringa(arr) {
//     return stringa.sort((b, a) => b - a);
// }
// let stringa = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
// console.log(ordinastringa(stringa));


// function ordinastringa_decrescente(arr) {
//     return stringa.sort((a, b) => b - a);
// }
//  function ordinastringa_crescente(arr) {
//    return stringa.sort((a, b) => a - b);
//  }
// let stringa = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
//  console.log(ordinastringa_decrescente(stringa));
//  console.log(ordinastringa_crescente(stringa));


// Scrivere due funzioni che prendano in input un array di numeri, una dovra’ restituire il numero maggiore, l'altra dovra’ restituire il minore.
// Esempio: Input: a = [1, -10, 4]
// Output: minore = -10, maggiore = 4






// function stringa_minore(arr) {
//     return arr.shift(arr.sort((a, b) => a - b));
// }
// function stringa_massima(arr) {
//     return arr.pop(arr.sort((a, b) => a - b));
// }
// let stringa2 = [-9, 7, 28, -29, 38, 7.9, -97.3];
// console.log(stringa2);
// console.log(`Minore: ${stringa_minore(stringa2)}`);
// console.log(`Maggiore: ${stringa_massima(stringa2)}`);



// Scrivere una funzione che prenda in ingresso una stringa e me la restituisca capovolta

// function str (str1){
//     let stringa = str1.split (' ').reverse().join('')
//     return stringa
// }

// let stringa = "ciao a tutti"
// console.log (stringa)

// function stringaCapovolta(stringa) {
//     let splitted = stringa.split("").reverse().join("");
//     return stringa
//   }
//   let stringaOriginale = "ciao mondo";
//   let stringa2 = stringaCapovolta(stringa);
//   console.log(stringaCapovolta); 




// Esempi:

//     Input : 9
//     Output :  1 cifra

//     Input : 99
//     Output :  2 cifre 

// ESERCIZIO 1
// function reverseString(str) {
//     let arr = str.split("");
//     let reversedArr = arr.reverse();
//     let reversedStr = reversedArr.join("");
//     return reversedStr;
// }

// console.log(reverseString("Ciao"));

// ESERCIZIO2

// function multyArray(arr, num) {
//     let multipliedArr = arr.map((element) => element * num);
//     return multipliedArr;
// }

// console.log(multyArray([2, 4, 8], 3));

// ESERCIZIO 3

// function getRandomNumber(n) {
//     let randomNumbers = Array(n).fill().map(() => Math.random() *100);
//     return randomNumbers;
// }

// console.log(getRandomNumber(5));

// ESERCIZIO 4

// function filterStrings(arr) {
//     let stringArrey = arr.filter((el) =>typeof el == 'string');
//     return stringArrey;
// }

// let mixedArrey = [1, 'hello', 3, null, 'world']
// let stringArrey = filterStrings(mixedArrey);
// console.log(stringArrey);


// - Scrivere una funzione che prenda in input un numero intero (massimo 9999) conti da quante cifre è formato.
// Super indizio: anche le stringhe hanno la proprieta' .length

// function n_cifre(cifre){
// return cifre.length;

// }
// console.log(n_cifre('999'));



// -  Scrivere una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
//   Nel controllo scarta gli spazi e i segni di punteggiatura. 

//   Esempio:
//     Input: i topi non avevano nipoti
//     Output: TRUE


//   Consigli:
//   Potete eliminare spazi e segni di punteggiatura usando :


//      str.replace(/\W/g, "")

// function palindromo(vero_falso){
//     vero_falso.split('').reverse().join('');
   
//     if(vero_falso == confronto){
//    return console.log(true);
// }else{
//     return console.log(false)
// }
// }
// let true_false=console.log(palindromo("otto"))
// let confronto='sette'


// Scrivere una funzione che prenda in input un numero intero N e mi restituisca un array con all'interno N numeri casuali

// function getRandomNumber(n) {
//     let randomNumbers = Array(n).fill().map(() => Math.random() *100);
//     return randomNumbers;
// }

// console.log(getRandomNumber(5));


// - Scrivere una funzione che dati:
//         - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
//         - il tipo di operazione aritmetica da effettuare (stringa), una delle seguenti:
//            addizione
//            sottrazione
//           moltiplicazione
//           divisione
//          Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

//         Esempio:
//         Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b=[9, 3, 1, 4, 7, 6, 5, 10, 1, 5] operazione = "addizione"
//         Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]




// let a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
// let b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];
// let c = [];

// function operetor(arr1,arr2,operazione){
//     switch(true){
//         case (operazione=='addizione'):
//             for(let i=0 ; i<arr1.length;i++){
//               c.push(arr1[i] + arr2[i]);
//             }
//             break;
//         case (operazione == 'sottrazione'):
//             for (let i = 0; i < arr1.length; i++) {
//                 c.push(arr1[i] - arr2[i]);
//             }
//             break;
//         case (operazione == 'moltiplicazione'):
//             for (let i = 0; i < arr1.length; i++) {
//                 c.push(arr1[i] * arr2[i]);
//             }
//             break;
//         case (operazione == 'divisione'):
//             for (let i = 0; i < arr1.length; i++) {
//                 c.push(arr1[i] / arr2[i]);
//             }
//             break;



//     }
//     return c;
// }
// operetor(a,b,'addizione');
// console.log(c);



// - Scrivere una funzione che dato un array di numeri, calcoli la media dei valori e restituisca in output un nuovo array con tutti i valori minori della media.

//   Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori della media= [3, 5, 2]

//   Variante (Abbastanza Croccante):
//   Stampare anche quanti sono i valori minori della media e quanti quelli maggiori della media.

// let numbers = [3, 5, 10, 2, 8];
// function minori(number){
//     return number.filter((number) => number < 5.6);
//     //number.reduce(acc/n)

// }

// let risultato = minori(numbers);
// console.log(risultato);


// - Scrivere una funzione che prenda in ingresso una stringa e la restituisca tutta in maiuscolo

 

// function string(stringa){
//     return stringa.toUpperCase()
// }

// console.log(string ('ciao a titti') )


// - Scrivere una funzione che prenda in ingresso un qualunque numero intero N e stampi in console tutti i numeri da 1 ad N

// function listadinumeri(numbers){
// for(let i = 1 ; i<= numbers ; i++ ){
//     console.log(i)
// }
// }
// listadinumeri(10)


// - Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia la concatenazione dei primi due. 
//    Es. arr1 = [1,2,3]  arr2 = [4,5,6]     output = [1,2,3,4,5,6]

// function concatenazione(arr1, arr2){
//      arr3 = arr1.concat(arr2)
// }
// concatenazione([1, 2, 3,], [4, 5, 6] ) 

// console.log(arr3);

// - Scrivere una funzione che prenda in ingresso un array di nomi e mi restituisca l'array con i nomi in ordine alfabetico capovolto.
//    Es. arr = ['Matteo', 'Anakin', 'Luke', 'ObiWan']     output = ['ObiWan', 'Matteo', 'Luke', 'Anakin']


// function strar_words(nomi){
//      let stringa_capovolta = nomi.sort().reverse()
//       return stringa_capovolta
    

// }

// let nomi =['Matteo', 'Anakin', 'Luke', 'ObiWan'] 
// let stringa_capovolta=strar_words(nomi)
// console.log(stringa_capovolta);


// - Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array con i numeri triplicati


// function tripletta(numeri){
//     let triplica= numeri.map((numero) => numero*3);
//     return triplica
// }

// let numeritriplicati= tripletta([2, 4, 6,] )
// console.log(numeritriplicati)


// Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array che contenga soltanto i numeri multipli di 10
// Es. arr = [1, 10, 56, 130, 45]    output = [10, 130]

// function moltiplicando(numeri){
//     let moltiplica = numeri.filter((numero)=> numero % 10 == 0)
//     return moltiplica;
// }
// let numerimultipli=moltiplicando([1, 10, 56, 130, 45])

// console.log(moltiplicando)



// Scrivere una funzione che prenda in ingresso una stringa e me la restituisca capovolta

// function capovolgimento(stringa){
//     let capovolgi = stringa.split (' ').reverse().join();
//     return capovolgi
// }

//  let stringa = "ciao a tutti"
//  let parolacapovolta = capovolgimento(stringa)
// console.log(parolacapovolta);


// - Scrivere una funzione che prenda in ingresso un qualsiasi numero di parametri e mi stampi in console tutti i parametri passati. (Indizio: spread operator)


// function parametri (numeri){
//     let paramater=  [...numbersOne]
//     return paramater
// }
//  parametri([3, 5, "Dario", 8])
// let pippo = parametri(numeri);
// console.log(pippo)



// (corretto)
// function stampaParametri(...parametri) {
//     console.log(parametri);
//   }
//   stampaParametri("Ciao", 42, true, ["questo", "è", "un", "array"]);


// - Scrivere una funzione che prenda in ingresso o un numero o una stringa. Se il dato passato e' un numero deve trasformarlo in stringa, se il dato passato e' una stringa deve restituirla capovolta
//    Es. input = 5   output = '5'              Es2. input = 'Ciao'   output = 'oaiC'

// function invers (nomi){
//   if (typeof (nomi) === 1) { return nomi.split (' ').reverse().join("");
    
//   }else if (typeof (nomi) === '') {
//     return nomi.toString()
//   }
// }
// 
// console.log(nomi("ciao a tutti"));

// ????

//  function trasformatore (elemento){
//         if(typeof (elemento) == 'string'){
//             return elemento.split("").reverse().join("");
//         }
//         else if(typeof (elemento) == 'number') {
//             return elemento.toString();
//         }
//     }
//     console.log (trasformatore('ciao a tutti'))


// - Scrivere una funzione che prenda in ingresso un qualsiasi numero di dati e mi restituisca la stringa Mi hai passato N dati dove N rappresenta il numero di elementi che sono stati passati
// Es. 1   numeroDati(  'Millenium Falcon', 66, false);       output = Mi hai passato 3 dati



// function numeroDati(uno, due, tre){

//   let arr = []
//   arr.push(uno, due, tre)
//   return console.log(`mi hai passato${arr.length}`);
// }

// numeroDati(uno, due, tre))


// - Scrivere una funzione che prenda in ingresso una stringa e me la restituisca tutta in maiuscolo
// Es. input = 'may the force be with you'       output = 'MAY THE FORCE BE WITH YOU'

// function maiuscolo(frase) {
//    return console.log(frase.toUpperCase());
    
// }
// maiuscolo('may the force be with you')



// - Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia l'unione dei due inviati ma capovolto
// Es. arr1 = [1,2,3]   arr2 = [4,5,6]    output = [6,5,4,3,2,1]


// function arr(arr1, arr2) {
//     return console.log(arr1.concat(arr2).reverse());
    
// }
// arr([1,2,3] , [4,5,6] )


// - Scrivere una funzione che prenda in ingresso un array contenente qualsiasi dato e mi restituisca un nuovo array contenente soltanto numeri
// Es. array = [1, 'due', true, 4]     output = [1, 4]

// function array(arr) {
//     return console.log(arr.filter(elements)=> typeof elements == 'number');
    
// }
// array( [1, 'due', true, 4])


// Esercizi intermedi:
// - Scrivere una funzione che prenda in ingresso un numero e mi stampi in console il conto alla rovescia dal numero scelto fino a 1
// Es. input = 5    output = 5             4             3           2             1                         (indizio: ricordate l'operatore di decremento)

// function conto_alla_rovescia(number) {
//     for (let i= 5; i >=1; i--) {
//         console.log(i);
        
//     }
    
// }
// conto_alla_rovescia(5)


// - Scrivere una funzione che prenda in ingresso un qualsiasi quantitativo di numeri e mi restituisca un array con tutti i numeri dispari maggiori di 10
// Es. moreThanTen(1, 5, 6, 8, 10, 11, 13, 16, 22)     output = [11, 13]

// function array_dispari() {
//     forEach(numero => {numero % 2 == 0
        
//     });
    
// }
// ???????????????????????


// - Scrivere una funzione che prenda in ingresso un nome, un cognome ed una professione e mi restituisca un oggetto che abbia queste proprieta'
// Es. createPerson('Qui-Gon' , 'Jin', 'Maestro Jedi')    output = {name : 'Qui-Gon' , surname: 'Jin', job: 'Maestro Jedi'}

// let person1=

// function createPerson(nome, cognome, professione) {
    
// }
    

// let persona1 = {
//     name : 'Qui-Gon',
//     surname: 'Jin' ,
//     job : 'Maestro Jedi',
// }
// function createPerson(nome, cognome, professione){
//         if ( persona1.name == nome && persona1.surname == cognome && persona1.job == professione){
//             console.log(persona1);
//         } else {
//             console.log('Persona non trovata');
//         }
//     }
// createPerson('Qui-Gon', 'Jin', 'Maestro Jedi')


// - Scrivere una funzione che prenda in ingresso un array e mi restituisca un nuovo array che contenga solo le stringhe messe in ordine alfabetico

// function array(arr1) {
    
//     return console.log(arr1.filter((element)=>typeof element == 'string').sort());
    
// }

// array([1, 2, 3, a, b, d , ])


// Esercizi che il cervello se ne va in sciopero:
// - Scrivere un oggetto che mi permetta di simulare una sala giochi. Questo oggetto dovra' avere una proprieta' che rappresenti una lista di giocatori ed ogni giocatore sara' a sua volta un oggetto con una proprieta' name ed una proprieta' score: []. Scrivere dei metodi che vi permettano di simulare una sfida ai dadi e se ne decreti il vincitore


// let salagiochi = {
//    players : [
//                  player1 = {nome: 'dario', score :[1, 6, 3, 5, 1,]},
//                  player2 = {nome:'franco', score:[1, 5, 3, 2, 4,]},
//                  player3 = {nome:'carlo', score:[1, 4, 4, 2, 1,]},
//                  player4 = {nome:'leo', score:[1, 4, 3, 2, 2,]},
//                   player5 = {nome:'gina', score:[1, 6, 3, 2, 2,]},
//     ],

//     totalscor : function() {this.players.forEach((player)=> {player.totalscor = player.score.reduce((acc,n)=> acc+ n);

//     }); 
        
    
// }
// }
// salagiochi.totalscor()
// console.log(salagiochi);



// if(winner.finalScore > this.players[1].finalScore){
//     console.log(   `Il vincitore della partita e' ${winner.name} ${winner.surname} che ha totalizzato un punteggio finale di: ${winner.finalScore}`   );

// } else{
//     console.log(`Questa partita non ha vincitori perche' i primi due giocatori hanno pareggiato!`);
// }

// }, 






