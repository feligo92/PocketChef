import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  subscription: Subscription;
  arrRecetas: object[] = [];
  busqueda: string;
  constructor(public _data: DataService) { 

    this.subscription = this._data.data.subscribe(
      (newValue) => {
        this. arrRecetas = newValue;
        console.log(this.arrRecetas)
      }
    )

    if (Object.entries(this.arrRecetas).length === 0){
      this._data.llamadaGet();
    } else {
      this.arrRecetas = this._data.recetas;
     
    }

  }
 

  ngOnInit() {

    
  }

}
