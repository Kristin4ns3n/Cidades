import { Injectable } from '@angular/core';

export interface Cidade {
  id: number;
  nome: string;
  estadoId: number;
}

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
  
export class CidadeService {
  //Array de Cidades 
  private cidades: Cidade[] = [
      { id: 1, nome: 'Rio Branco', estadoId: 1 },
      { id: 2, nome: 'Maceió', estadoId: 2 },
      { id: 3, nome: 'Macapá', estadoId: 3 },
      { id: 4, nome: 'Manaus', estadoId: 4 },
      { id: 5, nome: 'Salvador', estadoId: 5 },
    ];

  constructor() {}

  getAll() {
    return this.cidades;    //cidades == vetor com o nome das cidades 
  }

  get(id: number) {
    return this.cidades.find(cidade => cidade.id === id);
  }

  getByEstado(estadoId: number) {
    return this.cidades.filter(cidade => cidade.estadoId === estadoId);
  }

  add(cidade: Cidade) {
    this.cidades.push(cidade);
  }

  update(id: number, updatedCidade: Cidade) {
    const index = this.cidades.findIndex(cidade => cidade.id === id);
    if (index !== -1) {
      this.cidades[index] = updatedCidade;
    }
  }

  delete(id: number) {
    this.cidades = this.cidades.filter(cidade => cidade.id !== id);
  }

}
