import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
import { StartupComponent } from './pages/startup/startup.component';
import { HeaderComponent } from './elements/header/header.component'; 
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ViewerComponent } from './pages/viewer/viewer.component';
import { ProjectComponent } from './elements/project/project.component';
import { PiktogramicComponent } from './projects/piktogramic/piktogramic.component';
import { PacketpopComponent } from './projects/packetpop/packetpop.component';
import { FuseengineComponent } from './projects/fuseengine/fuseengine.component';

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    HeaderComponent,
    MainComponent,
    ProjectsComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    ViewerComponent,
    ProjectComponent,
    PiktogramicComponent,
    PacketpopComponent,
    FuseengineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
