import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-inmueble',
  templateUrl: './card-inmueble.component.html',
  styleUrls: ['./card-inmueble.component.css']
})
export class CardInmuebleComponent implements OnInit {

  @Input()inmueble: any;
  constructor() { }

  ngOnInit(): void {
  }

}
