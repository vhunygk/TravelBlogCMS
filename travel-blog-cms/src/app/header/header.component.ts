import { Component } from '@angular/core';
import { SideNavService } from '../service/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sideNavService: SideNavService){

  }


  toggle() {
    console.log("In toggle")
    this.sideNavService.toggle();
  }
}
