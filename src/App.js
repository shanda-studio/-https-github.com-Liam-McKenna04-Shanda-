import './App.css';
import TextBox from './components/TextBox';
import Text from './Text';
import Input from './Input';
import {Routes, Route} from 'react-router-dom'
import React, {useState} from 'react'
function App() {
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);


  return (
    <Routes>
      <Route path="/" element={<Input formData={formData} setFormData={setFormData}/>}/>
      <Route path='/text' element={<Text formData={formData} setFormData={setFormData}/>}/>
    </Routes>
  );
}

export default App;

