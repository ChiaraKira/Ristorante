import { Component, EventEmitter, Output } from '@angular/core';
import { Tavolo } from '../model/tavolo';

@Component({
  selector: 'app-ristorante-form',
  templateUrl: './ristorante-form.component.html',
  styleUrls: ['./ristorante-form.component.css']
})
export class RistoranteFormComponent {

  id = 0;
  posti = 0;
  isRotondo = false;
  isRiservato = false;
 
  @Output() tavoloAdded = new EventEmitter<Tavolo>()
 
   addTavolo(){
     const newTavolo : Tavolo = {
       id: this.id,
       posti: this.posti,
       isRotondo: this.isRotondo,
       isRiservato:this.isRiservato
     }
 
     this.tavoloAdded.next(newTavolo);
   }

   resetForm(){
    this.id = 0;
    this.posti = 0;
    this.isRotondo = false;
    this.isRiservato = false;
   }
}
