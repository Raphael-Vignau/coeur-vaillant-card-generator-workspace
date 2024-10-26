import { Component } from '@angular/core';
import { CardSettingsComponent } from '../../features/card-settings/card-settings.component';
import { CardPreviewComponent } from '../../features/card-preview/card-preview.component';

@Component({
    selector: 'cvcg-card-generator',
    standalone: true,
    imports: [CardSettingsComponent, CardPreviewComponent],
    templateUrl: './card-generator.component.html',
    styleUrl: './card-generator.component.scss',
})
export class CardGeneratorComponent {}
