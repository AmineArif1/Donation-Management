import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DonationComponent } from './donation/donation.component';
import { ServicesComponent } from './services/services.component';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { animate } from '@angular/animations';
import { SliderComponent } from './slider/slider.component';
import { AssociationComponent } from './association/association.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DonationComponent,
    ServicesComponent,
    EventComponent,
    FooterComponent,
    ProfileComponent,
    LoginComponent,
    SliderComponent,
    AssociationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
