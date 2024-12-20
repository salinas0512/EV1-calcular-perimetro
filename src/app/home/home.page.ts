import { Component } from '@angular/core';
import {IonItem,IonSelect, IonSelectOption, IonList, IonCard} from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCard, IonList, IonItem, IonSelect,FormsModule, CirculoComponent,TrianguloComponent,IonSelectOption, CommonModule],
})
export class HomePage {
  selectedFigura: string = ''

  constructor() {}
}
