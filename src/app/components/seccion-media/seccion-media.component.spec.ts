import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMediaComponent } from './seccion-media.component';

describe('SeccionMediaComponent', () => {
  let component: SeccionMediaComponent;
  let fixture: ComponentFixture<SeccionMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
