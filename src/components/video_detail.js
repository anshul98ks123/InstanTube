import React from 'react';

const VideoDetail = ( {video} ) => {
   if(!video){
      // till video is loaded, we show loading...
      return <div>Loading...</div>;
   }

   console.log(video);

   const videoId = video.id.videoId;
   const url = `https://www.youtube.com/embed/${videoId}`;

   return (
      <div className="video-detail col-lg-8 col-sm-12" id="videoBox">
         <div className="embed-responsive embed-responsive-16by9">
            <iframe allowFullScreen="allowFullScreen" className="embed-responsive-tem" src={url}>
            </iframe>
         </div>
         <div className="details">
            <h4>{video.snippet.title}</h4>
            <div>{video.snippet.description}</div>
         </div>
      </div>
   )
};

export default VideoDetail;