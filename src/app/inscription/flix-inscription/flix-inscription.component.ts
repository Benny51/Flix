import { Component } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-flix-inscription',
  templateUrl: './flix-inscription.component.html',
  styleUrls: ['./flix-inscription.component.css']
})
export class FlixInscriptionComponent {
  
  
  constructor(private userService:UserService){}

  errors = ""

  createUser($event: User) {
    
    this.userService.create($event).subscribe();
  }
}
