import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ingrediente {
  id?: number;
  nome: string;
  receita: {
    id: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  private http = inject(HttpClient);
  private api = 'http://localhost:8080/api/ingrediente';

  salvar(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.post<Ingrediente>(this.api, ingrediente);
  }

 buscarPorId(id: number): Observable<Ingrediente> {
    return this.http.get<Ingrediente>(`${this.api}/${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}