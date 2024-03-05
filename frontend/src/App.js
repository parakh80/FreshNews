import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import News from './components/News';



const App = () => {
  const pageSize = 18;
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0)


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(12, 12, 12)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  const set_Progress = (progress) => {
    setProgress(progress)
  }


  return (
    <Router>
      <div>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
       
            <Route path='/:category' element={<News 
                          setProgress={set_Progress}
                          mode={mode} 
                          toggleMode={toggleMode}
                          pageSize={pageSize}
                          country="us" 
                        />} /> 
                      
            <Route path='/' element={<News 
                          setProgress={set_Progress}
                          mode={mode} 
                          toggleMode={toggleMode}
                          pageSize={pageSize}
                          country="us" 
                        />} />
  
        </Routes>
      </div>
    </Router>

  )
}

export default App;