// stidenti [ime, prezime, proek, grad]
// CRUD
// dodavanje na studenti vo vajlot
// brisenje na studentu od fajlot
//menuvanje na podatoci na studenti od fajlot
//citanje na site studenti od fajlot


//- treba da dodavame student vo fajlot
// 1. da ja vcitate celata sodrzina od fajlot/ fs.readFile
// 2. da ja konvertirate sodrzinata od obicen tekst vo js niza/objekt / JSON.parse 
// 3. treba da gi dodadete  podatocite na studentot vo nizata / Array.push
// 4. nozata od js niza treba da bide konvertirana vo tekst / JSON.stringify
// 5. tekstot treba da bide zacuvan vo fajlot / fs.writeFile



// 1. go dodavme studentot AAA vo fajlot
// - Imeto na studentot treba da bide smeneto do AAA vo AAB 
// - treba da se izbrise studentot od fajlot 
// 1. da ja vcitate celata sodrzina na fajlot / fs.readFile 
// 2. da ja oknvertirate sodrzinata od obicen tekst vo js niza/pbjekt / JSON.parse 
// 3. da gi izmenite site elemti vo nizata i da napravite promena samo na soodvetniot clen / Array.map
// 4. nizata od js niza/objek treba da bide konvertirana vo tekstot / JSON.stringify
// 5. tekstot treba da bide zacuvan vo fajlot / fs.writeFile

// treba da se izbrise student od fajlot
// 1. da ja vcitate celata sodrzina od fajlot / fs.readFile
// 2. da ja konvertirate sodrzinata od obicen tekst vo js niza / objekt / JSON.parse
// 3. da gi izminete site elemetni vo nizata i da gi izbrisate samo soodvetnite clenovi / ArrayBuffer.filter
// 4. nizata od js niza/objekt treba da bide knvertirana vo tekst /JSON.stringify
// 5. teksto treba da bide zacuvan vo fajlot / fs.writeFile

 //async () => {
 //   let students = await getAllStudent(),
 //   console,log (students);
    //dodavanje
 //  await insertStudent({ime: "Pero", prezime: "Perovski", prosek: 9.2, grad:"Bitola"};)

//    let students = await getAllStudent();
//    console,log(students);// da go ima pero vo listata

    // modifikacija
//    await modifyStudent(0, {ime: "Pero", prezime: "Perovski", prosek: 9.2, grad:"Bitola"});

//    let students = await getAllStudent();
//    console,log(students) // da bide smenet prosekot na Pero
    // brisenje
//    await deleteStudent(0);

//    let students = await getAllStudent();
//    console.log(students); // pero da go nema od listata

//})();
//const fs = require('fs');
//fs.writeFile(
//    'data.json',// fajlot kade ke se zapise
//     'await insertStudent({ime: "Pero", prezime: "Perovski", prosek: 9.2, grad:"Bitola"})'
  //   , // sto ke bide zapisano vo fajlot'
//      (err)=>{// f-ja koja ke se izvrsi otkako ke zavrse zapisot
//        if(err) return console.log(err);
//        console.log('zapisot e napraven');
//});
//fs.writeFile(
//    'data.json','await insertStudent({ime: "Pero", prezime: "Perovski", prosek: 9.2, grad:"Bitola"})'
//    , (err)=>{
//        if(err) return console.log(err);
//        console.log('zapisot e napraven');
//});


//const fileWrite = (filename, data) => {
//    return new Promise((success, fail) =>{
//        fs.writeFile(filename, data, (err) =>{
//            if (err) return fail(err);
//            return success();
//        });
//    });
//};
//const main = async () =>{
//    try {
//        await fileWrite('zpisto e uspesen')
//        await fileWrite('zpisto e uspesen')
//        await fileWrite('zpisto e uspesen')
//    } catch(err) {
//        console.log(err);
//}
//};
//main();

