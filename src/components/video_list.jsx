import React from 'react';
import VideoItem from './video_item';

const VideoList = (props) =>
    <ul className="videos">
        { props.videos.map((video) => <VideoItem 
            key={video.id}
            title={video.snippet.title} />)
        }
    </ul>;

export default VideoList;