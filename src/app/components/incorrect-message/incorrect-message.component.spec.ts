import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectMessageComponent } from './incorrect-message.component';

describe('IncorrectMessageComponent', () => {
  let component: IncorrectMessageComponent;
  let fixture: ComponentFixture<IncorrectMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorrectMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncorrectMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
