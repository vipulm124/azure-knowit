/* global chrome */

import { useState } from 'react'
import './App.css'
import logo from '../assets/azure_logo.png'
import { CustomInput } from '../src/components/input'
import { chromeHelper } from './utilities/chrome-helper';


function App() {
  const [count, setCount] = useState(0)
  const [apiKey, setApiKey ] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const onApiSave = async() =>{
    const { setApiKeyValue } = chromeHelper()
    await setApiKeyValue(apiKey)
    setIsSaved(true)
  }
  
  

  const handleApiKeyChange = (newValue) =>{
    setApiKey(newValue)
  }


  return (
    <div className='background-popup'>
      <div>
        <img src={logo} className="logo" alt="Vite logo" />
      </div>
      <p>
        <label className="home-label">What's This?</label>
      </p>

      <div className="form-container">
        <label htmlFor="inputField">Your API Key</label>
        <CustomInput type="text" id="apikeyinput" placeholderText="Enter your open api key" onChange={handleApiKeyChange}/>
        <button className="save-button" onClick={onApiSave}>Save</button>
        {/* <button className="save-button" onClick={onApiFetch}>Fetch</button> */}

         { isSaved && <label className='saved-label'>Api key saved successfully</label>}
      </div>




    </div>
  )
}

export default App
