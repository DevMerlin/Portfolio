import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketpopComponent } from './packetpop.component';

describe('PacketpopComponent', () => {
  let component: PacketpopComponent;
  let fixture: ComponentFixture<PacketpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketpopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacketpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
