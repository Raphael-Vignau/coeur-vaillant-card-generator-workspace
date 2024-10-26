import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'cvcg-card-settings',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './card-settings.component.html',
    styleUrl: './card-settings.component.scss',
})
export class CardSettingsComponent {}
