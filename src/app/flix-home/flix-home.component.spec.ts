import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixHomeComponent } from './flix-home.component';

describe('FlixHomeComponent', () => {
  let component: FlixHomeComponent;
  let fixture: ComponentFixture<FlixHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlixHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlixHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
