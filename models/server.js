const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //middlewares
        this.middlewares();
        this.routes();
    }

    middlewares() {
        //Directororio publico
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }



    routes() {

        this.app.use(this.usuariosPath, require('../routes/user.routes'));

    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor en puerto :', this.PORT);
        });
    }
}


module.exports = Server;