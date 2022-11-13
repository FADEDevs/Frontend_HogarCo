import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInmobiliariaComponent } from './editar-inmobiliaria.component';

describe('EditarInmobiliariaComponent', () => {
  let component: EditarInmobiliariaComponent;
  let fixture: ComponentFixture<EditarInmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInmobiliariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
