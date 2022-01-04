import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseapp = initializeApp({
  apiKey: 'AIzaSyBizHhdYd_S77MfJnljhXOggveVcoCqIMM',

  authDomain: 'alatoo-news.firebaseapp.com',

  databaseURL: 'https://alatoo-news-default-rtdb.firebaseio.com',

  projectId: 'alatoo-news',

  storageBucket: 'alatoo-news.appspot.com',

  messagingSenderId: '1056054197047',

  appId: '1:1056054197047:web:50d69dc17f547a5e6278b2',

  measurementId: 'G-44DKBT1L8F',
});

export const auth = getAuth(firebaseapp);
