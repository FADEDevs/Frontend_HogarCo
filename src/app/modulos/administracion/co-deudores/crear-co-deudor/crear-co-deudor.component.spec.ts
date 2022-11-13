import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCoDeudorComponent } from './crear-co-deudor.component';

describe('CrearCoDeudorComponent', () => {
  let component: CrearCoDeudorComponent;
  let fixture: ComponentFixture<CrearCoDeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCoDeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCoDeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
