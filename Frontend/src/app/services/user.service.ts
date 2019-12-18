import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  data: object;
  error: object;
  loginError: any
  dataSign: object;
  isLogged: string = '';

  constructor(public _http: HttpClient, public _router: Router) {

  }

  postLogin(loginData: object) {

    this._http.post(
      //Argumento 1: La URL
      "http://localhost:3000/login",
      //Argumento 2: Body
      loginData
      ,
      //Argumento 3: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }) }
    )
      //Nos suscribimos a la llamada
      .subscribe(
        (result: object) => {

          this.data = result;
          console.log(this.data)
          if (this.data['logged'] == true) {
            this.isLogged = '7ras9AS2hk';
            if (typeof (Storage) !== 'undefined') {
              localStorage.setItem("98asdqLKjs8", this.isLogged)
              this._router.navigateByUrl('/home');
            }
          }
          ///////////set item here
        }, (error: object) => {
          this.loginError.next(error);

          if (this.error != undefined) {

            console.log(this.error);


          }
          console.log(this.loginError)
        }
      )
  }


  postSign(signData: object): void {

    this._http.post(
      //Argumento 1: La URL
      "http://localhost:3000/register",
      //Argumento 2: Body
      signData
      ,
      //Argumento 3: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }) }
    )
      //Nos suscribimos a la llamada
      .subscribe(

        (result: object) => {
          // Handle result
          this.dataSign = result


        },
        (error: object) => {

          this.error = error;
          if (this.error["error"] != undefined) {

            console.log(this.error["error"])

          }
        }
      )
  }

}
