
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
          {props.parentEntries.map((entry, index) => {
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
      );
}
 
export default EntryPostDisplay;