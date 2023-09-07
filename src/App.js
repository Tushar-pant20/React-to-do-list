import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const inputfield = document.getElementById('input');

  const [inputList,setInputList] = useState('');

  const [items,setItems] = useState([]);

  const update = (e) => {
    setInputList(e.target.value);
  }

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList('');
    inputfield.focus();
  }

  const deleteItem = (id) => {
    
    setItems((oldItems) => {
      return oldItems.filter((arrayElem,index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <br/> 
        <h1>To-Do List</h1>
        <br/>
        <input type='text' id='input' value={inputList} onChange={update} autoFocus placeholder='add item'/>
        <button onClick={addItem}> + </button>

        <ol>
          {/* <li>{inputList}</li> */}
          {items.map((itemval, index) => {
            return <li key={index}> <span onClick={() => deleteItem(index)}>&#x2716;</span> {itemval}</li>
          })
          }  
        </ol>
      </div>
    </div>
  );
}

export default App;
