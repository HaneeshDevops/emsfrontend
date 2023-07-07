import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AdminComponent } from './Components/admin/admin.component';
import { BookingListComponent } from './Components/booking-list/booking-list.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CreateBookingComponent } from './Components/create-booking/create-booking.component';
import { CreateEventComponent } from './Components/create-event/create-event.component';
import { CreateFooditemsComponent } from './Components/create-fooditems/create-fooditems.component';
import { CreateVenueComponent } from './Components/create-venue/create-venue.component';

import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

import { SignupComponent } from './Components/signup/signup.component';
import { UpdateBookingComponent } from './Components/update-booking/update-booking.component';
import { UserComponent } from './Components/user/user.component';



const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'user',component:UserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'login',component:LoginComponent},
  
  {path: 'forbidden',component:ForbiddenComponent},
  {path:'signup',component:SignupComponent},
  {path:'booking',component:BookingListComponent},
 {path:'create-booking',component:CreateBookingComponent},
 {path:'create-event',component:CreateEventComponent},
 {path:'create-venue',component:CreateVenueComponent},
 {path:'create-fooditems',component:CreateFooditemsComponent},
{path:'update-booking/:bookingId',component:UpdateBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
