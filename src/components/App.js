import React, { useReducer } from 'react';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers';
import { addOne, applyNumber, changeOperation, clearDisplay } from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const operators = ["+","-","*","/"];

  const onClick = (evt) => {
    const value = evt.target.value;
    let test = "";

    Number.isInteger(parseInt(value)) ? test = "number" 
    : operators.includes(value) ? test = "operator"
    : test = value;

    switch (test) {
      case "number":
        return dispatch(applyNumber(parseInt(value)));
      case "CE":
        return dispatch(clearDisplay());
      case "operator":
        return dispatch(changeOperation(value));
    }
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={onClick} value={1}/>
              <CalcButton onClick={onClick} value={2}/>
              <CalcButton onClick={onClick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={onClick} value={4}/>
              <CalcButton onClick={onClick} value={5}/>
              <CalcButton onClick={onClick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={onClick} value={7}/>
              <CalcButton onClick={onClick} value={8}/>
              <CalcButton onClick={onClick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={onClick} value={"+"}/>
              <CalcButton onClick={onClick} value={"*"}/>
              <CalcButton onClick={onClick} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={onClick} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
