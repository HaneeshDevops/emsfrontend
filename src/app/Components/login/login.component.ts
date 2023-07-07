// import { Component, OnInit } from '@angular/core';
// import {NgForm,Validators,FormBuilder, FormGroup, FormControl} from '@angular/forms'
// import { Router } from '@angular/router';
// import { UserAuthService } from 'src/app/Services/user-auth.service';
// import { UserService } from 'src/app/Services/user.service';
// @Component({
//  selector: 'app-login',
//  templateUrl: './login.component.html',
//  styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//  hide=true;

// constructor(private userService : UserService, private userAuthService:UserAuthService,
// private router:Router,private formBuilder:FormBuilder) {

//  }

// ngOnInit(): void {


// }
// login(loginForm:NgForm){
// this.userService.login(loginForm.value).subscribe(
//  (response:any)=>{

// this.userAuthService.setRoles(response.user.role),
//  this.userAuthService.setToken(response.jwtToken);
//  const role = response.user.role[0].roleName;
//  if(role==='Admin'){
// this.router.navigate(['/admin']);
//  }
//  else{



// this.router.navigate(['/user']);
//  }
//  },
// (error)=>{
// console.log(error);

//  }
// );
// }
// }
import { Component, OnInit } from '@angular/core';
import {NgForm,Validators,FormBuilder, FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;

constructor(private userService : UserService, private userAuthService:UserAuthService,
  private router:Router,private formBuilder:FormBuilder) {


    }

ngOnInit(): void {


}
login(loginForm:NgForm){
this.userService.login(loginForm.value).subscribe(
  (response:any)=>{

    this.userAuthService.setRoles(response.user.role),
    this.userAuthService.setToken(response.jwtToken);

    const role = response.user.role[0].roleName;
    if(role==='Admin'){
         this.router.navigate(['/admin']);
    }
    else{

 

      this.router.navigate(['/user']);
    }
  },
  (error)=>{
    console.log(error);

  }
);
}
}




