import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit {
  @Input() naziv = '';
  @Input() slika = '';
  @Input() opis = '';
  @Input() cijena = '';
  @Input() vrsta = '';

  constructor() { }

  ngOnInit(): void {
  }

}
