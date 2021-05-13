import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { AboutMeHeroComponent } from './about-me/about-me-hero/about-me-hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutMeHeroComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'blogs', component: BlogHomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
