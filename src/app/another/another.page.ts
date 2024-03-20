import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.page.html'
})
export class AnotherPage implements OnInit {

  constructor(private router: Router, private authenticate:AuthenticationService) { }

  ngOnInit() {
    this.authenticate.authenticate = false; // allows to reset boolean state, which allows authenticate buttons to access third page
  }
  goByEvent(){
    this.router.navigate(["third-page"]); // third-page = file name: navigates to third-page
    // method to navigate thirdPage.ts
    if(this.authenticate.authenticate == true){
      alert("You will proceed to last page!"); // alerts if authenticate button is clicked, and goByEvent button if it is clicked
    }
  
  }
  goWithAuthorization(){
    // authenticate method

    this.authenticate.authenticate = true; 

    /** 
     * this.[AuthenticationService name on constructor()].[authenticate boolean name on authentication service]]
     * see line 11 constructor();
     */
    
    // authenticate boolean can be find on authentication.service.ts
    // this.router.navigate(["another"]);
  }
  
}