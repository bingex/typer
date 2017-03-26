import React from 'react';
import demoText from './../DemoText';

const textArr = demoText.split(' ');
const Words = textArr.map((word, index) => {
  return (
    <span key={index} style={{ display: 'inline-block' }}>
      <span>{word}</span>
      <span>&nbsp;</span>
    </span>
  );
});

class Text extends React.Component {
  render() {
    return <div>{Words}</div>;
  }
}

export default Text;
