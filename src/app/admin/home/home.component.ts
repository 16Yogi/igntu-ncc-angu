import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Banner2Component } from '../../admin/banner2/banner2.component';
import { BannerComponent } from '../../admin/banner/banner.component';
import { HedderComponent } from '../../admin/hedder/hedder.component';
import { NewsComponent } from '../news/news.component';
import { AboutcpComponent } from '../aboutcp/aboutcp.component';
import { AimComponent } from '../aim/aim.component';
import { EventComponent } from '../event/event.component';
import { ThoughtsComponent } from '../thoughts/thoughts.component';
import { NccheadComponent } from '../ncchead/ncchead.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HedderComponent,BannerComponent,NewsComponent,AboutcpComponent,AimComponent,NccheadComponent,ThoughtsComponent,EventComponent,ContactComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
}
