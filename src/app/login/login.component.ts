import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = '';
  password:string = '';
  constructor(private router: Router){

  }

  redirectToHome(){
    this.router.navigate(["/inicio"]);
  }

  jija(){
    if(this.email != "123@aaa.com" || this.password != "hola"){
      localStorage.setItem('bool', 'false')
      console.log("error")
      return;
    }
    else{
    localStorage.setItem('bool', 'true')
    console.log("entró")
  }
}
}


