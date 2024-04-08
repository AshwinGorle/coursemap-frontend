import './App.css';
import Navbar from './components/Navbar';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import AllCourses from './pages/AllCourses';
import NewDiv from './components/NewDiv';
import Roadmap from './components/chiragRoadmap';
import OrgChartTree from './components/chiragRoadmap';

// roadmap by ash------
import RoadMap from './pages/RoadMap';
import ExporeRoadmaps from './pages/ExporeRadmaps';

function App() {

  const[isLoggedIn , setIsLoggedIn] = useState(false);

    return(
      <div className=' w-screen min-h-screen bg-[#010b13] flex flex-col'>
        <div className=' bg-black'>
           <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </div>
        
          

          <Routes>
            <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>} />
            <Route path='/roadmap' element={<Roadmap/>} isLoggedIn={isLoggedIn}/>
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

            {/* by ash start ------ */}
            <Route path='/road-maps/:nodeId' element={<RoadMap setIsLoggedIn={setIsLoggedIn}  />} />

            <Route path='/explore-roadmaps' element={<ExporeRoadmaps setIsLoggedIn={setIsLoggedIn} />} />
            {/* by ash end------ */}


            <Route path='/home' element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Home/>
                  <Login/>
              </PrivateRoute>
              } />
          </Routes>
    
      </div>
    )
}

export default App;
