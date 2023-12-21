// 1-masala massiv elementlari orasidan toqlarini sonini topuvchi funksiya yozing
console.log("1-masala");

let count = 0;

let array = [1, 2, 3, 4, 5, 6, 7];

function toqSonlarSoni(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      count++;
    }
  }
  return count;
}
toqSonlarSoni(array);
console.log("Toq sonlar soni: ", count);

// 2-masala massiv elementlari orasidan 3  ga hamda 7 ga karralilarining kopaytmasini topuvchi funksiya
console.log("2-masala");

let sonlar = [21, 23, 42, 45, 67];
let kopaytma = 1;

function karrali(sonlar) {
  for (let i = 0; i < sonlar.length; i++) {
    if (sonlar[i] % 3 == 0 && sonlar[i] % 7 == 0) {
      kopaytma *= sonlar[i];
    }
  }
  return kopaytma;
}

karrali(sonlar);
console.log("Ko'paytmasi: ", kopaytma);

// 3-masala massiv berilganda uning toq elementlaridan iborat yangi massiv hosil qiladigan funksiya ypzing
console.log("3-masala");

let arrayMassiv = [9, 8, 7, 6, 5, 4, 3];
let newMassiv = [];

function massivOdd(arrayMassiv) {
  for (let i = 0; i < arrayMassiv.length; i++) {
    if (arrayMassiv[i] % 2 != 0) {
      newMassiv.push(arrayMassiv[i]);
    }
  }
  return newMassiv;
}

massivOdd(arrayMassiv);
console.log("newMassiv = ", newMassiv);

// 4-masala massiv berilganda uning juft indexdagi elementlaridan iborat yangi massiv hosil qiladigan funksiya yozing
console.log("4-masala");

let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let juftArray = [];

function juftIndex(massiv) {
  for (i = 0; i < massiv.length; i += 2) {
    juftArray.push(massiv[i]);
  }
  return juftArray;
}

juftIndex(massiv);
console.log(juftArray);

// 5-masala so'zli massiv berilganda ushbu so'zlarning bosh harflaridan iborat yangi massiv hosil qiladigan funksiya yozing
console.log("5-masala");

let sozlar = ["situation", "task", "action", "result"];
let firstLetter = [];

function birinchiRaqamniOlish(sozlar) {
  for (let i = 0; i < sozlar.length; i++) {
    let letter = sozlar[i][0];
    firstLetter.push(letter);
  }
  return firstLetter;
}

console.log(birinchiRaqamniOlish(sozlar));

// 6-masala sonlardan tashkil topgan massiv berilganda ushbu massiv orasidagi tub sonlar sonini touvchi funksiya yozing
console.log("6-masala");

// 7-masala massivda juuft hamda 5 ga
//  karrali elementlaridan iborat yangi massiv hosil qiladigan funksiya tuzing.
console.log("7-masala");

let massive = [2, 10, 3, 40, 21, 17, 30];
let newMassive = [];

function juft5gaKarraliSon(massive) {
  for (let i = 0; i < massive.length; i++) {
    if (massive[i] % 2 == 0 && massive[i] % 5 == 0) {
      newMassive.push(massive[i]);
    }
  }
  return newMassive;
}

juft5gaKarraliSon(massive);
console.log(newMassive);
