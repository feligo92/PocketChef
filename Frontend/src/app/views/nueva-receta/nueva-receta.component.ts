import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.css']
})
export class NuevaRecetaComponent implements OnInit {

  cantidades:string[] = [];
  formData:object={
    
  }
  constructor(public _user:UserService, public _data: DataService) { }

  ngOnInit() {
  }

  sendData(form: FormControl): void {


    if (form.valid) {
      
      this._data.sendData(this.formData);
      console.log(this.formData)
    }
  }

  addCantidad(){
    let cantidad: string = (<HTMLInputElement>document.querySelector("#cantidadesInput")).value;

    if (cantidad !== '') {
      this.cantidades.push(cantidad)
    }
  }
}
