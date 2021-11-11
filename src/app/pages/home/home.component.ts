import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPlayStore() {
    window.open('https://play.google.com/store/apps/details?id=com.daskdart.android', '_blank');
  }
}
