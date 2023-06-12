import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import CounterWhithCustomHook from './01-useState/CounterWhithCustomHook';
//import SimpleForm from './02-useEffect/SimpleForm';
//import CounterApp from './01-useState/CounterApp';
//import { HookApp } from './HookApp';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';


ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    <FormWithCustomHook />
  //</React.StrictMode>,
)
