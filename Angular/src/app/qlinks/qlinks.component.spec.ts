import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlinksComponent } from './qlinks.component';

describe('QlinksComponent', () => {
  let component: QlinksComponent;
  let fixture: ComponentFixture<QlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
