import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-administration-page',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './administration-page.component.html',
  styleUrl: './administration-page.component.css'
})
export class AdministrationPageComponent {

}
