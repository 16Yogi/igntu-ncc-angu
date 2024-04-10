import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HedderComponent } from '../../admin/hedder/hedder.component';
import { Banner2Component } from '../banner2/banner2.component';
import { BannerComponent } from '../banner/banner.component';
import { AboutcpComponent } from '../aboutcp/aboutcp.component';
import { AimComponent } from '../aim/aim.component';
import { NccheadComponent } from '../ncchead/ncchead.component';
import { ThoughtsComponent } from '../thoughts/thoughts.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterModule,HedderComponent,Banner2Component,BannerComponent,AboutcpComponent,ThoughtsComponent,NccheadComponent,AimComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
