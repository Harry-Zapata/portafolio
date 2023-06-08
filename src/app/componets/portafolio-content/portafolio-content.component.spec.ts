import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioContentComponent } from './portafolio-content.component';

describe('PortafolioContentComponent', () => {
  let component: PortafolioContentComponent;
  let fixture: ComponentFixture<PortafolioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
