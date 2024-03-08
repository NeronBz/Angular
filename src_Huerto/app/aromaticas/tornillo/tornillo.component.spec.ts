import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornilloComponent } from './tornillo.component';

describe('TornilloComponent', () => {
  let component: TornilloComponent;
  let fixture: ComponentFixture<TornilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TornilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
