import React from 'react';
import PropTypes from 'prop-types';

const WriteBtn = ({ handleWriteView }) => {
    return (
        <div onClick={handleWriteView}>글쓰기</div>
    );
}

const propTypes = {
    handleWriteView: PropTypes.func
};
const defaultProps = {
    handleWriteView : () => { return console.log('잘못된 전달입니다.') }
};

WriteBtn.propTypes = propTypes;
WriteBtn.defaultProps = defaultProps;

export default WriteBtn;