import LikeDislike from "../Like and Dislike/LikeAndDislike";

const EntryPostDisplay = (props) => {
    return (
    <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Post</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentPosts.map((entry, index) => {
            return (
              <tr>
                <td>{index + 1}</td> 
                <td>{entry.post}</td>
                <td>{entry.date}</td>
                <td><LikeDislike></LikeDislike></td>
              </tr>
            );
          })}
        </tbody>
    </table>
      );
}
 
export default EntryPostDisplay;