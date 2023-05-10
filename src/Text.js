import React, { useState, useEffect } from 'react';
import TextBox from './components/TextBox';


export default function Text({formData, setFormData}) {
  //const { location } = props;
 //const { data } = location.state;

 
  // to access props:
  // const { propName } = props.location.state;
  // Use propName in your component
  return (
    <div className ="page">
    <div>
      <aside className = "sidebar">
         <a className = "sidebarLink" href="/">Dashboard</a>
         <a className = "sidebarLink" href="https://medium.com/@georgetownventures/how-a-georgetown-mba-students-love-frustration-in-podcasting-led-to-the-creation-of-shanda-18757ee698d2">Medium</a>
         <a className = "sidebarLink" href="https://www.linkedin.com/in/dumi-mabhena/">Dumi's LinkedIn</a>
         <a className = "sidebarLink" href="https://shanda.studio">Shanda Website</a>
      </aside>
    </div>
    <div className = "main">
       <div className= "column">
          <div className = "textbox-heading">Mini Blog</div>
          <div className = "textbox"><TextBox text = {formData.MiniBlog}/></div>
          <div className = "textbox-heading">Summary</div>
          <div className = "textbox"><TextBox text = {formData.MiniBlog}/></div>
       </div>
       <div className= "column">
          <div className = "textbox-heading">Description</div>
          <div className = "textbox"><TextBox text = {formData.description}/></div>
          <div className = "textbox-heading">Takeaways</div>
          <div className = "textbox"><TextBox text = {formData.takeaways}/></div>
       </div>
   </div>
</div>
  )
}
