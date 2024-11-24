import React, { FunctionComponent, useState } from "react"
import './content.css'
import {CloudAlert} from 'lucide-react';
import Infobox from "./Infobox";
import { test, MakeOpenApiCall } from '../openai/openai';
import Loader from './Loader';

type ContentScriptProps = {
    resourceCreationHeading:string
}


const ContentScript: React.FC<ContentScriptProps> = ({resourceCreationHeading}) => {
    const [showChatBox, setShowChatBox] = useState(false)
    const [chatBoxContent, setChatBoxContent] = useState('')
    const [loading, setLoading] = useState(false);

    const divClick = async() =>{
        setLoading(true)
        setShowChatBox(true)

        const chatResponse = await MakeOpenApiCall(resourceCreationHeading)

        if (typeof(chatResponse) == 'string'){
            setChatBoxContent(chatResponse)
        }
        else{
            setChatBoxContent(String(chatResponse))
        }
        setLoading(false)

    }

    const onChatClose = () =>{
        setShowChatBox(false)
    }
    
    return (
        <>
 
        {showChatBox ?
        
            loading ? <Loader/> :<Infobox chatContentString={chatBoxContent} onChatClose={onChatClose}/>
        
        : 
        <div className="chat-icon-div" onClick={divClick}>
                <CloudAlert className="azure-color font-sync" /> 
                <label className="azure-color font-sync">What's this resource?</label>
                
        </div>

}
        </>
    )
}

export default ContentScript