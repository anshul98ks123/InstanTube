import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyCo-LDlAlQPXQr_rFHPf_C0KvnRC7-nnbw';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         videos: [],
         selectedVideo: null
      };
      this.videoSearch('');
   }

   videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
         this.setState({
            videos: videos,
            selectedVideo: videos[0]
         });
      });
   }

   render() {
      // it means videoSearch can only be called once every 300ms at max
      const VideoSearch = _.debounce((term) => this.videoSearch(term) , 300);
      return (
         <div>
            <SearchBar onSearchTermChange={ VideoSearch } />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
               onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
               videos={this.state.videos}/>
         </div>
      );
   };
}

ReactDom.render(<App/>, document.querySelector('.container'));