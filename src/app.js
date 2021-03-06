import express from 'express';
import productRouter from './Routes/productos.js'
import __dirname from './utils.js'

const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening in PORT ${PORT}`)
})
server.on( 'error', err => console.log( 'Error en el server: ' + err ) );

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.sendFile( __dirname +'/public/index.html')
})


app.use('/products', productRouter)