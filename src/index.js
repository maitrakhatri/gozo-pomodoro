import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TimerProvider } from './Context/TimerContext';
import { TaskProvider } from './Context/TaskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimerProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </TimerProvider>
  </React.StrictMode>
);
