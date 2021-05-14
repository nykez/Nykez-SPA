import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { AboutMeHeroComponent } from './about-me/about-me-hero/about-me-hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddonsListComponent } from './addons/addons-list/addons-list.component';

const routes: Routes = [
  { path: '', component: AboutMeHeroComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'stats', component: BlogHomeComponent },
  { path: 'addons', component: AddonsListComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
