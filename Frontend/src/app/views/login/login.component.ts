import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData: object = {
    "mail":"",
    "password":""
  };
  signData: object = {
    "userName":"",
    "mail":"",
    "password":""
  };


  constructor(public _user: UserService, public _http: HttpClient) { }
  
  ngOnInit() {
  }

   //funcion para logear
   postLogin(form: FormControl): void {
    
    if (form.valid) {
      this._user.postLogin(this.loginData); // pasar como argumento el objeto en el servicio!!!!!!!!!
    }
    
  }
  // funcion para registrarse
  postSign(form: FormControl): void {
    //selectores de los inputs del modal
   
      if (form.valid) {
      
        this._user.postSign(this.signData); 
      }
      

    
  }
}
