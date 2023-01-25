import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameobjectComponent } from './gameobject.component';

describe('GameobjectComponent', () => {
  let component: GameobjectComponent;
  let fixture: ComponentFixture<GameobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameobjectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GameobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
