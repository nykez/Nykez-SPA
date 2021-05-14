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

  workshopsAddon: any = [
    { 
      name: "zz [SL] Anti Adware", description: "This addon blocks some of the adware that is affecting gmod. (the zz are intentional)", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1881093005", image: "https://steamuserimages-a.akamaihd.net/ugc/1020570173242084166/1DBAB4002227E6522FB884341E023ECDFDAC06A9/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
      name: "StarWars: MTT Drivable", description: "Drivable lua-base vehicle from the movies Star Wars", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1926964189", image: "https://steamuserimages-a.akamaihd.net/ugc/773986697470074149/04FB5571EFDD45F3524A852901258A0446A13721/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    }
  ];

  constructor(private apiConnector: ApiGmsConnectorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadAddons();
    console.log(this.workshopsAddon);
  }

  loadMe() {
    this.apiConnector.getMe().subscribe( (res: GmodstoreUser) => {
      this.user = res;
    }, error => {
      console.log(error);
      alert("unable to load gmodstore addons");
    });
  }

  loadAddons() {
    this.apiConnector.getMyAddons().subscribe( (res: GmodstoreUserAddon[]) => {
      this.addons = res;
      console.log(this.addons);
    }, error => {
      console.log(error);
      alert("unable to load gmodstore addons");
    })
  }

}
