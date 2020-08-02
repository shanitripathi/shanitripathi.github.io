import React, {Component} from 'react';


export default class BoardCell extends Component {

    render () {
        let {cellState, cellIndex, onClick} = this.props;

        return (
            <button style={{height: 50, width: 50, }} onClick={() => onClick(cellIndex)}>
                {
                    cellState === '' &&
                    <span>.</span>
                }
                {
                    cellState === 'o' &&
                    <span>o</span>
                }
                {
                    cellState === 'x' &&
                    <span>x</span>
                }
            </button>
        )
    }
}
