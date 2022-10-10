import React from 'react';

const VideoItem = (props) => 
        <li className="video">
            <span className="desc">{props.title}</span>
        </li>;

export default VideoItem;