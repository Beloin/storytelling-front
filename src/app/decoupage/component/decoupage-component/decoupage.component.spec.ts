import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoupageComponent } from './decoupage.component';

describe('DecoupageComponent', () => {
  let component: DecoupageComponent;
  let fixture: ComponentFixture<DecoupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoupageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
