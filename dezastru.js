// Data Type

//Strig
let propozitiaNoastra = "Riedl are mere."
//Number
let numrulMeu = 167
//Object - {}
let obiectulNostru = {
    nume: "Werner",
    prenume: "Alexander",
    age: 20,
    sex: "M"
}
//Array - []
let familiaExtinsa = [
    {
        nume: "Werner",
        prenume: "Alexander",
        age: 20,
        sex: "M"
    },
    {
        nume: "Werner",
        prenume: "Max",
        age: 22,
        sex: "M"
    },
    {
        nume: "Adam",
        prenume: "Iulia",
        age: 29,
        sex: "F"
    },
    {
        nume: "Riedl",
        prenume: "Camelia",
        age: 53,
        sex: "F"
    },
    {
        nume: "Grosu",
        prenume: "Alice",
        age: 21,
        sex: "F"
    },
    {
        nume: "Grosu",
        prenume: "Antonia",
        age: 12,
        sex: "F"
    },
    {
        nume: "Marinel",
        prenume: "Marcel",
        age: 6,
        sex: "M"
    },
    {
        nume: "Popescu",
        prenume: "Andreea",
        age: 26,
        sex: "F"
    },
    {
        nume: "Anton",
        prenume: "Andrei",
        age: 33,
        sex: "M"
    },
    {
        nume: "Mircea",
        prenume: "Mihai",
        age: 16,
        sex: "M"
    },
]
//Array care contine numere
let numberArray = [12, 45, 65, 37, 83, 249, 356, 399, 400, 456]

// Printam rezultate in terminal cu functia console log
// Printam variabila propozitiaNoastra care contine un string
console.log(propozitiaNoastra)
// Printam variabila numarulMeu care contine un numar
console.log(numrulMeu)
// Printam variabila obiectulNostru care contine un obiect
console.log(obiectulNostru)
// Printam valoarea varstei din obiectulNostru
console.log(obiectulNostru.age)
//Printam array-ul familia mea
console.log(familiaExtinsa)
console.log("----------------------------------------------------------------------------------------------------------------")

let underOneHundred = []
let overOneHundred = []


function separatorulDeNumere(nrArr){
    for (i = 0; i < nrArr.length; i++) {
        if(nrArr[i] < 100){
            underOneHundred.push(nrArr[i])
        }else if(nrArr[i] > 100){
            overOneHundred.push(nrArr[i])
        }
    }
    console.log(underOneHundred)
    console.log(overOneHundred)
}

function separatorulDeNumere2(nrArr) {
    const predicat = (x) => x < 100;
    const sub100 = nrArr.filter(predicat);
    const peste100 = nrArr.filter(!predicat);
    console.log(sub100, peste100);
}

separatorulDeNumere(numberArray)

console.log("--------------------------------------------------------MUNCA LU RIEDL--------------------------------------------------------")

function separatorulDeSex(nrArr) {
    const predicat = (x) => x === M;
    const esteM = nrArr.filter(predicat);
    const nuesteM = nrArr.filter(!predicat);
    console.log(esteM, nuesteM);
}







