import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  subscription: Subscription
  data: object[] = this._data.recetas
  singleReceta: object = {};
  id: string;
  cantidades: string[];

  constructor(public _data: DataService, public _path: ActivatedRoute) { }

  ngOnInit() {
   
    this.id = (this._path.snapshot.params.id)
    if (Object.entries(this.data).length === 0) {
      this._data.llamadaGet(`https://my-static.ga:3000/receta/${this.id}`);
    } else {
      this.singleReceta = this.data.filter(obj => {
        return obj['_id'] === this.id
      })
      this.cantidades = this.singleReceta[0]['cantidades']

    }

    this.subscription = this._data.data.subscribe(
      (newValue) => {
        this.data = newValue;
        this.singleReceta = this.data.filter(obj => {
          return obj['_id'] === this.id
        })
        this.cantidades = this.singleReceta[0]['cantidades']
       
      }
    )
  }


  puntuar() {
    
    if (localStorage.getItem(`pnt${this.id}`) == null) {
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem(`pnt${this.id}`, "alrd")
        this.singleReceta[0]['puntuacion']++;
      }
    }



    
     this._data.puntuarPut(`https://my-static.ga:3000/receta`, this.singleReceta)
  }
}
