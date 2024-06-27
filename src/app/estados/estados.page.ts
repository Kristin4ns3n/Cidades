import { Component, OnInit } from '@angular/core';
import { Estado, EstadoService } from '../services/estado.service';


@Component({
  selector: 'app-estados',
  templateUrl: './estados.page.html',
  styleUrls: ['./estados.page.scss'],
})
export class EstadosPage implements OnInit {
  estados: Estado[] = [];

  constructor(private estadoService: EstadoService) { }

  ngOnInit() {
    this.estados = this.estadoService.getAll();
  }

  deleteEstado(id: number) {
    this.estadoService.delete(id);
    this.estados = this.estadoService.getAll();
  }
}