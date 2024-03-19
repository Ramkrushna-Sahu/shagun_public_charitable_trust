import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataState from './Context/FetchData/DataState';
import DeleteState from './Context/DeleteData/DeleteState';
import LoadingState from './Context/LoadingAnimation/LoadingState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingState>
      <DataState>
        <DeleteState>
          <App />
        </DeleteState>

      </DataState></LoadingState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
