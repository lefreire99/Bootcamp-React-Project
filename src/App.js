import { createContext, useReducer, useState } from 'react';
import { actionContext, actionStateContext, showContext,stateContext } from './Context';
import { actionsReducer } from './ActionReducer';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Orden from './Orden';

function App() {

  const initialValues = {
    shows:[true,false,false,false],
    general_form:{
      cliente:{},
      vehiculo:{},
      servicios:[]
    }
  };
  const [tasks, dispatch] = useReducer(actionsReducer,initialValues)

  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Car Shop</a>
        </div>
      </nav>
      <div className='container'>
        <div className='row justify-content-center mt-3'>
          <showContext.Provider value={tasks}>
            <stateContext.Provider value={dispatch}>
              {tasks.shows[0] && (<Form1/>)}
              {tasks.shows[1] && (<Form2/>)}
              {tasks.shows[2] && (<Form3/>)}
              {tasks.shows[3] && (<Orden/>)}
            </stateContext.Provider>
          </showContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
