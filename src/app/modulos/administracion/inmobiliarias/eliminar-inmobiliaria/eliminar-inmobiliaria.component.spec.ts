import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarInmobiliariaComponent } from './eliminar-inmobiliaria.component';

describe('EliminarInmobiliariaComponent', () => {
  let component: EliminarInmobiliariaComponent;
  let fixture: ComponentFixture<EliminarInmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarInmobiliariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarInmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
