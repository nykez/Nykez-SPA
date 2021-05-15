import { Component, OnInit } from '@angular/core';

import projects from '../../_configProjects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any = projects.projects;

  constructor() { }

  ngOnInit() {
  }

}
