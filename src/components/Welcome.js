import React from 'react';
import { Link } from 'react-router-dom';
import ActiveUsers from './ActiveUsers';
import styled from 'styled-components';

class Welcome extends React.Component {
  state = {
    username: ''
  };

  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SWrapper>
        <SLeft>
          <div style={{ width: '120px' }}>
            <SInput
              type="text"
              placeholder="Your name?"
              name="username"
              value={this.state.username}
              onChange={this.changeInput}
            />
            <SLink to="/type">Single player</SLink>
            <SLink to="/multi">Multiplayer</SLink>
          </div>
          <SMiniTitle>Typer. Test your speed.</SMiniTitle>
        </SLeft>

        <SRight>
          <ActiveUsers />
          <SMiniTitle>Active users.</SMiniTitle>
        </SRight>
      </SWrapper>
    );
  }
}

export default Welcome;

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

const SInput = styled.input`
	width: 110px;
	border: none;
	border-radius: 2px;
	height: 36px;
	outline: none;
	padding-left: 10px;
	background-color: #18FFFF;

	&::-webkit-input-placeholder {
    color: #00BCD4;
  }
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
