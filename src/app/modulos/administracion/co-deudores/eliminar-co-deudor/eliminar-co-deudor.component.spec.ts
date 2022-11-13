import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCoDeudorComponent } from './eliminar-co-deudor.component';

describe('EliminarCoDeudorComponent', () => {
  let component: EliminarCoDeudorComponent;
  let fixture: ComponentFixture<EliminarCoDeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCoDeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCoDeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
