import React, {useState} from "react";
import { Blurhash } from 'react-blurhash';

import "../../../css/lastplayed.css";

function formatTime(time) {
  
    const units = {
      days: ['Day', 'Days'],
      hours: ['Hour', 'Hours'],
      minutes: ['Minute', 'Minutes'],
      seconds: ['Second', 'Seconds']
    };
    
    let formattedTime = '';
  
    if (time.days) {
      formattedTime = `${time.days} ${units.days[time.days > 1 ? 1 : 0]}`;
    } else if (time.hours) {
      formattedTime = `${time.hours} ${units.hours[time.hours > 1 ? 1 : 0]}`;
    } else if (time.minutes) {
      formattedTime = `${time.minutes} ${units.minutes[time.minutes > 1 ? 1 : 0]}`;
    } else {
      formattedTime = `${time.seconds} ${units.seconds[time.seconds > 1 ? 1 : 0]}`;
    }
  
    return `${formattedTime} ago`;
  }
  

function LastPlayedItem(props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="last-card">
      <div className="last-card-banner">
        {loaded ? null : <Blurhash hash={props.data.PrimaryImageHash} width={'100%'}   height={'100%'}/>}
        <img
          src={
            `${
              props.base_url +
                "/Items/" +
                props.data.Id +
                "/Images/Primary?fillHeight=320&fillWidth=213&quality=50"}`
          }
          onLoad={() => setLoaded(true)}
          alt=""
          style={loaded ? { backgroundImage: `url(path/to/image.jpg)` } : { display: 'none' }}
        />
      </div>

      <div className="last-item-details">
        <div className="last-last-played">
          {formatTime(props.data.LastPlayed)} 
        </div>
        <div className="last-item-name"> {props.data.Name}</div>
        <div className="last-item-episode"> {props.data.EpisodeName}</div>
      </div>
      {props.data.SeasonNumber ?
         <div className="last-item-episode number"> S{props.data.SeasonNumber} -  E{props.data.EpisodeNumber}</div>:
         <></>
        }
      
    </div>
  );
}

export default LastPlayedItem;
