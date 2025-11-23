import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncGeneralComponent } from './inc-general.component';

describe('IncGeneralComponent', () => {
  let component: IncGeneralComponent;
  let fixture: ComponentFixture<IncGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
