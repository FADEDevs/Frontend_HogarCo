import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarInmobiliariaComponent } from './buscar-inmobiliaria.component';

describe('BuscarInmobiliariaComponent', () => {
  let component: BuscarInmobiliariaComponent;
  let fixture: ComponentFixture<BuscarInmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarInmobiliariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarInmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
