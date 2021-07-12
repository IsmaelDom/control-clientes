import { Component, Injectable, OnInit } from '@angular/core';
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

  constructor(private clientesServicio: ClienteServicio) { }

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

}
