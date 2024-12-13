import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import internal from 'stream';

@Injectable()
export class BoardService {
    private boards = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto): Board {
        const { title, content } = createBoardDto;
        const board: Board = {
            id: '1',
            title,
            content,
            status: BoardStatus.PUBLIC,
        }

        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        const result =  this.boards.find((board) => board.id == id);
        if(!result) {
            throw new NotFoundException();
        }
        return result;
    }

    deleteBoard(id: string): Board[] {
        return this.boards.filter((board) => board.id !== id);
    }

    updateStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board
    }
}
