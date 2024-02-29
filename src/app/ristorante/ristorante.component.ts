import { Component } from '@angular/core';
import { Tavolo } from '../model/tavolo';

@Component({
  selector: 'app-ristorante',
  templateUrl: './ristorante.component.html',
  styleUrls: ['./ristorante.component.css']
})
export class RistoranteComponent {

  tavoloList: Tavolo[] = [
    {
      id: 1,
      posti: 4,
      isRotondo: true,
      isRiservato: false
    },
    {
      id: 2,
      posti: 5,
      isRotondo:false,
      isRiservato: false

    }
  ];

  addTavolo(t:Tavolo){
    let idDoppi = false;
    for(let i = 0; i < this.tavoloList.length; i++)
    {
      if(t.id == this.tavoloList[i].id)
      {
        idDoppi = true;
        break;
      }
    }

    if(!idDoppi)
    {
      this.tavoloList.push(t)
    }

  }
}
