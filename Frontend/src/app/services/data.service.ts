import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  data: Subject<object[]> = new Subject<object[]>();
  recetas: object[] = [];
  allIngredientes:  Subject<object[]> = new Subject<object[]>();

  constructor(public _http: HttpClient) {

   }

   ngOnInit() {

    this.allIngredientes = new Subject<object[]>();

   }

  //LLAMADA HTTP GET
  llamadaGet(url) {

    this._http.get(
      //Argumento 1: La URL
     url,
      //Argumento 2: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }) }
    )
      //Nos suscribimos a la llamada
      .subscribe(
        (result: any) => {
          this.data.next(result); this.recetas = result; console.log(this.data)
        }
      )
  }


  sendData(data: object): void {

    this._http.post(
      //Argumento 1: La URL
      "http://localhost:3000/receta",
      //Argumento 2: Body
     data
     ,
      //Argumento 3: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }) }
    )
      //Nos suscribimos a la llamada
      .subscribe(

        (result: object) => {
          // Handle result
          
          }

        ,
        (error: object) => {

         
        }
      )
  }


  getIngredientes(){
    this._http.get(
      //Argumento 1: La URL
     'http://localhost:3000/ingrediente',
      //Argumento 2: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }) }
    )
      //Nos suscribimos a la llamada
      .subscribe(
        (result: any) => {
          this.allIngredientes.next(result); this.allIngredientes = result; console.log(this.allIngredientes)
        }
      )
  }
}
