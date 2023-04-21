import React, { useState } from 'react';
import ImagePresenter from './components/ImagePresenter';
import tumblr_bouncing_rainbow_heart from "./asset/tumblr_bouncing_rainbow_heart.gif"
import tumblr_figure_8_rainbow_heart from "./asset/tumblr_figure_8_rainbow_heart.gif"
import EntryPostDisplay from './components/Entry Post Display/EntryPostDisplay';
import AddPostEntryForm from './components/Add Post Entry/AddPostEntryForm';
import EntriesChartTracker from './components/Entries Chart Tracker/EntriesChartTracker'
import LikeDislike from './components/Like and Dislike/LikeAndDislike';

function App() {

  const [posts, setPosts] = useState([{post: "I love you!", date: '02/14/2022'}])

  function addNewPost(post){
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }

  return (
    <div>
      Hello World!!
      <ImagePresenter image = {tumblr_bouncing_rainbow_heart} altText = "Gif of the rainbow"/>
      <ImagePresenter image = {tumblr_figure_8_rainbow_heart} altText = "Gif of the rainbow"/>
      <EntryPostDisplay parentPosts={posts} />
      <AddPostEntryForm addNewEntryProperty={addNewPost} />
      <LikeDislike />
      <EntriesChartTracker />
      
      {/* ImagePresenter() */}
    </div>
  );
}

export default App;
