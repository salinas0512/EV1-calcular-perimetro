import { FiguraGeometrica } from './figura-geometrica'

export class TrianguloEquilatero extends FiguraGeometrica{
    constructor(public ladoA : number ){
        super('Triangulo Equilátero')
    }

    override calcularPerimetro(): number {
       return this.ladoA * 3;
    }

}