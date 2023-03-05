const fs = require('fs');

const dumbFunction = () => {
try {
    //....
    // some error happens
    //....
} catch(err) {
    throw {errpr: 'DUMB_FAILED', message: err};//error rethrow
}
//...
};
const readFile = (file) => {
    return new Promise((success, fail) =>{
        fs.readFile(file, 'utf8', (err, data) =>{
            if (err) {
                return fail({error: 'FILE_FAILED', message:err});
            };
            return success(data);
        })
    });
};

(async () =>{
    try {
        //kod sto sakate da se izvrsi
        dumbFunction();
        await readFile('pero.txt');
    }catch (error) {
        switch (error.error){
            case 'DUMB_FAILED':
                console.log('dumb failed...');
                break;
            case 'FILE_FAILED':
                console.log('something else failed...');
                break;
        }
    }
})();