import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils//constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import useCorrelation from "../utils/usecorrelation";

const VideoContainer = () => {
  const corr = useCorrelation();
  console.log("corr", corr);
  const correlation = useSelector(store => store.app.correlation);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const headers = {
      "X-Correlation-ID": correlation.id,
    };
    console.log(correlation.id);
   //const data = await fetch(YOUTUBE_VIDEOS_API);
    const data = await fetch("http://localhost:4000/video-list", { headers });
    console.log("videoList", data);
    const json = await data.json();
    console.log("videos object array", json.type.items);
    console.log("videos object end");
    setVideos(json.type.items);
  }

  useEffect(() => {
    if (!videos.length) {
      getVideos();
    }
  }, [videos]);

  return (
    <div className='flex flex-wrap'>
     <Link to={"/"}>check</Link>
      {videos.map((video, index) => (
        <><Link to={"/watch?v=" + video.id } key={video.etag}><VideoCard key={video.etag} info={video} />
        </Link></>
      ))}
    </div>
  );
}

export default VideoContainer;
