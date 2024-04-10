import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadetpageComponent } from './cadetpage.component';

describe('CadetpageComponent', () => {
  let component: CadetpageComponent;
  let fixture: ComponentFixture<CadetpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadetpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
