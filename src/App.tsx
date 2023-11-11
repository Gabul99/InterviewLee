import React from 'react';
import { Routes } from './router/Routes';
import { QuestionProvider } from './context/Question';
import { AuthProvider } from './context/Auth';

function App() {
  return (
    <AuthProvider>
      <QuestionProvider>
        <Routes />
      </QuestionProvider>
    </AuthProvider>
  );
}

export default App;
