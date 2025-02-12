import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { AdministrationPageComponent } from './components/administration-page/administration-page.component';
import { VisionMissionPageComponent } from './components/vision-mission-page/vision-mission-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'history', component: AboutPageComponent },
  { path: 'vision-mission', component: VisionMissionPageComponent },
  { path: 'administration', component: AdministrationPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'contact', component: ContactPageComponent },
];
