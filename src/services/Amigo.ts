

export class Amigo{
    public id : number;
    public nombre : string;
    public puso : number;
    public debeRecibir : number;
    public debePagar : number;
     

    constructor(data : { 
        id : number,// permite q pase el objeto directamente a la clase para inicializar las prop
        nombre : string,
        puso : number}
        
    ){
        this.id = 0
        this.nombre = data.nombre;
        this.puso = data.puso;
        this.debeRecibir = 0;
        this.debePagar = 0
        
    }
}