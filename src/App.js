
import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">


    <div className="nav__bar">
        <Navbar />
    </div>

    <div className="header__post">
         
    <Posts />
    </div>

   

     
    </div>
  );
}

export default App;
