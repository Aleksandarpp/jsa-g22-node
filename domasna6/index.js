const http = require("http");

const holder = (req, res) =>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers['user-agent']);
    console.log('hello from server')
    res.end('Hello!from path')
//};
const [_, op, a, b] = req.url.split('/');
console.log(op, a, b);

let o;

switch(op) {
    case 'sobiranje':
         o = Number (a) + Number (b);
         res.end(`${o}`);
    break;
    case 'odzemanje':
        o = a - b;
        res.end(`${o}`);
        break;
    case 'delenje':
        o = a / b;
        res.end(`${o}`);
        break;
    case 'mnozenje':
        o = a * b;
        res.end(`${o}`);
        break;
        default:
            res.end('OK')

}
};

const server = http.createServer(handler);

server.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server successfully started!');
});


