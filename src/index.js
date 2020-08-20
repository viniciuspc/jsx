// Import the Reac and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = function() {
  const buttonText = {text:  'Click me'}
  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor:'blue', color:'white'}} >
        {/*We cannot put an JSON Object inside an element as a children it will throw an error.*/}
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
