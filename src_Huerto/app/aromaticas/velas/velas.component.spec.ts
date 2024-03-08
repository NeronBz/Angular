import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelasComponent } from './velas.component';

describe('VelasComponent', () => {
  let component: VelasComponent;
  let fixture: ComponentFixture<VelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
