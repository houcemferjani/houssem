import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefichepComponent } from './createfichep.component';

describe('CreatefichepComponent', () => {
  let component: CreatefichepComponent;
  let fixture: ComponentFixture<CreatefichepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatefichepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefichepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
