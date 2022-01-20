import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';



createServer({
  models: {
    transaction: Model,
  },

  /*Para carregar a tela inicial com o grid ja carregado */
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'freela',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-08-31 17:00:00'),
        },
        {
          id:2,
          title:'Aluguel',
          type:'whitdraw',
          category:'Casa',
          amount:1100,
          createdAt: new Date('2021-08-31 17:00:00'),
        }
      ],
    })
  },

  routes(){
    /*lá no meu fetch estou dizendo para começar a entender do /api */
    this.namespace ='api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })

  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
