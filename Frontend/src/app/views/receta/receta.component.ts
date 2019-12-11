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

  constructor( public _data: DataService, public _path: ActivatedRoute) { }

  ngOnInit() {
    console.log("hola")
    this.id = (this._path.snapshot.params.id)
    if (Object.entries(this.data).length === 0) {
      this._data.llamadaGet(`http://localhost:3000/receta/${this.id}`);
    } else {
      this.singleReceta  = this.data.filter(obj => {
        return obj['_id'] === this.id
      })
      
    }

    this.subscription = this._data.data.subscribe(
      (newValue) => {
        this.data = newValue;
        this.singleReceta  = this.data.filter(obj => {
          return obj['_id'] === this.id
        })
        console.log(this.singleReceta)
      }
    )
  }

}
