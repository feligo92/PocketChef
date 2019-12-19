var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"myBody\">\n</div>\n<nav class=\"navbar myNavbar navbar-light\">\n    <span class=\"navbar-brand mb-0 h1 text-center text-light myFont\"> PocketChef <img class=\"float-left\"\n            style=\"width: 7vw;\" src=\"/assets/chef.png\"></span>\n\n</nav>\n\n<div class=\"container\" style=\"margin-top: 70px; margin-bottom: 70px; OVERFLOW: scroll; height: calc(100vh - 140px);\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <form #myForm=\"ngForm\" autocomplete=\"off\">\n                <div class=\"row\">\n                    <!--INGREDIENTES-->\n                    <div class=\"autocomplete col-12\">\n                        <label for=\"ingredientesInput\">Selecciona tus ingredientes</label>\n                        <input id=\"ingredientesInput\" class=\"form-control\" type=\"text\" name=\"ingredientesReceta\"\n                            placeholder=\"Ingrediente\" required pattern=\"[A-zÀ-ú]*\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-1 offset-8\">\n                        <button type=\"button\" (click)=\"addIngrediente()\"\n                            class=\"btn btn-primary ml-2 mt-1 ml-4\">Añadir</button>\n                    </div>\n                </div>\n                <p class=\"mt-1\">Tu lista:</p>\n                <div class=\"cantidades row\">\n\n                    <div class=\"col-12 tuLista ml-2\">\n                        <div class=\"cantidades ingredientes mr-1 mt-1\" [ngStyle]=\" {'background-color': randomColor[i]} \"\n                            (click)=\"removeIngrediente(i)\" *ngFor=\"let ingrediente of userIngredientes, let i = index\">\n\n                            <span>{{ingrediente}} </span>\n                        </div>\n                    </div>\n\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div class=\"row nuevaReceta\">\n    <div class=\"col-12  mt-3 mb-3\">\n        <div class=\"card\" style=\" height: 12vh; width: 85vw; margin-left: 28px ; border-radius: 19px\" routerLink=\"/nuevareceta\">\n\n            <p class=\"text-center mt-4 myFont\">Añade tu propia receta!</p>\n\n        </div>\n    </div>\n</div>\n<div class=\"row listaReceta\">\n    <div class=\"col-12  mt-3 mb-3\">\n        <div class=\"card\" style=\" height: 12vh; width: 85vw; margin-left: 28px ; border-radius: 19px\" routerLink=\"/lista\">\n\n            <p class=\"text-center mt-4 myFont\">Lista de recetas</p>\n\n        </div>\n    </div>\n</div>\n\n<footer class=\"footer myFooter\">\n    <div class=\"row\">\n        <div class=\"col-1 offset-5 mt-2 mb-3\">\n            <img class=\"footerIcon\" routerLink=\"/home\" src=\"/assets/home.png\">\n        </div>\n    </div>\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/lista/lista.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/lista/lista.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"myBody\">\n</div>\n<nav class=\"navbar myNavbar navbar-light \">\n    <span class=\"navbar-brand mb-0 h1 text-center myFont text-light\"> PocketChef <img class=\"float-left\"\n            style=\"width: 7vw;\" src=\"/assets/chef.png\"></span>\n\n</nav>\n<div class=\" myContainer\">\n    <div class=\"row myContainer\" *ngIf=\"arrRecetas.length !== 0 \">\n        <div class=\"col-11 offset-1 mt-3 mb-3\" *ngFor=\"let receta of arrRecetas, let i = index\">\n            <div class=\"card\"\n                style=\"width: 100%; height: 12vh; margin-left: 0px; border-radius: 31px; background-color:#c8e3ffeb;\"\n                routerLink=\"/receta/{{receta['_id']}}\">\n\n                <p class=\"text-center mt-4 myFont\">{{receta['nombre']}}<span class=\"float-right mr-3\"><img style=\"width: 7vw;\"\n                    src=\"/assets/thumbs-up.png\">{{receta['puntuacion']}}</span></p>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"row myContainer\" *ngIf=\"arrRecetas.length == 0 \">\n            <div class=\"col-11 offset-1 mb-3\" style=\"margin-top: 36vh;\">\n                <div class=\"card\"\n                    style=\"width: 100%; height: 12vh; margin-left: 0px; border-radius: 31px; background-color:#c8e3ffeb;\"\n                    routerLink=\"/nuevareceta\">\n    \n                    <p class=\"text-center mt-4 mb-4 myFont\">No tenemos recetas con tus ingredientes. Añade una!</p>\n    \n                </div>\n            </div>\n        </div>\n</div>\n\n\n<footer class=\"footer myFooter \">\n    <div class=\"row\">\n        <div class=\"col-1 offset-5 mt-2 mb-3\">\n            <img class=\"footerIcon\" routerLink=\"/home\" src=\"/assets/home.png\">\n        </div>\n    </div>\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\"></div>\n<div class=\"container h-100\" style=\"margin-top: 20vh;\">\n    <div class=\"d-flex justify-content-center h-100\">\n        <div class=\"user_card\">\n            <div class=\"d-flex justify-content-center\">\n                <div class=\"brand_logo_container\">\n                    <img src=\"https://image.flaticon.com/icons/svg/1830/1830839.svg\" class=\"brand_logo\" alt=\"Logo\">\n                </div>\n            </div>\n            <div class=\"d-flex justify-content-center form_container\">\n                <form #myForm=\"ngForm\" (ngSubmit)=\"postLogin(myForm)\">\n                    <!--Input de Email-->\n\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                        </div>\n                        <input [(ngModel)]=\"loginData['mail']\" type=\"email\" name=\"userEmail\"\n                            class=\"form-control input_user myFont\" value=\"\" placeholder=\"email\" #miEmail=\"ngModel\"\n                            required pattern=\"\\S+@\\S+\\.\\S+\">\n\n                    </div>\n                    <small *ngIf=\"miEmail.invalid && miEmail.dirty\" id=\"emailHelp\" class=\"form-text error\">Introduce\n                        una dirección válida</small>\n                    <small *ngIf=\"miEmail.invalid && miEmail.touched && miEmail.pristine\" id=\"emailHelp\"\n                        class=\"form-text error mb-3\">Este campo es obligatorio</small>\n                    <!--Input de Password-->\n\n                    <div class=\"input-group mb-2\">\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text myFont\"><i class=\"fas fa-key\"></i></span>\n                        </div>\n                        <input [(ngModel)]=\"loginData['password']\" type=\"password\" name=\"userPassword\"\n                            class=\"form-control input_pass myFont\" value=\"\" placeholder=\"contraseña\"\n                            #miPassword=\"ngModel\" required\n                            pattern=\"(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}\">\n\n                    </div>\n\n\n                    <div class=\"d-flex justify-content-center mt-3 login_container myFont\">\n                        <button type=\"button\" name=\"button\" class=\"btn login_btn\" [disabled]=\"myForm.invalid\" type=\"submit\">Login</button>\n                    </div>\n                </form>\n            </div>\n\n            <div class=\"mt-4\">\n                <div class=\"d-flex justify-content-center links text-light myFont\">\n                    ¿No tienes cuenta? <span data-toggle=\"modal\" data-target=\"#modalLoginForm\"\n                        class=\"ml-2 text-dark openModal myFont\">Regístrate</span>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Regístrate</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body mx-3\">\n                <form #myForm1=\"ngForm\" (ngSubmit)=\"postSign(myForm1)\">\n                    <!--Input de Username-->\n                    <div class=\"md-form mb-5 form-group\">\n                        <label data-error=\"wrong\" data-success=\"right\">Nombre de usuario</label>\n                        <input [(ngModel)]=\"signData['userName']\" name=\"userName\" type=\"text\" id=\"defaultForm-name\"\n                            class=\"form-control\" placeholder=\"Nombre de usuario\" #userName=\"ngModel\" required\n                            pattern=\"^[a-zA-Z0-9]*$\">\n\n                        <small *ngIf=\"userName.invalid && userName.dirty\" id=\"passwordHelp\"\n                            class=\"form-text error\">El nombre de usuario solo puede contener letras y números\n\n                        </small>\n                        <small *ngIf=\"userName.invalid && userName.touched && userName.pristine\" id=\"emailHelp\"\n                            class=\"form-text error\">Este campo es obligatorio</small>\n                    </div>\n\n                    <!--Input de Email-->\n                    <div class=\"md-form mb-5 form-group\">\n                        <label data-error=\"wrong\" data-success=\"right\">Email</label>\n                        <input [(ngModel)]=\"signData['mail']\" name=userMail type=\"email\" id=\"defaultForm-email\"\n                            #myEmail=\"ngModel\" class=\"form-control  \" placeholder=\"ejemplo@mail.com\" required\n                            pattern=\"\\S+@\\S+\\.\\S+\">\n                        <small *ngIf=\"myEmail.invalid && myEmail.dirty\" id=\"emailHelp\" class=\"form-text error\">Introduce\n                            una dirección válida</small>\n                        <small *ngIf=\"myEmail.invalid && myEmail.touched && myEmail.pristine\" id=\"emailHelp\"\n                            class=\"form-text error\">Este campo es obligatorio</small>\n                    </div>\n\n\n                    <!--Input de Password-->\n                    <div class=\"md-form mb-4 form-group\">\n                        <label data-error=\"wrong\" data-success=\"right\">Contraseña</label>\n                        <input [(ngModel)]=\"signData['password']\" type=\"password\" name=\"userPassword\"\n                            id=\"defaultForm-pass\" class=\"form-control\" placeholder=\"Contraseña\"\n                            #myPassword=\"ngModel\" required\n                            pattern=\"(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}\">\n\n                        <small *ngIf=\"myPassword.invalid && myPassword.dirty\" id=\"passwordHelp\"\n                            class=\"form-text error\">La contraseña debe contener\n                            <ul>\n                                <li>mínimo 8 caracteres </li>\n                                <li>mínimo 1 minúscula</li>\n                                <li>mínimo 1 mayúscula</li>\n                                <li>minimo 1 número </li>\n                                <li>mínimo 1 carácter escpecial(!$#) </li>\n                            </ul>\n                        </small>\n                        <small *ngIf=\"myPassword.invalid && myPassword.touched && myPassword.pristine\" id=\"PasswordHelp\"\n                            class=\"form-text error\">Este campo es obligatorio</small>\n                    </div>\n                    <div class=\"modal-footer d-flex justify-content-center\">\n                        <button class=\"btn btn-default\" type=\"button\" (click)=\"postSign(myForm1)\" data-dismiss=\"modal\" [disabled]=\"myForm1.invalid\" >Registrar</button>\n                    </div>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/nueva-receta/nueva-receta.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/nueva-receta/nueva-receta.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"myBody\">\n\n    <nav class=\"navbar myNavbar navbar-light \">\n        <span class=\"navbar-brand mb-0 h1 text-center text-light\"> PocketChef <img class=\"float-left\"\n                style=\"width: 7vw;\" src=\"/assets/chef.png\"></span>\n\n    </nav>\n    <!--FORMULARIO-->\n    <div class=\"container\"\n        style=\"margin-top: 70px; margin-bottom: 70px; OVERFLOW: scroll; height: calc(100vh - 140px);\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                            <div class=\"form-group\">\n                                   \n                                 \n                                    <span class=\"file-input btn btn-primary btn-file\">\n                                            Selecciona una imagen&hellip; <input type=\"file\"  id=\"file\" name=\"myImg\"\n                                            (change)=\"handleFileInput($event.target.files)\">\n                                        </span>\n                                </div>\n\n\n                    </div>\n                </div>\n                <form #myForm=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"sendData(myForm)\">\n                    <div class=\"row mt-1\">\n                        <div class=\"col-12\">\n                            <!--Nombre-->\n                            <div class=\"form-group\">\n                                <label for=\"nameInput\">Nombre del plato</label>\n                                <input [(ngModel)]=\"formData['nombre']\" name=\"nombreReceta\" type=\"text\"\n                                    class=\"form-control\" id=\"nameInput\" placeholder=\"Introduce el nombre\"\n                                    #name=\"ngModel\" required pattern=\"[A-zÀ-ú'  *']*\">\n                                <small *ngIf=\"name.invalid && name.dirty\" class=\"form-text error\">Introduce un nombre\n                                    válido</small>\n                                <small *ngIf=\"name.invalid && name.touched && name.pristine\"\n                                    class=\"form-text error\">Este\n                                    campo es obligatorio</small>\n\n                            </div>\n                        </div>\n                    </div>\n                    {{this.ingredientesParaMandar}}\n\n                    <div class=\"row\">\n                        <!--INGREDIENTES-->\n                        <div class=\"autocomplete col-12\">\n                            <label for=\"ingredientesInput\">Ingrediente y cantidad</label>\n                            <input id=\"ingredientesInput\" class=\"form-control\" type=\"text\" name=\"ingredientesReceta\"\n                                placeholder=\"Ingrediente\" required pattern=\"[A-zÀ-ú]*\">\n                        </div>\n                    </div>\n\n\n\n\n\n                    <!--CANTIDADES-->\n                    <div class=\"row mt-0\">\n                        <div class=\"col-12\">\n\n                            <!--EVENT KEYPRESS--> <input type=\"text\" class=\"form-control\"\n                                (keypress)=\"addCantidad($event);\" name=\"cantidadesReceta\" id=\"cantidadesInput\"\n                                placeholder=\"Cantidad\" required pattern=\"[A-zÀ-ú]*\">\n                            <small *ngIf=\"name.invalid && name.dirty\" class=\"form-text error\">Introduce un texto\n                                válido</small>\n                            <small *ngIf=\"name.invalid && name.touched && name.pristine\" class=\"form-text error\">Este\n                                campo es obligatorio</small>\n\n\n                            <p class=\"mt-1\">Tu lista:</p>\n                            <div class=\"cantidades row\" *ngFor=\"let cantidad of cantidades, let i = index\">\n                                <div class=\"col-12\">\n                                    <p class=\"cantidades\">· {{cantidad}} <span (click)=\"removeCantidad(i)\"\n                                            class=\"float-right bold text-danger\">X</span></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                \n\n\n\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <!--Elaboración-->\n                            <div class=\"form-group\">\n                                <label for=\"descripcion\"> Elaboración </label>\n                                <textarea [(ngModel)]=\"formData['instrucciones']\" maxlength=\"10000\" required\n                                    name=\"descripcion\" style=\"height: 20vh;\" class=\"form-control\" id=\"elaboracionInput\"\n                                    aria-describedby=\"descriptionHelp\" placeholder=\"Introduce los pasos a seguir\"\n                                    #descripcion=\"ngModel\" required pattern=\"[a-zA-Z0-9'  *']*\">\n                                    </textarea>\n                                <small *ngIf=\"descripcion.touched && descripcion.pristine\" class=\"form-text error\">Este\n                                    campo es obligatorio</small>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-6 offset-4\">\n\n                            <button [disabled]=\"myForm.invalid\" type=\"submit\" data-toggle=\"modal\"\n                                data-target=\"#exampleModal\" style=\"background-color:#6d8eb2\" class=\"btn ml-2\">Guardar</button>\n                        </div>\n                    </div>\n\n                </form>\n            </div>\n        </div>\n    </div>\n\n\n    <footer class=\"footer myFooter \">\n        <div class=\"row\">\n            <div class=\"col-1 offset-5 mt-2 mb-3\">\n                <img class=\"footerIcon\" routerLink=\"/home\" src=\"/assets/home.png\">\n            </div>\n        </div>\n    </footer>\n</div>\n\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\" style=\"background-color: #dae9f6;\">\n\n            <img style=\"width:100%;\" src=\"https://image.flaticon.com/icons/png/512/817/817835.png\">\n\n\n            <h3 class=\"text-center mt-1\">PERFECTO!</h3>\n\n            <div class=\"modal-footer\" style=\"margin-right: 34vw; border-top: 0px\">\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/onboarding/onboarding.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/onboarding/onboarding.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 myBody\">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-interval=\"false\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n\n            <div class=\"carousel-item active\">\n\n                <div class=\"card border-0 myCard\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top myBody cardImg\" src=\"https://image.flaticon.com/icons/png/512/706/706164.png\"\n                        alt=\"Card image cap\">\n                    <div class=\"card-body myBody\">\n                        <p class=\"card-text cardText text-center\">Selecciona tus ingredientes</p>\n                    </div>\n\n                </div>\n\n            </div>\n            <div class=\"carousel-item\">\n\n                <div class=\"card border-0 myCard\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top myBody cardImg\" src=\"https://image.flaticon.com/icons/png/512/1721/1721476.png\" alt=\"Card image cap\">\n                    <div class=\"card-body myBody\">\n                        <p class=\"card-text text-center cardText\">Escoge entre nuestras recetas</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"carousel-item\">\n                <div class=\"card border-0 myCard\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top myBody\" src=\"https://image.flaticon.com/icons/png/512/817/817835.png\" alt=\"Card image cap\">\n                    <div class=\"card-body myBody\">\n                        <p class=\"card-text text-center cardText\">Añade tus propias recetas</p>\n                        <button type=\"button\" class=\"btn btn-outline-light myButton\" routerLink=\"/login\">Empezar</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/receta/receta.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/receta/receta.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"myBody\">\n    <nav class=\"navbar myNavbar navbar-light\"> \n        <span class=\"navbar-brand mb-0 h1 text-center text-light myFont\"> PocketChef <img class=\"float-left\" style=\"width: 7vw;\"\n                src=\"/assets/chef.png\"></span>\n\n    </nav>\n\n\n    <div class=\"row receta\">\n        <div class=\"col-12 \" style=\"  padding:0px;\">\n            <div class=\"card\" style=\"width: 100%;\">\n\n                <img src=\"{{singleReceta[0]['imgUrl']}}\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\" style=\"background-color: #dae9f6;\">\n                    \n                    <h3 class=\"card-title myFont\">\n                        {{singleReceta[0]['nombre']}} </h3>\n                    <h6 class=\"card-subtitle bold myFont\">De: {{singleReceta[0]['autor']['userName']}} <span class=\"float-right\"> <img class=\"\" (click)=\"puntuar()\" style=\"width: 7vw;\"\n                        src=\"/assets/thumbs-up.png\">{{singleReceta[0]['puntuacion']}}</span>  </h6>\n                    <hr>\n                    <h5 clss=\"myFont\">Ingredientes:</h5>\n\n                    <div class=\"mt-1\" *ngFor=\"let cantidad of cantidades, let i = index\">\n\n                        <p class=\" cantidades mt-1 myFont\"> {{cantidad}}</p>\n                    </div>\n                    <hr>\n                    <h5 clss=\"myFont\">Elaboración:</h5>\n                    <p class=\"myFont\">{{singleReceta[0]['instrucciones']}} </p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n\n<footer class=\"footer myFooter\">\n    <div class=\"row\">\n        <div class=\"col-1 offset-2 mt-2 mb-3\">\n            <img class=\"footerIcon\" routerLink=\"/lista\" src=\"/assets/return.png\">\n        </div>\n        <div class=\"col-1 offset-2 mt-2 mb-3\">\n            <img class=\"footerIcon\" routerLink=\"/home\" src=\"/assets/home.png\">\n        </div>\n    </div>\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Frontend';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _views_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/onboarding/onboarding.component */ "./src/app/views/onboarding/onboarding.component.ts");
            /* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
            /* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _views_lista_lista_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/lista/lista.component */ "./src/app/views/lista/lista.component.ts");
            /* harmony import */ var _views_receta_receta_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/receta/receta.component */ "./src/app/views/receta/receta.component.ts");
            /* harmony import */ var _views_nueva_receta_nueva_receta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/nueva-receta/nueva-receta.component */ "./src/app/views/nueva-receta/nueva-receta.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
            var routerConfig = [
                { "path": "", "component": _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], "canActivate": [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { "path": "home", "component": _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], "canActivate": [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { "path": "onboarding", "component": _views_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_4__["OnboardingComponent"] },
                { "path": "lista", "component": _views_lista_lista_component__WEBPACK_IMPORTED_MODULE_10__["ListaComponent"], "canActivate": [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { "path": "nuevareceta", "component": _views_nueva_receta_nueva_receta_component__WEBPACK_IMPORTED_MODULE_12__["NuevaRecetaComponent"], "canActivate": [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { "path": "receta/:id", "component": _views_receta_receta_component__WEBPACK_IMPORTED_MODULE_11__["RecetaComponent"], "canActivate": [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
                { "path": "login", "component": _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                { "path": "**", "component": _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], "canActivate": [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _views_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_4__["OnboardingComponent"],
                        _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                        _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _views_lista_lista_component__WEBPACK_IMPORTED_MODULE_10__["ListaComponent"],
                        _views_receta_receta_component__WEBPACK_IMPORTED_MODULE_11__["RecetaComponent"],
                        _views_nueva_receta_nueva_receta_component__WEBPACK_IMPORTED_MODULE_12__["NuevaRecetaComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routerConfig, { useHash: true })
                    ],
                    providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/guards/auth.guard.ts": 
        /*!**************************************!*\
          !*** ./src/app/guards/auth.guard.ts ***!
          \**************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(_router, _user) {
                    this._router = _router;
                    this._user = _user;
                }
                AuthGuard.prototype.canActivate = function () {
                    if (localStorage.getItem("98asdqLKjs8") == "7ras9AS2hk") {
                        return true;
                    }
                    else {
                        this._router.navigateByUrl("/login");
                        return false;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/services/data.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/data.service.ts ***!
          \******************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var DataService = /** @class */ (function () {
                function DataService(_http) {
                    this._http = _http;
                    this.data = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.recetas = [];
                    this.allIngredientes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.userIngredientes = [];
                    this.imgName = '';
                }
                DataService.prototype.ngOnInit = function () {
                    this.allIngredientes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                };
                //LLAMADA HTTP GET
                DataService.prototype.llamadaGet = function (url) {
                    var _this = this;
                    this._http.get(
                    //Argumento 1: La URL
                    url, 
                    //Argumento 2: Las opciones con los headers
                    { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-requested-with": "XMLHttpResponse" }) })
                        //Nos suscribimos a la llamada
                        .subscribe(function (result) {
                        _this.data.next(result);
                        _this.recetas = result;
                    });
                };
                //Subir nueva receta
                DataService.prototype.sendData = function (data) {
                    this._http.post(
                    //Argumento 1: La URL
                    "https://my-static.ga:3000/receta", 
                    //Argumento 2: Body
                    data, 
                    //Argumento 3: Las opciones con los headers
                    { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-requested-with": "XMLHttpResponse" }) })
                        //Nos suscribimos a la llamada
                        .subscribe(function (result) {
                        // Handle result
                    }, function (error) {
                    });
                };
                //Recibir todos los ingredientes
                DataService.prototype.getIngredientes = function () {
                    var _this = this;
                    this._http.get(
                    //Argumento 1: La URL
                    'https://my-static.ga:3000/ingrediente', 
                    //Argumento 2: Las opciones con los headers
                    { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-requested-with": "XMLHttpResponse" }) })
                        //Nos suscribimos a la llamada
                        .subscribe(function (result) {
                        _this.allIngredientes.next(result);
                        _this.allIngredientes = result;
                    });
                };
                DataService.prototype.addIngrediente = function (ingrediente) {
                    if (ingrediente !== '') {
                        this.userIngredientes.push(ingrediente);
                        document.querySelector("#ingredientesInput").value = '';
                    }
                };
                DataService.prototype.removeIngrediente = function (index) {
                    this.userIngredientes.splice(index, 1);
                };
                //Subir imagen
                DataService.prototype.postFile = function (fileToUpload) {
                    var _this = this;
                    var endpoint = "https://my-static.ga:3000/upload";
                    var formData = new FormData();
                    formData.append('myImg', fileToUpload, fileToUpload.name);
                    this._http
                        .post(endpoint, formData, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-requested-with": "XMLHttpResponse" }) }).subscribe(function (data) { return _this.imgName = data['ok']; });
                };
                //Puntuacion
                DataService.prototype.puntuarPut = function (url, data) {
                    this._http.put(
                    //Argumento 1: La URL
                    url, 
                    //Argumento 2: Body
                    data, 
                    //Argumento 3: Las opciones con los headers
                    { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-requested-with": "XMLHttpResponse" }) })
                        //Nos suscribimos a la llamada
                        .subscribe(function (result) {
                        // Handle result
                    }, function (error) {
                    });
                };
                return DataService;
            }());
            DataService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UserService = /** @class */ (function () {
                function UserService(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                    this.isLogged = '';
                }
                UserService.prototype.postLogin = function (loginData) {
                    var _this = this;
                    this._http.post(
                    //Argumento 1: La URL
                    "https://my-static.ga:3000/login", 
                    //Argumento 2: Body
                    loginData, 
                    //Argumento 3: Las opciones con los headers
                    { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-requested-with": "XMLHttpResponse" }), withCredentials: true })
                        //Nos suscribimos a la llamada
                        .subscribe(function (result) {
                        _this.data = result;
                        if (_this.data['logged'] == true) {
                            _this.isLogged = '7ras9AS2hk';
                            if (typeof (Storage) !== 'undefined') {
                                localStorage.setItem("98asdqLKjs8", _this.isLogged);
                                _this._router.navigateByUrl('/home');
                            }
                        }
                        ///////////set item here
                    }, function (error) {
                        _this.loginError.next(error);
                        if (_this.error != undefined) {
                        }
                    });
                };
                UserService.prototype.postSign = function (signData) {
                    var _this = this;
                    this._http.post(
                    //Argumento 1: La URL
                    "https://my-static.ga:3000/register", 
                    //Argumento 2: Body
                    signData, 
                    //Argumento 3: Las opciones con los headers
                    { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-requested-with": "XMLHttpResponse" }) })
                        //Nos suscribimos a la llamada
                        .subscribe(function (result) {
                        // Handle result
                        _this.dataSign = result;
                    }, function (error) {
                        _this.error = error;
                        if (_this.error["error"] != undefined) {
                        }
                    });
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/views/home/home.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/views/home/home.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".myNavbar{\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 9;\r\n    background-color: #6d8eb2;\r\n}\r\n\r\n.footerIcon{\r\n    width: 10vw;\r\n}\r\n\r\n.myFooter{\r\n\r\n    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background-color: #6d8eb2;\r\n}\r\n\r\n.myContainer{\r\n    margin-top: 56px;\r\n    margin-bottom: 50px;\r\n    max-width: 100%;\r\n}\r\n\r\n.myBody{\r\n    position:fixed;\r\n    z-index: -1;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    background-size: cover;\r\n    background-color: #dae9f6;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    top: 7%;\r\n}\r\n\r\n.nuevaReceta{\r\n    position: fixed;\r\n    bottom: 60px;\r\n    max-width: 100%;\r\n}\r\n\r\n.listaReceta{\r\n    position: fixed;\r\n    bottom: 160px;\r\n    max-width: 100%;\r\n}\r\n\r\n.myFont{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.autocomplete {\r\n    /*the container must be positioned relative:*/\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n\r\n.autocomplete-items {\r\n  position: absolute;\r\n  border: 1px solid #d4d4d4;\r\n  border-bottom: none;\r\n  border-top: none;\r\n  z-index: 99;\r\n  /*position the autocomplete items to be the same width as the container:*/\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.autocomplete-items div {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #d4d4d4;\r\n}\r\n\r\n.autocomplete-items div:hover {\r\n  /*when hovering an item:*/\r\n  background-color: #e9e9e9;\r\n}\r\n\r\n.autocomplete-active {\r\n  /*when navigating through the items using the arrow keys:*/\r\n  background-color: DodgerBlue !important;\r\n  color: #ffffff;\r\n}\r\n\r\n.cantidades{\r\n    margin: 0\r\n}\r\n\r\n.ingredientes{\r\n    display: inline;\r\n    padding: 5px;\r\n    border-radius: 8px;\r\n    line-height: 2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLE1BQU07SUFDTixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHNIQUFzSDtJQUN0SCxPQUFPO0FBQ1g7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxzSEFBc0g7QUFDMUg7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7QUFDQTtFQUNBLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUVBQXlFO0VBQ3pFLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLDBEQUEwRDtFQUMxRCx1Q0FBdUM7RUFDdkMsY0FBYztBQUNoQjs7QUFHQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlOYXZiYXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4ZWIyO1xyXG59XHJcblxyXG4uZm9vdGVySWNvbntcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG59XHJcblxyXG4ubXlGb290ZXJ7XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4ZWIyO1xyXG59XHJcblxyXG4ubXlDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm15Qm9keXtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlOWY2O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIHRvcDogNyU7XHJcbn1cclxuLm51ZXZhUmVjZXRhe1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA2MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGlzdGFSZWNldGF7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDE2MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5teUZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYXV0b2NvbXBsZXRlIHtcclxuICAgIC8qdGhlIGNvbnRhaW5lciBtdXN0IGJlIHBvc2l0aW9uZWQgcmVsYXRpdmU6Ki9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmF1dG9jb21wbGV0ZS1pdGVtcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIC8qcG9zaXRpb24gdGhlIGF1dG9jb21wbGV0ZSBpdGVtcyB0byBiZSB0aGUgc2FtZSB3aWR0aCBhcyB0aGUgY29udGFpbmVyOiovXHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXYge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbn1cclxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXY6aG92ZXIge1xyXG4gIC8qd2hlbiBob3ZlcmluZyBhbiBpdGVtOiovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxufVxyXG4uYXV0b2NvbXBsZXRlLWFjdGl2ZSB7XHJcbiAgLyp3aGVuIG5hdmlnYXRpbmcgdGhyb3VnaCB0aGUgaXRlbXMgdXNpbmcgdGhlIGFycm93IGtleXM6Ki9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG4uY2FudGlkYWRlc3tcclxuICAgIG1hcmdpbjogMFxyXG59XHJcblxyXG4uaW5ncmVkaWVudGVze1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/views/home/home.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/views/home/home.component.ts ***!
          \**********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(_user, _data) {
                    this._user = _user;
                    this._data = _data;
                    this.allIngredientes = [];
                    this.arrNombresIngredientes = [];
                    this.ingredientes = [];
                    this.userIngredientes = [];
                    this.randomColor = [];
                    this.colors = ["#f66161", "#e845e7", "yellow", "#93e8ab", "orange", "#26cb26", '#9d8ff9', '#34f1ff'];
                    this._data.getIngredientes();
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userIngredientes = this._data.userIngredientes;
                    for (var i = 0; i < this.userIngredientes.length; i++) {
                        this.randomColor.push(this.colors[Math.floor(Math.random() * this.colors.length)]);
                    }
                    this._data.allIngredientes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.subscription = this._data.allIngredientes.subscribe(function (newValue) {
                        _this.allIngredientes = newValue;
                        for (var i = 0; i < _this.allIngredientes.length; i++) {
                            _this.arrNombresIngredientes.push(_this.allIngredientes[i]['ingredienteName']);
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
                                if (!val) {
                                    return false;
                                }
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
                                var p;
                                if (x) {
                                    p = x.getElementsByTagName("div");
                                }
                                ;
                                if (e.keyCode == 40) {
                                    /*If the arrow DOWN key is pressed,
                                    increase the currentFocus variable:*/
                                    currentFocus++;
                                    /*and and make the current item more visible:*/
                                    addActive(p);
                                }
                                else if (e.keyCode == 38) { //up
                                    /*If the arrow UP key is pressed,
                                    decrease the currentFocus variable:*/
                                    currentFocus--;
                                    /*and and make the current item more visible:*/
                                    addActive(p);
                                }
                                else if (e.keyCode == 13) {
                                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                                    e.preventDefault();
                                    if (currentFocus > -1) {
                                        /*and simulate a click on the "active" item:*/
                                        if (p)
                                            p[currentFocus].click();
                                    }
                                }
                            });
                            function addActive(x) {
                                /*a function to classify an item as "active":*/
                                if (!x)
                                    return false;
                                /*start by removing the "active" class on all items:*/
                                removeActive(x);
                                if (currentFocus >= x.length)
                                    currentFocus = 0;
                                if (currentFocus < 0)
                                    currentFocus = (x.length - 1);
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
                        autocomplete(document.getElementById("ingredientesInput"), _this.arrNombresIngredientes);
                    });
                };
                HomeComponent.prototype.addIngrediente = function () {
                    var ingrediente = document.querySelector("#ingredientesInput").value;
                    if (ingrediente !== '') {
                        this.randomColor.push(this.colors[Math.floor(Math.random() * this.colors.length)]);
                        //this.userIngredientes.push(ingrediente);
                    }
                    this._data.addIngrediente(ingrediente);
                };
                HomeComponent.prototype.removeIngrediente = function (index) {
                    this.userIngredientes.splice(index, 1);
                    this._data.removeIngrediente(index);
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/views/lista/lista.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/views/lista/lista.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".myNavbar{\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 9;\r\n    background-color: #6d8eb2;\r\n}\r\n\r\n\r\n.footerIcon{\r\n    width: 10vw;\r\n}\r\n\r\n\r\n.myFooter{\r\n\r\n    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background-color: #6d8eb2;\r\n}\r\n\r\n\r\n.myContainer{\r\n    margin-top: 56px;\r\n    margin-bottom: 50px;\r\n    max-width: 100%;\r\n}\r\n\r\n\r\n.myBody{\r\n    position:fixed;\r\n    z-index: -1;\r\n    height: 83vh;\r\n    width: 100vw;\r\n    background-size: cover;\r\n    background-image: url(\"https://www.diabetes.org/sites/default/files/styles/paragraph_50_50/public/2019-06/understandingcarbs-desktop-5050.jpg\");\r\n   \r\n}\r\n\r\n\r\n.myFont{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsTUFBTTtJQUNOLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksV0FBVztBQUNmOzs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsK0lBQStJOztBQUVuSjs7O0FBRUE7SUFDSSxzSEFBc0g7QUFDMUgiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9saXN0YS9saXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15TmF2YmFye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkOGViMjtcclxufVxyXG5cclxuXHJcbi5mb290ZXJJY29ue1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbn1cclxuXHJcbi5teUZvb3RlcntcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDhlYjI7XHJcbn1cclxuXHJcblxyXG4ubXlDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm15Qm9keXtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBoZWlnaHQ6IDgzdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cuZGlhYmV0ZXMub3JnL3NpdGVzL2RlZmF1bHQvZmlsZXMvc3R5bGVzL3BhcmFncmFwaF81MF81MC9wdWJsaWMvMjAxOS0wNi91bmRlcnN0YW5kaW5nY2FyYnMtZGVza3RvcC01MDUwLmpwZ1wiKTtcclxuICAgXHJcbn1cclxuXHJcbi5teUZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/views/lista/lista.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/views/lista/lista.component.ts ***!
          \************************************************/
        /*! exports provided: ListaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComponent", function () { return ListaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ListaComponent = /** @class */ (function () {
                function ListaComponent(_data) {
                    var _this = this;
                    this._data = _data;
                    this.arrRecetas = [];
                    this.arrRecetasOrdenadas = [];
                    this.userIngredientes = [];
                    this.arrParams = [];
                    this.allIngredientes = [];
                    this.userIngredientes = this._data.userIngredientes;
                    this._data.allIngredientes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.subscriptionI = this._data.allIngredientes.subscribe(function (newValue) {
                        var e_1, _a;
                        _this.allIngredientes = newValue;
                        for (var i = 0; i < _this.userIngredientes.length; i++) {
                            try {
                                for (var _b = (e_1 = void 0, __values(_this.allIngredientes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var ingrediente = _c.value;
                                    if (ingrediente['ingredienteName'] == _this.userIngredientes[i]) {
                                        _this.arrParams.push(i + "=" + ingrediente['_id']);
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        _this.params = _this.arrParams.join('&');
                        _this._data.llamadaGet("https://my-static.ga:3000/recetas/filter?" + _this.params);
                    });
                    this.subscription = this._data.data.subscribe(function (newValue) {
                        _this.arrRecetas = newValue;
                        _this.arrRecetas.sort(function (a, b) { return b['puntuacion'] - a['puntuacion']; });
                    });
                    this._data.getIngredientes();
                }
                ListaComponent.prototype.ngOnInit = function () {
                };
                return ListaComponent;
            }());
            ListaComponent.ctorParameters = function () { return [
                { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            ListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lista',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/lista/lista.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista.component.css */ "./src/app/views/lista/lista.component.css")).default]
                })
            ], ListaComponent);
            /***/ 
        }),
        /***/ "./src/app/views/login/login.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/views/login/login.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t/* Coded with love by Mutiullah Samim */\r\n    .background{\r\n        width: 100vw;\r\n        height: 100vh;\r\n        position: fixed;\r\n        background-image: url(\"http://blog.flota.es/wp-content/uploads/2017/09/diez-tipos-de-pasta-que-deberias-conocer.jpg\");\r\n        top: 0;\r\n    }\r\n    body,\r\n    html {\r\n        margin-top: 0;\r\n        padding: 0;\r\n        height: 100%;\r\n        background: #60a3bc;\r\n    }\r\n    .user_card {\r\n        height: 400px;\r\n        width: 350px;\r\n        margin-top: auto;\r\n        margin-bottom: auto;\r\n        background: #6d8eb2;\r\n        position: relative;\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        padding: 10px;\r\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        border-radius: 5px;\r\n\r\n    }\r\n    .brand_logo_container {\r\n        position: absolute;\r\n        height: 170px;\r\n        width: 170px;\r\n        top: -75px;\r\n        border-radius: 50%;\r\n        background: #ff731b;\r\n        padding: 10px;\r\n        text-align: center;\r\n    }\r\n    .brand_logo {\r\n        height: 150px;\r\n        width: 150px;\r\n        border-radius: 50%;\r\n        border: 2px solid white;\r\n    }\r\n    .form_container {\r\n        margin-top: 100px;\r\n    }\r\n    .login_btn {\r\n        width: 100%;\r\n        background: #ff731b !important;\r\n        color: white !important;\r\n    }\r\n    .login_btn:focus {\r\n        box-shadow: none !important;\r\n        outline: 0px !important;\r\n    }\r\n    .login_container {\r\n        padding: 0 2rem;\r\n    }\r\n    .input-group-text {\r\n        background: #ff731b !important;\r\n        color: white !important;\r\n        border: 0 !important;\r\n        border-radius: 0.25rem 0 0 0.25rem !important;\r\n    }\r\n    .input_user,\r\n    .input_pass:focus {\r\n        box-shadow: none !important;\r\n        outline: 0px !important;\r\n    }\r\n    .custom-checkbox .custom-control-input:checked~.custom-control-label::before {\r\n        background-color: #ff731b !important;\r\n    }\r\n    .openModal{\r\n        cursor:pointer\r\n    }\r\n    .myFont{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n    input.ng-invalid.ng-touched{\r\n    border-bottom: 5px solid red\r\n}\r\n    small.error{\r\n    color: #af1827;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQyx1Q0FBdUM7SUFDcEM7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWU7UUFDZixxSEFBcUg7UUFDckgsTUFBTTtJQUNWO0lBRUE7O1FBRUksYUFBYTtRQUNiLFVBQVU7UUFDVixZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsNEVBQTRFO1FBQzVFLG9GQUFvRjtRQUNwRixpRkFBaUY7UUFDakYsa0JBQWtCOztJQUV0QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixZQUFZO1FBQ1osVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7UUFDWCw4QkFBOEI7UUFDOUIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSwyQkFBMkI7UUFDM0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQiw2Q0FBNkM7SUFDakQ7SUFDQTs7UUFFSSwyQkFBMkI7UUFDM0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxvQ0FBb0M7SUFDeEM7SUFDQTtRQUNJO0lBQ0o7SUFFSjtJQUNJLHNIQUFzSDtBQUMxSDtJQUVBO0lBQ0k7QUFDSjtJQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdC8qIENvZGVkIHdpdGggbG92ZSBieSBNdXRpdWxsYWggU2FtaW0gKi9cclxuICAgIC5iYWNrZ3JvdW5ke1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwOi8vYmxvZy5mbG90YS5lcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS9kaWV6LXRpcG9zLWRlLXBhc3RhLXF1ZS1kZWJlcmlhcy1jb25vY2VyLmpwZ1wiKTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJvZHksXHJcbiAgICBodG1sIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2MGEzYmM7XHJcbiAgICB9XHJcbiAgICAudXNlcl9jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzZkOGViMjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICB9XHJcbiAgICAuYnJhbmRfbG9nb19jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICB0b3A6IC03NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY3MzFiO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJyYW5kX2xvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5mb3JtX2NvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubG9naW5fYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY3MzFiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubG9naW5fYnRuOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubG9naW5fY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNzMxYiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbnB1dF91c2VyLFxyXG4gICAgLmlucHV0X3Bhc3M6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjczMWIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5vcGVuTW9kYWx7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXJcclxuICAgIH1cclxuXHJcbi5teUZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmVkXHJcbn1cclxuXHJcbnNtYWxsLmVycm9ye1xyXG4gICAgY29sb3I6ICNhZjE4Mjc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/views/login/login.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/views/login/login.component.ts ***!
          \************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(_user, _http) {
                    this._user = _user;
                    this._http = _http;
                    this.loginData = {
                        "mail": "",
                        "password": ""
                    };
                    this.signData = {
                        "userName": "",
                        "mail": "",
                        "password": ""
                    };
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                //funcion para logear
                LoginComponent.prototype.postLogin = function (form) {
                    if (form.valid) {
                        this._user.postLogin(this.loginData); // pasar como argumento el objeto en el servicio!!!!!!!!!
                    }
                };
                // funcion para registrarse
                LoginComponent.prototype.postSign = function (form) {
                    //selectores de los inputs del modal
                    if (form.valid) {
                        this._user.postSign(this.signData);
                    }
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/views/nueva-receta/nueva-receta.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/views/nueva-receta/nueva-receta.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.myNavbar{\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 9;\r\n    background-color: #6d8eb2;\r\n}\r\n\r\n.footerIcon{\r\n    width: 10vw;\r\n}\r\n\r\n.myFooter{\r\n\r\n    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background-color: #6d8eb2;\r\n}\r\n\r\n.myContainer{\r\n    margin-top: 56px;\r\n    margin-bottom: 50px;\r\n    max-width: 100%;\r\n}\r\n\r\n.myBody{\r\n    position:fixed;\r\n    z-index: -1;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-size: cover;\r\n    background-color: #dae9f6;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n   \r\n}\r\n\r\ninput.ng-invalid.ng-touched{\r\n    border-left: 5px solid red\r\n}\r\n\r\nsmall.error{\r\n    color: #af1827;\r\n    font-weight: bold;\r\n}\r\n\r\n#plusButton{\r\n    position: absolute;\r\n  \r\n}\r\n\r\n.cantidades{\r\n    margin: 0\r\n}\r\n\r\n.autocomplete {\r\n    /*the container must be positioned relative:*/\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n\r\n.autocomplete-items {\r\n  position: absolute;\r\n  border: 1px solid #d4d4d4;\r\n  border-bottom: none;\r\n  border-top: none;\r\n  z-index: 99;\r\n  /*position the autocomplete items to be the same width as the container:*/\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.autocomplete-items div {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #d4d4d4;\r\n}\r\n\r\n.autocomplete-items div:hover {\r\n  /*when hovering an item:*/\r\n  background-color: #e9e9e9;\r\n}\r\n\r\n.autocomplete-active {\r\n  /*when navigating through the items using the arrow keys:*/\r\n  background-color: DodgerBlue !important;\r\n  color: #ffffff;\r\n}\r\n\r\n.tuLista{\r\n    background-color: white;;\r\n}\r\n\r\n.btn-file {\r\n    position: relative;\r\n    overflow: hidden;\r\n    background-color: #6d8eb2;\r\n  }\r\n\r\n.btn-file input[type=file] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    font-size: 100px;\r\n    text-align: right;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n    background: red;\r\n    cursor: inherit;\r\n    display: block;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbnVldmEtcmVjZXRhL251ZXZhLXJlY2V0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsTUFBTTtJQUNOLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsc0hBQXNIOztBQUUxSDs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBR0E7SUFDSSw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7QUFDQTtFQUNBLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUVBQXlFO0VBQ3pFLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLDBEQUEwRDtFQUMxRCx1Q0FBdUM7RUFDdkMsY0FBYztBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbnVldmEtcmVjZXRhL251ZXZhLXJlY2V0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5teU5hdmJhcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDhlYjI7XHJcbn1cclxuXHJcbi5mb290ZXJJY29ue1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbn1cclxuXHJcbi5teUZvb3RlcntcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDhlYjI7XHJcbn1cclxuXHJcbi5teUNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubXlCb2R5e1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTlmNjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgIFxyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZFxyXG59XHJcblxyXG5zbWFsbC5lcnJvcntcclxuICAgIGNvbG9yOiAjYWYxODI3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNwbHVzQnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIFxyXG59XHJcblxyXG4uY2FudGlkYWRlc3tcclxuICAgIG1hcmdpbjogMFxyXG59XHJcblxyXG5cclxuLmF1dG9jb21wbGV0ZSB7XHJcbiAgICAvKnRoZSBjb250YWluZXIgbXVzdCBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlOiovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5hdXRvY29tcGxldGUtaXRlbXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICB6LWluZGV4OiA5OTtcclxuICAvKnBvc2l0aW9uIHRoZSBhdXRvY29tcGxldGUgaXRlbXMgdG8gYmUgdGhlIHNhbWUgd2lkdGggYXMgdGhlIGNvbnRhaW5lcjoqL1xyXG4gIHRvcDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5hdXRvY29tcGxldGUtaXRlbXMgZGl2IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG59XHJcbi5hdXRvY29tcGxldGUtaXRlbXMgZGl2OmhvdmVyIHtcclxuICAvKndoZW4gaG92ZXJpbmcgYW4gaXRlbToqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbn1cclxuLmF1dG9jb21wbGV0ZS1hY3RpdmUge1xyXG4gIC8qd2hlbiBuYXZpZ2F0aW5nIHRocm91Z2ggdGhlIGl0ZW1zIHVzaW5nIHRoZSBhcnJvdyBrZXlzOiovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udHVMaXN0YXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOztcclxufVxyXG5cclxuLmJ0bi1maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4ZWIyO1xyXG4gIH1cclxuICAuYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/views/nueva-receta/nueva-receta.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/views/nueva-receta/nueva-receta.component.ts ***!
          \**************************************************************/
        /*! exports provided: NuevaRecetaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaRecetaComponent", function () { return NuevaRecetaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var NuevaRecetaComponent = /** @class */ (function () {
                function NuevaRecetaComponent(_user, _data) {
                    this._user = _user;
                    this._data = _data;
                    this.cantidades = [];
                    this.imgName = 'home.png';
                    this.formData = {
                        nombre: "",
                        instrucciones: "",
                        cantidades: [],
                        ingredientes: [],
                        puntuacion: 0,
                        imgUrl: ""
                    };
                    this.allIngredientes = [];
                    this.arrNombresIngredientes = [];
                    this.ingredientes = [];
                    this.ingredientesParaMandar = [];
                    this.fileToUpload = null;
                    this._data.getIngredientes();
                }
                NuevaRecetaComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._data.allIngredientes = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this.subscription = this._data.allIngredientes.subscribe(function (newValue) {
                        _this.allIngredientes = newValue;
                        for (var i = 0; i < _this.allIngredientes.length; i++) {
                            _this.arrNombresIngredientes.push(_this.allIngredientes[i]['ingredienteName']);
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
                                if (!val) {
                                    return false;
                                }
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
                                var p;
                                if (x) {
                                    p = x.getElementsByTagName("div");
                                }
                                ;
                                if (e.keyCode == 40) {
                                    /*If the arrow DOWN key is pressed,
                                    increase the currentFocus variable:*/
                                    currentFocus++;
                                    /*and and make the current item more visible:*/
                                    addActive(p);
                                }
                                else if (e.keyCode == 38) { //up
                                    /*If the arrow UP key is pressed,
                                    decrease the currentFocus variable:*/
                                    currentFocus--;
                                    /*and and make the current item more visible:*/
                                    addActive(p);
                                }
                                else if (e.keyCode == 13) {
                                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                                    e.preventDefault();
                                    if (currentFocus > -1) {
                                        /*and simulate a click on the "active" item:*/
                                        if (p)
                                            p[currentFocus].click();
                                    }
                                }
                            });
                            function addActive(x) {
                                /*a function to classify an item as "active":*/
                                if (!x)
                                    return false;
                                /*start by removing the "active" class on all items:*/
                                removeActive(x);
                                if (currentFocus >= x.length)
                                    currentFocus = 0;
                                if (currentFocus < 0)
                                    currentFocus = (x.length - 1);
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
                        autocomplete(document.getElementById("ingredientesInput"), _this.arrNombresIngredientes);
                    });
                };
                NuevaRecetaComponent.prototype.handleFileInput = function (files) {
                    this.fileToUpload = files.item(0);
                };
                NuevaRecetaComponent.prototype.uploadFileToActivity = function () {
                    this._data.postFile(this.fileToUpload);
                };
                NuevaRecetaComponent.prototype.sendData = function (form) {
                    this.imgName = this._data.imgName;
                    if (form.valid) {
                        this.uploadFileToActivity();
                        this.formData['cantidades'] = this.cantidades;
                        this.formData['ingredientes'] = this.ingredientesParaMandar;
                        this.formData['imgUrl'] = "https://my-static.ga:3500/" + this.fileToUpload.name;
                        this._data.sendData(this.formData);
                    }
                    document.querySelector("#nameInput").value = '';
                    document.querySelector("#cantidadesInput").value = '';
                    document.querySelector("#ingredientesInput").value = '';
                    document.querySelector("#elaboracionInput").value = '';
                };
                NuevaRecetaComponent.prototype.addCantidad = function (event) {
                    if (event['keyCode'] == 13) {
                        var cantidad = document.querySelector("#cantidadesInput").value;
                        var ingrediente_1 = document.querySelector("#ingredientesInput").value;
                        var flag = this.arrNombresIngredientes.includes(ingrediente_1);
                        var ingredienteID = void 0;
                        if (cantidad !== '' && ingrediente_1 !== '' && flag == true) {
                            this.ingredientes.push(ingrediente_1);
                            this.cantidades.push(ingrediente_1 + " " + cantidad);
                            ingredienteID = this.allIngredientes.filter(function (obj) {
                                return obj['ingredienteName'] === ingrediente_1;
                            });
                            if (ingredienteID !== undefined) {
                                this.ingredientesParaMandar.push(ingredienteID[0]['_id']);
                            }
                            else {
                            }
                            document.querySelector("#cantidadesInput").value = '';
                            document.querySelector("#ingredientesInput").value = '';
                        }
                        event.preventDefault();
                    }
                };
                NuevaRecetaComponent.prototype.removeCantidad = function (index) {
                    this.ingredientes.splice(index, 1);
                    this.cantidades.splice(index, 1);
                    this.ingredientesParaMandar.splice(index, 1);
                };
                return NuevaRecetaComponent;
            }());
            NuevaRecetaComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            NuevaRecetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nueva-receta',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nueva-receta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/nueva-receta/nueva-receta.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nueva-receta.component.css */ "./src/app/views/nueva-receta/nueva-receta.component.css")).default]
                })
            ], NuevaRecetaComponent);
            /***/ 
        }),
        /***/ "./src/app/views/onboarding/onboarding.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/views/onboarding/onboarding.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".myBody {\r\n background-color:#6d8eb2;   \r\n /* background-image: url(\"http://blog.flota.es/wp-content/uploads/2017/09/diez-tipos-de-pasta-que-deberias-conocer.jpg\"); */\r\n}\r\n\r\n.myCard{\r\n    height: 80vh;\r\n    margin-top: 20vh;\r\n    margin-left: 10vw;\r\n    margin-right: 10vw;\r\n}\r\n\r\n.cardText{\r\n    margin-top: 10vh;\r\n    color: white;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.myButton{\r\nmargin-left: 20vw!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvb25ib2FyZGluZy9vbmJvYXJkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx3QkFBd0I7Q0FDeEIsMkhBQTJIO0FBQzVIOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzSEFBc0g7QUFDMUg7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUJvZHkge1xyXG4gYmFja2dyb3VuZC1jb2xvcjojNmQ4ZWIyOyAgIFxyXG4gLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cDovL2Jsb2cuZmxvdGEuZXMvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDkvZGllei10aXBvcy1kZS1wYXN0YS1xdWUtZGViZXJpYXMtY29ub2Nlci5qcGdcIik7ICovXHJcbn1cclxuXHJcbi5teUNhcmR7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbn1cclxuXHJcblxyXG4uY2FyZFRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm15QnV0dG9ue1xyXG5tYXJnaW4tbGVmdDogMjB2dyFpbXBvcnRhbnQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/views/onboarding/onboarding.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/views/onboarding/onboarding.component.ts ***!
          \**********************************************************/
        /*! exports provided: OnboardingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingComponent", function () { return OnboardingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OnboardingComponent = /** @class */ (function () {
                function OnboardingComponent() {
                }
                OnboardingComponent.prototype.ngOnInit = function () {
                };
                return OnboardingComponent;
            }());
            OnboardingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-onboarding',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./onboarding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/onboarding/onboarding.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./onboarding.component.css */ "./src/app/views/onboarding/onboarding.component.css")).default]
                })
            ], OnboardingComponent);
            /***/ 
        }),
        /***/ "./src/app/views/receta/receta.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/views/receta/receta.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".myNavbar{\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 9;\r\n    background-color: #6d8eb2;\r\n}\r\n\r\n.footerIcon{\r\n    width: 10vw;\r\n}\r\n\r\n.myFooter{\r\n\r\n    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background-color: #6d8eb2;\r\n}\r\n\r\n.myContainer{\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    max-width: 100%;\r\n}\r\n\r\n.myBody{\r\n    background-repeat: repeat-y;\r\n    background-image: url(\"http://blog.flota.es/wp-content/uploads/2017/09/diez-tipos-de-pasta-que-deberias-conocer.jpg\");\r\n   \r\n}\r\n\r\n.receta{\r\n  \r\n    margin-left: 0px;\r\n    margin-top: 56px;\r\n    margin-bottom: 50px;\r\n    max-width: 100%;\r\n}\r\n\r\n.cantidades{\r\n    margin: 0\r\n}\r\n\r\n.myFont{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVjZXRhL3JlY2V0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxNQUFNO0lBQ04sVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUhBQXFIOztBQUV6SDs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHNIQUFzSDtBQUMxSCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlY2V0YS9yZWNldGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teU5hdmJhcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDhlYjI7XHJcbn1cclxuXHJcbi5mb290ZXJJY29ue1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbn1cclxuXHJcbi5teUZvb3RlcntcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDhlYjI7XHJcbn1cclxuXHJcbi5teUNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubXlCb2R5e1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cDovL2Jsb2cuZmxvdGEuZXMvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDkvZGllei10aXBvcy1kZS1wYXN0YS1xdWUtZGViZXJpYXMtY29ub2Nlci5qcGdcIik7XHJcbiAgIFxyXG59XHJcblxyXG4ucmVjZXRhe1xyXG4gIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FudGlkYWRlc3tcclxuICAgIG1hcmdpbjogMFxyXG59XHJcblxyXG4ubXlGb250e1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/views/receta/receta.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/views/receta/receta.component.ts ***!
          \**************************************************/
        /*! exports provided: RecetaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecetaComponent", function () { return RecetaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RecetaComponent = /** @class */ (function () {
                function RecetaComponent(_data, _path) {
                    this._data = _data;
                    this._path = _path;
                    this.data = this._data.recetas;
                    this.singleReceta = {};
                }
                RecetaComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.id = (this._path.snapshot.params.id);
                    if (Object.entries(this.data).length === 0) {
                        this._data.llamadaGet("https://my-static.ga:3000/receta/" + this.id);
                    }
                    else {
                        this.singleReceta = this.data.filter(function (obj) {
                            return obj['_id'] === _this.id;
                        });
                        this.cantidades = this.singleReceta[0]['cantidades'];
                    }
                    this.subscription = this._data.data.subscribe(function (newValue) {
                        _this.data = newValue;
                        _this.singleReceta = _this.data.filter(function (obj) {
                            return obj['_id'] === _this.id;
                        });
                        _this.cantidades = _this.singleReceta[0]['cantidades'];
                    });
                };
                RecetaComponent.prototype.puntuar = function () {
                    if (localStorage.getItem("pnt" + this.id) == null) {
                        if (typeof (Storage) !== 'undefined') {
                            localStorage.setItem("pnt" + this.id, "alrd");
                            this.singleReceta[0]['puntuacion']++;
                        }
                    }
                    this._data.puntuarPut("https://my-static.ga:3000/receta", this.singleReceta);
                };
                return RecetaComponent;
            }());
            RecetaComponent.ctorParameters = function () { return [
                { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            RecetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-receta',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/receta/receta.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receta.component.css */ "./src/app/views/receta/receta.component.css")).default]
                })
            ], RecetaComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Hecto\Desktop\PocketChef\Frontend\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map