import React from 'react';
import logo from './logo.svg';

import Button, {ButtonType, ButtonSize} from './components/Button/button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div>
          <Button  size='lg' btnType='danger' >button</Button>

          <Button  size='sm'>button</Button>

          <Button  btnType='danger' disabled>button</Button>

          <Button  btnType='link'>button</Button>

          <Button  btnType='primary'>button</Button>

          <Button  btnType='link' disabled>button</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
