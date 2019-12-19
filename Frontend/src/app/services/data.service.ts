import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  data: Subject<object[]> = new Subject<object[]>();
  recetas: object[] = [];
  allIngredientes: Subject<object[]> = new Subject<object[]>();
  userIngredientes: string[] = [];
  imgName: string = '';

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
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }), withCredentials: true }
    )
      //Nos suscribimos a la llamada
      .subscribe(
        (result: any) => {
          this.data.next(result); this.recetas = result; 
        }
      )
  }

  //Subir nueva receta
  sendData(data: object): void {

    this._http.post(
      //Argumento 1: La URL
      "https://my-static.ga:3000/receta",
      //Argumento 2: Body
      data
      ,
      //Argumento 3: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }),withCredentials: true }
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

  //Recibir todos los ingredientes
  getIngredientes() {
    this._http.get(
      //Argumento 1: La URL
      'https://my-static.ga:3000/ingrediente',
      //Argumento 2: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }),withCredentials: true }
    )
      //Nos suscribimos a la llamada
      .subscribe(
        (result: any) => {
          this.allIngredientes.next(result); this.allIngredientes = result;
        }
      )
  }


  addIngrediente(ingrediente: string) {

    if (ingrediente !== '') {
      this.userIngredientes.push(ingrediente);
      (<HTMLInputElement>document.querySelector("#ingredientesInput")).value = '';
    }
  }

  removeIngrediente(index: number): void {

    this.userIngredientes.splice(index, 1);

  }

  //Subir imagen

  postFile(fileToUpload) {
    const endpoint = "https://my-static.ga:3000/upload";
    const formData: FormData = new FormData();
    formData.append('myImg', fileToUpload, fileToUpload.name);
    this._http
      .post(endpoint, formData, { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }), withCredentials: true }).subscribe(
        data => this.imgName = data['ok'],
       
      )

  }

  //Puntuacion
  puntuarPut(url, data) {
    this._http.put(
      //Argumento 1: La URL
      url,
      //Argumento 2: Body
      data
      ,
      //Argumento 3: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }), withCredentials: true }
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
}
