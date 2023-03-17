import React from 'react';

const VideoCard = ({info}) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-2 shadow-lg w-80'>
      <img className = "rounded-lg" src={ thumbnails.medium.url } alt= "title image"/>
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>

  )
}

export default VideoCard