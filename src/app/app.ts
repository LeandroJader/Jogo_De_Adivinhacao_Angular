import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App implements OnInit {
  public numeroSecreto: number = 0;
  public numeroDigitado: number = 1;

  public jogoEstaFinalizado: boolean = false;

  public DicaNumeroMaiorQue: number = 1;
  public DicaNumeromenorQue: number = 100;

  public DificuldadeSelecionada?: string;

  public tentativasRestantes: number = 0;

  public pontuacao: number = 100;

  public rodadasAnteriores: number[] = [];

  ngOnInit(): void {}

  public selecionarDificuldade(dificuldade: string): void {
    switch (dificuldade) {
      case 'facil':
        this.numeroSecreto = this.obterNumeroSecreto(10);
        this.DicaNumeromenorQue = 10;
        this.tentativasRestantes = 3;
        break;

      case 'medio':
        this.numeroSecreto = this.obterNumeroSecreto(50);
        this.DicaNumeromenorQue = 50;
        this.tentativasRestantes = 6;
        break;

      case 'dificil':
        this.numeroSecreto = this.obterNumeroSecreto(100);
        this.DicaNumeromenorQue = 100;
        this.tentativasRestantes = 7;
        break;
    }

    this.DificuldadeSelecionada = dificuldade;

    console.log(this.DificuldadeSelecionada);
  }

  private obterNumeroSecreto(max: number) {
    const numeroAleatorio: number = Math.random() * (max - 1) + 1;

    const numeroSecreto = Math.floor(numeroAleatorio);

    console.log(numeroSecreto);

    return Math.floor(numeroAleatorio);
  }

  public adivinhar() {
    this.tentativasRestantes--;

    if (this.tentativasRestantes <= 0) {
      this.jogoEstaFinalizado = true;
      return;
    }

    if (this.numeroDigitado < this.numeroSecreto) this.DicaNumeroMaiorQue = this.numeroDigitado;
    else if (this.numeroDigitado > this.numeroSecreto)
      this.DicaNumeromenorQue = this.numeroDigitado;
    else {
      this.jogoEstaFinalizado = true;
      this.RegistrarPontuacao();
    }

    const diferencaNumerica: number = Math.abs(this.numeroSecreto - this.numeroDigitado);

    if (diferencaNumerica >= 10) this.pontuacao -= 10;
    else if (diferencaNumerica >= 5) this.pontuacao -= 5;
    else this.pontuacao -= 2;
  }

  public reiniciar() {
    this.numeroDigitado = 1;
    this.DicaNumeroMaiorQue = 1;
    this.DicaNumeromenorQue = 100;
    this.jogoEstaFinalizado = false;

    this.DificuldadeSelecionada = undefined;
    this.pontuacao = 100;
  }
  public RegistrarPontuacao() {
    this.rodadasAnteriores.push(this.pontuacao);

    if (this.rodadasAnteriores.length > 3) this.rodadasAnteriores.shift();
    console.log(this.pontuacao);
  }
}
