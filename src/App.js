import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#061d3f";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
<Navbar title="TextUtils" aboutText="acordion" mode={mode} toggleMode={toggleMode}/>
  <TextForm heading="Enter text to analyze" mode={mode}/>
<div className='container'>
  {/* <About/>     */}
</div>
    </>
  );
}

export default App;
