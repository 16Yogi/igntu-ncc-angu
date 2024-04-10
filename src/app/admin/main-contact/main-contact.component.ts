import { Component } from '@angular/core';
import { HedderComponent } from '../hedder/hedder.component';
import { BannerComponent } from '../banner/banner.component';
import { NewsComponent } from '../news/news.component';
import { ContactComponent } from '../contact/contact.component';
import { NccheadComponent } from '../ncchead/ncchead.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-main-contact',
  standalone: true,
  imports: [HedderComponent,BannerComponent,NewsComponent,ContactComponent,NccheadComponent,FooterComponent],
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.css'
})
export class MainContactComponent {

}
