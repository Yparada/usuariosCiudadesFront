import { Component, OnInit } from '@angular/core';
import { DatoService } from '../services/dato.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  ciudades: number = 0;

  constructor(private datoService: DatoService) { }

  ngOnInit(): void {
    this.ciudadesActuales();
    
  }

  ciudadesActuales(){
    this.datoService.getDato().subscribe(resp =>{
      this.ciudades=resp;
    }),
    error => {console.error(error)}
  }

}
