import React from 'react';
import { RestyProvider } from '../../hooks/Provider';
import Header from '../Header/Header';
import Main from '../Main/Main';

export default function App() {
  return (
    <RestyProvider>
      <Header/>
      <Main />
    </RestyProvider>
  );
}
