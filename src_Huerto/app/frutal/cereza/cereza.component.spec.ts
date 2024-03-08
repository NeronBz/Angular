import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerezaComponent } from './cereza.component';

describe('CerezaComponent', () => {
  let component: CerezaComponent;
  let fixture: ComponentFixture<CerezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerezaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
