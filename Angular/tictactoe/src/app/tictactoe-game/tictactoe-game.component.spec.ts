import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeGameComponent } from './tictactoe-game.component';

describe('TictactoeGameComponent', () => {
  let component: TictactoeGameComponent;
  let fixture: ComponentFixture<TictactoeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TictactoeGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TictactoeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
