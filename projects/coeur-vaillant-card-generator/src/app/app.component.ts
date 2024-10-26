import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardGeneratorComponent } from '../../pages/card-generator/card-generator.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CardGeneratorComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'coeur-vaillant-card-generator';
}
