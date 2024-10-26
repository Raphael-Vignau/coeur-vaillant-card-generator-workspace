import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'cvcg-card-settings',
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInput,
    ],
    templateUrl: './card-settings.component.html',
    styleUrl: './card-settings.component.scss',
})
export class CardSettingsComponent {
    cardForm = new FormGroup({
        typeCard: new FormControl('', Validators.required),
        titleCard: new FormControl('', Validators.required),
    });

    onSubmit() {
        console.log(this.cardForm.value);
    }
}
