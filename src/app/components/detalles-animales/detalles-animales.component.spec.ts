import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAnimalesComponent } from './detalles-animales.component';

describe('DetallesAnimalesComponent', () => {
  let component: DetallesAnimalesComponent;
  let fixture: ComponentFixture<DetallesAnimalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesAnimalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
