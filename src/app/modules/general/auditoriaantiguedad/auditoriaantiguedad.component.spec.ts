import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaantiguedadComponent } from './auditoriaantiguedad.component';

describe('AuditoriaantiguedadComponent', () => {
  let component: AuditoriaantiguedadComponent;
  let fixture: ComponentFixture<AuditoriaantiguedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriaantiguedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriaantiguedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
