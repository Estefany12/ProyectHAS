import { Component, OnInit } from '@angular/core';
import {Paciente} from './paciente';
import { PacienteService } from './paciente.service';
import { RouterModule, Routes, Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


const routes: Routes = [
  { path: 'routePath', component: Component },
  { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private paciente:Paciente=new Paciente();

  private titulo:string="Nuevo Paciente";
  constructor(private pacienteService: PacienteService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.cargarPaciente();
   
  }


  public create():void{ this.pacienteService.create(this.paciente)
     .subscribe(paciente => {
         this.router.navigate(['/pacientes'])
         Swal.fire('Nuevo paciente',`Paciente ${paciente.nombre} fue creado con exito`,'success')
         //swal('Nuevo paciente',`Paciente ${paciente.nombre} creado con éxito!`,'success')
       }
     );
  }

  //CARGA LOS DATOS AL FORMULARIO------NO SALEEE--------------------------------------------*/
  
  cargarPaciente():void{
    this.activatedRoute.params.subscribe(params=>{
      let id=params['id']
      if(id){
         this.pacienteService.getPaciente(id).subscribe((paciente) => this.paciente = paciente)
          console.log("Objeto")
          console.log(this.paciente)
      }
    })
  }
  /*----------------------------------------------------------------------------------*/

//ACTUALIZA LOS DATOS DEL FORMULARIO UPDATE
    update():void{
      this.pacienteService.update(this.paciente)
      .subscribe(paciente=>{
        this.router.navigate(['/pacientes'])
        Swal.fire('Paciente Actualizado',`Paciente ${paciente.nombre} actualizado con exito`,'success')
      })
    }




}
