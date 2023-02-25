const studenti = [
    {ime: 'Bojan', prosek: 7.5, grad: 'Skopje'},
    {ime: 'Pero', prosek: 8.3, grad:'Bitola' },
    {ime: 'Janko', prosek: 6.9, grad: 'Bitola' },
    {ime: 'Vesna', prosek: 9.2, grad: 'Skopje'},
    {ime: 'Elena', prosek: 9.9, grad: 'Kumanovo'},
    {ime: 'Vanco', prosek: 10, grad: 'Tetovo'},
    {ime: 'Elena', prosek: 9.9, grad: 'Ohrid'},
    {ime: 'Ivana', prosek: 6.9, grad: 'Kumanovo'},
    {ime: 'Natasha', prosek: 8.1, grad: 'Skopje'},
    {ime: 'Stanko', prosek: 7.2, grad: 'Strumica'},
];
//console.log(studenti);

//1. Site studenti od Skopje cie ime zavrsuva na a i imaat prosek nad 7, podredeni po ime rastecki.


let studenti1 = studenti.filter((student) =>{
    return (student.grad === 'Skopje' && student.ime.endsWith('a') && student.prosek > 7)
});
console.log (studenti1);

studenti1.sort((a, b) =>{
    if(a.ime < b.ime) return 1;
    if(a.ime > b.ime) return -1;
    if(a.ime === b.ime) return 0;
});

// 2. Site studenti koi imaat prosek nad 9 i ne se od skopje, podredeni po prosek opajgacki

let studenti2 = studenti.filter((student) => {
    return (student.prosek > 9 && student.grad !== 'Skopje')
}); 
studenti2.sort((a, b) =>{
    if (a.prosek < b.prosek) return 1;
    if (a.prosek > b.prosek) return -1;
     return 0;
});
console.log(studenti2);

// 3. Prvite tri studenti koi imaat iminja od 5 karakteri, podredeni po prosek.

let studenti3 = studenti.filter(element => {
    return element.ime.length === 5
});
studenti3.sort((a, b) =>{
    if(a.prosek > b.prosek) return -1;
    if(a.prosek < b.prosek) return 1;
    return 0;
});
studenti3 = studenti3.slice(0, 3)
console.log(studenti3);

// 4. Gradovi podredeni po grupna visina prosek (prosek za grad i gradovi po prosek)

let set = [];
for(let i = 0; i < studenti.length; i++){
    if(!set.includes(studenti[i].grad)){
        set.push(studenti[i].grad);
    }
}


//let set = new Set(studenti.map(s => s.grad));
//console.log(set);

let res = Array.from(set).map(g => {
    let sbroj = studenti.filter(s => s.grad === g).length;// kolku studenti se od odreden grad
    let svkupno = studenti.reduce((acc, studenti) =>{
        if(studenti.grad === g) {// dali studentot e od odreden grad
            return acc + studenti.prosek;//go sobirame prosekot so prosecite na studentite od istiot grad
        }
        return acc;// vrati ja prethodnata sostojba
    }, 0); 
    return {
        grad: g,
        prosek: svkupno / sbroj  
    }
}).sort((a, b) =>{
    if(a.prosek > b.prosek) return -1;
    if(a.prosek < b.prosek) return -1;
    if(a.prosek == b.prosek) return -1;
});
console.log(res);

// 5. Vkupen prosek na studenti cie ime zavrsuva na a nasproti site ostanati

let studenti4 = studenti.filter((student) => {
    return student.ime.endsWith('a');
});
let ocenki1 = studenti4.reduce((acc, s) =>{
    return acc + s.prosek;

}, 0); 
console.log(ocenki1)
let studenti5 = studenti.filter((studenti) =>{
    return !studenti.ime.endsWith('a')
});
let ocneki2 = studenti5.reduce((acc, s) =>{
    return acc + s.prosek;
}, 0);console.log(ocneki2)