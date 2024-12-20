export abstract class FiguraGeometrica {
    constructor(public name: string) {} 
  
    abstract calcularPerimetro(): number; // método abstracto 
  }