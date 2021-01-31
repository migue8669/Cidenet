import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterModel } from '../model/register.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  
register: RegisterModel= new RegisterModel();
  constructor(private registerService:DataService) { }

  ngOnInit(): void {
  }
  registerFunction(form:NgForm){

this.registerService.createRegister(this.register).subscribe((response)=>{
  console.log(response)
})
  }
}

//    deleteDiacriticos(texto:any) {

//     return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
// }
// changeDiacriticosEvent(){
//   this.deleteDiacriticos(this.register.firstLastName)
//   this.register.firstLastName?.toUpperCase();
// console.log(this.register)

// }

