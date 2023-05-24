import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() public title:string = "Bem Vindo";
 
  constructor(){}
  
  ngOnDestroy(): void {
    console.log("Componente destuido com sucesso");
  }

  ngOnInit(): void {
    
  }
  
  ngOnChanges(): void {
    console.log("Foi alterado com sucesso");
  }

}
