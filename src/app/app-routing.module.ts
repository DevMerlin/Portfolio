import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { StartupComponent } from './pages/startup/startup.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PiktogramicComponent } from './projects/piktogramic/piktogramic.component';
import { FuseengineComponent } from './projects/fuseengine/fuseengine.component';
import { PacketpopComponent } from './projects/packetpop/packetpop.component';

const routes: Routes = [
  { path: '',
    component: StartupComponent,
    data: { animation: 'LandingPage' }
   },
  { path: 'about',
    component: MainComponent,
    data: { animation: 'MainPage' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'Projects' }
  },
  {
    path: 'skills',
    component: AboutComponent,
    data: { animation: 'skills' }
  },
  {
    path: 'viewer/piktogramic',
    component: PiktogramicComponent,
    data: { animation: 'viewer' }

  },
  {
    path: 'viewer/fuseengine',
    component: FuseengineComponent,
    data: { animation: 'viewer' }

  },
  {
    path: 'viewer/packetpop',
    component: PacketpopComponent,
    data: { animation: 'viewer' }

  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
