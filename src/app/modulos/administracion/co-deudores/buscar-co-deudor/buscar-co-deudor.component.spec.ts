import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCoDeudorComponent } from './buscar-co-deudor.component';

describe('BuscarCoDeudorComponent', () => {
  let component: BuscarCoDeudorComponent;
  let fixture: ComponentFixture<BuscarCoDeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCoDeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCoDeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
