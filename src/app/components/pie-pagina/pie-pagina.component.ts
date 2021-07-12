import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {
  anio: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.anio = new Date().getFullYear();//Obtiene año actual
  }

}
