import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private rawter: Router, private awtenticate:AuthenticationService) {}


  goByEvent(){
    this.rawter.navigate(["another"]);
    if(this.awtenticate.authenticate  == true)
    alert("You will now proceed to next page.")
  }

  goWithAuthorization(){
    this.awtenticate.authenticate = true;
  }
}
