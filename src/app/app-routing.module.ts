import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { StartupComponent } from './pages/startup/startup.component';
import { PiktogramicComponent } from './projects/piktogramic/piktogramic.component';
import { FuseengineComponent } from './projects/fuseengine/fuseengine.component';
import { PacketpopComponent } from './projects/packetpop/packetpop.component';

const routes: Routes = [
  { path: '',
    component: StartupComponent,
    data: { animation: 'LandingPage' }
   },
  { path: 'main',
    component: MainComponent,
    data: { animation: 'MainPage' }
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
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
