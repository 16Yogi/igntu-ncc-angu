import { Component } from '@angular/core';
import { HedderComponent } from '../../component/hedder/hedder.component';
import { BannerComponent } from '../../component/banner/banner.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HedderComponent,BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
}
