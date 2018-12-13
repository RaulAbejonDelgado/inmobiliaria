import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Usuario } from '../../model/usuario';
import { LoginService } from '../../provider/login.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario : FormGroup;
  mensaje: string;
  logueo : boolean;
  usuario: Usuario;


  constructor(private loginService : LoginService, private router: Router) { 
    console.trace("LoginComponent - constructor ");

    this.logueo = false;
    this.crearFormulario();
  }

  ngOnInit() {
    console.trace("ngOnInit - constructor ");
  }

  private crearFormulario(){
    console.trace("LoginComponent - crearFormulario");

    this.mensaje = "";
    this.formulario = new FormGroup({
      nombre : new FormControl('admin',
                              [
                                Validators.required,
                                Validators.minLength(2),
                                Validators.maxLength(50)
                              ]),
      password: new FormControl('admin',
                                [
                                  Validators.required,
                                  Validators.minLength(6),
                                Validators.maxLength(50)
                                ])
    })
  }

  sumitar(){
    console.trace("LoginComponent - sumitar")
    //todo llamar al servicio de login

    //recoger parametros del formulario

    let nombre = this.formulario.controls.nombre.value;
    let password = this.formulario.controls.password.value;

    console.log("nombre %o", nombre);
    console.log("nombre %o", password);


    let u = new Usuario();
    u.nombre = nombre;
    u.password = password;

    //llamar al servicio
    if(this.loginService.login(u)){
      this.router.navigate(['backoffice']);
    }else{
      this.mensaje = "Credenciales no validas, prueba de nuevo";
      this.logueo = false;
    }

  }
}
