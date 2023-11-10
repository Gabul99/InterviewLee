import React from 'react';
import { Routes } from './router/Routes';
import { QuestionProvider } from './context/Question';

function App() {
  return (
    <QuestionProvider>
      <Routes />
    </QuestionProvider>
  );
}

export default App;
