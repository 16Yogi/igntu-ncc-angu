import { Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AboutComponent } from './admin/about/about.component';
import { GallerycpComponent } from './admin/gallerycp/gallerycp.component';
import { MainContactComponent } from './admin/main-contact/main-contact.component';
import { ApplicationFormComponent } from './admin/application-form/application-form.component';
import { CadetpageComponent } from './admin/cadetpage/cadetpage.component';
import { AnoMainComponent } from './admin/ano-main/ano-main.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
export const routes: Routes = [
    {path:'', redirectTo:"home", pathMatch:"full"},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'gallery',component:GallerycpComponent},
    {path:'contact',component:MainContactComponent},
    {path:'application', component:ApplicationFormComponent},
    {path:'cadet', component:CadetpageComponent},
    {path:'ano',component:AnoMainComponent},
    {path:'adminpanel',component:AdminPanelComponent}
];
