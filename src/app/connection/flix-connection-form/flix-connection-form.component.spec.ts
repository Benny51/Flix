import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixConnectionFormComponent } from './flix-connection-form.component';

describe('FlixConnectionFormComponent', () => {
  let component: FlixConnectionFormComponent;
  let fixture: ComponentFixture<FlixConnectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlixConnectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlixConnectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
