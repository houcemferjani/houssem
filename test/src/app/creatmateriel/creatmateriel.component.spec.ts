import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatmaterielComponent } from './creatmateriel.component';

describe('CreatmaterielComponent', () => {
  let component: CreatmaterielComponent;
  let fixture: ComponentFixture<CreatmaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatmaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatmaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
