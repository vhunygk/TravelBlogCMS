import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  private sidenav: MatSidenav | null = null;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public toggle(): void {
    console.log("In serive", this.sidenav);   
    if (this.sidenav){
      this.sidenav.toggle();
    }
  }
}