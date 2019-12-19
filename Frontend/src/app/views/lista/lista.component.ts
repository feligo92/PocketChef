import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  subscription: Subscription;
  subscriptionI: Subscription;
  arrRecetas: object[] = [];
  arrRecetasOrdenadas: object[] = [];
  busqueda: string;
  params: string;
  userIngredientes: string[] = [];
  arrParams: string[] = [];
  allIngredientes: object[] = [];

  constructor(public _data: DataService) {

    this.userIngredientes = this._data.userIngredientes;

    this._data.allIngredientes = new Subject<object[]>();

    this.subscriptionI = this._data.allIngredientes.subscribe(
      (newValue) => {
        this.allIngredientes = newValue;

        for (let i = 0; i < this.userIngredientes.length; i++) {

          for (let ingrediente of this.allIngredientes) {
            if (ingrediente['ingredienteName'] == this.userIngredientes[i]) {
              this.arrParams.push(`${i}=${ingrediente['_id']}`)
            }
          }
        }

        this.params = this.arrParams.join('&')

        this._data.llamadaGet(`https://my-static.ga:3000/recetas/filter?${this.params}`);
      })






    this.subscription = this._data.data.subscribe(
      (newValue) => {
        this.arrRecetas = newValue;


       
         this.arrRecetas.sort(function(a:object, b:object){return b['puntuacion']-a['puntuacion']})
        
      }

    )


    this._data.getIngredientes()


  }


  ngOnInit() {


  }

}
