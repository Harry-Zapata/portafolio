import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenContentComponent } from './resumen-content.component';

describe('ResumenContentComponent', () => {
  let component: ResumenContentComponent;
  let fixture: ComponentFixture<ResumenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
