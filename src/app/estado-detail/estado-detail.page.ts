import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estado, EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-estado-detail',
  templateUrl: './estado-detail.page.html',
  styleUrls: ['./estado-detail.page.scss'],
})
  
export class EstadoDetailPage implements OnInit {
  estado: Estado;

  constructor(
    private route: ActivatedRoute,
    private estadoService: EstadoService
    
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.estado = this.estadoService.get(id);
  }

  save() {
    if (this.estado.id) {
      this.estadoService.update(this.estado.id, this.estado);
    } else {
      this.estadoService.add(this.estado);
    }
  } 

}
