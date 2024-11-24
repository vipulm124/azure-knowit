import React, { FunctionComponent } from 'react'
import './content.css'
import {XIcon} from 'lucide-react';
import { test } from '../openai/openai';

type InfoboxProps = {
  chatContentString: string,
  onChatClose: () => void
}

const Infobox: React.FC<InfoboxProps> = ({chatContentString, onChatClose}) => {

  const renderContentWithLineBreaks = (contentString) => {
    return contentString.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  };
  
  return (
    <div className="chat-box-div">
      <XIcon className='chat-close-icon' onClick={onChatClose}/>
      <div className='chat-box-div-box azure-color font-sync"'>

     {renderContentWithLineBreaks(chatContentString)}

    </div>
</div>
  )
}

export default Infobox