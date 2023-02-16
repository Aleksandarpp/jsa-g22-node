const fs = require('fs'); // vcituvawe na paket/modul za rabota so filesystem - fajlovi i direktoriumi

fs.writeFile(
    'data.txt',// fajlot kade ke se zapise
     'HELLO WORLD....Node...:(', // sto ke bide zapisano vo fajlot
      (err)=>{// f-ja koja ke se izvrsi otkako ke zavrse zapisot
        if(err) return console.log(err);
        console.log('zapisot e napraven');
});
fs.writeFile(
    'data.txt','HELLO WORLD....Node...:(', (err)=>{
        if(err) return console.log(err);
        console.log('zapisot e napraven');
});

//PROMISE
//cekor 1
//const fileWrite = () => {

//};
//cekor 2
//const fileWrite = () =>{
//    return new Promise();
//};

//cekor3
//const fileWrite = () =>{
//    return new Promise(() =>{

//    })
//}
//cekor 4
//const fileWrite = () => {
//    return new Promise((success, file)=>{

//}
//    )
//}

//cekor 5

//const fileWrite = () => {
//    return new Promise((success, file) =>{
//        fs.writeFile('data.txt', 'HELLO WORLD.... Node...:(',(err)=>{
//    if(err) return console.log(err);
//    console.log('zapisot e napraven!');
//})
//})

//};

//cekor 6
// const fileWrite = () => {
 //   return new Promise((success, fail) =>{
 //       fs.writeFile('data.txt', 'HELLO WORLD...Node...:(',(err) =>{
 //           if (err) return fail(err);
 //           return success();
 //       });
 //   });
//};

//cekor 7
const fileWrite = (filename, data) => {
    return new Promise((success, fail) =>{
        fs.writeFile(filename, data, (err) =>{
            if (err) return fail(err);
            return success();
        });
    });
};


fileWrite('data1.txt','Nov fajl so zapis od promise')
.then(()=>{
    console.log('zapisto e uspesen(nov fajl')

})
.catch(err => {
    console.log(err);
});

//const main = async () ={

//    try {
//        await fileWrite('zpisto e uspesen')
//    } catch(err) {
//        console.log(err);
//    }
//})();

const main = async () =>{
    try {
        await fileWrite('zpisto e uspesen')
        await fileWrite('zpisto e uspesen')
        await fileWrite('zpisto e uspesen')
    } catch(err) {
        console.log(err);
}
};
main();