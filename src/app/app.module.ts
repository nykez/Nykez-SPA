import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { AboutMeHeroComponent } from './about-me/about-me-hero/about-me-hero.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    AboutMeHeroComponent,
    ProjectsComponent,
    BlogHomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
