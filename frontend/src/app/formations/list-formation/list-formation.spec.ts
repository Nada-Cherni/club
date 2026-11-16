import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormation } from './list-formation';

describe('ListFormation', () => {
  let component: ListFormation;
  let fixture: ComponentFixture<ListFormation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFormation],
    }).compileComponents();

    fixture = TestBed.createComponent(ListFormation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
