
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";
const App = () => {
  return (
    <div>
        <Tabs 
          list = {[
            {title: 'Tab', content: 1},
            {title: 'Tab', content: 2},
            {title: 'Tab', content: 3},
          ]}
          key={1}
        />
        <Tabs
          list = {[
            {title: 'Tab', content: 'A'},
            {title: 'Tab', content: 'B'},
            {title: 'Tab', content: 'C'},
          ]}
          key={2}
        />
    </div>
  )
}

export default App
