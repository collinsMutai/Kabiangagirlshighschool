import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^(\+254)?[0-9]{9}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.initMap();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  initMap(): void {
    const map = L.map('map', {
      center: [0.1045, 35.3538],
      zoom: 13,
    });

    const openStreetMap = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    const esriSatellite = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          '&copy; <a href="https://www.esri.com/en-us/arcgis/about-arcgis">Esri</a>',
      }
    );

    const cartoDBDarkMatter = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
      }
    );

    const stamenToner = L.tileLayer(
      'https://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="http://stamen.com">Stamen Design</a>',
      }
    );

    const stamenTerrain = L.tileLayer(
      'https://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
      {
        attribution: '&copy; <a href="http://stamen.com">Stamen Design</a>',
      }
    );

    openStreetMap.addTo(map);

    const fontAwesomeIcon = L.divIcon({
      className: 'fa-marker',
      html: '<i class="fas fa-map-marker-alt" style="font-size: 30px; color: red;"></i>',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    L.marker([0.1045, 35.3538], { icon: fontAwesomeIcon })
      .addTo(map)
      .bindPopup('Kabianga, Kericho County')
      .openPopup();

    L.control
      .layers(
        {
          OpenStreetMap: openStreetMap,
          'Satellite View': esriSatellite,
          'CartoDB Dark Matter': cartoDBDarkMatter,
          'Stamen Toner': stamenToner,
          'Stamen Terrain': stamenTerrain,
        },
        {},
        { collapsed: false }
      )
      .addTo(map);
  }
}
