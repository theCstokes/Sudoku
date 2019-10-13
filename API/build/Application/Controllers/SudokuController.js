"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("Application/Controllers/Core/BaseController");
const SudokuFactory_1 = require("Application/DomainLogic/SudokuFactory");
const SudokuBoardTransforms_1 = require("Application/DomainLogic/SudokuBoardTransforms");
const BaseURL = "/sudoku";
class SudokuController extends BaseController_1.default {
    constructor() {
        super(BaseURL);
        this.router.get('/board', this.get.bind(this));
    }
    get(req, res, next) {
        let seed = this.getBoardRequest(req);
        res.json(SudokuBoardTransforms_1.default.flatten(SudokuFactory_1.default.generate(seed)));
    }
    getBoardRequest(req) {
        let content = req.headers.boardrequest;
        if (typeof content !== "string") {
            return;
        }
        try {
            return JSON.parse(content);
        }
        catch (e) {
            throw new Error(`Could not parse header: boardrequest`);
        }
    }
}
exports.default = SudokuController;
//# sourceMappingURL=SudokuController.js.map