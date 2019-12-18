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

        this._data.llamadaGet(`http://localhost:3000/recetas/filter?${this.params}`);
      })






    this.subscription = this._data.data.subscribe(
      (newValue) => {
        this.arrRecetas = newValue;


       
        console.log("arrRecetas", this.arrRecetas.sort(function(a:object, b:object){return b['puntuacion']-a['puntuacion']}))
        // while (this.arrRecetas.length !== 0) {
        //   let a = this.arrRecetas[0]
        //   let contador = 0
        //   for (let i = 0; i < this.arrRecetas.length; i++) {
        //     for (let j = 0; j < this.arrRecetas.length; j++) {
        //       if (a['puntuacion'] <= this.arrRecetas[i]['puntuacion']) {
        //         a = this.arrRecetas[i]
        //         contador = i
        //       }
        //       this.arrRecetasOrdenadas.push(a)
        //       this.arrRecetas.splice(contador, 1)
        //     }

        //   }
        // }
       
        // //console.log("arrRecetas", this.arrRecetas)
        // console.log("recetas encontradas",this.arrRecetasOrdenadas)
      }

    )


    this._data.getIngredientes()


  }


  ngOnInit() {


  }

}
