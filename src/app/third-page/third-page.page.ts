import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.page.html'
})
export class ThirdPage {
  constructor(private route:Router, private authenticate:AuthenticationService) {}
  goByEvent(){
    this.route.navigate(["third-page"]);
    // Incomplete
  }
  goWithAuthorization(){
    // for authorization
    this.authenticate.authenticate = true;
    // this.router.navigate(["another"]);
    // Incomplete
  }

  /**
   * constructor and methods() = incomplete
   */
}

