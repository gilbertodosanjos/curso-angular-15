import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit{

  //EventEmitter() indica que está enviando algum valor
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string,idade: number}> = [
    {nome: "Gilberto",idade: 50},
    {nome: "Gysele",idade: 40},
    {nome: "Minervina",idade: 73},
    {nome: "Helena",idade: 72},
    {nome: "Pedro",idade: 84}

  
  ]

  constructor(){}

  ngOnInit(): void {
    
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
    //console.log(this.list[event]);
  }
}
