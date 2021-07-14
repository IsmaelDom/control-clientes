import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean = false;
  loggedInUser!: string;
  permitirRegistro: boolean = false;

  constructor(private loginService: LoginService,
              private router: Router,
              private configuracionServicio: ConfiguracionService) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email!; //as string
      } else {
        this.isLoggedIn = false;
      }
    });
  
    this.configuracionServicio.getConfiguracion().subscribe(configuracion => {
      this.permitirRegistro = configuracion.permitirRegistro!;    
    });
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
