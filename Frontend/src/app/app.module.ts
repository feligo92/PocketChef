import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnboardingComponent } from './views/onboarding/onboarding.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { ListaComponent } from './views/lista/lista.component';
import { RecetaComponent } from './views/receta/receta.component';



const routerConfig: Routes = [
  { "path": "", "component": HomeComponent},
  {"path": "home", "component": HomeComponent},
  {"path": "onboarding", "component": OnboardingComponent},
  {"path": "lista", "component": ListaComponent},
  { "path": "receta/:id", "component": RecetaComponent },
  { "path": "login", "component":  LoginComponent },
  { "path": "**", "component": HomeComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    LoginComponent,
    HomeComponent,
    ListaComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig, { useHash: true })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
