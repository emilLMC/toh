import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akku',
  templateUrl: './akku.component.html',
  styleUrls: ['./akku.component.css']
})
export class AkkuComponent implements OnInit {

  constructor() { }
  hero = 'Akku Heroo you are :) ';
  ngOnInit(): void {
  }

}
