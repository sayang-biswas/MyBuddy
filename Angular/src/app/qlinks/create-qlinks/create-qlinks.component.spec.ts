import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQlinksComponent } from './create-qlinks.component';

describe('CreateQlinksComponent', () => {
  let component: CreateQlinksComponent;
  let fixture: ComponentFixture<CreateQlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
