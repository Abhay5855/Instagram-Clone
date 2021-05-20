import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {

     db.collection('posts').onSnapshot(snapshot => {

      setPosts(snapshot.docs.map(doc => ({
        
        id:doc.id,
        post:doc.data()

      })));


     })
  }
  // useeffect for posts
  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);

  return (
    <div className="App">
      <div className="nav__bar">
        <Navbar />
      </div>

      {posts.map(({id,post}) => (
        <Posts
          key={id}
          imageUrl={post.imageUrl}
          caption={post.caption}
          username={post.username}
        />
      ))}
    </div>
  );
}

export default App;
