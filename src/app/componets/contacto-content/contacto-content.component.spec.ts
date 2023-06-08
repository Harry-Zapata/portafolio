import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoContentComponent } from './contacto-content.component';

describe('ContactoContentComponent', () => {
  let component: ContactoContentComponent;
  let fixture: ComponentFixture<ContactoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
