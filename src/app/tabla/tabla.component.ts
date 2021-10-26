import { Component, OnInit } from '@angular/core';
import { TablaService } from '../services/tabla.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  nombres: string[] = [];

  constructor(private tablaServices: TablaService) { }

  ngOnInit(): void {
    this.cargarNombres();
  }

  cargarNombres(){
    this.tablaServices.getAllNombre().subscribe(resp =>{
      this.nombres = resp;
    }),
    error =>{console.error(error)}
  }

}
