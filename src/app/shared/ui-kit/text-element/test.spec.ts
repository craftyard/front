import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextElementComponent } from 'app/shared/ui-kit/text-element/component';

describe('TextElementComponent', () => {
  let component: TextElementComponent;
  let fixture: ComponentFixture<TextElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextElementComponent],
    });
    fixture = TestBed.createComponent(TextElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
