import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoMainComponent } from './ano-main.component';

describe('AnoMainComponent', () => {
  let component: AnoMainComponent;
  let fixture: ComponentFixture<AnoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnoMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
