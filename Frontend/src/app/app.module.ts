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
import { NuevaRecetaComponent } from './views/nueva-receta/nueva-receta.component';
import { FormsModule} from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';

const routerConfig: Routes = [
  { "path": "", "component": HomeComponent,"canActivate":[AuthGuard]},
  {"path": "home", "component": HomeComponent,"canActivate":[AuthGuard]},
  {"path": "onboarding", "component": OnboardingComponent},
  {"path": "lista", "component": ListaComponent,"canActivate":[AuthGuard]},
  {"path": "nuevareceta", "component":  NuevaRecetaComponent,"canActivate":[AuthGuard]},
  { "path": "receta/:id", "component": RecetaComponent,"canActivate":[AuthGuard] },
  { "path": "login", "component":  LoginComponent },
  { "path": "**", "component": HomeComponent,"canActivate":[AuthGuard]}

]


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    LoginComponent,
    HomeComponent,
    ListaComponent,
    RecetaComponent,
    NuevaRecetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routerConfig, { useHash: true })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
