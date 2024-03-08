import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresaComponent } from './fresa.component';

describe('FresaComponent', () => {
  let component: FresaComponent;
  let fixture: ComponentFixture<FresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
