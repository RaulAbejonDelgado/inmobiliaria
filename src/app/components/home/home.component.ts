import { Component, OnInit } from '@angular/core';
import { CasaService } from '../../provider/casa.service';
import { Casa } from '../../model/casa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  casas: Casa[];
  casasAlquiladas : Casa[];
  casasVenta : Casa[];
  casaSelecionada : Casa;
  vistaDetalle : boolean;
  casasAlquiladasSenal: boolean;
  casasVentasSenal: boolean;
  todasCasas: boolean;

  constructor(private casasService: CasaService) {

    console.log("HomeComponent - constructor")
    this.todasCasas = true;
    this.casasAlquiladasSenal= false;
    this.casasVentasSenal = false;
    this.casasAlquiladas = [];
    this.casasVenta = [];
    this.vistaDetalle = false;
    this.casas=[];
    this.casaSelecionada = new Casa();
    

    this.getAll();
   }




  ngOnInit() {
  }

  getAll(){
    this.casasService.getAll().subscribe(data=>{

      data.forEach(c => {
        this.casas.push(c);

      });
    })

    console.log(this.casas);
  }

  selecionarCasa(casaSelecionada : Casa){
    this.casaSelecionada = casaSelecionada;
    this.vistaDetalle = true;
    
  }

  cerrarDetalle(){
    this.vistaDetalle = false;
  }

  alquiler(){
    console.log('HomeComponent -alquiler ');
    //this.casas= [];
    //this.getAll();
    this.casasAlquiladas = this.casas.filter(casa => casa.alquiler == true);
    this.casasAlquiladasSenal = true;
    this.casasVentasSenal = false;
    this.todasCasas = false;
  }

  venta(){
    console.log('HomeComponent -venta ');
 
    //this.getAll();
    this.casasVenta = this.casas.filter(casa => casa.alquiler == false);
    this.casasAlquiladasSenal = false;
    this.casasVentasSenal = true;
    this.todasCasas = false;
  }

  todas(){
    
    this.casasAlquiladasSenal = false;
    this.casasVentasSenal = false;
    this.todasCasas = true;
  }

}
