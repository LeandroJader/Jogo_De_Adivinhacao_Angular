import { Component, OnInit,} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App implements OnInit {

 public numeroSecreto : number = 0;
 public numeroDigitado : number = 1;

public jogoEstaFinalizado :boolean = false;

 public DicaNumeroMaiorQue:number = 1;
 public DicaNumeromenorQue:number = 100;

  ngOnInit(): void {
     this.numeroSecreto = this.obterNumeroSecreto()
  }

private obterNumeroSecreto() {

  const numeroAleatorio : number = Math.random() * 100;

   const numeroSecreto = Math.floor(numeroAleatorio)

   console.log(numeroSecreto)
    
  return Math.floor(numeroAleatorio);
}

 public adivinhar (){
if(this.numeroDigitado < this.numeroSecreto)
this.DicaNumeroMaiorQue = this.numeroDigitado

else if (this.numeroDigitado > this.numeroSecreto)
  this.DicaNumeromenorQue = this.numeroDigitado

else{
  this.jogoEstaFinalizado = true;
}
 }
 public reiniciar(){
  this.numeroDigitado = 1;
  this.DicaNumeroMaiorQue =1;
  this.DicaNumeromenorQue = 100;
  this.jogoEstaFinalizado = false;
  
  this.numeroSecreto = this.obterNumeroSecreto()
 }
}
