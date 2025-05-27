import express from "express";
import morgan from "morgan"
import cors from "cors"
import path from "path";
import methodOverride from "method-override"
import { CuentasRouter } from "./routes/CuentasRouter";


class serverBootstrap {
    public app: express.Application = express()
    private port :  number = 5000

    constructor(){
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended : true}))
        this.app.use(cors())
        this.app.use(morgan('dev'))
        this.app.use(methodOverride('_method'))
        this.app.use('/',this.routers())


        this.listen()

        
    }
    routers() : Array<express.Router>{
        return[new CuentasRouter().router]
    }

    public listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Servidor conrriendo en http://localhost:${this.port}`);
            
        })
    }
}

new serverBootstrap()