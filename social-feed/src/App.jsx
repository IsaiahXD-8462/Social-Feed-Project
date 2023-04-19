import React, { useState } from 'react';
import ImagePresenter from './components/ImagePresenter';
import tumblr_bouncing_rainbow_heart from "./asset/tumblr_bouncing_rainbow_heart.gif"
import tumblr_figure_8_rainbow_heart from "./asset/tumblr_figure_8_rainbow_heart.gif"
import EntryPostDisplay from './components/Entry Post Display/EntryPostDisplay';
import AddPostEntryForm from './components/Add Post Entry/AddPostEntryForm';
import EntriesChartTracker from './components/Entries Chart Tracker/EntriesChartTracker'

function App() {

  const [posts, setPosts] = useState([{Post: "I love you!", Date: '02/14/2022'}])

  function addNewPost(post){
    let tempPosts = [...post, post];

    setPosts(tempPosts);
  }

  return (
    <div>
      Hello World!!
      <ImagePresenter image = {tumblr_bouncing_rainbow_heart} altText = "Gif of the rainbow"/>
      <ImagePresenter image = {tumblr_figure_8_rainbow_heart} altText = "Gif of the rainbow"/>
      <EntryPostDisplay parentPosts={posts} />
      <AddPostEntryForm addNewEntryProperty={addNewPost} />
      <EntriesChartTracker />
      {/* ImagePresenter() */}
    </div>
  );
}

export default App;
