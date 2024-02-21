import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';



const App = () => {
  const pageSize = 8;
  const apikey = process.env.REACT_APP_NEWS_API;
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
        <NavBar mode={mode} toggleMode={toggleMode} />

        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/' element={<News setProgress={set_Progress}
            mode={mode} apikey={apikey}
            key="general" pageSize={pageSize}
            country="us" category="general" />} />
          <Route path='/business' element={<News setProgress={set_Progress}
            mode={mode} apikey={apikey}
            key="business" pageSize={pageSize}
            country="us" category="business" />} />
          <Route path='/entertainment' element={<News setProgress={set_Progress}
            mode={mode} apikey={apikey}
            key="entertainment" pageSize={pageSize}
            country="us" category="entertainment" />} />
          <Route path='/health' element={<News setProgress={set_Progress}
            mode={mode} apikey={apikey}
            key="health" pageSize={pageSize}
            country="us" category="health" />} />
          <Route path='/science' element={<News setProgress={set_Progress}
            mode={mode} apikey={apikey}
            key="science" pageSize={pageSize}
            country="us" category="science" />} />
          <Route path='/sports' element={<News setProgress={set_Progress}
            mode={mode} apikey={apikey}
            key="sports" pageSize={pageSize}
            country="us" category="sports" />} />
          <Route path='/technology' element={<News setProgress={set_Progress}
            mode={mode} apikey={apikey}
            pageSize={pageSize}
            country="us" category="technology" />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App;
