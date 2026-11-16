import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormation } from './ajouter-formation';

describe('AjouterFormation', () => {
  let component: AjouterFormation;
  let fixture: ComponentFixture<AjouterFormation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterFormation],
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterFormation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
