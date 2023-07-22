//const express = require('express');
const express =require('express');
const app =express();
app.set('view engine','ejs');
//const app = express();
app.listen(3001);

app.get('/',(req, res)=>{
res.render('indexs');
 });
// app.get('/',(req, res)=>{
// //res.send('<p>Home page of the express </p>');
// res.sendFile('./view/index.html',{root:__dirname });
// });
app.get('/about',(req, res)=>{
    //res.send('<p                        >Home page of the express </p>');
    res.sendFile('./view/about.html', {root:__dirname });

    });
    app.get('/about-us',(req, res)=>{
      res.redirect('/about');  
    });
    app.get('/awoke',(req, res)=>{
        res.redirect('/about'); 
    });
    // 404 page
    app.use((req, res)=>{
        res.sendFile('./view/404.html', {root:__dirname })
    });