import { Component, OnInit } from '@angular/core';
import { AngularFireAuth }  from '@angular/fire/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private router: Router,
   public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  
  }
 async Login(){
    const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email,this.user.password);
    console.log(user);
    if(user.user.email){
      this.router.navigate(['/home']);

    }else{
      alert('login failed!');
    }
    

   }
   async register(){
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email,this.user.password);
    console.log(user);
    if(user.user.email){
      this.router.navigate(['registration successful!']);

    }else{
      alert('registration failed!');
    }
// Login(){
//   this.router.navigate(['/home']);

// }

}
}
