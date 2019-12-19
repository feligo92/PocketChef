import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  subscription: Subscription;

  allIngredientes: object[] = [];
  arrNombresIngredientes: string[] = [];
  ingredientes: string[] = [];
  userIngredientes: string[] = [];
  randomColor:string[] =[];
  colors = ["#f66161","#e845e7","yellow","#93e8ab","orange","#26cb26",'#9d8ff9','#34f1ff']

  constructor(public _user: UserService, public _data: DataService) { 
    this._data.getIngredientes()
    
  }

  ngOnInit() {

  
    
      this.userIngredientes = this._data.userIngredientes
    

    for(let i= 0 ; i< this.userIngredientes.length; i++ ){
      this.randomColor.push(this.colors[Math.floor(Math.random() * this.colors.length)])
    }
   
    this._data.allIngredientes = new Subject<object[]>();

    this.subscription = this._data.allIngredientes.subscribe(
      (newValue) => {
        this.allIngredientes = newValue;
        
        for (let i = 0; i < this.allIngredientes.length; i++) {
          this.arrNombresIngredientes.push(this.allIngredientes[i]['ingredienteName'])

        }
        function autocomplete(inp, arr) {
          /*the autocomplete function takes two arguments,
          the text field element and an array of possible autocompleted values:*/
          var currentFocus;
          /*execute a function when someone writes in the text field:*/
          inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists(null);
            if (!val) { return false; }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
              /*check if the item starts with the same letters as the text field value:*/
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                  /*insert the value for the autocomplete text field:*/
                  inp.value = this.getElementsByTagName("input")[0].value;
                  /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
                  closeAllLists(null);
                });
                a.appendChild(b);
              }
            }
          });
          /*execute a function presses a key on the keyboard:*/
          inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            let p;
            if (x) { p = x.getElementsByTagName("div") };
            if (e.keyCode == 40) {
              /*If the arrow DOWN key is pressed,
              increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(p);
            } else if (e.keyCode == 38) { //up
              /*If the arrow UP key is pressed,
              decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(p);
            } else if (e.keyCode == 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (p) p[currentFocus].click();
              }
            }
          });
          function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
          }
          function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
              x[i].classList.remove("autocomplete-active");
            }
          }
          function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
              if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
              }
            }
          }
          /*execute a function when someone clicks in the document:*/
          document.addEventListener("click", function (e) {
            closeAllLists(e.target);
          });
        }

        autocomplete(document.getElementById("ingredientesInput"), this.arrNombresIngredientes);
      }
    )

  }


  addIngrediente(){
    let ingrediente: string = (<HTMLInputElement>document.querySelector("#ingredientesInput")).value;
    

    if(ingrediente !== ''){
      this.randomColor.push(this.colors[Math.floor(Math.random() * this.colors.length)])
      //this.userIngredientes.push(ingrediente);
    }
    this._data.addIngrediente(ingrediente);

   
  }

  removeIngrediente(index: number): void {

    this.userIngredientes.splice(index,1)
    this._data.removeIngrediente(index)

  }



}
