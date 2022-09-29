const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res)=>{
    const htmlFile = `index.html`
    res.send(fs.readFileSync(htmlFile, 'utf-8',(error, data)=>{
        if(error){
            console.error(error);
            return;
        }
    }))
})

app.get('/about', (req, res)=>{
    const htmlFile = `about.html`
    res.send(fs.readFileSync(htmlFile, 'utf-8',(error, data)=>{
        if(error){
            console.error(error);
            return;
        }
    }))
})

app.get('/contact-me', (req, res)=>{
    const htmlFile = `contact-me.html`
    res.send(fs.readFileSync(htmlFile, 'utf-8',(error, data)=>{
        if(error){
            console.error(error);
            return;
        }
    }))
})

app.get('*', (req, res)=>{
    const htmlFile = `404.html`
    res.send(fs.readFileSync(htmlFile, 'utf-8',(error, data)=>{
        if(error){
            console.error(error);
            return;
        }
    }))
})

app.listen(8080);