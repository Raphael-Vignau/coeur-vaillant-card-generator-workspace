import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'cvcg-card-preview',
    standalone: true,
    imports: [MatButtonModule, MatCardModule],
    templateUrl: './card-preview.component.html',
    styleUrl: './card-preview.component.scss',
})
export class CardPreviewComponent {}
