//document.body.innerHTML += "JavaScript"
/* Zadání 
Malé algoritmy
Jednoduchá cvičení na použití metody `forEach`.
Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
1.Vypište do stránky všechna čísla.
2.Vypište do stránky druhé mocniny všech čísel.
3.Vypište do stránky pouze záporná čísla.
4.Vypište do stránky absolutní hodnotu všech čísel.
5.Vypište do stránky pouze sudá čísla.
6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
9.Spočítejte, kolik je v seznamu záporných čísel.
10.Spočítejte součet všech čísel v poli.
11.Spočítejte průměr všech čísel v poli.
12.Spočítejte součet všech kladných čísel v poli.
*/


//Řešení:

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
//index      0    1   2    3   4   5     6    7  8   9  10  11   12  13   14  15  16  17  18  

];
//1. Vypište do stránky všechna čísla.
console.log(numbers)

document.body.innerHTML += numbers

//2. Vypište do stránky druhé mocniny všech čísel.
numbers.forEach((hodnota, index) => {
const druhaMocnina = hodnota * hodnota;
document.body.innerHTML += `<p>Druhá mocnina čísla na indexu ${index} (${hodnota}) je ${druhaMocnina}</p>`;
});

//3. Vypište do stránky pouze záporná čísla.
numbers.forEach((hodnota, index) => {
if (hodnota < 0) {
document.body.innerHTML += `<p> Záporné číslo na indexu (${index} je ${hodnota}</p>`
}
});  

//4.Vypište do stránky absolutní hodnotu všech čísel.
numbers.forEach((number, index) => {
    const absolutniHodnota = Math.abs(number);
    document.body.innerHTML += `<p>Absolutní hodnota čísla na indexu ${index} (${number}) je ${absolutniHodnota}</p>`;
  });

//5.Vypište do stránky pouze sudá čísla.
numbers.forEach((number, index) => {
    if (number % 2 === 0) {
      document.body.innerHTML += `<p>Sudé číslo na indexu ${index} je ${number}</p>`;
    }
  });

//6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
numbers.forEach((number, index) => {
    const absolutniHodnota = Math.abs(number);
    if (absolutniHodnota % 3 === 0) {
      document.body.innerHTML += `<p>Číslo na indexu ${index} (${number}) má absolutní hodnotu (${absolutniHodnota}) dělitelnou 3.</p>`;
    }
  });

  //7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
  
  const referenceNumber = 5;

  numbers.forEach((number, index) => {
  const vzdalenost = Math.abs(number - referenceNumber);
  document.body.innerHTML += `<p>Číslo na indexu ${index} (${number}) je vzdáleno od čísla ${referenceNumber} o ${vzdalenost}.</p>`;
});

//8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.

const srovnavaciCislo = 5;

numbers.forEach((number, index) => {
  const vzdalenost = number - srovnavaciCislo;
  const druhaMocninaVzdalenosti = vzdalenost * vzdalenost;
  document.body.innerHTML += `<p>Druhá mocnina vzdálenosti čísla na indexu ${index} (${number}) od čísla ${srovnavaciCislo} je ${druhaMocninaVzdalenosti}.</p>`;
});


//9.Spočítejte, kolik je v seznamu záporných čísel.
let pocetZapornych = 0;

numbers.forEach(number => {
  if (number < 0) {
    pocetZapornych++;
  }
});

document.body.innerHTML += `<p>V seznamu je ${pocetZapornych} záporných čísel.</p>`;

//10. Spočítejte součet všech čísel v poli.
let soucet = 0;

numbers.forEach(number => {
  soucet += number;
});

document.body.innerHTML += `<p>Součet všech čísel v poli je: ${soucet}</p>`;

//11.Spočítejte průměr všech čísel v poli.

soucet = 0;
const pocetCisel = numbers.length;

numbers.forEach(number => {
  soucet += number;
});

const prumer = soucet / pocetCisel;

document.body.innerHTML += `<p>Průměr všech čísel v poli je: ${prumer}</p>`;

//12.Spočítejte součet všech kladných čísel v poli.

let soucetKladnych = 0;

numbers.forEach(number => {
  if (number > 0) {
    soucetKladnych += number;
  }
});

document.body.innerHTML += `<p>Součet všech kladných čísel v poli je: ${soucetKladnych}</p>`;