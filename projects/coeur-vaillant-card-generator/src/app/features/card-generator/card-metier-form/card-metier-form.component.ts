import { Component, signal } from '@angular/core';
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

    titreCard = signal<string>('titre');
    atourTitre = signal<string>('titre');
    atourDescription = signal<string>('description');
    usuelTitre = signal<string>('titre');
    usuelDescription = signal<string>('description');
    usuelUtilisation = signal<string>('utilisation');
    prouesseTitre = signal<string>('titre');
    prouesseDescription = signal<string>('description');

    metierForm = this.formBuilder.group({
        titreCard: [''],
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

    constructor() {
        // Synchroniser chaque signal avec les changements de formulaire
        this.metierForm.get('titreCard')?.valueChanges.subscribe(value => this.titreCard.set(value ?? ''));
        this.metierForm.get('atour.titre')?.valueChanges.subscribe(value => this.atourTitre.set(value ?? ''));
        this.metierForm.get('atour.description')?.valueChanges.subscribe(value => this.atourDescription.set(value ?? ''));
        this.metierForm.get('usuel.titre')?.valueChanges.subscribe(value => this.usuelTitre.set(value ?? ''));
        this.metierForm.get('usuel.description')?.valueChanges.subscribe(value => this.usuelDescription.set(value ?? ''));
        this.metierForm.get('usuel.utilisation')?.valueChanges.subscribe(value => this.usuelUtilisation.set(value ?? ''));
        this.metierForm.get('prouesse.titre')?.valueChanges.subscribe(value => this.prouesseTitre.set(value ?? ''));
        this.metierForm.get('prouesse.description')?.valueChanges.subscribe(value => this.prouesseDescription.set(value ?? ''));
      }

}
