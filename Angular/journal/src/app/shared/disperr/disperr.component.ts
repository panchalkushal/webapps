import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'disperr',
  templateUrl: './disperr.component.html',
  styleUrls: ['./disperr.component.css']
})
export class DisperrComponent implements OnInit {
  @Input()
  fc?: any;
  @Input()
  lbl: string = '';

  constructor() { }
  ngOnInit(): void {
  }
}
