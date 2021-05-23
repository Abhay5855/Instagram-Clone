import React from "react";
import "./Chats.css";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Rutkar"
        message="hey"
        timestamp="40 seconds ago"
        profilePic="https://scontent.fnag4-1.fna.fbcdn.net/v/t1.6435-9/c0.0.866.866a/s851x315/89910138_562540641024679_3470197772597067776_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=da31f3&_nc_ohc=Ga0_buQszWgAX-AjD9Z&_nc_ht=scontent.fnag4-1.fna&tp=28&oh=a8424752d7a1e7b76cf478d78bf2a423&oe=60D0BCB5"
      />
      <Chat
        name="Aakriti"
        message="Kaisa hain"
        timestamp="3 days ago"
        profilePic="https://scontent.fnag4-1.fna.fbcdn.net/v/t1.6435-9/s851x315/67646391_1336935886469181_5890040801668366336_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=da31f3&_nc_ohc=dfN3LgcFAJEAX-siE0R&_nc_ht=scontent.fnag4-1.fna&tp=7&oh=b0fd3b4a53c07305781b1a95e741c845&oe=60CEE615"
      />
      <Chat
        name="Sacarlett"
        message="I love You"
        timestamp="2 days ago"
        profilePic="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg"
      />
    </div>
  );
}

export default Chats;
