import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { HomeComponent } from './component/home/home.component';
import { HomeComponent } from './admin/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HomeComponent,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'igntu_ncc-ang';
}
