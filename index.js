const http = require('http');
const fs = require('fs');
http.createServer((req, res)=>{
    if(req.url === '/'){
        const htmlFile = 'index.html'
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(fs.readFileSync(htmlFile, 'utf-8',(error, data)=>{
            if(error){
                console.error(error);
                return;
            }
        }));
        res.end();
    }
    else if(req.url === '/about'){
        const htmlFile = 'about.html'
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(fs.readFileSync(htmlFile, 'utf-8',(error, data)=>{
            if(error){
                console.error(error);
                return;
            }
        }));
        res.end();
    }
    else if(req.url === '/contact-me'){
        const htmlFile = 'contact-me.html'
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(fs.readFileSync(htmlFile, 'utf-8',(error, data)=>{
            if(error){
                console.error(error);
                return;
            }
        }));
        res.end();
    }
    else{
        const htmlFile = '404.html'
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write(fs.readFileSync(htmlFile, 'utf-8',(error, data)=>{
            if(error){
                console.error(error);
                return;
            }
        }));
        res.end();
    }
}).listen(8080);