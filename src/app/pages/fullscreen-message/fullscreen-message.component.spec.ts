import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenMessageComponent } from './fullscreen-message.component';

describe('FullscreenMessageComponent', () => {
  let component: FullscreenMessageComponent;
  let fixture: ComponentFixture<FullscreenMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullscreenMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullscreenMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
