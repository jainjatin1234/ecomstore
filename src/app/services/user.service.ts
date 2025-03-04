import { Injectable } from '@angular/core';
import { signUp } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router) { }
  userSignup(user:signUp){
    this.http.post('http://localhost:3000/userinsert',user,{observe:'response'})
    .subscribe((result)=>{
      console.log(result)
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['/'])
      }
    })
  }
}
