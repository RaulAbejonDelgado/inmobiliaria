import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '../../../../node_modules/@angular/forms';
import { Casa } from '../../model/casa';
import { CasaService } from '../../provider/casa.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  formulario : FormGroup;
  servicio : FormControl;
  disponible: FormControl;
  mensaje:string;
  hayMensaje:boolean;

  constructor(private casaServicio: CasaService) { 
    this.disponible = new FormControl();
    this.servicio = new FormControl();
    this.formulario = new FormGroup({
      nombre : new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(45)]),
      alquiler : new FormControl(false),
      habitaciones : new FormControl(0),
      direccion : new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(45)]),
      precio : new FormControl(0,[Validators.required]),
      foto: new FormControl('',[ Validators.required, Validators.pattern('^(http(s?):\/\/).+(\(.png|.jpg))$')] ),
      servicios: new FormArray( [ this.crearservicioFormGroup() ], Validators.minLength(0)),
      //[ Validators.required, Validators.pattern('^(http(s?):\/\/).+(\(.png|.jpg|))$')]


    })
  }

  ngOnInit() {
  }

  crearservicioFormGroup(): FormGroup{
    return new FormGroup({
                servicio: new FormControl({"servicio": "",
                                          "disponible": false})
        });
  }




  agregarServicio(){
    let arrayServicios = this.formulario.get('servicios') as FormArray;
    arrayServicios.push(this.crearservicioFormGroup());
  }

  crearCasa(){
    console.log("FormulariooComponent - sumitar %o",  this.formulario);
    let casa = new Casa();

    console.log("controls %o" ,this.formulario.controls.nombre.errors);
    casa.nombre = this.formulario.controls.nombre.value;
    casa.precio = this.formulario.controls.precio.value;
    casa.servicios = this.formulario.controls.servicios.value;
    casa.alquiler = this.formulario.controls.alquiler.value;
    casa.foto = this.formulario.controls.foto.value;
    this.casaServicio.add(casa).subscribe(data =>{
      console.debug(data);

      
    })
    this.mensaje="Registro creado con exito";
    this.hayMensaje = true;
    

  }

  eliminarServicio(index : number){
    console.log("eliminarServicio");
    
    
  }
  }


