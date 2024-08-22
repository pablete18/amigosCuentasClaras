import {Request,Response} from "express"

export class CuentasController {
    getUsers(req : Request, res : Response){
        res.render('index',{
            
        })
    }
}