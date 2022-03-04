import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmaterielComponent } from './readmateriel.component';

describe('ReadmaterielComponent', () => {
  let component: ReadmaterielComponent;
  let fixture: ComponentFixture<ReadmaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadmaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
