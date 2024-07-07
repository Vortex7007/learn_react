import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert = (type, message)=>{
    setAlert({
      typ:type,
      msg:message
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#061d3f";
      showAlert("success","Dark mode has been enabled");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("success","Light mode has been enabled");
    }
  }
  return (
    <>
<Navbar title="TextUtils" aboutText="acordion" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
<div className='container'>
  {/* <About/>     */}
</div>
    </>
  );
}

export default App;
