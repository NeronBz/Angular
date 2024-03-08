import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoPreguntaComponent } from './cuadro-dialogo-pregunta.component';

describe('CuadroDialogoPreguntaComponent', () => {
  let component: CuadroDialogoPreguntaComponent;
  let fixture: ComponentFixture<CuadroDialogoPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDialogoPreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
