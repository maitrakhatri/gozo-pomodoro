import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TimerProvider } from './Context/TimerContext';
import { TaskProvider } from './Context/TaskContext';
import { UniConProvider } from './Context/UniversalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UniConProvider>
      <TimerProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </TimerProvider>
    </UniConProvider>
  </React.StrictMode>
);
