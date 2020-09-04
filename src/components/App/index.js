import React, {useState, useEffect} from 'react';
import Button from '../Button/index';

import './App.css';

const App = () => {

  const [time, setTime] = useState("");
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonPress = content => () => {
    const num = parseFloat(value);
    

    if(content === 'AC') {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }
    if(content === '±') {
      setValue((num * -1).toString());
      setMemory(null);
      return;
    }

    if(content === '%') {
      
      if(operator === "+") {
        setValue(((num / 100) * memory).toString());
      } else if(operator === "-") {
        setValue(((num / 100) * memory).toString());
      } else if(operator === "×") {
        setValue(((num / 100) * memory).toString());
      } else if(operator === "÷") {
        setValue(((num / 100) * memory).toString());
      } 
      
      else {
        setValue((num / 100).toString());
      }
      return;
    }

    if (content === ".") {
      if(value.includes(".")) return;
      setValue(value + ".");
      return;
    }

    if(content === '+' ) {
      if(operator !== null) {
        if(operator === "+") {
          setMemory((memory + parseFloat(value)));
        } else if(operator === "-") {
          setMemory((memory - parseFloat(value)));
        } else if(operator === "×") {
          setMemory((memory * parseFloat(value)));
        } else if(operator === "÷") {
          setMemory((memory / parseFloat(value)));
        }
      } else {
          setMemory(parseFloat(value));
        }
      
      setValue('0');
      setOperator('+');
      return;
    }

    if(content === '-' ) {
      if(operator !== null) {
        if(operator === "+") {
          setMemory((memory + parseFloat(value)));
        } else if(operator === "-") {
          setMemory((memory - parseFloat(value)));
        } else if(operator === "×") {
          setMemory((memory * parseFloat(value)));
        } else if(operator === "÷") {
          setMemory((memory / parseFloat(value)));
        }
      } else {
          setMemory(parseFloat(value));
        }
      setValue('0');
      setOperator('-');
      return;
    }

    if(content === '×' ) {
      if(operator !== null) {
        if(operator === "+") {
          setMemory((memory + parseFloat(value)));
        } else if(operator === "-") {
          setMemory((memory - parseFloat(value)));
        } else if(operator === "×") {
          setMemory((memory * parseFloat(value)));
        } else if(operator === "÷") {
          setMemory((memory / parseFloat(value)));
        }
      } else {
          setMemory(parseFloat(value));
        }
      setValue('0');
      setOperator('×');
      return;
    }

    if(content === '÷' ) {
      if(operator !== null) {
        if(operator === "+") {
          setMemory((memory + parseFloat(value)));
        } else if(operator === "-") {
          setMemory((memory - parseFloat(value)));
        } else if(operator === "×") {
          setMemory((memory * parseFloat(value)));
        } else if(operator === "÷") {
          setMemory((memory / parseFloat(value)));
          
        }
      } else {
          setMemory(parseFloat(value));
        }
      setValue('0');
      setOperator('÷');
      return;
    }

    if(content === '=' ) { 
      if(!operator) return;

      if(operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "-") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      } else if (operator === "%") {
        setValue(((memory / 100) - parseFloat(value)).toString());
      } 

      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  }


  useEffect( () => {
    setTimeout(() => {
      setTime(`
        ${new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()}:
        ${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes() }:
        ${new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds() }
      `);
    }, 1000);

  });

  return (
    <div className="App">
    <div className="top">{time}</div>
      <div className="display">{value}</div>
      <div className="buttons">
        <Button onButtonClick={handleButtonPress} content="AC" type="function"/>
        <Button onButtonClick={handleButtonPress} content="±" type="function"/>
        <Button onButtonClick={handleButtonPress} content="%" type="operator"/>
        <Button onButtonClick={handleButtonPress} content="÷" type="operator"/>
        <Button onButtonClick={handleButtonPress} content="7"/>
        <Button onButtonClick={handleButtonPress} content="8"/>
        <Button onButtonClick={handleButtonPress} content="9"/>
        <Button onButtonClick={handleButtonPress} content="×" type="operator"/>
        <Button onButtonClick={handleButtonPress} content="4"/>
        <Button onButtonClick={handleButtonPress} content="5"/>
        <Button onButtonClick={handleButtonPress} content="6"/>
        <Button onButtonClick={handleButtonPress} content="-" type="operator"/>
        <Button onButtonClick={handleButtonPress} content="1"/>
        <Button onButtonClick={handleButtonPress} content="2"/>
        <Button onButtonClick={handleButtonPress} content="3"/>
        <Button onButtonClick={handleButtonPress} content="+" type="operator"/>
        <Button onButtonClick={handleButtonPress} content="0"/>
        <Button onButtonClick={handleButtonPress} content="."/>
        <Button onButtonClick={handleButtonPress} content="=" type="operator"/>
      </div>
    </div>
  ); 
}

export default App;