import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layouts from './Layouts';
import Routes from './Routes';
import './styles/App.less';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Layouts>
          <Routes />
        </Layouts>
      </BrowserRouter>
    );
  }
};

export default App;
