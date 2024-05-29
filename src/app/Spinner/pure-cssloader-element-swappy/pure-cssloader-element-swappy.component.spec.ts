import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCSSLoaderElementSwappyComponent } from './pure-cssloader-element-swappy.component';

describe('PureCSSLoaderElementSwappyComponent', () => {
  let component: PureCSSLoaderElementSwappyComponent;
  let fixture: ComponentFixture<PureCSSLoaderElementSwappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureCSSLoaderElementSwappyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureCSSLoaderElementSwappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
