import { Component, OnInit } from '@angular/core';
import {TrianguloEquilatero} from '../modelo/triangulo-equilatero';
import { TrianguloEscaleno } from '../modelo/triangulo-escaleno';
import { IonInput, IonItem, IonList, IonLabel, IonButton, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonLabel,IonInput, IonItem, IonList,IonButton, IonImg, FormsModule, CommonModule]
})
export class TrianguloComponent implements OnInit {

  // Atributos para los lados del triángulo (como string para recibir input)
  ladoA: string = '0';
  ladoB: string = '0';
  ladoC: string = '0';
  perimetro: string | null = null;

  constructor() { }

  ngOnInit() {}

  /* Método para calcular el perímetro basado en los valores ingresados por usuario
     en caso que sea para triángulo escaleno o para triángulo equilátero  */
  calcularPerimetro() {
    // Convertir los lados a números
    const a = Number(this.ladoA);
    const b = Number(this.ladoB);
    const c = Number(this.ladoC);

    // Verificar si los tres lados son iguales para equilátero
    if (a === b && b === c) {
      // Si son iguales, es un triángulo equilátero
      const trianguloEquilatero = new TrianguloEquilatero(a); // Pasa el valor numérico
      this.perimetro = trianguloEquilatero.calcularPerimetro().toFixed(2);
    } else if (a > 0 && b > 0 && c > 0) {
      // Si no son iguales, es un triángulo escaleno
      const trianguloEscaleno = new TrianguloEscaleno(a, b, c); // Pasa los valores numéricos
      this.perimetro = trianguloEscaleno.calcularPerimetro().toFixed(2);
    } else {
      this.perimetro = null;
      alert('Por favor ingresa valores válidos para los tres lados del triángulo.');
    }
  }
}