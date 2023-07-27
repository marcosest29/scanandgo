import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriafrecuenciaComponent } from './auditoriafrecuencia.component';

describe('AuditoriafrecuenciaComponent', () => {
  let component: AuditoriafrecuenciaComponent;
  let fixture: ComponentFixture<AuditoriafrecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriafrecuenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriafrecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
