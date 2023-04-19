import React, { useState } from 'react';


const AddPostEntryForm = (props) => {
    
    const [post, makePost] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            post: makePost,
            date: setDate
        };
        console.log(newPost);
        props.addNewEntryProperty(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Post</label>
            <input type='text' value={post} onChange={(event) => makePost(event.target.value)} />
            <label>Date</label> 
            <input type='date' value={date}onChange={(event) => setDate(event.target.value)} />
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddPostEntryForm;