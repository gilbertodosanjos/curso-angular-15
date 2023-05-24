import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})

export class DiretivasEstruturaisComponent implements OnInit{

   public condicion:boolean = false;
   public conditionClick:boolean = true;
   public list:Array<{nome:string,idade:number}> =[{nome:"Gilberto do Array",idade:50},{nome:"Gysele do Array",idade:40}];
   public nomeTesteSwitch:string = "Gilberto";
   
  ngOnInit(): void {
    setInterval(()=>{
      if(this.condicion){
          this.condicion =false;
      }else{
          this.condicion =true;
      }
    },2000)
  }

  public onClick(){
    if(this.conditionClick){
       this.conditionClick=false;
    }else{
       this.conditionClick=true;
    }
  }

  public onClickAddList(){

    this.list.push({nome:"Nay",idade:31})
  }

  public onClickEventList(event: MouseEvent){
    console.log(event);

  }
}