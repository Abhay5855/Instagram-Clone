import React from "react";
import { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import SendIcon from '@material-ui/icons/Send';
function ChatScreen() {

  const [input,setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Rutkar",
      image:
        "https://scontent.fnag4-1.fna.fbcdn.net/v/t1.6435-9/c0.0.866.866a/s851x315/89910138_562540641024679_3470197772597067776_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=da31f3&_nc_ohc=Ga0_buQszWgAX-AjD9Z&_nc_ht=scontent.fnag4-1.fna&tp=28&oh=a8424752d7a1e7b76cf478d78bf2a423&oe=60D0BCB5",
      message: "Hey chamat",
    },

    {
      name: "Aakriti",
      image:
        "https://scontent.fnag4-1.fna.fbcdn.net/v/t1.6435-9/s851x315/67646391_1336935886469181_5890040801668366336_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=da31f3&_nc_ohc=dfN3LgcFAJEAX-siE0R&_nc_ht=scontent.fnag4-1.fna&tp=7&oh=b0fd3b4a53c07305781b1a95e741c845&oe=60CEE615",
      message: "hey there",
    },
  ]);

  const handleClick = (e) => {

    e.preventDefault();
    setMessages([...messages, {message: input}]);
    setInput('');
  }



  return (
    <div classname="chatscreen">
      <p className="time">You matched with Rutkar </p>

      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen__message">
            <Avatar
              className="chatscreen__images"
              src={message.image}
              alt={message.name}
            />
            <p className="chatscreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textuser">{message.message}</p>
          </div>
        )
      )}
      


       <form className="chatscreen__ip">
           <input className="chatscreen__ipfeild" placeholder="Type your message" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>

           <button onClick={handleClick} className="btn">
               <SendIcon />
           </button>
       </form>


    </div>



   
  );
}

export default ChatScreen;
