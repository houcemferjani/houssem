import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefichepComponent } from './listefichep.component';

describe('ListefichepComponent', () => {
  let component: ListefichepComponent;
  let fixture: ComponentFixture<ListefichepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefichepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefichepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
