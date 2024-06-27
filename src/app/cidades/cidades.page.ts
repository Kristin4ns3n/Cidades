import { Component, OnInit } from '@angular/core';
import { Cidade, CidadeService } from '../services/cidade.service';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
})
export class CidadesPage implements OnInit {
  cidades: Cidade[] = [];

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService
  ) { }

  ngOnInit() {
    this.cidades = this.cidadeService.getAll();
  }
  
  deleteCidade(id: number) {
    this.cidadeService.delete(id);
    this.cidades = this.cidadeService.getAll();
  }
}
