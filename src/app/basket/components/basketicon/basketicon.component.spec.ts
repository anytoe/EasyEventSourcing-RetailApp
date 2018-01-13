import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketiconComponent } from './basketicon.component';

describe('BasketiconComponent', () => {
  let component: BasketiconComponent;
  let fixture: ComponentFixture<BasketiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
