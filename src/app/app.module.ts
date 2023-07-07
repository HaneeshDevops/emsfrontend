import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
// import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './Services/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SignupComponent } from './Components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookingListComponent } from './Components/booking-list/booking-list.component';
import { CreateBookingComponent } from './Components/create-booking/create-booking.component';
import { UpdateBookingComponent } from './Components/update-booking/update-booking.component';
import { CreateEventComponent } from './Components/create-event/create-event.component';
import { CreateVenueComponent } from './Components/create-venue/create-venue.component';
import { CreateFooditemsComponent } from './Components/create-fooditems/create-fooditems.component';








 
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    LoginComponent,
    ForbiddenComponent,
    SignupComponent,
    AboutUsComponent,
    ContactUsComponent,
    BookingListComponent,
    CreateBookingComponent,
    UpdateBookingComponent,
    CreateEventComponent,
    CreateVenueComponent,
    CreateFooditemsComponent,
  
    

   

    

   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    FlexLayoutModule
    
    
  ],
  providers: [
  
    AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
