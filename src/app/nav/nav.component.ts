import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  openNav(){
     document.getElementById("mySidenav").style.width = "100%";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

  constructor() { }


  ngOnInit() {
  }

}
