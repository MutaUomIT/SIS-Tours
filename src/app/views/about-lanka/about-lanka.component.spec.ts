import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLankaComponent } from './about-lanka.component';

describe('AboutLankaComponent', () => {
  let component: AboutLankaComponent;
  let fixture: ComponentFixture<AboutLankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
