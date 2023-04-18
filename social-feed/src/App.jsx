import React from 'react';
import ImagePresenter from './components/ImagePresenter';
import tumblr_bouncing_rainbow_heart from "./asset/tumblr_bouncing_rainbow_heart.gif"
import tumblr_figure_8_rainbow_heart from "./asset/tumblr_figure_8_rainbow_heart.gif"

function App() {
  return (
    <div>
      Hello World!!
      <ImagePresenter image = {tumblr_bouncing_rainbow_heart} altText = "Gif of the rainbow"/>
      <ImagePresenter image = {tumblr_figure_8_rainbow_heart} altText = "Gif of the rainbow"/>
      {/* ImagePresenter() */}
    </div>
  );
}

export default App;
