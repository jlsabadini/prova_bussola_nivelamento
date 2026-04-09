import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Receita {
  id?: number;
  nome: string;
  tempoPreparo: number;
  custoAproximado: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private http = inject(HttpClient);
  private api = 'http://localhost:8080/api/receita';

  salvar(receita: Receita): Observable<Receita> {
    return this.http.post<Receita>(this.api, receita);
  }

  buscarPorId(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.api}/${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}