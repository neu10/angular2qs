import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'home',
    styleUrls: [ 'home.scss'],
    templateUrl: 'home.pug',
})
export class HomeComponent  {
    name = 'home';
  private contacted;

    constructor(public fb: FormBuilder){

    }
  contactus(contactForm){
      this.contacted = true;
     alert('Thank you for contacting ');
  }
}
