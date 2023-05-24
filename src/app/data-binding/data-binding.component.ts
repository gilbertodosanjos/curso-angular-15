import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit{
  
  public nome: string  = "Gilberto";
  public idade: number = 50;
  public metododesabilitaBotao: boolean = true;

  public position: {x:number,y:number}={x:0,y:0}

  constructor() {}

  ngOnInit(): void {
    
  }

  public alertaInfo1(valor:string){

    alert(valor);

  }

  public alertaInfo2(valor: MouseEvent){

    console.log(valor);

  }
 
  public mousemoveTeste(valor: MouseEvent){

    //console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y =  valor.offsetY;


  }
}
