import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPannelEventComponent } from './admin-pannel-event/admin-pannel-event.component';
import { AssociationComponent } from './association/association.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DonationComponent } from './donation/donation.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { SliderComponent } from './slider/slider.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'login', component: LoginComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'donation', component: DonationComponent},
  { path: 'event', component: EventComponent},
  { path: 'association', component: AssociationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'carousel', component: CarouselComponent},
  { path: 'admin', component: AdminPannelEventComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
