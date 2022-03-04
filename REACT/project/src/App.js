import './App.css';
import Post from './components/Post';
import AboutMe from './components/Aboutme';
import FormBuilder from './components/FormBuilder';
import CommentSection from './components/CommentSection';
import { Route, Switch, Link } from 'react-router-dom';



function App() {
  return (
  <div>
    <div className="parentAppDiv">
    <Post />
    <AboutMe /> 
    </div>
    <div className="parentAppDiv2">
    <CommentSection />
    </div>
  </div>
  );
}

export default App;
