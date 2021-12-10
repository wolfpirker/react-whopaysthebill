import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
// import { SwitchTransition, CSSTransition } from 'react-transition-group';


import 'animate.css';
import { useContext } from 'react'
import { MyContext } from './context';
import Screen1 from './components/screen1';
import Screen2 from './components/screen2';

const App = () => {
  const context = useContext(MyContext);

  const handleComponent = () => {
    const screen = context.state.screen;
    if (screen === 0) return <Screen1 />
    if (screen === 1) return <Screen2 />
  }

  return (
    <div className="container">
      <div>
        <h1>Who pays the bill ?</h1>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={context.state.screen}
            timeout={500}
            classNames="fade"
          >
            {handleComponent()}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

export default App;