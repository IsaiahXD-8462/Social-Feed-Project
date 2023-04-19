import React, { useState } from 'react';
import ImagePresenter from './components/ImagePresenter';
import tumblr_bouncing_rainbow_heart from "./asset/tumblr_bouncing_rainbow_heart.gif"
import tumblr_figure_8_rainbow_heart from "./asset/tumblr_figure_8_rainbow_heart.gif"

function App() {

  const [entries, setEntries] = useState([{Post: "I love you!", Date: '02/14/2022'}])

  return (
    <div>
      Hello World!!
      <ImagePresenter image = {tumblr_bouncing_rainbow_heart} altText = "Gif of the rainbow"/>
      <ImagePresenter image = {tumblr_figure_8_rainbow_heart} altText = "Gif of the rainbow"/>
      <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Post</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            return (
              <tr>
                <td>(index + 1)</td> 
                <td>(entry.post)</td>
                <td>(entry.date)</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* ImagePresenter() */}
    </div>
  );
}

export default App;
