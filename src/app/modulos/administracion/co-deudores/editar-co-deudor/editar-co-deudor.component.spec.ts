import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCoDeudorComponent } from './editar-co-deudor.component';

describe('EditarCoDeudorComponent', () => {
  let component: EditarCoDeudorComponent;
  let fixture: ComponentFixture<EditarCoDeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCoDeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCoDeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
