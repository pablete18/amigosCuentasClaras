import { CuentasController } from "../controllers/cuentasController";
import { BaseRouter } from "./routes";

export class CuentasRouter extends BaseRouter<CuentasController>{
    constructor(){
        super(CuentasController)
    }
    routes(): void {
        this.router.get('/', (req,res)=> this.controller.getUsers(req,res))
        this.router.post('/',(req,res)=> this.controller.createUser(req,res))
    }
}