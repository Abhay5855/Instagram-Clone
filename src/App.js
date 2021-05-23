// import { useState, useEffect } from "react";
import "./App.css";
import Tinderheader from "./components/Tinderheader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tindercard from "./components/Tindercard";
import Tinderbuttons from "./components/Tinderbuttons";
import Chats from "./components/Chats"
import ChatScreen from "./components/ChatScreen"
// import Navbar from "./components/Navbar";
// import Posts from "./components/Posts";
// import { db } from "./firebase";
// import Upload from "./components/Upload"

//   const [posts, setPosts] = useState([]);

//   const getPosts = () => {

//      db.collection('posts').onSnapshot(snapshot => {

//       setPosts(snapshot.docs.map(doc => ({

//         id:doc.id,
//         post:doc.data()

//       })));

//      })
//   }
//   // useeffect for posts
//   useEffect(() => {
//     getPosts();
//   }, []);

//   console.log(posts);

//   return (
//     <div className="App">
//       <div className="nav__bar">
//         <Navbar />

//       </div>

//       <div className="upload">
//         <Upload />
//       </div>

//       {posts.map(({id,post}) => (
//         <Posts
//           key={id}
//           imageUrl={post.imageUrl}
//           caption={post.caption}
//           username={post.username}
//         />
//       ))}
//     </div>
//   );
// }

function App() {

  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Tinderheader backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Tinderheader backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Tinderheader />
            <Tindercard />

            <Tinderbuttons />
          </Route>
        </Switch>
      </Router>

      {/* Header */}

      {/* cards */}
      {/* buttons */}
    </div>
  );
}

export default App;
