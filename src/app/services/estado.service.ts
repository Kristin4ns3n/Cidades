import { Injectable } from '@angular/core';

export interface Estado {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})

export class EstadoService {
  private estados: Estado[] = [];

  //Create -- Cria um vetor com os meus dados 
  //Como se fosse o CREATE do SQL
  constructor() { 
    //Inicializar com alguns dados
    this.estados = [
      { id: 1, nome: 'Acre' },
      { id: 2, nome: 'Alagoas' },
      { id: 3, nome: 'Amapá' },
      { id: 4, nome: 'Amazonas' },
      { id: 5, nome: 'Bahia' },
    ];
  }

  //Read 
  getAll() {
    return this.estados;
  }

  get(id: number) {
    return this.estados.find(estado => estado.id === id)
  }

  //Adiciona os meus Estados 
  add(estado: Estado) {
    this.estados.push(estado);
  }

  //Update
  update(id: number, updatedEstado: Estado) {
    const index = this.estados.findIndex(estado => estado.id === id);
    if (index !== -1) {
      this.estados[index] = updatedEstado;
    }
  }

  //Delete
  delete(id: number) {
    this.estados = this.estados.filter(estado => estado.id !== id);
  }
}
