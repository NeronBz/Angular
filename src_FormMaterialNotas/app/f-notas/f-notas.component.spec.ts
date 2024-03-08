import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FNotasComponent } from './f-notas.component';

describe('FNotasComponent', () => {
  let component: FNotasComponent;
  let fixture: ComponentFixture<FNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
