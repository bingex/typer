import React from 'react';
import { Link } from 'react-router-dom';
import ActiveUsers from './ActiveUsers';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Welcome extends React.Component {
  render() {
    return (
      <SWrapper>
        <SLeft>
          <div style={{ width: '120px' }}>
            <SLink to="/type">Single player</SLink>
            <SLink to="/multi">Multiplayer</SLink>
          </div>
          <SMiniTitle>Typer. Test your speed.</SMiniTitle>
        </SLeft>

        <SRight>
          <ActiveUsers />
          <SMiniTitle>YOU: {this.props.activeUserId}</SMiniTitle>
        </SRight>
      </SWrapper>
    );
  }
}

Welcome.propTypes = {
  activeUserId: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    activeUserId: state.userReducer.activeUserId
  };
}

export default connect(mapStateToProps, {})(Welcome);

// STYLES
const SWrapper = styled.div`
	display: flex;
	height: 100vh;
`;

const SMiniTitle = styled.span`
	position: absolute;
	bottom: 10px;
	left: 10px;
	font-size: 12px;
	color: #ffffff;
`;

const SSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	position: relative;
`;

const SLeft = styled(SSection)`
	background-color: #212121;
`;

const SRight = styled(SSection)`
	color: #ffffff;
	background-color: #009688;
`;

const SLink = styled(Link)`
	margin: 10px 0;
	height: 36px;
	border-radius: 2px;
	color: #3E2723;
	text-decoration: none;
	width: 120px;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	transition: background-color 0.1s;

	&:hover {
		background-color: #FFE57F;
	}
`;
