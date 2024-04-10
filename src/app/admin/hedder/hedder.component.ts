import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hedder',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hedder.component.html',
  styleUrl: './hedder.component.css'
})
export class HedderComponent {
  constructor(
    private router: Router,
  ){
    
  }
}
