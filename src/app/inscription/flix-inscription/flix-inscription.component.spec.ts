import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixInscriptionComponent } from './flix-inscription.component';

describe('FlixInscriptionComponent', () => {
  let component: FlixInscriptionComponent;
  let fixture: ComponentFixture<FlixInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlixInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlixInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
