import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WriteBtn from './WriteBtn';
// Style
import { MyListBox } from 'style/MyList';

class MyListUser extends Component {

    render() {
        const { user, handleWriteView } = this.props;

        return (
            <div>
                {user.username}
                <WriteBtn handleWriteView={handleWriteView} />
            </div>
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

MyListUser.propTypes = propTypes;
MyListUser.defaultProps = defaultProps;

export default MyListUser;