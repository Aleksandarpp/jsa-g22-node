function doSomething(){
    console.log("Do something good");
    const data = "Do something good";
    return data;
}

const  resolve  = require("path");

const promise = new Promise((resolve, reject) =>{
    if (true) {
        resolve(doSomething());
    } else {
        reject(doSomething());
    }
});

promise.then((val) => {
    console.log(val);
}).catch((err)=>{
    console.log("Err");
    console.log(err);
});