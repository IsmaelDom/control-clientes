import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteServicio } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

@Injectable()
export class ClientesComponent implements OnInit {
  clientes!: Cliente[];

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  constructor(private clientesServicio: ClienteServicio,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.clientesServicio.getClientes().subscribe(
      clients => {
        this.clientes = clients;
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach(cliente => {
        if (cliente.saldo === undefined) {
          cliente.saldo = 0;
        }
        saldoTotal += cliente.saldo;
      });
    }
    return saldoTotal;
  }

  agregar({value, valid}: NgForm){
    if (!valid) {
      this.flashMessages.show('Por favor, llene los campos del formulario correctamente.', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {

    }
  }

}
