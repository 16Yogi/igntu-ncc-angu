import { Component } from '@angular/core';
import { CadetComponent } from '../cadet/cadet.component';
import { HedderComponent } from '../hedder/hedder.component';
import { BannerComponent } from '../banner/banner.component';
import { NewsComponent } from '../news/news.component';
import { NccheadComponent } from '../ncchead/ncchead.component';
import { EventComponent } from '../event/event.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-cadetpage',
  standalone: true,
  imports: [CadetComponent,HedderComponent,NccheadComponent,EventComponent,BannerComponent, NewsComponent,FooterComponent],
  templateUrl: './cadetpage.component.html',
  styleUrl: './cadetpage.component.css'
})
export class CadetpageComponent {

}
