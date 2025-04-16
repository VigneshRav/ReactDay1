//import part
import React from 'react';
import CompA from './Components/CompA/CompA';
import CompB from './Components/CompB/CompB';
import CompC from './Components/CompC/CompC';
import Home from './Components/Home/Home';
const App = () => {
  //js part
  return (
    //html part
    <>
     <h1>App Component</h1>
     <CompA />
     <CompB />
     <CompC />
     <Home />
    </>
  );
};
//export part
export default App;