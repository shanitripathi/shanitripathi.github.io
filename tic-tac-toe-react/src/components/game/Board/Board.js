import React, {Component} from 'react';
import BoardCell from "../BoardCell";


export default class Board extends Component {

    render () {
        let {boardState, handleCellClick} = this.props;
        // boardState = ['', 'o', 'x', '', 'o', 'x', '', 'o', 'x']
        // ['a', 'b', 'c'].map((val, index) => { return 'a'})
        return (
            <div>
                {
                    boardState.map(
                        (cellState, index) => {
                            let isLineBreak = false;
                            if ((index) % 3 === 0) isLineBreak = true;
                            return (
                                <React.Fragment>
                                    {isLineBreak && <br/>}
                                    <BoardCell key={index}
                                               cellState={cellState}
                                               cellIndex={index}
                                               onClick={handleCellClick}/>
                                </React.Fragment>
                            )
                        }
                    )
                }
            </div>
        )
    }
}
