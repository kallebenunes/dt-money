import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';
import { transactions } from './api/transactions';

createServer({
  routes(){
    this.namespace = 'api'
    this.get('/transactions', () => {
      return transactions
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
