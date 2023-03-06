import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixConnectionComponent } from './flix-connection.component';

describe('FlixConnectionComponent', () => {
  let component: FlixConnectionComponent;
  let fixture: ComponentFixture<FlixConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlixConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlixConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
