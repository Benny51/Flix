import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-flix-inscription-form',
  templateUrl: './flix-inscription-form.component.html',
  styleUrls: ['./flix-inscription-form.component.css']
})
export class FlixInscriptionFormComponent implements OnInit{
  
  @Output() userCreated:EventEmitter<User> = new EventEmitter<User>();
  @Input() errorDuplicata: string="";

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = '^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$';
  isSamePassword = false;
  isCorrectEmail = false;

  form:FormGroup = this.fb.group(
    {
      username:["",Validators.required],
      email:["",[Validators.required,Validators.pattern(this.emailPattern)]],
      password:["",[Validators.required,Validators.pattern(this.passwordPattern),Validators.minLength(6)]],
      confirmed_password:["",[Validators.required,Validators.pattern(this.passwordPattern),Validators.minLength(6)]],
      condition:[false,Validators.required]
    }
  );

  ngOnInit(): void {
    
  }

  constructor(private fb:FormBuilder){}
  
  emitToCreation()
  {
    this.userCreated.emit(this.form.value);
  }

  checkIsFormIsCorrect()
  {
    // Plus tard
  }
}
