const express = require('express')
const cors = require('cors')

class Server {

    constructor (){

    this.app = express()
    this.PORT = process.env.PORT;

    //middlewares
    this.middlewares();

    //rutas de mi aplicacion
    this.routes();

    }

    routes (){
        this.app.use('/api/usuario', require('../routes/user'));
    }

    middlewares(){
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
        
    }

    listen(){
        this.app.listen(this.PORT,()=>{
            console.log('api run from port' + '' + this.PORT )
        } )

    }

}


module.exports=Server;