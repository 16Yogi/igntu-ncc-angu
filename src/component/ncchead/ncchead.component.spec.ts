import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NccheadComponent } from './ncchead.component';

describe('NccheadComponent', () => {
  let component: NccheadComponent;
  let fixture: ComponentFixture<NccheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NccheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NccheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
