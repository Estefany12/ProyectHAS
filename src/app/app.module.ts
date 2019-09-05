import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { LoginComponent } from './componets/login/login.component';
import { LibrosManagerComponent } from './componets/libros-manager/libros-manager.component';
import { LibrosFormComponent } from './components/libros-manager/libros-form/libros-form.component';
import { LibrosListComponent } from './components/libros-manager/libros-list/libros-list.component';
import { LibrosDetailComponent } from './components/libros-manager/libros-detail/libros-detail.component';
import { NgbdModalBasic } from './components/libros-manager/moda-basic/modal-basic';
import { DirectivaComponent } from './directiva/directiva.component';
import { PacienteComponent } from './paciente/paciente.component';
import { FormComponent } from './paciente/form.component';
import {RouterModule,Routes} from '@angular/router';
import { InicioComponent } from './componets/inicio/inicio.component';


const routes:Routes =[
  {path: '',redirectTo: '/pacientes',pathMatch:'full'},
  {path:'directivas',component:DirectivaComponent},
  {path:'pacientes',component:PacienteComponent},
  {path:'pacientes/form',component:FormComponent},
  {path:'pacientes/form/:id',component:FormComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule, AppRoutingModule,HttpClientModule,RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
   NgbdModalBasic,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LibrosManagerComponent,
    LibrosFormComponent,
    LibrosListComponent,
    LibrosDetailComponent,
    DirectivaComponent,
    PacienteComponent,
    FormComponent,
    InicioComponent],
  
  providers: [],
  
})
export class AppModule { }
