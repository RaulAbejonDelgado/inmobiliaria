import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../provider/login.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor(private loginServico: LoginService,private router: Router) { }

  ngOnInit() {
  }

  desconectar(){
    this.loginServico.logOut();
    this.router.navigate(['login']);
  }

}
