import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMetierFormComponent } from './card-metier-form.component';

describe('CardMetierFormComponent', () => {
  let component: CardMetierFormComponent;
  let fixture: ComponentFixture<CardMetierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMetierFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMetierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
