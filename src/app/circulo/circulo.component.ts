import { Component, OnInit } from '@angular/core';
import { Circulo } from '../modelo/circulo';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { IonLabel, IonItem, IonList, IonButton, IonInput,IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonItem, IonLabel,IonList,IonInput, IonButton,IonCard, FormsModule, CommonModule] 
})
export class CirculoComponent  implements OnInit {
  circulo: Circulo; 
  perimetro: string | null = null

  constructor() {
    this.circulo = new Circulo(0)
   }

  ngOnInit() {}
  calcularPerimetro() {
    // Validar que el radio sea mayor a 0
    if (this.circulo.radio > 0) {
      // Llamar al método calcularPerimetro pasando el radio
      this.perimetro = this.circulo.calcularPerimetro().toFixed(2);
    } else {
      // Si el radio no es válido, mostrar alerta
      this.perimetro = ''; // Limpiar el resultado
      alert('Por favor, ingresa un valor de radio que sea mayor a 0');
    }
  }
}