import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulomseComponent } from './simulomse.component';

describe('SimulomseComponent', () => {
  let component: SimulomseComponent;
  let fixture: ComponentFixture<SimulomseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulomseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulomseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
