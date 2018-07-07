import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers', // You should call in html: <app-servers> </app-servers>
  // selector: '[app-servers]', You should call in html: <div app-servers>
  // selector: '.app-servers', You should call in html: <div class="app-servers">
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
