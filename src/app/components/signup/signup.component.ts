import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private auth:AuthService, private router:Router) {

  }

  user = {
    nombre: "",
    apellido: "",
    email: "",
    password: ""
  }

  signup() {
    this.auth.signUp(this.user).subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this.router.navigate(['/tareas'])
      },
      err=>console.log(err)
    )
  }
}
