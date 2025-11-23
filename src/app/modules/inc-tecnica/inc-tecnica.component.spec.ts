import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncTecnicaComponent } from './inc-tecnica.component';

describe('IncTecnicaComponent', () => {
  let component: IncTecnicaComponent;
  let fixture: ComponentFixture<IncTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncTecnicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
