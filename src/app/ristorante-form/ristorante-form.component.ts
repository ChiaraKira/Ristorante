import { Component, EventEmitter, Output } from '@angular/core';
import { Tavolo } from '../model/tavolo';
import { TavoloService } from '../service/tavolo.service';

@Component({
  selector: 'app-ristorante-form',
  templateUrl: './ristorante-form.component.html',
  styleUrls: ['./ristorante-form.component.css']
})
export class RistoranteFormComponent {


  posti = 0;
  isRotondo = false;

 
  // @Output() tavoloAdded = new EventEmitter<Tavolo>()

  constructor(private tavoloService : TavoloService){}
 
   addTavolo(){
    this.tavoloService.aggiungiTavolo(this.posti,this.isRotondo);
   }

   resetForm(){
    this.posti = 0;
    this.isRotondo = false;
   }
}
