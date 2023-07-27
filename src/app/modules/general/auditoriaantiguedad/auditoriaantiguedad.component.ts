import { Component, OnInit } from '@angular/core';

class Tipo {
  rangoinicio: any;
  rangofin: any;
  porcentaje: any;
  constructor(rangoinicio, rangofin,porcentaje) {
    this.rangoinicio = rangoinicio;
    this.rangofin = rangofin;
    this.porcentaje=porcentaje;
  }
}


@Component({
  selector: 'app-auditoriaantiguedad',
  templateUrl: './auditoriaantiguedad.component.html',
  styleUrls: ['./auditoriaantiguedad.component.css']
})
export class AuditoriaantiguedadComponent implements OnInit {
  nombre:any;
  qa:any;
  items:Array<Tipo>=[];
  inicioin:any;
  finin:any;
  porcentajein:any;
  constructor() { }


  ngOnInit(): void {
  }

  agregar(){
    if(this.inicioin && this.finin && this.porcentajein){
      let tip= new Tipo(this.inicioin, this.finin, this.porcentajein);
      this.items.push(tip);
    }
  }

  gotoEdit(item){
    console.log(item)
    this.items.splice(item,1)
    // this.items.remove(item);
  }
}
