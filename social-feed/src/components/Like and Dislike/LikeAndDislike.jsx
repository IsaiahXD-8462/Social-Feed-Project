import React, { useState } from 'react';

const LikeDislike = (props) => {
    
    const [likeButtonClass, setLikeButtonClass] = useState("inactive")
    const [DislikeButtonClass, setDislikeButtonClass] = useState("inactive") 
    
    function handleLike(){
        if(likeButtonClass === "inactive") {
            setLikeButtonClass("active") && setDislikeButtonClass("inactive");
        }
        else {
            setLikeButtonClass("inactive");
        }
    }

    function handleDislike(){
        if(DislikeButtonClass === "inactive") {
            setDislikeButtonClass("active") && setLikeButtonClass("inactive");
        }
        else {
            setDislikeButtonClass("inactive");
        }    
    }

        return ( 
        <div>
            <button className={likeButtonClass} onClick={handleLike}>Like</button>
            <button className={DislikeButtonClass} onClick={handleDislike}>Dislike</button> 
        </div>
     );
}
 
export default LikeDislike;