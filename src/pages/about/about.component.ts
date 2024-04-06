import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HedderComponent } from '../../component/hedder/hedder.component';
import { Banner2Component } from '../../component/banner2/banner2.component';
import { AboutcpComponent } from '../../component/aboutcp/aboutcp.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { NccheadComponent } from '../../component/ncchead/ncchead.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterModule,HedderComponent,Banner2Component,AboutcpComponent,NccheadComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
