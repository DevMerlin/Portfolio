import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiktogramicComponent } from './piktogramic.component';

describe('PiktogramicComponent', () => {
  let component: PiktogramicComponent;
  let fixture: ComponentFixture<PiktogramicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiktogramicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiktogramicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
