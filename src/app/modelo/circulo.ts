import { FiguraGeometrica } from './figura-geometrica'

export class Circulo extends FiguraGeometrica{
    constructor(public radio : number){
        super('Circulo')
    }

    override calcularPerimetro(): number {
       return 2 * Math.PI * this.radio
    }

}
