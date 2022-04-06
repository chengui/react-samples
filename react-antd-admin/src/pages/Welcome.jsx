import React from 'react';
import '../styles/Welcome.less';

class Welcome extends React.Component {
  render() {
    return (
      <div className='normal'>
        <h1 className='title'>
        </h1>
        <h3>
          Welcome Page
        </h3>
        <div className='welcome' />
      </div>
    );
  }
}

export default Welcome;
