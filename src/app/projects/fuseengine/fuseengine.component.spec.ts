import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseengineComponent } from './fuseengine.component';

describe('FuseengineComponent', () => {
  let component: FuseengineComponent;
  let fixture: ComponentFixture<FuseengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuseengineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuseengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
