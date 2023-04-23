import React, { useState } from 'react';
import ImagePresenter from './components/Image Presenter/ImagePresenter';
import tumblr_bouncing_rainbow_heart from "./asset/tumblr_bouncing_rainbow_heart.gif"
import tumblr_figure_8_rainbow_heart from "./asset/tumblr_figure_8_rainbow_heart.gif"
import EntryPostDisplay from './components/Entry Post Display/EntryPostDisplay';
import AddPostEntryForm from './components/Add Post Entry/AddPostEntryForm';
import LikeDislike from './components/Like and Dislike/LikeAndDislike';

function App() {

  const [posts, setPosts] = useState([{post: "I love you!", date: '02/14/2022'}])

  function addNewPost(post){
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }

  return (
    <div>
      Rainbow Posts
      <ImagePresenter image = {tumblr_bouncing_rainbow_heart} altText = "Gif of the rainbow"/>
      <AddPostEntryForm addNewEntryProperty={addNewPost} />
      <EntryPostDisplay parentPosts={posts} />
      <ImagePresenter image = {tumblr_figure_8_rainbow_heart} altText = "Gif of the rainbow"/>
      {/* ImagePresenter() */}
    </div>
  );
}

export default App;
