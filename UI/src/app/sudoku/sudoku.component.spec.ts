import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuComponent } from './sudoku.component';
import { ActionButtonComponent } from "src/app/action-button/action-button.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import SudokuCell from "src/core/Models/SudokuCell";

describe('SudokuComponent', () => {
  let component: SudokuComponent;
  let fixture: ComponentFixture<SudokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SudokuComponent, ActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render boarders', () => {
    let items: SudokuCell[] = [];
    beforeEach(() => {
      items = [
        { rowIndex: 0, columnIndex: 0, value: 1, isLocked: false },
        { rowIndex: 0, columnIndex: 1, value: 1, isLocked: false },
        { rowIndex: 0, columnIndex: 2, value: 1, isLocked: false },

        { rowIndex: 1, columnIndex: 0, value: 1, isLocked: false },
        { rowIndex: 1, columnIndex: 1, value: 1, isLocked: false },
        { rowIndex: 1, columnIndex: 2, value: 1, isLocked: false },

        { rowIndex: 2, columnIndex: 0, value: 1, isLocked: false },
        { rowIndex: 2, columnIndex: 1, value: 1, isLocked: false },
        { rowIndex: 2, columnIndex: 2, value: 1, isLocked: false },
      ];
    });

    it('renders item 0,0', () => {
      const idx = 0;

      expect(component.hasTopBoarder(items[idx])).toBeTruthy();
      expect(component.hasBottomBoarder(items[idx])).toBeFalsy();
      expect(component.hasLeftBoarder(items[idx])).toBeTruthy();
      expect(component.hasRightBoarder(items[idx])).toBeFalsy();
    });

    it('renders item 0,1', () => {
      const idx = 1;

      expect(component.hasTopBoarder(items[idx])).toBeTruthy();
      expect(component.hasBottomBoarder(items[idx])).toBeFalsy();
      expect(component.hasLeftBoarder(items[idx])).toBeFalsy();
      expect(component.hasRightBoarder(items[idx])).toBeFalsy();
    });

    it('renders item 0,2', () => {
      const idx = 2;

      expect(component.hasTopBoarder(items[idx])).toBeTruthy();
      expect(component.hasBottomBoarder(items[idx])).toBeFalsy();
      expect(component.hasLeftBoarder(items[idx])).toBeFalsy();
      expect(component.hasRightBoarder(items[idx])).toBeTruthy();
    });

    it('renders item 1,0', () => {
      const idx = 3;

      expect(component.hasTopBoarder(items[idx])).toBeFalsy();
      expect(component.hasBottomBoarder(items[idx])).toBeFalsy();
      expect(component.hasLeftBoarder(items[idx])).toBeTruthy();
      expect(component.hasRightBoarder(items[idx])).toBeFalsy();
    });

    it('renders item 1,1', () => {
      const idx = 4;

      expect(component.hasTopBoarder(items[idx])).toBeFalsy();
      expect(component.hasBottomBoarder(items[idx])).toBeFalsy();
      expect(component.hasLeftBoarder(items[idx])).toBeFalsy();
      expect(component.hasRightBoarder(items[idx])).toBeFalsy();
    });

    it('renders item 1,2', () => {
      const idx = 5;

      expect(component.hasTopBoarder(items[idx])).toBeFalsy();
      expect(component.hasBottomBoarder(items[idx])).toBeFalsy();
      expect(component.hasLeftBoarder(items[idx])).toBeFalsy();
      expect(component.hasRightBoarder(items[idx])).toBeTruthy();
    });

    it('renders item 2,0', () => {
      const idx = 6;

      expect(component.hasTopBoarder(items[idx])).toBeFalsy();
      expect(component.hasBottomBoarder(items[idx])).toBeTruthy();
      expect(component.hasLeftBoarder(items[idx])).toBeTruthy();
      expect(component.hasRightBoarder(items[idx])).toBeFalsy();
    });

    it('renders item 2,1', () => {
      const idx = 7;

      expect(component.hasTopBoarder(items[idx])).toBeFalsy();
      expect(component.hasBottomBoarder(items[idx])).toBeTruthy();
      expect(component.hasLeftBoarder(items[idx])).toBeFalsy();
      expect(component.hasRightBoarder(items[idx])).toBeFalsy();
    });

    it('renders item 2,2', () => {
      const idx = 8;

      expect(component.hasTopBoarder(items[idx])).toBeFalsy();
      expect(component.hasBottomBoarder(items[idx])).toBeTruthy();
      expect(component.hasLeftBoarder(items[idx])).toBeFalsy();
      expect(component.hasRightBoarder(items[idx])).toBeTruthy();
    });
  });
});
