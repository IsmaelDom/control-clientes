import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteServicio } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }
  
  id!:string;
  constructor(private clientesServicio: ClienteServicio,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  guardar({value, valid}: NgForm){
    if (!valid) {
      this.flashMessages.show('Por favor, llene el formulario correctamente.', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      //Se modifica el cliente
      value.id = this.id;
      this.clientesServicio.modificar(value);
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    if (confirm('Seguro, ¿Qué desea eliminar el cliente?')) {
      this.clientesServicio.eliminar(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
