import { Component } from '@angular/core';
import { CardPreviewComponent } from '../../features/card-generator/card-preview/card-preview.component';
import { CardSettingsComponent } from '../../features/card-generator/card-settings/card-settings.component';
import { CardMetierFormComponent } from '../../features/card-generator/card-metier-form/card-metier-form.component';

@Component({
    selector: 'cvcg-metier',
    standalone: true,
    imports: [
        CardSettingsComponent,
        CardPreviewComponent,
        CardMetierFormComponent,
    ],
    templateUrl: './metier.component.html',
    styleUrl: './metier.component.scss',
})
export class MetierComponent {}
