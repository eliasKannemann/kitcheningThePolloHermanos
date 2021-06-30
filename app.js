const express = require('express');
const path = require('path');
const app = express();
const port = 3004;

/* MIDDLEWARE */
app.use(express.static(path.join(__dirname,'public')));

/* ROUTES */
app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}\nAbrir en el navegador http://localhost:${port}
    `)
});

app.get('/', (req, res) => {
    let indexPath = path.join(__dirname,'./views/index.html');
    res.sendFile(indexPath);
});