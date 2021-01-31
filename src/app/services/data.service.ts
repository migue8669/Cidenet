import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import { RegisterModel } from '../model/register.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string;

  constructor(private http:HttpClient,private storage:AngularFireStorage) { 
    this.baseUrl='https://node-c1ffb.firebaseio.com/';
  }

  createRegister(register:any){
    return this.http.post(`${this.baseUrl}registroEmpleado.json`,register).pipe(map((resp:any)=>{
      console.log(resp)
register.key=resp.name;
return register;
    })
    )
  }
}
