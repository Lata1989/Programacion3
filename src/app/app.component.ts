import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './pages/home/componente1/componente1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-programacion-3';
}
