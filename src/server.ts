import express from "express";
import morgan from "morgan"
import cors from "cors"

class serverBootstrap {
    public app: express.Application = express()
    private port :  number = 5000

    constructor(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended : true}))
        this.app.use(cors())
        this.app.use(morgan('dev'))
        this.listen()
    }
    public listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Servidor conrriendo en ${this.port}`);
            
        })
    }
}

new serverBootstrap()