import {useEffect, useState} from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);

  useEffect(() =>{ 
    youtube.mostPopular()
      .then((videos) => setVideos(videos));
  }, []);

  const handleSearch = (keyword) => {
    youtube.search(keyword)
      .then((videos) => setVideos(videos));
  }

  return <div className={styles.app}>
    <SearchHeader onSearch = {handleSearch} />
    <VideoList videos={videos} />
  </div>;
}

export default App;