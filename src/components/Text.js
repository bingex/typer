import React from 'react';

const activeStyle = {
  color: 'green',
  textDecoration: 'underline'
};

const inlineBlock = {
  display: 'inline-block'
};

const Text = props => {
  const Words = props.data.map((word, index) => {
    return (
      <span key={index} style={inlineBlock}>
        <span style={index === props.active ? activeStyle : null}>
          {word}
        </span>
        <span>&nbsp;</span>
      </span>
    );
  });

  return <div>{Words}</div>;
};

Text.propTypes = {
  active: React.PropTypes.number.isRequired,
  data: React.PropTypes.array.isRequired
};

export default Text;
