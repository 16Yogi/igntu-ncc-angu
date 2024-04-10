import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerycpComponent } from './gallerycp.component';

describe('GallerycpComponent', () => {
  let component: GallerycpComponent;
  let fixture: ComponentFixture<GallerycpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerycpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallerycpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
