import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed = true;

  private urlToOpen: string = "https://github.com/nykez/";

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  onNavigate(){
    let url: string = '';
    if (!/^http[s]?:\/\//.test(this.urlToOpen)) {
        url += 'http://';
    }

    url += this.urlToOpen;
    window.open(url, '_blank');
  }
}
