// import React, { Component } from 'react'
import React, { useState } from "react";
import Navbar from './Components/Navbar';
import News from './Components/News';
// import React, { Component } from 'react'
import { BrowserRouter ,Router,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


   const App = () => {
      const pageSize = 5;
      const [progress, setProgress] = useState(0);
      
    return (
      <div>
           <BrowserRouter> 
           <Navbar />
            <LoadingBar
              color='#f11946'
              progress={progress} 
              height={4}
              onLoaderFinished={() => setProgress(progress)}
            />
         
             <Routes> 
                <Route exact path="/" element={<News setProgress={setProgress}  pagezise={6} country="in"category="general"/>}></Route>
             </Routes>
             <Routes> 
                <Route exact path="/home" element={<News setProgress={setProgress}  pagezise={6} country="in"category="general"/>}></Route>
             </Routes>
             <Routes>
                <Route exact path='/sports' element={<News setProgress={setProgress}  pagezise={6} country="in"category="sports"/>}></Route>
             </Routes>
             <Routes>
                <Route path='/entertainment' element={<News setProgress={setProgress}  pagezise={6} country="in"category="entertainment"/>}></Route>
             </Routes>
             <Routes>
                <Route path='/business' element={<News setProgress={setProgress}  pagezise={6} country="in"category="business"/>}></Route>
             </Routes>
             <Routes>
                <Route path='/health' element={<News setProgress={setProgress}  pagezise={6} country="in"category="health"/>}></Route>
             </Routes>
             <Routes>
                <Route path='/science' element={<News setProgress={setProgress}  pagezise={6} country="in"category="science"/>}></Route>
             </Routes>
             <Routes>
                <Route path='/technology' element={<News setProgress={setProgress}  pagezise={6} country="in"category="technology"/>}></Route>
             </Routes>

           </BrowserRouter>
           {/* <Navbar/> */}
           {/* <News setProgress={this.setProgress}  pagezise={6} country="us"category="sports"/> */}
      </div>
    );
   
};

export default App
