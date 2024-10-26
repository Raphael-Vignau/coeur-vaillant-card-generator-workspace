import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Metier } from '../../../interfaces/metier';

@Component({
    selector: 'cvcg-card-metier-form',
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
    templateUrl: './card-metier-form.component.html',
    styleUrl: './card-metier-form.component.scss',
})
export class CardMetierFormComponent {
    private readonly formBuilder = new FormBuilder();

    metierForm = this.formBuilder.group({
        titre: [''],
        atour: this.formBuilder.group({
            titre: [''],
            description: [''],
        }),
        usuel: this.formBuilder.group({
            titre: [''],
            description: [''],
            utilisation: [''],
        }),
        prouesse: this.formBuilder.group({
            titre: [''],
            description: [''],
        }),
    });
}
