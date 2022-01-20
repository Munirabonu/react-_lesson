import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextContainer from './context';
ReactDOM.render(
  <React.StrictMode>
    <ContextContainer>
        <App />
    </ContextContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
