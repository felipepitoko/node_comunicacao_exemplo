import {Request, Response} from 'express'
class ContatosController{
    public async consulta(req:Request, res:Response): Promise<any>{
        try{
            return res.status(200).send('Seja bem vindo')
        }
        catch(error){
            console.log(error)
            return res.status(500).send('Voce e uma Seja bem vindo')
        }
    }
}
export default new ContatosController()