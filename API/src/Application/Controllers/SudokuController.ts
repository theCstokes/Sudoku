import BaseController from "Application/Controllers/Core/BaseController";
import { NextFunction, Request, Response } from "express-serve-static-core";
import SudokuFactory, { SudokuSeed } from "Application/DomainLogic/SudokuFactory";
import SudokuBoardTransforms from "Application/DomainLogic/SudokuBoardTransforms";

const BaseURL = "/sudoku";

export default class SudokuController extends BaseController {
  public constructor() {
    super(BaseURL);

    this.router.get('/board', this.get.bind(this));
  }

  private get(req: Request, res: Response, next: NextFunction) {
    let seed = this.getBoardRequest(req);
    res.json(SudokuBoardTransforms.flatten(SudokuFactory.generate(seed)));
  }

  private getBoardRequest(req: Request): SudokuSeed | undefined {
    let content = req.headers.boardrequest;

    if (typeof content !== "string") {
      return;
    }

    try {
      return JSON.parse(content) as SudokuSeed;
    } catch (e) {
      throw new Error(`Could not parse header: boardrequest`);
    }
  }

}
