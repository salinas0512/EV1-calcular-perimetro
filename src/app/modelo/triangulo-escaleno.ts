import { FiguraGeometrica } from './figura-geometrica'

export class TrianguloEscaleno extends FiguraGeometrica{
    constructor(public ladoA : number , public ladoB : number, public ladoC : number){
        super('Triangulo Escaleno')
    }

    override calcularPerimetro(): number {
       return this.ladoA + this.ladoB + this.ladoC
    }

}