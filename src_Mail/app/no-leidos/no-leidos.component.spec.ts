import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLeidosComponent } from './no-leidos.component';

describe('NoLeidosComponent', () => {
  let component: NoLeidosComponent;
  let fixture: ComponentFixture<NoLeidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLeidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLeidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
