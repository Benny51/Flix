import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixHeaderComponent } from './flix-header.component';

describe('FlixHeaderComponent', () => {
  let component: FlixHeaderComponent;
  let fixture: ComponentFixture<FlixHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlixHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlixHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
