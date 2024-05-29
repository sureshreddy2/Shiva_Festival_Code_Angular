import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSpinnersComponent } from './animated-spinners.component';

describe('AnimatedSpinnersComponent', () => {
  let component: AnimatedSpinnersComponent;
  let fixture: ComponentFixture<AnimatedSpinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedSpinnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
