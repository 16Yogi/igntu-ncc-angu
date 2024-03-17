import { Component } from '@angular/core';
import { HedderComponent } from '../../component/hedder/hedder.component';
import { BannerComponent } from '../../component/banner/banner.component';
import { AboutcpComponent } from '../../component/aboutcp/aboutcp.component';
import { NewsComponent } from '../../component/news/news.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { AimComponent } from '../../component/aim/aim.component';
import { ContactComponent } from '../../component/contact/contact.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HedderComponent,BannerComponent,AboutcpComponent,NewsComponent,AimComponent,ContactComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
}
