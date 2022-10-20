import  styles from './App.module.css'
import './global.css';
import { api } from './api/api'
import { useEffect, useState } from 'react';
import cors from 'cors'

export function App() {

  const getCryptos = async () => {
    await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    method: 'GET',
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
       'X-CMC_PRO_API_KEY': 'f9165c74-a4f1-4a60-9513-69fe6c2dcc42',
       'Access-Control-Allow-Origin': '*',
    },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //  setPosts((posts) => [data, ...posts]);
      //  setTitle('');
      //  setBody('');
    })
    .catch((err) => {
       console.log(err.message);
    });
  };

  useEffect(() => {
    getCryptos();
  }, [])
 
  return (
    <div className={styles.wrapper}>
      <h1>Hello First React Vite</h1>
    </div>
  )
}

