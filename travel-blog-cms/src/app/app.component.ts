import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SideNavService } from './service/side-nav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav | null = null;
  title = 'travel-blog-cms';

  constructor(private sideNavService: SideNavService){
    
  }

  ngAfterViewInit(): void {
    if(this.sidenav){
      this.sideNavService.setSidenav(this.sidenav);
    }
  }
}
