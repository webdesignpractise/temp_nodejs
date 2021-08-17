const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){ //home page representation

        res.end('welcome to out home page')
    }                   
    if(req.url==='/about'){ //about page representation

        res.end('Here is out short history')
    } 
    res.end("<h1>Oops!</h1><p>we can's seem to find the page you are looking for</p><a href='/'>back home</a>")
})
server.listen(5000)