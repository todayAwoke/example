
const http=require('http');
const fs = require('fs');
const _ = require('lodash');

const server= http.createServer((req,res)=>{
//console.log(req.method);
//lodash
const num=_.random(10,100);
const greet=_.once(()  =>{
    console.log('Hello');
});
greet();
console.log(num);
res.setHeader('Content-Type', 'text/html');
// res.write('<p>hello ,i am awoke</p>')
// res.write('<p>hello  agin ,i am awoke dejenie</p>')
// res.end();
let path='./view/';
switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode=200;
        break;
        case '/about':
            path += 'about.html';
            res.statusCode=200;
            break;
            case '/about-us':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
            default:
                path+='404.html';
                res.statusCode=404;
                break;
}
fs.readFile(path, (err,data)=>{
    if(err){
        console.log(err);

        res.end();
    }
    else {
        res.end(data);
    }
})
});
server.listen(3001,'localhost',()=>{
console.log  ('listening on port');
});
