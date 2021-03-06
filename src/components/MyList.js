import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Style
import { MyListBox } from 'style/MyList';
import MyListUser from './MyListUser';

class MyList extends Component {
    render() {
        const { user, handleWriteView } = this.props;

        return (
            <MyListBox>
                {user ? <MyListUser user={user} handleWriteView={handleWriteView} /> : '회원이 아닙니다.' }
            </MyListBox>
        );
    }
}

const propTypes = {
    user: PropTypes.object,
    handleWriteView: PropTypes.func
};
const defaultProps = {
    user: null,
    handleWriteView : () => { return console.log('잘못된 전달입니다.') }
};

MyList.propTypes = propTypes;
MyList.defaultProps = defaultProps;

export default MyList;