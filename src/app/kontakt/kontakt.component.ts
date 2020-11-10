import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  isShown: boolean = false;
  toggleShow() {
    this.isShown = ! this.isShown;
  }
  constructor() {
   }

  ngOnInit(): void {
  }

}
