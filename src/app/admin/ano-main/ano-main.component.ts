import { Component } from '@angular/core';
import { HedderComponent } from '../hedder/hedder.component';
import { BannerComponent } from '../banner/banner.component';
import { NewsComponent } from '../news/news.component';
import { AnoComponent } from '../ano/ano.component';
import { NccheadComponent } from '../ncchead/ncchead.component';
import { EventComponent } from '../event/event.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ano-main',
  standalone: true,
  imports: [HedderComponent,BannerComponent,NewsComponent,AnoComponent,NccheadComponent,EventComponent,FooterComponent],
  templateUrl: './ano-main.component.html',
  styleUrl: './ano-main.component.css'
})
export class AnoMainComponent {

}
