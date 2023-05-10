import {Link} from 'react-router-dom'
import { encode } from 'base-64'
import Text from './Text';
import {Routes, Route, useNavigate} from 'react-router-dom'
// import {Button} from 'reactstrap';
import React, { useState, useEffect } from 'react';

// ```jsx
// import { encode } from 'base-64'

// // Define the URL of your AWS Lambda function
// const url = 'https://8fvmc6xrz1.execute-api.ap-northeast-1.amazonaws.com/testingFun'

// // Read the VTT file as bytes
// const fileUri = '/content/1.vtt'
// const response = await fetch(fileUri)
// const fileContent = await response.arrayBuffer()

// // Encode the file as base64
// const fileContentBase64 = encode(fileContent)

// // Define the parameters to pass to your Lambda function
// const params = {
//   file: fileContentBase64,
// }

// // Make a POST request to your Lambda function with the VTT file as a base64-encoded parameter
// const response = await fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(params),
// })

// // Print the response from the Lambda function
// console.log(await response.text())
// ```
export default function Input({formData, setFormData}) {
  //const [formData, setFormData] = useState({ miniblog: '', summarization: '', description: '', takeaways: '', title: '' });
  const [gotResponse, setGotResponse] = useState(false)
  //const [responseData, setResponseData] = useState({});

    const handleSubmit = async(e) => {
        //handler that calls the api that transcribes the video 

        console.log(e)
        const fileUri = e.target.files[0];
        const fileContent = await fileUri.arrayBuffer()
        const fileContentBase64 = encode(fileContent)
        // console.log(fileContentBase64)
        const formData = new FormData();
        formData.append('file', fileUri);

        const params = {
            file: fileContent,
        }
        console.log(formData)
        const response = await fetch('https://bstbgsgy2g7o5x7q6ejgjr7u6q0dhhgj.lambda-url.ap-northeast-1.on.aws', {
        method: 'POST',
        // headers: {
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET, POST',
          // 'Access-Control-Allow-Headers': 'Content-Type',
          // 'Access-Control-Allow-Credentials': true
        // },
        body: formData
        })
        .then(response => response.json())
        .then(
          data => {
            setFormData(data);
            setGotResponse(true)
          }
        )
        //.then(data => setFormData(data))   
    }

    function MyLink(props) {
      const { to, ...rest } = props; // use rest operator to pass other props
      return (
        <Link to={{pathname: to}} {...rest}></Link>
      );
    }
    
    useEffect(() => {
      console.log(formData);
      
    }, [formData]);
    
  return (
    <div className = "input-file">
        <h1 className = "input-description">Shanda is a solution for podcasters or potential podcasters that uses machine learning to automatically edit zoom recordings into a fully edited podcast with social media content to grow your audience.</h1>
        <iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/QdwQhFlPL70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1>Get started for free!</h1>
        <label class="vtt-bttn">
          <input onChange={handleSubmit} type="file"/>
          Custom Upload
        </label>
        {/* <button>example button that sets state using setState, this will update the text in real time</button> */}
        {gotResponse ? <Link className = "input-button" to={{ pathname: '/text' }}>Submit</Link>: null}
    </div>
  )
}
