import express from 'express'
import roteador from './routes/geral.routes';
class Server{
    app:any;
    constructor(){
        this.serverConfig()
    }

    private async serverConfig(){
        this.app = express()
        this.app.listen(3000,()=>{
            console.log('Servidor escutando na porta 3000')
        })
        this.app.use(roteador)
    }

}

export default new Server()