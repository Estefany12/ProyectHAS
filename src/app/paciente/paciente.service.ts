import { Injectable } from '@angular/core';
import {PACIENTES} from './pacientes.json';
import {Paciente} from './paciente';
import { Observable, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private urlEndPoint:string='http://192.168.81.99:8090/api/pacientes';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  /*getPacientes():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.urlEndPoint);
  }*/

   getPacientes():Observable<Paciente[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response=>response as Paciente[])
    );
  }

  create(paciente:Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(this.urlEndPoint,paciente,{headers:this.HttpHeaders});
  }
///METODOS PARA ACTUALIZAR ERROR -------------------------------------

  getPaciente(id:number):Observable<Paciente>{
    
    return this.http.get<Paciente>(`${this.urlEndPoint}/${id}`)

  }

  update(paciente:Paciente):Observable<Paciente>{
    return this.http.put<Paciente>(`${this.urlEndPoint}/${paciente.id}`,paciente,{headers:this.HttpHeaders})
  }



  delete(id:number):Observable<Paciente>{
    return this.http.delete<Paciente>(`${this.urlEndPoint}/${id}`,{headers:this.HttpHeaders})
  }
}
