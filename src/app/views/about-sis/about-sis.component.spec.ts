import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSisComponent } from './about-sis.component';

describe('AboutSisComponent', () => {
  let component: AboutSisComponent;
  let fixture: ComponentFixture<AboutSisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
