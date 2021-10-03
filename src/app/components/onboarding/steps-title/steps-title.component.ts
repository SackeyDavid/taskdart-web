import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-title',
  templateUrl: './steps-title.component.html',
  styleUrls: ['./steps-title.component.css']
})
export class StepsTitleComponent implements OnInit {

  @Input() stepTitle?: String;

  constructor() { }

  ngOnInit(): void {
  }

}
