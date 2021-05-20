import React from "react";
import Avatar from "@material-ui/core/Avatar";
import  "./Posts.css"
function Posts({username, id, caption, imageUrl}) {
  return (
    <div className="Posts__container">
      
       <div className="Posts__details">
          {/* userAvatar */}

        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="user__avatar"
        />

        {/* username */}

        <h3>{username}</h3>
     
       </div>
        

        <div className="Posts__images">
             {/* Post-Image  */}
        <img className="images"
          src={imageUrl} alt="posts"
        ></img>

         {/* username : caption */}

         <h4 className="user__caption">
             <strong>{username} : </strong>{caption}
         </h4>
      
        </div>

      
       

     
    </div>
  );
}

export default Posts;
