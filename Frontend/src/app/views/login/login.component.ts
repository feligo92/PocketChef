import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _user: UserService, public _http: HttpClient) { }
  
  ngOnInit() {
  }

   //funcion para logear
   postLogin() {
    //selectores de los inputs del form
    let mail: string = (<HTMLInputElement>document.querySelectorAll(".input_user")[0]).value;
    let pass: string = (<HTMLInputElement>document.querySelectorAll(".input_pass")[0]).value;




    // this._user.login(name, pass);
    this._user.postLogin(mail, pass);
  }
  // funcion para registrarse
  signIn() {
    //selectores de los inputs del modal
    let name: string = (<HTMLInputElement>document.querySelector("#defaultForm-name")).value;
    let pass: string = (<HTMLInputElement>document.querySelector("#defaultForm-pass")).value;
    let mail: string = (<HTMLInputElement>document.querySelector("#defaultForm-email")).value;
    if (name != "" /*&& pass != ""*/) {

      this._user.postSignIn(name, mail, pass);

     
      

    }
  }
}
