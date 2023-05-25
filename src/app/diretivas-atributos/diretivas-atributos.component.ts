import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
[x: string]: any;
  
  public valor:boolean = false;
  public heigthPX:string = "20px";
  public backgroundColor:string = "red";
  public nome:string = "";
  public list:Array<{nome:string}>=[];
  public date:Date = new Date();


  constructor(){}

  ngOnInit(): void {
    setInterval(()=>{
      if(this.valor){
        this.valor = false;
      }else{
        this.valor=true;
      }

      if(this.heigthPX =="20px"){
        this.heigthPX = "50px";
        this.backgroundColor = "blue";
      }else{
        this.heigthPX = "20px";
        this.backgroundColor = "red";
      }

    },2000);
  }

  public adicionarNaLista(){
    this.list.push({nome:this.nome});
    this.nome="";
  }
}
