import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductsDataService } from '../../services/products-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuType:string='user'
  userName:string=' '


 constructor(private route:Router){}

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.route.events.subscribe((val:any)=>{

      if(localStorage.getItem('user') && val.url.includes('user')){
        let userstore = localStorage.getItem('user')
        let userData = userstore && JSON.parse(userstore)
        this.userName=userData.name;
        this.menuType='user'


      }else{
        this.menuType='default'
      }

  })
 console.log(this.userName)







 }



 userLogout(){

  localStorage.removeItem('user')
  this.menuType='default'

  this.route.navigate(['/user-auth'])


 }
}
