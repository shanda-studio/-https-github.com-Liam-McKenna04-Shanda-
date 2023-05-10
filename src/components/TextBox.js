import React, {useState} from 'react';
import './TextBox.css'

export default function TextBox({text})  {
  const [TextBoxText, setTextBoxText] = useState(text);

  function handleTextChange(event) {
    setTextBoxText(event.target.value);
  }

   return (
    <textarea className="text-box"
      value={TextBoxText}
      onChange={handleTextChange}
    />
  );
  }
