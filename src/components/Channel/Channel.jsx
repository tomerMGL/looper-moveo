import React from 'react';
import { useState, useEffect } from 'react';
import './Channel.css';

const Channel = (props) => {
    
    const [audioChannel, setAudioChannel] = useState( new Audio(props.sound) );

    const mute = () => audioChannel.muted = true;
    const unMute = () => audioChannel.muted = false;
    const playChannel = () => audioChannel.play();
    const stopChannel = () => {audioChannel.pause(); audioChannel.currentTime=0;};

    
    useEffect(() => {
        
        props.isPlaying?playChannel():stopChannel();

    }, [props.isPlaying])

    useEffect(() => {
        audioChannel.loop=props.loop;
    }, [props.loop])
    
    
    
    


    


  return (
    <div id='rootChannel' style={{ backgroundColor:props.backColor }} draggable={'true'}>


        <div className="audioContainer" style={{ width:audioChannel.duration+'%' }} />

        {props.value}
                    
        <label className="switch">
                <input type="checkbox" onClick={()=>{
                    if(audioChannel.muted===false)
                        mute();
                    else
                        unMute()
                }} />

                <span className="slider round"></span>
                
            </label>

    </div>
  )
}

export default Channel