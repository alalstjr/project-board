import React, {Component} from 'react';
import Poster from './Poster';
// Style
import { BoardListBox } from 'style/BoardList';

class BoardList extends Component{
    render() { 
        return(
            <BoardListBox>
                <Poster/>
            </BoardListBox>
        )
    };
}

export default BoardList;