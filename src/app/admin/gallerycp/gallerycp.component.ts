import { Component } from '@angular/core';

import { HedderComponent } from '../hedder/hedder.component';
import { BannerComponent } from '../banner/banner.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { FooterComponent } from '../footer/footer.component';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-gallerycp',
  standalone: true,
  imports: [NewsComponent,HedderComponent,BannerComponent,GalleryComponent,FooterComponent],
  templateUrl: './gallerycp.component.html',
  styleUrl: './gallerycp.component.css'
})
export class GallerycpComponent {

}
