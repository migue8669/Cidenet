import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegisterModel } from '../model/register.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  
register: RegisterModel= new RegisterModel();
registerForm!:string;
formTemplate = new FormGroup({
  firsLastName: new FormControl('', [Validators.required, Validators.pattern('^[A-ZA\u00E0-\u00FC]+(\s*[A-ZA\u00E0-\u00FC]*)*[A-ZA\u00E0-\u00FC]+$')]),
  secondLastName: new FormControl(''),
  firstName: new FormControl('', ),
  otherNames: new FormControl('', ),
  countryEmploye: new FormControl(''),
  typeId: new FormControl('', ),
  numberId: new FormControl(''),
  email: new FormControl(''),
  dateEntry: new FormControl(''),
  area: new FormControl(''),
  state: new FormControl(''),
  dateTime: new FormControl(''),

})
  constructor(private registerService:DataService) { }

  ngOnInit(): void {
  }
  registerFunction(){
 
    if (this.formTemplate.invalid) {
      return;
  }    
 
// console.log(JSON.stringify(this.formTemplate))
this.registerService.createRegister(this.formTemplate.value).subscribe((response)=>{
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

