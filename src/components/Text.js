import React from 'react';
import PropTypes from 'prop-types';
import StartTimer from './StartTimer';

const activeStyle = {
  color: 'green',
  textDecoration: 'underline'
};

const inlineBlock = {
  display: 'inline-block'
};

const bluredText = {
  textShadow: '0 0 7px rgba(0,0,0,0.5)',
  color: 'transparent'
};

const Text = props => {
  const Words = props.data.map((word, index) => {
    return (
      <span key={index} style={inlineBlock}>
        <span
          style={{
            ...(index === props.active ? activeStyle : null),
            ...(!props.typeStarted ? bluredText : null),
            ...{ userSelect: 'none' }
          }}
        >
          {word}
        </span>
        <span style={{ userSelect: 'none' }}>&nbsp;</span>
      </span>
    );
  });

  return (
    <div style={{ position: 'relative' }}>
      {!props.typeStarted ? <StartTimer /> : null}
      <div style={props.typeStarted ? null : bluredText}>{Words}</div>
    </div>
  );
};

Text.propTypes = {
  active: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
};

export default Text;
