import React from "react";
import Avatar from "@material-ui/core/Avatar";
import  "./Posts.css"
function Posts() {
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

        <h3>Username</h3>
      </div>

      <div className="Posts__images">
        {/* Post-Image  */}
        <img
          className="images"
          src="https://scontent.fnag4-1.fna.fbcdn.net/v/t1.6435-9/44890935_2201405306807547_4333259957395783680_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=84a396&_nc_ohc=LrnsAL9YvGYAX8lNoix&_nc_ht=scontent.fnag4-1.fna&oh=4f267fc32675f1d3a8ea0f148ff478fe&oe=60CC71AF"
          alt="post"
        ></img>

         {/* username : caption */}

         <h4 className="user__caption">
             <strong>Username : </strong>Friends for life!
         </h4>
      </div>

     
    </div>
  );
}

export default Posts;
