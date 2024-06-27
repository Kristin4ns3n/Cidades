import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cidade, CidadeService } from '../services/cidade.service';
import { Estado, EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-cidade-detail',
  templateUrl: './cidade-detail.page.html',
  styleUrls: ['./cidade-detail.page.scss'],
})
  
export class CidadeDetailPage implements OnInit {
  cidade: Cidade;
  estados: Estado[] = [];

  constructor(
    private route: ActivatedRoute,
    private cidadeService: CidadeService,
    private estadoService: EstadoService
  ) { }

  ngOnInit() {
    this.estados = this.estadoService.getAll();
    const id = this.route.snapshot.paramMap.get('id');
    this.cidade = this.cidadeService.get(id);
  }

  save() {
    if (this.cidade.id) {
      this.cidadeService.update(this.cidade.id, this.cidade);
    } else {
      this.cidadeService.add(this.cidade);
    }
  }

}
