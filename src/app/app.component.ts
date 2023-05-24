import { Component, OnInit } from '@angular/core';
/*
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked
*/
/*  <app-data-binding></app-data-binding> */
@Component({
  selector: 'app-root',
template:`
  <!--<app-diretivas-estruturais>  -->
  
  <app-diretivas-atributos></app-diretivas-atributos>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(){
  
  }

  ngOnInit(): void {

  }
  
 

 
}
