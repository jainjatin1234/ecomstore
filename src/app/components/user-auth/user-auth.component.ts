import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { signUp } from '../../data-type';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-auth',
  imports: [FormsModule, HeaderComponent],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.scss'
})
export class UserAuthComponent {
constructor(private user:UserService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
signUp(data:signUp){
  this.user.userSignup(data)
}
}
