import './App.css';
import Channel from './components/Channel/Channel'
import a from './loop_files/_tambourine_shake_higher.mp3';
import b from './loop_files/B VOC.mp3';
import c from './loop_files/DRUMS.mp3';
import d from './loop_files/HE HE VOC.mp3';
import e from './loop_files/HIGH VOC.mp3';
import f from './loop_files/JIBRISH.mp3';
import g from './loop_files/LEAD 1.mp3';
import h from './loop_files/UUHO VOC.mp3';
import i from './loop_files/ALL TRACK.mp3';

import React, { useState, useEffect} from 'react';


const App = () => {
  const channelColors = ['#827397','#B9F8D3','#066163','#FF8C32','#E6BA95','#525E75','#006778','#B6FFCE','#BE8C63','#8D8DAA','#6BCB77'] 
  const channelSounds = [a,b,c,d,e,f,g,h,i]
  let counterColor=0;

  const [currentTimeSecond, setcurrentTimeSecond] = useState(1);

  const [isPlay, setisPlay] = useState(false);
  const [lineWidth, setlineWidth] = useState(0);
  const [isLoop, setisLoop] = useState(false);

  const replaceIsPlay = () => setisPlay(!isPlay);
  
  useEffect(() => {
    let interval = null;

    if(isPlay){
      interval = setInterval(() => {
        setcurrentTimeSecond(sec => sec+1);
        document.getElementById('realTime').style.left = currentTimeSecond+'%';

      }, 1000);
    }
    else if(!isPlay && currentTimeSecond !== 0){
      clearInterval(interval);
      setcurrentTimeSecond(0);
    }

    return () => clearInterval(interval);

  }, [currentTimeSecond, isPlay])
  

  return (
    <div className="App">
      <div className="time">
        {currentTimeSecond} Sec
      </div>  
      <div className="timeLine">
        <hr/>
      </div>  
      <div className="channels">
        <div id="realTime"/>
        {channelSounds.map(s =>
                <Channel key={counterColor} change={replaceIsPlay} isPlaying={isPlay} loop={isLoop} backColor={channelColors[counterColor++]} sound={s} value={'Clip '+counterColor} /> 
      )}
      </div>
      
      <button onClick={()=>setisPlay(!isPlay)}>{isPlay? 'Stop':'Play'}</button>
      <button onClick={()=> setisLoop(!isLoop)}>{isLoop?'Stop Loop': 'Loop'}</button>
    </div>
  );
}

export default App;
