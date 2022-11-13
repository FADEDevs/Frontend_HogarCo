import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInmobiliariaComponent } from './crear-inmobiliaria.component';

describe('CrearInmobiliariaComponent', () => {
  let component: CrearInmobiliariaComponent;
  let fixture: ComponentFixture<CrearInmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInmobiliariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearInmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
