import React from 'react';

// grabs props.video and stores in video
const VideoListItem = ( {video, onVideoSelect } ) => {
   const imageUrl = video.snippet.thumbnails.default.url;
   return (
      <li onClick={() => onVideoSelect(video) } className="list-group-item" >
         <div className="video-ist media">
            <div className="media-left">
               <img src={imageUrl} className="media-object"/>
            </div>
            <div className="media-body">
               <h6 className="media-heading">
                  {video.snippet.title.slice(0,45)}..
               </h6>
               <p>
                  {video.snippet.description.slice(0,75)}..
               </p>
            </div>
         </div>
      </li>
   );
};

export default VideoListItem;