import {useEffect, useState} from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() =>{ 
    youtube.mostPopular()
      .then((videos) => setVideos(videos));
  }, []);

  const search = (keyword) => {
    youtube.search(keyword)
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
    });
  }

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  return <div className={styles.app}>
    <SearchHeader onSearch = {search} />
    <section className={styles.content}>
    {
      selectedVideo && <div className={styles.detail}> 
          <VideoDetail video={selectedVideo} 
          />
      </div>
    }
      <div className={styles.list}>
        <VideoList videos={videos}
          onVideoClick={selectVideo}
          display={selectedVideo ? 'list' : 'grid'}
        />
      </div>
    </section>
  </div>;
}

export default App;