

import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList'
import NavBar from './components/NavBar';




function App() {
  return (
    <div className="">
      
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<ArticleList />} />
          <Route path='/article/:name' element={<Article />} />
          <Route path ='/about' element ={ <About/>}/>
           

          
        </Routes>
      </Router>
      

      
    </div>
  );
}

export default App;
