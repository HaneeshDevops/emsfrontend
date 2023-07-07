
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserAuthService {

//   constructor() { }

//    public setRoles(roles:[]){
//    localStorage.setItem("roles", JSON.stringify(roles));
//    }
 
//   getRoles(): string[] {
//     const rolesString = localStorage.getItem('Roles');
//     let roles: string[] = [];
//     if (rolesString) {
//       try {
//         roles = JSON.parse(rolesString);
//       } catch (e) {
//         console.error('Error parsing roles from local storage', e);
//       }
//     }
//     return roles;
//   }
  
  
  
  
 
  
//   public setToken(jwtToken:string){
//     localStorage.setItem("jwtToken", jwtToken);
//   }

//    public getToken(): string {
//     const token = localStorage.getItem("jwtToken");
//     return token ? token : "";
//    }

//   public clear(){
//     localStorage.clear();
//   }

//    public isLoggedIn(){
//   return this.getRoles().length > 0 && this.getToken().length > 0;
//    }
  
  
// }

import { Injectable } from '@angular/core';



@Injectable({
 providedIn: 'root'
})
export class UserAuthService {



 constructor() { }



 public setRoles(roles:[]){
 localStorage.setItem("roles", JSON.stringify(roles));
 }



public getRoles(): any[] {
 const roles = localStorage.getItem("roles");
return roles ? JSON.parse(roles) : [];
 }
 public setToken(jwtToken:string){
 localStorage.setItem("jwtToken", jwtToken);
 }



 public getToken(): string {
const token = localStorage.getItem("jwtToken");
 return token ? token : "";
 }



 public clear(){
 localStorage.clear();
 }
 public isLoggedIn(){
return this.getRoles() && this.getToken();
 }



}


