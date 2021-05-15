import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { AboutMeHeroComponent } from './about-me/about-me-hero/about-me-hero.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiGmsConnectorService } from './_services/apiGmsConnector.service';
import { AddonsListComponent } from './addons/addons-list/addons-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [		
    AppComponent,
    NavbarComponent,
    AboutMeHeroComponent,
    ProjectsComponent,
    BlogHomeComponent,
    AddonsListComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TimeagoModule.forRoot()
  ],
  providers: [
    ApiGmsConnectorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
