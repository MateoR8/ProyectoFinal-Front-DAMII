import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVerComponent } from './dialog-ver.component';

describe('DialogVerComponent', () => {
  let component: DialogVerComponent;
  let fixture: ComponentFixture<DialogVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogVerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
