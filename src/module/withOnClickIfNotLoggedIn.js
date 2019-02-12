import { connect } from 'react-redux';
import { openDialog } from '/imports/state/ui';
import { AUTH_DIALOG } from '/imports/constants/ui';
import { gql, graphql, compose } from 'react-apollo';
import { get } from 'lodash';

import {USER} from 'module/Query';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickIfNotLoggedIn: originalOnClick => {
      return () => {
        if (isNotLoggedIn(ownProps)) {
          return dispatch(openDialog({ dialogType: AUTH_DIALOG }));
        }
        originalOnClick();
      };
    },
  };
};

const isNotLoggedIn = ({ currentUserData }) => {
  return !get(currentUserData, 'me._id');
};

export default WrappedComponent =>
  compose(graphql(USER, { name: 'currentUserData' }), connect(null, mapDispatchToProps))(
    WrappedComponent
);
