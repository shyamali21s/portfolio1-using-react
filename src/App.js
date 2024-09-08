
import './App.scss';
import{Routes,Route} from 'react-router-dom'

import Home from './container/home'
import About from './container/about'
import Resume from './container/resume'
import SKills from './container/skills'
import Portfolio from './container/portfolio'
import Contact from './container/conatct'
import NavBar from './components/navBar';




function App() {
 <div className='App_mainPAgeContent'></div>
  return (
    <div className="App">
     {/*  particles js*/}
    
     {/* navbar js */}
     <NavBar/>
     {/* main page content */}
     <div className='App_mainPAgeContent'></div>
     
     <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
  
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/skills' element={<SKills/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     {/*  */}
    </div>
  );
}

export default App;
