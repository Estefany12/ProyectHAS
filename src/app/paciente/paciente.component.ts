import { Component, OnInit } from '@angular/core';
import {Paciente} from './paciente';
import {PacienteService} from './paciente.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  pacientes:Paciente[];

  constructor(private pacienteService:PacienteService) { }

  ngOnInit() {
   this.pacienteService.getPacientes().subscribe(
      pacientes=>this.pacientes=pacientes
   );
  }
 
  
  delete(paciente:Paciente):void
  {
      const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.pacienteService.delete(paciente.id).subscribe(
          response=>{
            this.pacientes=this.pacientes.filter(pac=> pac!==paciente)
          swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        }
          
        )
        
      } 
    })
  }


}
