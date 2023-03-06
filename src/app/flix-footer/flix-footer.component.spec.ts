import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixFooterComponent } from './flix-footer.component';

describe('FlixFooterComponent', () => {
  let component: FlixFooterComponent;
  let fixture: ComponentFixture<FlixFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlixFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlixFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
