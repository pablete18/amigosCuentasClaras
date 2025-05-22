import { Amigo } from "./Amigo"

export class CuentasClaras{
   public totalAmigos : Amigo[]
    
   constructor(  
    totalAmigos : Amigo[]){
    

    this.totalAmigos = totalAmigos
   }
    totalGastado(): number {

       const total = this.totalAmigos.reduce((total, amigos)=> total + amigos.puso, 0)
       return total
    }
    
    dividirTotal(): number{
        return this.totalGastado() / this.totalAmigos.length
    }
    
    cuentasClaras(): void{
        const cadaAmigoPaga = this.dividirTotal()

        this.totalAmigos.forEach(amigo=> {
            if(amigo.puso < cadaAmigoPaga){
                amigo.debePagar = cadaAmigoPaga - amigo.puso
            }else {
                amigo.debeRecibir = amigo.puso - cadaAmigoPaga
            }
        })
        
        const amigoDeudor = this.totalAmigos.filter(amigo=> 
            amigo.debePagar > 0        
        )
    
        const amigoAcreedor = this.totalAmigos.filter(amigo=>
            amigo.debeRecibir > 0
           )

        amigoDeudor.forEach(deudor=> {

            while(deudor.debePagar > 0 && amigoAcreedor.length > 0){
                const acreedor = amigoAcreedor[0]
                const pago = Math.min(deudor.debePagar,acreedor.debeRecibir)

                console.log(`${deudor.nombre} debe pagar ${pago} a ${acreedor.nombre}`);
                
                deudor.debePagar -= pago
                acreedor.debeRecibir -= pago

                if(acreedor.debeRecibir === 0){
                    amigoAcreedor.shift()
                }
            }
        })
        
    }

    

}
