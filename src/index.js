import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

import store from './store.js'
import Game from './Game';

import './index.css';

const target = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Game />
    </div>
  </Provider>,
  target
)

registerServiceWorker()
