import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgImageSliderModule } from 'ng-image-slider';
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
import { SliderComponent } from './slider/slider.component';
import { AssociationComponent } from './association/association.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/services/AuthService';

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
    AssociationComponent,
    CarouselComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgImageSliderModule,
    NgbModule,
    HttpClientModule,
    
    

    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
