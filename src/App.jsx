//import part
import React from 'react';
import CompA from './Components/CompA/Header';
import CompB from './Components/CompB/Content';
import CompC from './Components/CompC/Footer';
const App = () => {
  //js part
  const Batch = "FSD-WD-T-B-21"
  return (
    //html part
    <>
    {Batch}
     <CompA />
     <CompB />
     <CompC />
    </>
  );
};
//export part
export default App;