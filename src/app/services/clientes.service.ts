import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  constructor() {
    // ToDo  
  }

  getClientes(): any {
    return [
      { id: 1 },
      { id: 2 }
    ]
  }
}