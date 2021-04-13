import React from 'react'
import './App.css'
import Dropzone from './components/Dropzone.js'

function App() {
  return (
    <div className="app_container">
        <div className="title_section">
          <h1>Image Classifier</h1>
        </div>

        <div className = 'input_section'>
            <h2>Select a image</h2>
            <Dropzone></Dropzone>
        </div>
        <div className="results_section">
            <h2>Results</h2>
        </div>
    </div>
  );
}

export default App;
