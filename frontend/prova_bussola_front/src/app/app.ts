import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Receita, ReceitaService } from './services/receita';
import { IngredienteService } from './services/ingrediente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './app.html'
})
export class App {
  private receitaService = inject(ReceitaService);
  private ingredienteService = inject(IngredienteService);

  nomeReceita = '';
  tempoPreparo: number | null = null;
  custoAproximado: number | null = null;

  idBuscaIngrediente: number | null = null;
  receitaEncontrada: Receita | null = null;

  idExcluirReceita: number | null = null;

  nomeIngrediente = '';
  idReceitaIngrediente: number | null = null;

  idExcluirIngrediente: number | null = null;

  mensagem = '';
  ingredienteEncontrado: import("./services/ingrediente").Ingrediente | null = null;

  cadastrarReceita() {
    if (
      this.nomeReceita.trim() === '' ||
      this.tempoPreparo === null ||
      this.custoAproximado === null
    ) {
      this.mensagem = 'Preencha todos os campos da receita.';
      return;
    }

    const receita: Receita = {
      nome: this.nomeReceita,
      tempoPreparo: this.tempoPreparo,
      custoAproximado: this.custoAproximado
    };

    this.receitaService.salvar(receita).subscribe({
      next: (res) => {
        this.mensagem = 'Receita cadastrada com sucesso. ID: ' + res.id;
        this.nomeReceita = '';
        this.tempoPreparo = null;
        this.custoAproximado = null;
      },
      error: (erro) => {
        console.log('Erro ao cadastrar receita:', erro);
        this.mensagem = 'Erro ao cadastrar receita.';
      }
    });
  }

  buscarReceita() {
    if (this.idBuscaIngrediente === null) {
      this.mensagem = 'Digite o ID da receita.';
      return;
    }

    this.receitaService.buscarPorId(this.idBuscaIngrediente).subscribe({
      next: (res) => {
        this.receitaEncontrada = res;
        this.mensagem = 'Receita encontrada com sucesso.';
      },
      error: (erro) => {
        console.log('Erro ao buscar receita:', erro);
        this.receitaEncontrada = null;
        this.mensagem = 'Receita não encontrada.';
      }
    });
  }

  excluirReceita() {
    if (this.idExcluirReceita === null) {
      this.mensagem = 'Digite o ID da receita para excluir.';
      return;
    }

    this.receitaService.excluir(this.idExcluirReceita).subscribe({
      next: () => {
        this.mensagem = 'Receita excluída com sucesso.';
        this.idExcluirReceita = null;
        this.receitaEncontrada = null;
      },
      error: (erro) => {
        console.log('Erro ao excluir receita:', erro);
        this.mensagem = 'Erro ao excluir receita.';
      }
    });
  }

  cadastrarIngrediente() {
    if (
      this.nomeIngrediente.trim() === '' ||
      this.idReceitaIngrediente === null
    ) {
      this.mensagem = 'Preencha o nome do ingrediente e o ID da receita.';
      return;
    }

    const ingrediente = {
      nome: this.nomeIngrediente,
      receita: {
        id: this.idReceitaIngrediente
      }
    };

    console.log('Ingrediente enviado:', ingrediente);

    this.ingredienteService.salvar(ingrediente).subscribe({
      next: (res) => {
        this.mensagem = 'Ingrediente cadastrado com sucesso. ID: ' + res.id;
        this.nomeIngrediente = '';
        this.idReceitaIngrediente = null;
      },
      error: (erro) => {
        console.log('Erro ao cadastrar ingrediente:', erro);
        console.log('Resposta do backend:', erro.error);
        this.mensagem = 'Erro ao cadastrar ingrediente.';
      }
    });
  }

buscarIngrediente() {
    if (this.idBuscaIngrediente === null) {
      this.mensagem = 'Digite o ID do ingrediente.';
      return;
    }

    this.ingredienteService.buscarPorId(this.idBuscaIngrediente).subscribe({
      next: (res) => {
        this.ingredienteEncontrado = res;
        this.mensagem = 'Ingrediente encontrado com sucesso.';
      },
      error: (erro) => {
        console.log('Erro ao buscar ingrediente:', erro);
        this.ingredienteEncontrado = null;
        this.mensagem = 'Ingrediente não encontrado.';
      }
    });
  }

  excluirIngrediente() {
    if (this.idExcluirIngrediente === null) {
      this.mensagem = 'Digite o ID do ingrediente para excluir.';
      return;
    }

    this.ingredienteService.excluir(this.idExcluirIngrediente).subscribe({
      next: () => {
        this.mensagem = 'Ingrediente excluído com sucesso.';
        this.idExcluirIngrediente = null;
      },
      error: (erro) => {
        console.log('Erro ao excluir ingrediente:', erro);
        this.mensagem = 'Erro ao excluir ingrediente.';
      }
    });
  }
}