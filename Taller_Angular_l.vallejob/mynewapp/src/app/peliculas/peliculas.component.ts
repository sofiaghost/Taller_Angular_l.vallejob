import { Component, OnInit } from '@angular/core';
import {Pelicula} from './pelicula';
import {datapeliculas} from './datapeliculas';
import { PeliculaService } from './pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Array<Pelicula>=[];
  promedio: number=0;
  

  constructor(private peliculaService: PeliculaService) { }
  getPeliculas() {
    this.peliculaService.getPeliculas().subscribe( peliculas =>
      {this.peliculas=peliculas;
       this.getPromedio(); 
        
      }
    )
  }
  getPromedio(){
    let seasonstotal: number=0;
    let total: number=0;
    for (let i=0; i< this.peliculas.length; i++ ){
      seasonstotal+=this.peliculas[i].seasons;
      total+=1;
    }
    this.promedio=seasonstotal/total;
  }
  ngOnInit() {
    this.getPeliculas();
    
  }

}
