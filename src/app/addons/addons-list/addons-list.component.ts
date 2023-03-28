import { workshopAddons } from './../../_configWorkshopAddons';
import { Component, OnInit } from '@angular/core';
import { GmodstoreUser } from '../../_models/GmodstoreUser';
import { GmodstoreUserAddon } from '../../_models/GmodstoreUserAddon';
import { ApiGmsConnectorService } from '../../_services/apiGmsConnector.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addons-list',
  templateUrl: './addons-list.component.html',
  styleUrls: ['./addons-list.component.css']
})
export class AddonsListComponent implements OnInit {

  addons: GmodstoreUserAddon[];
  user: GmodstoreUser;

  workshopsAddon: any = workshopAddons;

  constructor(private apiConnector: ApiGmsConnectorService, private route: ActivatedRoute) { }

  isLoading = false;
  ngOnInit() {
    this.isLoading = true;
    this.loadAddons();
  }

  loadAddons() {
    this.apiConnector.getMyAddons().subscribe( (res: GmodstoreUserAddon[]) => {
        this.isLoading = false;
      this.addons = res.filter(function(addon) {
        return addon.active;
      });
    }, error => {
    this.isLoading = false;
      console.log(error);
      alert("unable to load gmodstore addons");
    })
  }

}
