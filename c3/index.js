//C - create
//R - read 
//U - update 
//D - delete 

const studenti = [
    {ime: 'Bojan', prosek: 7.5, grad: 'Skopje'},
    {ime: 'Pero', prosek: 8.3, grad:'Bitola' },
    {ime: 'Janko', prosek: 9.2, grad: 'Bitola' },
    {ime: 'Vesna', prosek: 9.2, grad: 'Prilep'},
    {ime: 'Elena', prosek: 9.9, grad: 'Tetovo'},
    {ime: 'Ivana', prosek: 9.9, grad: 'Gostivar'},
    {ime: 'Natasa', prosek: 9.9, grad: 'Kavadarci'},
    {ime: 'Stanko', prosek: 9.9, grad: 'Prilep'},
    {ime: 'Vanco', prosek: 9.9, grad: 'Prilep'},
];

for(let i = 0; i < studenti.length; i++) {
    console.log(studenti[i].ime);
};

// forEach, map, reduce, sort, filter, find
// foreach gi izminuva site elemnti od nizata, ne vraka nikakov rezultat
// studenti.forEach(s => {
//  console.log(s.ime);    
//});

// izminuva niza za promeni na istata, rezultatot e nova niza
//const name = studenti.map(s => {
  //  return s.ime;
//});
//console.log(name);
// reducira/namaluva/sumira niza na eden edinstven rezultat
//let ocenki = studenti.reduce((acc, s) => {
    //console.log(acc);
    //return Number(acc) + Number(v.prosek);
//    return acc + s.prosek;
//}, 0);
//console.log(ocenki);

//studenti.sort((a, b) =>{
//    if(a.prosek < b.prosek) return 1;
//    if(a.prosek > b.prosek) return -1;
//    return 0;

//});
//console.log(studenti); 
// sortira elemni vo nizata sporedn dadena f-ja
//studenti.sort((a, b) =>{
//    if(a.ime < b.ime) return 1;
//    if (a.ime > b.ime) return -1;
//    return 0;
//});
//console.log(studenti);
// vraka niza od elementi koi odgovaraat na postaveniot uslov
//let studentiFilter = studenti.filter((s) =>{
    //return s.ime === 'Pero';
    //return s.ime.endsWith('a');
   // return s.prosek > 8;
//});
//console.log(studentiFilter);
// vraka element od nizata koj odgovara na postaveniot uslov
let studentiFind = studenti.find((s) => {
    return s.ime === 'Pero';
});
console.log(studentiFind);

//domasna
// 1. Site studenti do skopje cie ime zavrsuva na a i  imaat prosek nad 7, podredeni po ime rastecki
// 2. Site studenti koi imaat prosek nad 9 i ne se od skopje, podredeni po prosek opajgacki
// 3. Prvite tri studenti koi imaat iminja od 5 karakteri, podredeni po prosek.
// 4. Gradovi podredeni po grupna visina prosek.(prosek za grad i gradovi po prosek)
// 5. Vkupen prosek na studenti cie ime zavrsuva na a nasproti site ostanati

//if(true && true || false) {

//}
//if(""){

//}
//if(undefined) {

//}
//if(0) {

//}
//if(null){

//}
//if(0){

//}
//if([]){

//}