import { Component } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {

  clientes:any[]=[];

  constructor(service:ClientesService){
    this.clientes = service.getClientes();

    let cliente = new Cliente();
    console.log(cliente);
  }
}
