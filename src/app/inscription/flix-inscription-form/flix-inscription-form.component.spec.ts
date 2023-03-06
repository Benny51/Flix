import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixInscriptionFormComponent } from './flix-inscription-form.component';

describe('FlixInscriptionFormComponent', () => {
  let component: FlixInscriptionFormComponent;
  let fixture: ComponentFixture<FlixInscriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlixInscriptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlixInscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
