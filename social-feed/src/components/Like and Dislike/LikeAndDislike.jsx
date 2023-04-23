import React, { useState } from 'react';

const LikeDislike = (props) => {
    
    const [likeButtonClass, setLikeButtonClass] = useState("inactive", "active")
    const [DislikeButtonClass, setDislikeButtonClass] = useState("disable", "able") 
    
    function handleLike(){
        if(likeButtonClass === "inactive") {
            setLikeButtonClass("active") && setDislikeButtonClass("disable");
        }
        else {
            setLikeButtonClass("inactive");
        }
    }

    function handleDislike(){
        if(DislikeButtonClass === "disable") {
            setDislikeButtonClass("able") && setLikeButtonClass("inactive");
        }
        else {
            setDislikeButtonClass("disable");
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