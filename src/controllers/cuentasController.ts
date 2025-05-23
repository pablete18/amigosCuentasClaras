import {Request,Response} from "express"
import { Amigo } from "../services/Amigo"
import { CuentasClaras } from "../services/CuentasClaras";
import  path from 'path'



const fs = require('fs')
const filePath = path.join(__dirname,"../data/users.json")

const leerJSON= function(){
    const usuarios = fs.readFileSync(filePath,"utf-8")

    return usuarios
}

const parsearJSON = function(json : string){
    const jsonParseado = JSON.parse(json)

    return jsonParseado
}

const escribirJSON = function(usuarios: JSON){
    const usuariosString = JSON.stringify(usuarios,null,3)

    fs.writeFileSync(filePath,usuariosString,"utf-8");

    usuarios = parsearJSON(leerJSON());

    return usuarios
}

export class CuentasController{

   async getUsers(req : Request, res : Response){
    try {   
        const amigos = await parsearJSON(leerJSON())

        return res.render('index',{
         amigos}
        )
        
    } catch (error) {
        console.log(error);
        
    }

    };

   async createUser(req : Request,res : Response) {       
    try {
        const data = req.body
        const amigos = parsearJSON(leerJSON())

        const newAmigo = new Amigo(data)
        const ultimoId = amigos[amigos.length-1].id
        const totalAmigos = new CuentasClaras(amigos.length)

        amigos.push({
            id : ultimoId + 1,
            nombre : newAmigo.nombre,
            puso : newAmigo.puso
        })

        escribirJSON(amigos)
        
        res.render('index',{
            amigos
        })

    } catch (error) {
        console.log(error);
        
    }          
    };
    async deleteUser(req: Request, res : Response){
        try {
            const id: string = req.params.id
            const amigos = leerJSON()
            const userToDestroy = amigos.filter((amigo:any)=> amigo.id !== id)

            escribirJSON(userToDestroy)

            return res.redirect('index')

        } catch (error) {
            console.log(error);
            
        }
    }
    
}