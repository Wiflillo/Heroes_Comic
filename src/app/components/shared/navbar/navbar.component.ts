import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';






@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {



  constructor( 
              private _Router:Router) { }

  ngOnInit() {
  }
      buscarHeroe(termino:string){
      

        this._Router.navigate( ["/buscar", termino] );

    

}

}