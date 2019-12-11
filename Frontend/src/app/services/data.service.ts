import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  data: Subject<object[]> = new Subject<object[]>();
  recetas: object[] = [];

  constructor(public _http: HttpClient) { }
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
}
